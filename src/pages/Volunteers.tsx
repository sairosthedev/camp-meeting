import React from 'react';
import { HandHeart, Calendar, Clock } from 'lucide-react';

export default function Volunteers() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Volunteer Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Register as Volunteer
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <HandHeart className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Departments</h2>
          </div>
          <div className="space-y-4">
            {['Ushering', 'Children Ministry', 'Media Team', 'Choir', 'Security'].map((dept) => (
              <div key={dept} className="p-4 border rounded-lg">
                <h3 className="font-semibold">{dept}</h3>
                <p className="text-gray-600 text-sm mb-2">Volunteers needed</p>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Join Team
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">My Schedule</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Morning Service</h3>
                  <span className="text-sm text-gray-500">Ushering</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>6:00 AM - 8:00 AM</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <HandHeart className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Skills & Availability</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Music', 'Teaching', 'First Aid', 'Technical'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Availability</h3>
              <div className="space-y-2">
                {['Morning', 'Afternoon', 'Evening'].map((time) => (
                  <div key={time} className="flex items-center">
                    <input type="checkbox" id={time} className="mr-2" />
                    <label htmlFor={time}>{time}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Volunteer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Schedule
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
                      <div className="text-sm text-gray-500">john@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Ushering
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Morning Shift
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Active
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