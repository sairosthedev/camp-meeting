import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState('all');
  
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

  const filteredEvents = filter === 'all' 
    ? zeucEvents 
    : zeucEvents.filter(event => event.category === filter);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ZEUC 2025 Camp Meeting Events</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add New Event
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Filter className="w-5 h-5 mr-2 text-gray-600" />
          <span className="font-medium">Filter Events:</span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('spiritual')}
            className={`px-3 py-1 rounded-lg ${filter === 'spiritual' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Spiritual
          </button>
          <button 
            onClick={() => setFilter('seminar')}
            className={`px-3 py-1 rounded-lg ${filter === 'seminar' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Seminars
          </button>
          <button 
            onClick={() => setFilter('youth')}
            className={`px-3 py-1 rounded-lg ${filter === 'youth' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Youth
          </button>
          <button 
            onClick={() => setFilter('general')}
            className={`px-3 py-1 rounded-lg ${filter === 'general' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            General
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>
              </div>
              <div className="space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}