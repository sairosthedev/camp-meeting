import React from 'react';
import { Users, Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  // ZEUC 2025 Camp Meeting event data
  const zeucEvents = [
    {
      id: 1,
      title: "Opening Ceremony",
      date: "August 22, 2025",
      time: "4:00 PM - 6:00 PM",
      venue: "Main Pavilion",
      attendees: 500,
      category: "general"
    },
    {
      id: 2,
      title: "Morning Devotion",
      date: "August 23, 2025",
      time: "5:30 AM - 6:30 AM",
      venue: "Prayer Tent",
      attendees: 200,
      category: "spiritual"
    },
    {
      id: 3,
      title: "Sabbath Divine Service",
      date: "August 23, 2025",
      time: "11:00 AM - 1:00 PM",
      venue: "Main Pavilion",
      attendees: 1500,
      category: "spiritual"
    },
    {
      id: 4,
      title: "Health Seminar",
      date: "August 24, 2025",
      time: "2:00 PM - 4:00 PM",
      venue: "Seminar Hall A",
      attendees: 150,
      category: "seminar"
    },
    {
      id: 5,
      title: "Youth Concert",
      date: "August 24, 2025",
      time: "7:00 PM - 9:00 PM",
      venue: "Youth Tent",
      attendees: 350,
      category: "youth"
    },
    {
      id: 6,
      title: "Family Life Workshop",
      date: "August 25, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Seminar Hall B",
      attendees: 120,
      category: "seminar"
    },
    {
      id: 7,
      title: "Evangelism Training",
      date: "August 25, 2025",
      time: "2:00 PM - 4:00 PM",
      venue: "Seminar Hall A",
      attendees: 180,
      category: "seminar"
    },
    {
      id: 8,
      title: "Closing Ceremony",
      date: "August 29, 2025",
      time: "4:00 PM - 6:00 PM",
      venue: "Main Pavilion",
      attendees: 800,
      category: "general"
    }
  ];

  // Calculate statistics
  const totalAttendees = zeucEvents.reduce((sum, event) => sum + event.attendees, 0);
  const totalEvents = zeucEvents.length;
  const uniqueVenues = [...new Set(zeucEvents.map(event => event.venue))].length;
  
  // Get categories count
  const spiritualEvents = zeucEvents.filter(event => event.category === "spiritual").length;
  const seminarEvents = zeucEvents.filter(event => event.category === "seminar").length;
  const youthEvents = zeucEvents.filter(event => event.category === "youth").length;
  const generalEvents = zeucEvents.filter(event => event.category === "general").length;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ZEUC 2025 Camp Meeting Dashboard</h1>
        <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          August 22-29, 2025
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Total Attendees</h2>
              <p className="text-2xl font-semibold">{totalAttendees.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Total Events</h2>
              <p className="text-2xl font-semibold">{totalEvents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Venues</h2>
              <p className="text-2xl font-semibold">{uniqueVenues}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-600 text-sm">Days of Events</h2>
              <p className="text-2xl font-semibold">8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Event Categories</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Spiritual Events</span>
              </div>
              <span className="font-semibold">{spiritualEvents}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Seminars</span>
              </div>
              <span className="font-semibold">{seminarEvents}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span>Youth Events</span>
              </div>
              <span className="font-semibold">{youthEvents}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span>General Events</span>
              </div>
              <span className="font-semibold">{generalEvents}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Key Events</h2>
            <Link to="/events" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {zeucEvents
              .filter(event => ["Opening Ceremony", "Sabbath Divine Service", "Youth Concert", "Closing Ceremony"].includes(event.title))
              .map((event) => (
                <div key={event.id} className="flex items-center p-4 border rounded-lg">
                  <div className="bg-blue-100 p-2 rounded">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}, {event.time}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    {event.attendees} attendees
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Venue Utilization</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Events</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Attendees</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...new Set(zeucEvents.map(event => event.venue))].map((venue) => {
                const venueEvents = zeucEvents.filter(event => event.venue === venue);
                const venueAttendees = venueEvents.reduce((sum, event) => sum + event.attendees, 0);
                return (
                  <tr key={venue}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{venue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{venueEvents.length}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{venueAttendees.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}