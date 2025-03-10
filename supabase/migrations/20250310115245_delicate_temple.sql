/*
  # Additional Features for Camp Meeting System

  1. New Tables
    - `volunteers`
      - Volunteer registration and management
    - `departments`
      - Different service departments
    - `volunteer_assignments`
      - Volunteer scheduling
    - `announcements`
      - Camp meeting announcements
    - `prayer_requests`
      - Prayer request management
    - `testimonies`
      - Testimony sharing
    - `donations`
      - Donation tracking
    - `equipment`
      - Equipment inventory
    - `equipment_assignments`
      - Equipment tracking

  2. Security
    - Enable RLS on all new tables
    - Add appropriate policies
*/

-- Departments
CREATE TABLE IF NOT EXISTS departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  head_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Volunteers
CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  skills text[],
  availability text[],
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Volunteer Assignments
CREATE TABLE IF NOT EXISTS volunteer_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  volunteer_id uuid REFERENCES volunteers(id),
  department_id uuid REFERENCES departments(id),
  event_id uuid REFERENCES events(id),
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  status text DEFAULT 'scheduled',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Announcements
CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  priority text DEFAULT 'normal',
  valid_from timestamptz DEFAULT now(),
  valid_until timestamptz,
  created_by uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Prayer Requests
CREATE TABLE IF NOT EXISTS prayer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  request_text text NOT NULL,
  is_anonymous boolean DEFAULT false,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Testimonies
CREATE TABLE IF NOT EXISTS testimonies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  title text NOT NULL,
  content text NOT NULL,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Donations
CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  amount decimal NOT NULL,
  purpose text,
  payment_method text NOT NULL,
  transaction_id text UNIQUE,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Equipment
CREATE TABLE IF NOT EXISTS equipment (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  status text DEFAULT 'available',
  condition text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Equipment Assignments
CREATE TABLE IF NOT EXISTS equipment_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  equipment_id uuid REFERENCES equipment(id),
  event_id uuid REFERENCES events(id),
  assigned_by uuid REFERENCES users(id),
  assigned_to uuid REFERENCES users(id),
  checkout_time timestamptz NOT NULL,
  expected_return timestamptz NOT NULL,
  actual_return timestamptz,
  status text DEFAULT 'checked_out',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteer_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonies ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment_assignments ENABLE ROW LEVEL SECURITY;

-- Policies

-- Departments
CREATE POLICY "Public can view departments"
  ON departments
  FOR SELECT
  TO authenticated
  USING (true);

-- Volunteers
CREATE POLICY "Users can register as volunteers"
  ON volunteers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their volunteer profile"
  ON volunteers
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Volunteer Assignments
CREATE POLICY "Volunteers can view their assignments"
  ON volunteer_assignments
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM volunteers
    WHERE volunteers.id = volunteer_assignments.volunteer_id
    AND volunteers.user_id = auth.uid()
  ));

-- Announcements
CREATE POLICY "Public can view announcements"
  ON announcements
  FOR SELECT
  TO authenticated
  USING (true);

-- Prayer Requests
CREATE POLICY "Users can create prayer requests"
  ON prayer_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view non-anonymous prayer requests"
  ON prayer_requests
  FOR SELECT
  TO authenticated
  USING (NOT is_anonymous OR user_id = auth.uid());

-- Testimonies
CREATE POLICY "Users can submit testimonies"
  ON testimonies
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view approved testimonies"
  ON testimonies
  FOR SELECT
  TO authenticated
  USING (is_approved OR user_id = auth.uid());

-- Donations
CREATE POLICY "Users can view their donations"
  ON donations
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Equipment
CREATE POLICY "Staff can manage equipment"
  ON equipment
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'staff');

CREATE POLICY "Public can view equipment"
  ON equipment
  FOR SELECT
  TO authenticated
  USING (true);

-- Equipment Assignments
CREATE POLICY "Staff can manage equipment assignments"
  ON equipment_assignments
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'staff');

CREATE POLICY "Users can view their equipment assignments"
  ON equipment_assignments
  FOR SELECT
  TO authenticated
  USING (assigned_to = auth.uid());