import { FaUser, FaEnvelope, FaPhone, FaLock, FaVenusMars } from "react-icons/fa";

const  Registration = ()=> {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ECFAE5] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8"
           style={{ backgroundColor: "#DDF6D2" }}>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6 font-lora ">Create Account</h2>
        
        <form className="space-y-4">
          {/* Username */}
          <div className="flex items-center bg-[#CAE8BD] p-3 rounded-xl">
            <FaUser className="text-gray-600 mr-3" />
            <input 
              type="text" 
              placeholder="Username" 
              className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-[#CAE8BD] p-3 rounded-xl">
            <FaEnvelope className="text-gray-600 mr-3" />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-[#CAE8BD] p-3 rounded-xl">
            <FaPhone className="text-gray-600 mr-3" />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-[#CAE8BD] p-3 rounded-xl">
            <FaLock className="text-gray-600 mr-3" />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Gender */}
          <div className="flex items-center bg-[#CAE8BD] p-3 rounded-xl">
            <FaVenusMars className="text-gray-600 mr-3" />
            <select className="bg-transparent flex-1 outline-none text-gray-700">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-3 mt-4 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
            style={{ backgroundColor: "#B0DB9C", color: "black" }}>
            Register
          </button>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 mt-4 text-sm">
            Already have an account? 
            <a href="/login" className="text-green-700 font-semibold hover:underline ml-1">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}


export default Registration