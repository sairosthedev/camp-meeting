import React from 'react';
import { BedDouble, Users, MapPin } from 'lucide-react';

export default function Rooms() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Sleeping Rooms</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Assign Room
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <BedDouble className="w-6 h-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold">Room {201 + index}</h2>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Capacity: 4 people</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Block B, Floor 2</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-600">Occupants:</div>
                  <div className="mt-2 space-y-1">
                    <div className="text-sm">John Doe (Adult)</div>
                    <div className="text-sm">Jane Doe (Adult)</div>
                    <div className="text-sm">2 spots available</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-600">Amenities:</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Air Conditioning
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Private Bathroom
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Clear</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}