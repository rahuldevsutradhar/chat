import React from 'react';
import { BiMessageDots } from "react-icons/bi";
import { GoBlocked } from 'react-icons/go';
import { RiUserShared2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItem = [
    {
      navbarContant: <BiMessageDots />,
      navLink: '/'
    },
    {
      navbarContant: <RiUserShared2Line />,
      navLink: '/allUser'
    },
    {
      navbarContant: <GoBlocked />,
      navLink: '/blockUser'
    },
  ];

  return (
    <nav className="w-10 h-full rounded-xl bg-[#B0DB9C] flex flex-col justify-between ">
      <ul className="flex flex-col items-center gap-4 py-5">
        {navItem.map((item, index) => (
          <NavLink       
            to={item.navLink}
            className={({ isActive }) =>`text-2xl p-1 rounded-xl transition-all duration-200 
            ${ isActive ? "text-green-700 bg-[#CAE8BD]" : "text-black"} hover:shadow-md hover:shadow-white-300`}>
            {item.navbarContant}
          </NavLink>
        ))}
      </ul>

      <div className="flex flex-col items-center pb-1">
        <img
          src=""
          className="w-8 h-8 rounded-full border-2 border-green-600"
        />
        <p className="text-sm mt-2  text-black">User</p>
      </div>
    </nav>

    
  );
};

export default Navbar;
