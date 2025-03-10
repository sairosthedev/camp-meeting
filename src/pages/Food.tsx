import React from 'react';
import { UtensilsCrossed, Clock, Calendar } from 'lucide-react';

export default function Food() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Food Services</h1>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Meal Plan
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Register for Meals
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Today's Menu
          </h2>
          <div className="space-y-6">
            {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
              <div key={meal} className="border-b pb-4 last:border-0">
                <div className="flex items-center mb-2">
                  <UtensilsCrossed className="w-4 h-4 mr-2 text-blue-600" />
                  <h3 className="font-semibold">{meal}</h3>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{
                    meal === 'Breakfast' ? '7:00 AM - 8:30 AM' :
                    meal === 'Lunch' ? '12:30 PM - 2:00 PM' :
                    '6:00 PM - 7:30 PM'
                  }</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Main Course:</div>
                    <ul className="list-disc list-inside text-sm mt-1">
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Sides:</div>
                    <ul className="list-disc list-inside text-sm mt-1">
                      <li>Side 1</li>
                      <li>Side 2</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Meal Plan Registration</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Full Camp Meeting Plan</h3>
              <p className="text-gray-600 mb-2">Access to all meals throughout the camp meeting</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$150</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Select
                </button>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Daily Plan</h3>
              <p className="text-gray-600 mb-2">All meals for a single day</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$25</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Select
                </button>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Single Meal</h3>
              <p className="text-gray-600 mb-2">Individual meal selection</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$10</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Dietary Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Other'].map((preference) => (
            <div key={preference} className="flex items-center space-x-2">
              <input type="checkbox" id={preference} className="rounded border-gray-300" />
              <label htmlFor={preference}>{preference}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}