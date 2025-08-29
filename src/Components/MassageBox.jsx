import { useState } from "react";
import { FaPaperPlane, FaSmile, FaImage, FaPaperclip, FaTrash, FaEllipsisV } from "react-icons/fa";

const MessageBox=()=> {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! 👋", type: "received" },
    { id: 2, text: "Hi! How are you?", type: "sent" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), text: input.trim(), type: "sent" }]);
    setInput("");
  };
  const deleteMessage = (id) => setMessages((m) => m.filter((x) => x.id !== id));

  // Example user data
  const user = {
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?img=32",
    status: "Online",
  };

  return (
    <div className="bg-[#ECFAE5] border border-gray-200 rounded-2xl flex flex-col min-h-full flex-1">
      {/* Header */}
      <div className="flex items-center justify-between p-4 rounded-t-2xl bg-[#B0DB9C] border-b border-gray-300">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
          />
          {/* Username & Status */}
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">{user.name}</span>
            <span className="text-sm text-gray-600">{user.status}</span>
          </div>
        </div>

        {/* Three-dot button */}
        <button
          className="p-2 rounded-full hover:bg-[#CAE8BD] transition"
          title="More options"
        >
          <FaEllipsisV className="text-green-600 text-lg" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`relative max-w-[80%] p-3 rounded-xl shadow ${
              msg.type === "sent"
                ? "ml-auto bg-[#B0DB9C] text-gray-800"
                : "bg-[#CAE8BD] text-gray-800"
            }`}
          >
            <p className="pr-6">{msg.text}</p>
            <button
              className="absolute top-4 right-4 hover:text-red-600 text-green-600"
              onClick={() => deleteMessage(msg.id)}
              title="Delete"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="p-3 border-t border-gray-200 bg-[#DDF6D2] flex items-center gap-3 rounded-b-2xl">
        <button className="text-green-600 text-xl" title="Emoji">
          <FaSmile />
        </button>
        <button className="text-green-600 text-xl" title="Image">
          <FaImage />
        </button>
        <button className="text-green-600 text-xl" title="Attach file">
          <FaPaperclip />
        </button>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 rounded-lg border border-gray-300 p-2 outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="rounded-full p-3 bg-[#B0DB9C] hover:opacity-90 transition"
          title="Send"
        >
          <FaPaperPlane className="text-green-600" />
        </button>
      </div>
    </div>
  );
}


export default MessageBox