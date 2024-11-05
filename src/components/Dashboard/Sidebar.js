import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Track sidebar visibility
  const [activeIndex, setActiveIndex] = useState(0); // Track active link

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

      {/* Logo and Tagline */}
      <div className="flex flex-col items-center py-6">
        <img src={require('../images/logo.png')} alt="Logo" className="auto" />
      </div>

      {/* Menu Items */}
      <nav className="mt-3">
        <ul className="p-0">
          {/* Dashboard Link */}
          <Link to="/dashboard" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer ps-4 ${activeIndex === 0 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'
                }`}
              onClick={() => setActiveIndex(0)}
            >
              <span className="material-icons">grid_view</span>
              <span>Dashboard</span>
            </li>
          </Link>

          {/* Doctor Management */}
          <Link to="/doctordashboard" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer ps-4 ${activeIndex === 1 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'
                }`}
              onClick={() => setActiveIndex(1)}
            >
              <span className="material-icons">person</span>
              <span>Doctor Management</span>
            </li>
          </Link>

          {/* Patient Management */}
          <Link to="/patientdashboard" className="text-decoration-none">
            <li
              className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer ps-4 ${activeIndex === 2 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'
                }`}
              onClick={() => setActiveIndex(2)}
            >
              <span className="material-icons">people</span>
              <span>Patient Management</span>
            </li>
          </Link>

          {/* Billing and Payments with dropdown */}
          <li>
            <div
              className={`flex items-center justify-between py-3 pl-8 pr-4 transition-all duration-300 cursor-pointer ps-4 ${activeIndex === 3 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'
                }`}
              onClick={() => {
                setActiveIndex(3);
                toggleBillingMenu();
              }}
            >
              <div className="flex items-center space-x-4">
                <span className="material-icons">account_balance_wallet</span>
                <span>Billing And Payments</span>
              </div>
              <span className="material-icons">
                {isBillingOpen ? "expand_less" : "expand_more"}
              </span>
            </div>

            {/* Dropdown Menu */}
            {isBillingOpen && (
              <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-400">
                <Link to="/monitorbilling" className="text-decoration-none">
                  <li
                    className={`pl-4 flex items-center space-x-2 cursor-pointer ${activeIndex === 4 ? 'text-[#0EABEB]' : 'text-gray-400'
                      }`}
                    onClick={() => setActiveIndex(4)}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    <span>Monitor Billing</span>
                  </li>
                </Link>
                <Link to="/insuranceclaims" className="text-decoration-none">
                  <li
                    className={`py-2 mt-2 flex items-center space-x-2 cursor-pointer ${activeIndex === 5 ? 'text-[#0EABEB]' : 'text-gray-400'
                      }`}
                    onClick={() => setActiveIndex(5)}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 ms-3"></span>
                    <span>Insurance Claims</span>
                  </li>
                </Link>
                <Link to="/paymentprocess" className="text-decoration-none">
                <li
                className={`py-2 flex items-center space-x-2 cursor-pointer ${activeIndex === 6 ? 'text-[#0EABEB]' : 'text-gray-400'
                  }`}
                onClick={() => setActiveIndex(6)}
              >
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 ms-3"></span>
                    <span>Payment Process</span>
                  </li>
                </Link>
              </ul>
            )}
          </li>

          {/* Reporting and Analytics */}
         <Link to="/reportingandanalytics" className="text-decoration-none">
         <li
         className={`flex items-center space-x-4 py-3 pl-8 transition-all duration-300 cursor-pointer ps-4 ${activeIndex === 7 ? 'bg-[#EDFAFB] text-[#0EABEB]' : 'text-gray-600'
           }`}
         onClick={() => setActiveIndex(7)}
       >
         <span className="material-icons">bar_chart</span>
         <span>Reporting And Analytics</span>
       </li>
         </Link>
        </ul>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-100">
          <Link to="/" className="text-decoration-none">
          <button className="w-full flex items-center justify-start space-x-2 py-3 text-red-500 bg-red-50 hover:bg-red-100 transition-all duration-300 ps-4 font-bold">
          <IoLogIn className="fs-4" />
          <span>Logout</span>
        </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
