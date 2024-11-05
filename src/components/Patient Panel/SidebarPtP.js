import React, { useState } from "react";
import { FaFileMedical, FaHospitalUser } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";
import { MdChat, MdMedicalInformation } from "react-icons/md";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const SidebarPtP = () => {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true); 
  const [activeIndex, setActiveIndex] = useState(0); 

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
          <Link to="/patientpanel" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 0 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`}
              onClick={() => setActiveIndex(0)} 
            >
              <span><MdMedicalInformation className="fs-4" /></span>
              <span>Personal Health Record</span>
            </li>
          </Link>

          <Link to="/appointmentbooking" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 1 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`}
              onClick={() => setActiveIndex(1)} 
            >
              <span><PiShoppingBagOpenFill className="fs-4"/></span>
              <span>Appointment Booking</span>
            </li>
          </Link>

          <Link to="/prescriptionaccess" className="text-decoration-none">
          <li>
            <div
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 2 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`}
              onClick={() => {
                setActiveIndex(2)
                toggleBillingMenu();
              }}
            >
              <div className="flex items-center space-x-4">
                <span><FaFileMedical className="fs-4"/></span>
                <span>Prescription Access</span>
              </div>
            </div>
          </li>
          </Link>

          <Link to="/teleconsultationaccess" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 3 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`}
              onClick={() => setActiveIndex(3)} 
            >
              <span><FaHospitalUser className="fs-4"/></span>
              <span>Teleconsultation Access</span>
            </li>
          </Link>

          <Link to="/chatp" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 4 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`}
              onClick={() => setActiveIndex(4)} 
            >
              <span><MdChat className="fs-4" /></span>
              <span>Chat</span>
            </li>
          </Link>

          <Link to="/bills" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer px-3 ${activeIndex === 5 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'}`}
              onClick={() => setActiveIndex(5)} 
            >
              <span><HiNewspaper className="fs-4"/></span>
              <span>Bills</span>
            </li>
          </Link>
        </ul>

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

export default SidebarPtP;
