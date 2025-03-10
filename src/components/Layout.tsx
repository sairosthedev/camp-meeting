import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Calendar, Users, Home, MapPin, LogOut, BedDouble, UtensilsCrossed, Ticket, Heart, HandHeart, MessageCircle, DollarSign, PenTool as Tool, Bell } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Banket 2025 Camp Meeting</h1>
        </div>
        <nav className="mt-8">
          <Link to="/" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/')}`}>
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/events" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/events')}`}>
            <Calendar className="w-5 h-5 mr-3" />
            Events
          </Link>
          <Link to="/rooms" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/rooms')}`}>
            <BedDouble className="w-5 h-5 mr-3" />
            Rooms
          </Link>
          <Link to="/food" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/food')}`}>
            <UtensilsCrossed className="w-5 h-5 mr-3" />
            Food Services
          </Link>
          <Link to="/entrance" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/entrance')}`}>
            <Ticket className="w-5 h-5 mr-3" />
            Entrance
          </Link>
          <Link to="/attendees" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/attendees')}`}>
            <Users className="w-5 h-5 mr-3" />
            Attendees
          </Link>
          <Link to="/venues" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/venues')}`}>
            <MapPin className="w-5 h-5 mr-3" />
            Venues
          </Link>
          <Link to="/volunteers" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/volunteers')}`}>
            <HandHeart className="w-5 h-5 mr-3" />
            Volunteers
          </Link>
          <Link to="/prayer-requests" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/prayer-requests')}`}>
            <Heart className="w-5 h-5 mr-3" />
            Prayer Requests
          </Link>
          <Link to="/testimonies" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/testimonies')}`}>
            <MessageCircle className="w-5 h-5 mr-3" />
            Testimonies
          </Link>
          <Link to="/donations" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/donations')}`}>
            <DollarSign className="w-5 h-5 mr-3" />
            Donations
          </Link>
          <Link to="/equipment" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/equipment')}`}>
            <Tool className="w-5 h-5 mr-3" />
            Equipment
          </Link>
          <Link to="/announcements" className={`flex items-center px-4 py-3 hover:bg-blue-700 ${isActive('/announcements')}`}>
            <Bell className="w-5 h-5 mr-3" />
            Announcements
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button className="flex items-center px-4 py-3 hover:bg-blue-700 w-full">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}