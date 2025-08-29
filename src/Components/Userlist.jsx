import React, { useState } from 'react'
import { FaSearch, FaUserCircle } from "react-icons/fa";
const Userlist = () => {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="h-screen flex bg-[#ECFAE5]">
      {/* User List Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-[#DDF6D2] border-r border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[#B0DB9C]">
          <h2 className="text-lg font-semibold text-gray-700">Chats</h2>
          <button
            className="p-2 hover:bg-[#CAE8BD] rounded-full transition"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch className="text-gray-700" />
          </button>
        </div>

        {/* Search Bar (animated) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showSearch ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-3">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full p-2 rounded-lg border border-gray-300 outline-none"
            />
          </div>
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto">
          {["Alice", "Bob", "Charlie", "Diana", "Eve"].map((user, index) => (
            <div
              key={index}
              className="flex items-center p-4 hover:bg-[#CAE8BD] cursor-pointer"
            >
              <FaUserCircle className="text-3xl text-gray-600 mr-3" />
              <div>
                <h3 className="text-gray-700 font-semibold">{user}</h3>
                <p className="text-sm text-gray-500">Last message preview...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Box */}
      <div className="hidden md:flex flex-1 flex-col bg-[#ECFAE5]">
        <div className="flex items-center justify-between p-4 bg-[#B0DB9C] border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-700">Select a Chat</h2>
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-500">
          <p>No chat selected</p>
        </div>
      </div>
    </div>
  )
}

export default Userlist