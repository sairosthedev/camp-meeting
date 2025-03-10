import React from 'react';
import { Ticket, QrCode, Users, Calendar } from 'lucide-react';

export default function Entrance() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Entrance Management</h1>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Scan QR Code
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Issue Pass
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Ticket className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Pass Types</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Full Event Pass</h3>
              <p className="text-gray-600 text-sm mb-2">Access to all events and sessions</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$100</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Issue
                </button>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Day Pass</h3>
              <p className="text-gray-600 text-sm mb-2">Single day access</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">$20</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Issue
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <QrCode className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Quick Check-in</h2>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="mb-4">
              <QrCode className="w-16 h-16 text-gray-400 mx-auto" />
            </div>
            <p className="text-gray-600 mb-4">Scan attendee's QR code for quick check-in</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full">
              Start Scanning
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Today's Statistics</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="text-gray-600">Check-ins Today</p>
                <p className="text-2xl font-bold">247</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <div>
                <p className="text-gray-600">Active Passes</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <Ticket className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <div>
                <p className="text-gray-600">Events Today</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attendee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pass Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check-in Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-medium">JD</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">ID: #12345</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Full Event Pass
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Today, 9:30 AM
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Checked In
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}