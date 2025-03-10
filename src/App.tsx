import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Attendees from './pages/Attendees';
import Venues from './pages/Venues';
import Rooms from './pages/Rooms';
import Food from './pages/Food';
import Entrance from './pages/Entrance';
import Volunteers from './pages/Volunteers';
import PrayerRequests from './pages/PrayerRequests';
import Testimonies from './pages/Testimonies';
import Donations from './pages/Donations';
import Equipment from './pages/Equipment';
import Announcements from './pages/Announcements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="food" element={<Food />} />
          <Route path="entrance" element={<Entrance />} />
          <Route path="attendees" element={<Attendees />} />
          <Route path="venues" element={<Venues />} />
          <Route path="volunteers" element={<Volunteers />} />
          <Route path="prayer-requests" element={<PrayerRequests />} />
          <Route path="testimonies" element={<Testimonies />} />
          <Route path="donations" element={<Donations />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="announcements" element={<Announcements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;