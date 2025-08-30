import React from 'react';
import { RiUserUnfollowLine } from 'react-icons/ri';

const BlockUser = () => {
  const blockedUsers = [
    { id: 1, name: 'Rakib', avatar: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Mehedi', avatar: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Ayesha', avatar: 'https://via.placeholder.com/80' },
    { id: 4, name: 'Sadia', avatar: 'https://via.placeholder.com/80' },
  ];

  return (
    <div className="w-full h-full bg-[#ECFAE5] rounded-xl p-4">
      <h2 className="text-xl font-bold mb-6 text-green-700">Blocked Users</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blockedUsers.map((user) => (
          <div
            key={user.id}
            className="bg-[#CAE8BD] rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            {/* Avatar */}
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full border-2 border-red-500"
            />

            {/* Username & Status */}
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold text-black">{user.name}</h3>
              <p className="text-sm text-red-500 font-bold">Blocked</p>
            </div>

            {/* Unblock Button */}
            <button
              className="mt-4 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <RiUserUnfollowLine size={18} /> Unblock
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockUser;
