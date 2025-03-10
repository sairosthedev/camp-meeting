import React from 'react';
import { Heart, Shield } from 'lucide-react';

export default function PrayerRequests() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Prayer Requests</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Submit Prayer Request
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Submit a Prayer Request</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Prayer Request</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Share your prayer request..."
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="anonymous" className="rounded border-gray-300 text-blue-600" />
                <label htmlFor="anonymous" className="ml-2 text-sm text-gray-600">
                  Submit anonymously
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Submit Request
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">My Prayer Requests</h2>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <p className="text-gray-600 mb-2">
                    Please pray for my family's health and well-being...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Submitted 2 days ago</span>
                    <span className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      Private
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Heart className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold">Community Prayer Requests</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <p className="text-gray-600 mb-2">
                  Praying for the success of the youth ministry program...
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Submitted by John D.</span>
                  <span>3 days ago</span>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    🙏 Praying (24)
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    ❤️ Support (12)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}