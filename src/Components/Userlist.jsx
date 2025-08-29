import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Userlist=()=> {
  const [showSearch, setShowSearch] = useState(false);
  const users = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace"];

  return (
    <div className="bg-[#DDF6D2] border border-gray-200 rounded-2xl flex flex-col min-h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-t-2xl bg-[#B0DB9C]">
        <h2 className="text-gray-700 font-semibold">Chats</h2>
        <button
          onClick={() => setShowSearch((s) => !s)}
          className="p-2 rounded-full hover:bg-[#CAE8BD] transition"
        >
          <FaSearch className="text-green-600" />
        </button>
      </div>

      {/* Animated search */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showSearch ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-3">
          <input
            className="w-full rounded-lg border border-gray-300 p-2 outline-none"
            placeholder="Search users…"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {users.map((u) => (
          <button
            key={u}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#CAE8BD] text-left"
          >
            <FaUserCircle className="text-3xl text-gray-600" />
            <div>
              <div className="font-medium text-gray-700">{u}</div>
              <div className="text-sm text-gray-500">Last message preview…</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Userlist