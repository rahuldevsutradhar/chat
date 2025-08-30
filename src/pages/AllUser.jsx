import React from 'react';
import { FiUserPlus } from 'react-icons/fi';

const AllUser = () => {
  const users = [
    { id: 1, name: 'Rakib', status: 'online', avatar: 'https://via.placeholder.com/80' },
    
  ];

  return (
    <div className="w-full h-full bg-[#ECFAE5] rounded-xl p-4">
      <h2 className="text-xl font-bold mb-6 text-green-700">All Users</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-[#DDF6D2] rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full border-2 border-green-600"
              />
              {/* Status Indicator */}
              <span
                className={`absolute bottom-1 right-1 w-3 h-3 rounded-full ${
                  user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`}
              ></span>
            </div>

            {/* Username & Status */}
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold text-black">{user.name}</h3>
              <p
                className={`text-sm ${
                  user.status === 'online' ? 'text-green-500' : 'text-gray-500'
                }`}
              >
                {user.status}
              </p>
            </div>

            {/* Add Button */}
            <button className="mt-4 flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              <FiUserPlus /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
