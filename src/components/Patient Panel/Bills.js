import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import 'react-datepicker/dist/react-datepicker.css';
import { Grid2, TextField } from '@mui/material';
import { MdRemoveRedEye } from "react-icons/md";
import men from '../images/men.png';
import { Grid } from '@mui/system';
import NavbarAP from '../Appointment Management/NavbarAP';
import MonitorBill from '../images/monitor bill.png'
import { IoClose } from 'react-icons/io5';

const Bills = () => {

    const [isCreateVisible, setCreateVisible] = useState(false);
    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const [isDetailDialogOpen, setDetailDialogOpen] = useState(false);

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    const toggleNotification = () => {
        setDetailDialogOpen(prevState => !prevState);
    };

    const openDetailDialog = () => {
        setDetailDialogOpen(true);
    };

    return (
        <div className="flex h-screen">
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <NavbarAP />
                </div>

                <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">
                    <div className='bg-white p-3 overflow'>
                        <div>
                            <div className='d-flex justify-between'>
                                <h5 className='text-semibold mt-1'>Unpaid Bills</h5>
                                <div className="relative">

                                </div>
                                <div className='d-flex gap-3'>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search Patient"
                                            className="rounded-3xl py-2"
                                            style={{
                                                outline: "none",
                                                border: "none",
                                                backgroundColor: "#F6F8F8",
                                                paddingLeft: "40px",
                                                width: "250px",
                                            }}
                                        />
                                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg p-1">
                                            <LuSearch className='fw-bold' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="gap-4 h-50 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                        <span>Dr. Nolan George</span>
                                        <div className='flex'>
                                            <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={openDetailDialog}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                        </div>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Hospital Name</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">Shamuba Hospital</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Bill Created Date</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">2 jan, 2022</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Bill Created Time</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">10:20 AM</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Total Bill Amount</p>
                                        <p className="mb-0 text-[#E11D29] fw-semibold">₹ 24,668</p>
                                    </div>
                                    <div className="card-body px-2 py-1 mt-2 flex justify-center">
                                        <button
                                            onClick={openDetailDialog}
                                            className="flex fw-semibold w-full text-center items-center text-[#4F4F4F] bg-[#F6F8FB] justify-center hover:bg-[#0EABEB] px-2 py-2 rounded hover:text-white">
                                           Pay Now
                                        </button>
                                    </div>
                                </div>
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                        <span>Dr. Nolan George</span>
                                        <div className='flex'>
                                            <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={openDetailDialog}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                        </div>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Hospital Name</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">Shamuba Hospital</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Bill Created Date</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">2 jan, 2022</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Bill Created Time</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">10:20 AM</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Total Bill Amount</p>
                                        <p className="mb-0 text-[#E11D29] fw-semibold">₹ 24,668</p>
                                    </div>
                                    <div className="card-body px-2 py-1 mt-2 flex justify-center">
                                        <button
                                            onClick={openDetailDialog}
                                            className="flex fw-semibold w-full text-center items-center text-[#4F4F4F] bg-[#F6F8FB] justify-center hover:bg-[#0EABEB] px-2 py-2 rounded hover:text-white">
                                           Pay Now
                                        </button>
                                    </div>
                                </div>
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                        <span>Dr. Nolan George</span>
                                        <div className='flex'>
                                            <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={openDetailDialog}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                        </div>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Hospital Name</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">Shamuba Hospital</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Bill Created Date</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">2 jan, 2022</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Bill Created Time</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">10:20 AM</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Total Bill Amount</p>
                                        <p className="mb-0 text-[#E11D29] fw-semibold">₹ 24,668</p>
                                    </div>
                                    <div className="card-body px-2 py-1 mt-2 flex justify-center">
                                        <button
                                            onClick={openDetailDialog}
                                            className="flex fw-semibold w-full text-center items-center text-[#4F4F4F] bg-[#F6F8FB] justify-center hover:bg-[#0EABEB] px-2 py-2 rounded hover:text-white">
                                           Pay Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isDetailDialogOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                            <span className="text-gray-500 text-white d-flex align-items-center justify-content-center rounded-circle cursor-pointer" style={{ width: "14px", height: "14px", backgroundColor: "#E11D29", position: "absolute", top: "9%", right: "31%", zIndex: "900" }} onClick={toggleNotification}><IoClose /></span>
                            <img src={MonitorBill} width="40%" className='position-relative' />

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Bills;