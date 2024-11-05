import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoBagAdd, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsTelephoneXFill } from "react-icons/bs";
import { MdChat } from "react-icons/md";
import { HiNewspaper } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";

const SidebarAP = () => {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true); 
  const [activeIndex, setActiveIndex] = useState(0); 
  const [activeItem, setActiveItem] = useState(null);

  const toggleBillingMenu = () => {
    setIsBillingOpen(!isBillingOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} style={{ height: '100vh', overflow: 'hidden' }}>
      <button
        className="md:hidden absolute top-4 left-4 text-gray-600"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <span className="material-icons">close</span>
        ) : (
          <span className="material-icons">menu</span>
        )}
      </button>

      <div className="flex flex-col items-center py-6">
        <img src={require('../images/logo.png')} alt="Logo" className="auto" />
      </div>

      <nav className="mt-3">
        <ul className="p-0">

          <Link to="/doctorpanel" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 0 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`} 
              onClick={() => setActiveIndex(0)} 
            >
              <span> <FaCalendarAlt className='fs-5' /></span>
              <span>Appointment Management</span>
            </li>
          </Link>

          <Link to="/patientrecordaccess" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 1 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`} 
              onClick={() => setActiveIndex(1)} 
            >
              <span><HiNewspaper className="fs-4"/></span>
              <span>Patient Record Access</span>
            </li>
          </Link>

          <li>
            <div
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 2 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`} 
              onClick={() => {
                setActiveIndex(2)
                toggleBillingMenu();
              }
              }
            >
              <div className="flex items-center space-x-4">
                <span className="fs-4"><IoBagAdd /></span>
                <span>Prescription Tools</span>
              </div>
              <span className="material-icons">
                {isBillingOpen ? "expand_less" : "expand_more"}
              </span>
            </div>

            {isBillingOpen && (
              <ul className="ml-4 mt-1 space-y-4 text-sm text-gray-400">
              <Link to="/prescriptioncreate" className="text-decoration-none text-gray-400">
              <li
              className={`pl-4 flex items-center space-x-2 cursor-pointer ${activeItem === 'create' ? 'text-[#0EABEB]' : 'hover:text-[#0EABEB]'}`}
              onClick={() => setActiveItem('create')}
            >
              <span className="flex items-center"><GoDotFill className="text-md me-2" />Create</span>
            </li> 
               </Link>
                <Link to="/prescriptionmanage" className="text-decoration-none text-gray-400">
                  <li
                    className={`pl-4 flex items-center space-x-2 mt-3 cursor-pointer ${activeItem === 'manage' ? 'text-[#0EABEB]' : 'hover:text-[#0EABEB]'}`}
                    onClick={() => setActiveItem('manage')}
                  >
                    <span className="flex items-center"><GoDotFill className="text-md me-2" />Manage</span>
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <Link to="/teleconsultion" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 3 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`} // Updated
              onClick={() => setActiveIndex(3)} 
            >
              <span className="fs-5"><BsTelephoneXFill /></span>
              <span>Teleconsultation Module</span>
            </li>
          </Link>

          <Link to="/chat" className="text-decoration-none">
          <li
          className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 4 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`} // Updated
          onClick={() => setActiveIndex(4)} 
        >
          <span className="fs-4"><MdChat /></span>
          <span>Chat</span>
        </li>
          </Link>
        </ul>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-100">
          <button className="w-full flex items-center justify-start space-x-2 py-3 text-red-500 bg-red-50 hover:bg-red-100 transition-all duration-300 ps-4 font-bold">
            <IoLogIn className="fs-4" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SidebarAP;