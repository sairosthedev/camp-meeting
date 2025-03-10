-- Venue Bookings and Payments

-- Create an enum for booking status
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');

-- Create venue bookings table
CREATE TABLE IF NOT EXISTS venue_bookings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    venue_id uuid REFERENCES venues(id),
    user_id uuid REFERENCES users(id),
    booking_date date NOT NULL,
    start_time time NOT NULL,
    end_time time NOT NULL,
    num_adults int NOT NULL DEFAULT 0,
    num_children int NOT NULL DEFAULT 0,
    total_amount decimal(10,2) NOT NULL,
    status booking_status DEFAULT 'pending',
    notes text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Create venue payments table
CREATE TABLE IF NOT EXISTS venue_payments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id uuid REFERENCES venue_bookings(id),
    amount decimal(10,2) NOT NULL,
    payment_method text NOT NULL,
    transaction_id text UNIQUE,
    payment_status text DEFAULT 'pending',
    payment_date timestamptz DEFAULT now(),
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE venue_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE venue_payments ENABLE ROW LEVEL SECURITY;

-- Policies for venue bookings
CREATE POLICY "Users can create venue bookings"
    ON venue_bookings
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their venue bookings"
    ON venue_bookings
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid() OR auth.jwt() ->> 'role' = 'staff');

CREATE POLICY "Users can update their venue bookings"
    ON venue_bookings
    FOR UPDATE
    TO authenticated
    USING (user_id = auth.uid() AND status = 'pending')
    WITH CHECK (user_id = auth.uid() AND status = 'pending');

-- Policies for venue payments
CREATE POLICY "Users can create payments for their bookings"
    ON venue_payments
    FOR INSERT
    TO authenticated
    WITH CHECK (EXISTS (
        SELECT 1 FROM venue_bookings
        WHERE venue_bookings.id = booking_id
        AND venue_bookings.user_id = auth.uid()
    ));

CREATE POLICY "Users can view their payments"
    ON venue_payments
    FOR SELECT
    TO authenticated
    USING (EXISTS (
        SELECT 1 FROM venue_bookings
        WHERE venue_bookings.id = booking_id
        AND venue_bookings.user_id = auth.uid()
    ) OR auth.jwt() ->> 'role' = 'staff'); 