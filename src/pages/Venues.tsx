import React, { useState } from 'react';
import { Users, MapPin, Filter, Calendar, DollarSign } from 'lucide-react';

export default function Venues() {
  const [filter, setFilter] = useState('all');
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    startTime: '',
    endTime: '',
    numAdults: 0,
    numChildren: 0
  });

  const calculateTotal = (adults, children) => {
    const adultRate = 60;
    const childRate = 30;
    return (adults * adultRate) + (children * childRate);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!selectedVenue) return;

    const total = calculateTotal(bookingForm.numAdults, bookingForm.numChildren);

    try {
      // Create booking in the database
      const { data: booking, error: bookingError } = await supabase
        .from('venue_bookings')
        .insert([
          {
            venue_id: selectedVenue.id,
            booking_date: bookingForm.date,
            start_time: bookingForm.startTime,
            end_time: bookingForm.endTime,
            num_adults: bookingForm.numAdults,
            num_children: bookingForm.numChildren,
            total_amount: total
          }
        ])
        .select()
        .single();

      if (bookingError) throw bookingError;

      // Reset form
      setBookingForm({
        date: '',
        startTime: '',
        endTime: '',
        numAdults: 0,
        numChildren: 0
      });
      setSelectedVenue(null);

      // Show success message
      alert('Booking created successfully! Please proceed with payment.');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  const zeucVenues = [
    {
      id: 1,
      name: "Main Pavilion",
      capacity: 2000,
      location: "Central Campus, East Side",
      facilities: ["Air Conditioning", "Professional Sound System", "Stage Lighting", "Large LED Screens", "Seating Arrangement"],
      events: [
        { title: "Opening Ceremony", date: "August 22, 2025" },
        { title: "Sabbath Divine Service", date: "August 23, 2025" },
        { title: "Closing Ceremony", date: "August 29, 2025" }
      ],
      type: "large"
    },
    {
      id: 2,
      name: "Prayer Tent",
      capacity: 300,
      location: "North Campus, Quiet Zone",
      facilities: ["Carpeted Floor", "Basic Sound System", "Prayer Request Box", "Devotional Materials"],
      events: [
        { title: "Morning Devotion", date: "August 23, 2025" }
      ],
      type: "small"
    },
    {
      id: 3,
      name: "Seminar Hall A",
      capacity: 200,
      location: "Education Building, First Floor",
      facilities: ["Air Conditioning", "Projector", "Whiteboard", "Conference Tables", "Microphones"],
      events: [
        { title: "Health Seminar", date: "August 24, 2025" },
        { title: "Evangelism Training", date: "August 25, 2025" }
      ],
      type: "medium"
    },
    {
      id: 4,
      name: "Seminar Hall B",
      capacity: 150,
      location: "Education Building, Second Floor",
      facilities: ["Air Conditioning", "Projector", "Whiteboard", "Classroom Setup"],
      events: [
        { title: "Family Life Workshop", date: "August 25, 2025" }
      ],
      type: "medium"
    },
    {
      id: 5,
      name: "Youth Tent",
      capacity: 400,
      location: "South Campus, Recreation Area",
      facilities: ["Stage", "Sound System", "Lighting Effects", "Open Space for Activities"],
      events: [
        { title: "Youth Concert", date: "August 24, 2025" }
      ],
      type: "medium"
    },
    {
      id: 6,
      name: "Children's Pavilion",
      capacity: 120,
      location: "West Campus, Near Playground",
      facilities: ["Colorful Decor", "Activity Tables", "Play Area", "Child-friendly Restrooms"],
      events: [],
      type: "small"
    },
    {
      id: 7,
      name: "Dining Hall",
      capacity: 800,
      location: "Central Campus, North Wing",
      facilities: ["Industrial Kitchen", "Buffet Setup", "Dining Tables", "Water Stations"],
      events: [],
      type: "large"
    }
  ];

  const filteredVenues = filter === 'all' 
    ? zeucVenues 
    : filter === 'with-events' 
      ? zeucVenues.filter(venue => venue.events.length > 0)
      : zeucVenues.filter(venue => venue.type === filter);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ZEUC 2025 Camp Meeting Venues</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add New Venue
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Filter className="w-5 h-5 mr-2 text-gray-600" />
          <span className="font-medium">Filter Venues:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            All Venues
          </button>
          <button 
            onClick={() => setFilter('with-events')}
            className={`px-3 py-1 rounded-lg ${filter === 'with-events' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            With Scheduled Events
          </button>
          <button 
            onClick={() => setFilter('large')}
            className={`px-3 py-1 rounded-lg ${filter === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Large Venues
          </button>
          <button 
            onClick={() => setFilter('medium')}
            className={`px-3 py-1 rounded-lg ${filter === 'medium' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Medium Venues
          </button>
          <button 
            onClick={() => setFilter('small')}
            className={`px-3 py-1 rounded-lg ${filter === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Small Venues
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVenues.map((venue) => (
          <div key={venue.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{venue.name}</h2>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Capacity: {venue.capacity} people</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{venue.location}</span>
                  </div>
                </div>
                
                {venue.events.length > 0 && (
                  <div className="mt-3">
                    <div className="text-sm text-gray-600 font-medium">Scheduled Events:</div>
                    <div className="space-y-2 mt-1">
                      {venue.events.map((event, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Calendar className="w-3 h-3 mr-2 text-blue-600" />
                          <span>{event.title} - {event.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4">
                  <div className="text-sm text-gray-600">Facilities:</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {venue.facilities.map((facility, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setSelectedVenue(venue)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
                  >
                    Book Venue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedVenue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book {selectedVenue.name}</h2>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  required
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Time</label>
                  <input
                    type="time"
                    required
                    value={bookingForm.startTime}
                    onChange={(e) => setBookingForm({...bookingForm, startTime: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Time</label>
                  <input
                    type="time"
                    required
                    value={bookingForm.endTime}
                    onChange={(e) => setBookingForm({...bookingForm, endTime: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Adults</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={bookingForm.numAdults}
                    onChange={(e) => setBookingForm({...bookingForm, numAdults: parseInt(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">$60 per adult</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Children</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={bookingForm.numChildren}
                    onChange={(e) => setBookingForm({...bookingForm, numChildren: parseInt(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">$30 per child</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Amount:</span>
                  <span className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-1" />
                    {calculateTotal(bookingForm.numAdults, bookingForm.numChildren)}
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedVenue(null)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}