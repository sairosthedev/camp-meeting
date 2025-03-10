/*
  # Initial Schema for SDA Camp Meeting System

  1. New Tables
    - `users`
      - Authentication and user profiles
    - `events`
      - Camp meeting events and sessions
    - `rooms`
      - Sleeping room management
    - `room_assignments`
      - Room allocation tracking
    - `meal_plans`
      - Food service plans
    - `meal_registrations`
      - Meal plan bookings
    - `entrance_passes`
      - Entry pass management
    - `check_ins`
      - Attendance tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name text NOT NULL,
  phone text,
  church text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  venue_id uuid REFERENCES venues(id),
  capacity int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_number text NOT NULL UNIQUE,
  block text NOT NULL,
  floor int NOT NULL,
  capacity int NOT NULL DEFAULT 4,
  amenities text[] DEFAULT '{}',
  status text DEFAULT 'available',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Room assignments
CREATE TABLE IF NOT EXISTS room_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid REFERENCES rooms(id),
  user_id uuid REFERENCES users(id),
  check_in_date date NOT NULL,
  check_out_date date NOT NULL,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Meal plans
CREATE TABLE IF NOT EXISTS meal_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal NOT NULL,
  duration text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Meal registrations
CREATE TABLE IF NOT EXISTS meal_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  meal_plan_id uuid REFERENCES meal_plans(id),
  start_date date NOT NULL,
  end_date date NOT NULL,
  dietary_preferences text[] DEFAULT '{}',
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Entrance passes
CREATE TABLE IF NOT EXISTS entrance_passes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  pass_type text NOT NULL,
  valid_from timestamptz NOT NULL,
  valid_until timestamptz NOT NULL,
  qr_code text UNIQUE,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Check-ins
CREATE TABLE IF NOT EXISTS check_ins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  entrance_pass_id uuid REFERENCES entrance_passes(id),
  check_in_time timestamptz DEFAULT now(),
  check_in_point text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE entrance_passes ENABLE ROW LEVEL SECURITY;
ALTER TABLE check_ins ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Public can view events"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Staff can manage events"
  ON events
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'staff');

CREATE POLICY "Users can view available rooms"
  ON rooms
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can view their room assignments"
  ON room_assignments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Public can view meal plans"
  ON meal_plans
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can manage their meal registrations"
  ON meal_registrations
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can view their entrance passes"
  ON entrance_passes
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Staff can view all check-ins"
  ON check_ins
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'staff');