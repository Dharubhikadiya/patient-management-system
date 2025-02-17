import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import nouser from '../images/user.png'
import { IoNotifications } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import Billingpayment from '../images/no notification.png'
import { RiHome5Fill } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa';

export default function NavbarAP() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [activePageName, setActivePageName] = useState("Appointment Management");

  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(prevState => !prevState);
  };


  useEffect(() => {
    const pathToPageName = {
      "/doctorpanel": "Appointment Management",
      "/patientrecordaccess": "Patient Record Access",
      "/prescriptioncreate": "Create Prescription",
      "/prescriptionmanage": "Manage Prescription",
      "/teleconsultion": "Teleconsultation Module",
      "/chat": "Chat",

      "/patientpanel": "Personal Health Record",
      "/appointmentbooking": "Appointment Booking",
      "/prescriptionaccess": "Prescription Access",
      "/teleconsultationaccess": "Teleconsultation Access",
      "/chatp": "Chat",
      "/bills": "Bills",
      "/dashboard": "Dashboard",
      "/doctordashboard": "Doctor Dashboard",
      "/patientdashboard": "Patient Dashboard",
    };

    const pageName = pathToPageName[location.pathname] || "Appointment Management";
    setActivePageName(pageName);
  }, [location.pathname]);

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      <div>
          <button className="d-flex rounded-3xl p-1 border-gray-400 bg-[#F6F8F8] py-2 px-3">
            <RiHome5Fill className='fw-bold mt-1 fs-5 text-gray-400' />
            <FaAngleRight className='fw-bold mt-1 fs-5 mx-2 text-gray-400' />
            <span className='text-[#0EABEB] text-semibold'>{activePageName}</span>
          </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Quick Search"
            className="rounded-3xl py-2"
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#F6F8F8",
              paddingLeft: "40px",
              width: "300px",
            }}
            onChange={(e) => console.log(e.target.value)}
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg p-1">
            <LuSearch className='fw-bold' />
          </button>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center text-gray-400" onClick={toggleDropdown}>
            <span className="cursor-pointer">All</span>
            <span className="material-icons cursor-pointer">
              {isDropdownOpen ? "expand_less" : "expand_more"}
            </span>
          </div>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-white border rounded-xl mt-2 w-50" style={{ top: '100%', right: '0' }}>
              <ul className="list-none text-left p-0 mb-0 text-gray-500">


                <Link to="/dashboard" className='text-decoration-none text-gray-500 hover:text-white'>
                  <li className="hover:bg-[#0EABEB] cursor-pointer p-2 ps-3">
                    All </li></Link>


                <Link to="/doctordashboard" className='text-decoration-none text-gray-500 hover:text-white'>
                  <li className="hover:bg-[#0EABEB] cursor-pointer p-2 ps-3">
                    Doctor </li></Link>


                <Link to="/patientdashboard" className='text-decoration-none text-gray-500 hover:text-white'>
                  <li className="hover:bg-[#0EABEB] cursor-pointer p-2 ps-3">
                    Patient  </li></Link>

              </ul>
            </div>
          )}
        </div>
        <div className='d-flex align-items-center justify-content-center rounded-circle' style={{ width: "45px", height: "45px", backgroundColor: "#F6F8FB", cursor: "pointer" }} onClick={toggleNotification}>
          <IoNotifications className='fs-4' style={{ color: "4F4F4F" }} />
        </div>
        {isNotificationOpen && (
          <div className="absolute z-10 bg-white border rounded-xl  w-96" style={{ top: '100%', right: '16%' }}>
            <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
              <span className="text-dark font-semibold text-lg">Notifications</span>
              <span className="text-gray-500 text-white d-flex align-items-center justify-content-center rounded-circle cursor-pointer" style={{ width: "18px", height: "18px", backgroundColor: "#E11D29" }} onClick={toggleNotification}><IoClose /></span>
            </div>
            <div className="d-flex aling-items-center justify-content-center">
              <img
                src={Billingpayment}
                alt='Billingpayment'
                className="d-flex aling-items-center justify-content-center my-3"
              />
            </div>
          </div>
        )}
        <Link to="/profilepage" className='text-decoration-none text-gray-600'>
        <div className="flex items-center space-x-2">
        <img
          src={nouser}
          alt="Admin"
          className="rounded-full w-11 h-10"
        />
        <div className="text-right">
          <p className="font-bold mb-0 text-left">Lincoln Philips</p>
          <p className="text-gray-500 text-sm mb-0 text-left">Admin</p>
        </div>
      </div>
        </Link>
      </div>
    </nav>
  );
}
