import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import NavbarAP from './NavbarAP';
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Modal } from "react-bootstrap";
import { Grid2, TextField } from '@mui/material';
import { MdRemoveRedEye } from 'react-icons/md';


const Teleconsultation = () => {
    const [activeTab, setActiveTab] = useState('today');
    const [startDate, setStartDate] = useState('2022-01-02');
    const [endDate, setEndDate] = useState('2022-01-13');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleReset = () => {
        setStartDate(null);
        setEndDate(null);
    };

    const handleApply = () => {
        if (startDate && endDate) {
            console.log("Start Date: ", startDate);
            console.log("End Date: ", endDate);
            handleClose();
        } else {
            console.error("Please select valid start and end dates.");
        }
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
                            <ul className='mb-1 d-flex gap-4 cursor-pointer p-0 pb-3'>
                                <li
                                    className={`first-item ${activeTab === 'today' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'today' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('today')}
                                >
                                    Today Appointment
                                </li>
                                <li
                                    className={`${activeTab === 'upcoming' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'upcoming' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('upcoming')}
                                >
                                    Upcoming Appointment
                                </li>
                                <li
                                    className={`${activeTab === 'previous' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'previous' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('previous')}
                                >
                                    Previous Appointment
                                </li>
                                <li
                                    className={`${activeTab === 'cancel' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'cancel' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('cancel')}
                                >
                                    Cancel Appointment
                                </li>
                            </ul>
                        </div>

                        {activeTab === 'today' &&
                            (
                                <>
                                    <div className='d-flex justify-between'>
                                        <h5 className='text-semibold mt-1'>Teleconsultation Module</h5>
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

                                            <button onClick={handleShow} className="flex items-center bg-white border rounded px-2 py-2">
                                                📅 {moment(startDate).format('D MMMM, YYYY')} • {moment(endDate).format('D MMMM, YYYY')}
                                            </button>

                                            <Modal show={show} onHide={handleClose} centered dialogClassName="modal-md">
                                                <Modal.Header closeButton>
                                                    <Modal.Title className='text-sm'>Custom Date</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className='d-flex items-center justify-between gap-2'>
                                                        <Grid2 item xs={6} className="w-full">
                                                            <TextField
                                                                required
                                                                id="date"
                                                                label="From Date"
                                                                type="date"
                                                                fullWidth
                                                                size="small"
                                                                value={startDate} // Date value state (replace 'selectedDate' with your state variable)
                                                                onChange={(e) => setStartDate(e.target.value)} // Replace with your state setter
                                                                slotProps={{
                                                                    inputLabel: {
                                                                        shrink: true,
                                                                        sx: { color: 'black', fontSize: "18px" }, // Customize label
                                                                    },
                                                                }}
                                                                InputProps={{
                                                                    sx: {
                                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '& input::placeholder': {
                                                                            fontSize: 'small',
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        </Grid2>
                                                        <Grid2 item xs={6} className="w-full">
                                                            <TextField
                                                                required
                                                                id="date"
                                                                label="To Date"
                                                                type="date"
                                                                fullWidth
                                                                size="small"
                                                                value={endDate} // Date value state (replace 'selectedDate' with your state variable)
                                                                onChange={(e) => setEndDate(e.target.value)} // Replace with your state setter
                                                                slotProps={{
                                                                    inputLabel: {
                                                                        shrink: true,
                                                                        sx: { color: 'black', fontSize: "18px" }, // Customize label
                                                                    },
                                                                }}
                                                                InputProps={{
                                                                    sx: {
                                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '& input::placeholder': {
                                                                            fontSize: 'small',
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        </Grid2>
                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer className='p-0 pb-2 px-2 border-0'>
                                                    <div className="flex justify-between">
                                                        <button
                                                            className="border-2 rounded px-4 py-2 mr-2 w-50"
                                                            onClick={handleReset}
                                                        >
                                                            Reset
                                                        </button>
                                                        <button onClick={handleApply} className="hover:bg-[#0EABEB] bg-gray-100 hover:text-white rounded px-4 py-2 w-50">
                                                            Apply
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="gap-4 h-50 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold text-md bg-[#F6F8FB]">Ryan Vetrovs</div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">Feeling Tired</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Dieses Name</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">Viral Infection</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-1 mt-2 flex justify-between">
                                                <button
                                                    className="flex fw-semibold items-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] px-3 py-1 rounded hover:text-white">
                                                    <BiSolidPhoneCall className='me-2 fs-5' /> Join Call
                                                </button>
                                                <button
                                                    className="flex fw-semibold items-center text-[#4F4F4F] bg-[#F6F8FB]  hover:bg-[#0EABEB] px-2 py-1 rounded hover:text-white">
                                                    <RiCalendarScheduleFill className='me-2' />Reschedule
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold text-md bg-[#F6F8FB]">Ryan Vetrovs</div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">Feeling Tired</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Dieses Name</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">Viral Infection</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194]">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-1 mt-2 flex justify-between">
                                                <button
                                                    className="flex fw-semibold items-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] px-3 py-1 rounded hover:text-white">
                                                    <BiSolidPhoneCall className='me-2 fs-5' /> Join Call
                                                </button>
                                                <button
                                                    className="flex fw-semibold items-center text-[#4F4F4F] bg-[#F6F8FB]  hover:bg-[#0EABEB] px-2 py-1 rounded hover:text-white">
                                                    <RiCalendarScheduleFill className='me-2' />Reschedule
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        {activeTab === 'upcoming' &&
                            (
                                <div>
                                    <div className='d-flex justify-between mb-3'>
                                        <h5 className='text-semibold mt-1'>Patient Details</h5>
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
                                            <button onClick={handleShow} className="flex items-center bg-white border rounded px-2 py-2">
                                                📅 {moment(startDate).format('D MMMM, YYYY')} • {moment(endDate).format('D MMMM, YYYY')}
                                            </button>

                                            <Modal show={show} onHide={handleClose} centered dialogClassName="modal-md">
                                                <Modal.Header closeButton>
                                                    <Modal.Title className='text-sm'>Custom Date</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className='d-flex items-center justify-between gap-2'>
                                                        <Grid2 item xs={6} className="w-full">
                                                            <TextField
                                                                required
                                                                id="date"
                                                                label="From Date"
                                                                type="date"
                                                                fullWidth
                                                                size="small"
                                                                value={startDate} // Date value state (replace 'selectedDate' with your state variable)
                                                                onChange={(e) => setStartDate(e.target.value)} // Replace with your state setter
                                                                slotProps={{
                                                                    inputLabel: {
                                                                        shrink: true,
                                                                        sx: { color: 'black', fontSize: "18px" }, // Customize label
                                                                    },
                                                                }}
                                                                InputProps={{
                                                                    sx: {
                                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '& input::placeholder': {
                                                                            fontSize: 'small',
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        </Grid2>
                                                        <Grid2 item xs={6} className="w-full">
                                                            <TextField
                                                                required
                                                                id="date"
                                                                label="To Date"
                                                                type="date"
                                                                fullWidth
                                                                size="small"
                                                                value={endDate} // Date value state (replace 'selectedDate' with your state variable)
                                                                onChange={(e) => setEndDate(e.target.value)} // Replace with your state setter
                                                                slotProps={{
                                                                    inputLabel: {
                                                                        shrink: true,
                                                                        sx: { color: 'black', fontSize: "18px" }, // Customize label
                                                                    },
                                                                }}
                                                                InputProps={{
                                                                    sx: {
                                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'gray',
                                                                        },
                                                                        '& input::placeholder': {
                                                                            fontSize: 'small',
                                                                        },
                                                                    },
                                                                }}
                                                            />
                                                        </Grid2>
                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer className='p-0 pb-2 px-2 border-0'>
                                                    <div className="flex justify-between">
                                                        <button
                                                            className="border-2 rounded px-4 py-2 mr-2 w-50"
                                                            onClick={handleReset}
                                                        >
                                                            Reset
                                                        </button>
                                                        <button onClick={handleApply} className="hover:bg-[#0EABEB] bg-gray-100 hover:text-white rounded px-4 py-2 w-50">
                                                            Apply
                                                        </button>
                                                    </div>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>

                                    </div>
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">Patient Name</th>
                                                <th scope="col" className="px-6 py-3">Dieses Name</th>
                                                <th scope="col" className="px-6 py-3">Patient Issue</th>
                                                <th scope="col" className="px-6 py-3">Appointment Date</th>
                                                <th scope="col" className="px-6 py-3">Appointment Time</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="px-6 py-2">Marcus Philips</th>
                                                <td className="px-6 py-2">Viral infection</td>
                                                <td className="px-6 py-2">Feeling Tired</td>
                                                <td className="px-6 py-2">2 jan, 2022</td>

                                                <td className="px-6 py-2 text-bold">
                                                    <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                                </td>
                                                <td className="px-6 py-2 text-bold">
                                                    <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiCalendarScheduleFill className='text-[#5678E9]' /></div>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>)

                        }

                        {activeTab === 'previous' &&
                            (
                                <div>
                                    <div className='d-flex justify-between mb-3'>
                                        <h5 className='text-semibold mt-1'>Patient Details</h5>
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
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">Patient Name</th>
                                                <th scope="col" className="px-6 py-3">Dieses Name</th>
                                                <th scope="col" className="px-6 py-3">Patient Issue</th>
                                                <th scope="col" className="px-6 py-3">Appointment Date</th>
                                                <th scope="col" className="px-6 py-3">Appointment Time</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="px-6 py-2">Marcus Philips</th>
                                                <td className="px-6 py-2">Viral infection</td>
                                                <td className="px-6 py-2">Feeling Tired</td>
                                                <td className="px-6 py-2">2 jan, 2022</td>

                                                <td className="px-6 py-2 text-bold">
                                                    <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                                </td>
                                                <td className="px-6 py-2 text-bold">
                                                    <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }} onClick={handleShow} >                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                                    </div>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                       <Modal show={show} onHide={handleClose} centered className='pb-2 d-flex align-items-center justify-between'>
                                        <Modal.Header closeButton className="pb-0">
                                            <Modal.Title className='text-sm'><h5>Patient Details</h5></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="pb-1">
                                            <div>
                                                <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Appointment Date</span>
                                                    <span className='ms-auto fw-semibold'>2 Jan, 2022</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Appointment Time</span>
                                                    <span className='ms-auto fw-semibold'>4:30 PM</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Name</span>
                                                    <span className='ms-auto fw-semibold'>Marcus Philips</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Phone Number</span>
                                                    <span className='ms-auto fw-semibold'>93536 78642</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Age</span>
                                                    <span className='ms-auto fw-semibold'>27 Years</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Gender</span>
                                                    <span className='ms-auto fw-semibold'>Male</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Issue</span>
                                                    <span className='ms-auto fw-semibold'>Stomach ache</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Disease Name</span>
                                                    <span className='ms-auto fw-semibold'>Viral infection</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Doctor Name</span>
                                                    <span className='ms-auto fw-semibold'>Dr. Mathev Best</span>
                                                </div>
                                                 <div className='pb-2 align-items-center justify-between' style={{ width: '100%' }}>
                                                    <p className="mb-1">Patient Address</p>
                                                    <span className='ms-auto fw-semibold'>B-408 swastick plaza , shivangi marg mota varachha rajkot.</span>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>)

                        }

                        {activeTab === 'cancel' &&
                            (
                                <div>
                                    <div className='d-flex justify-between mb-3'>
                                        <h5 className='text-semibold mt-1'>Patient Details</h5>
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
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">Patient Name</th>
                                                <th scope="col" className="px-6 py-3">Dieses Name</th>
                                                <th scope="col" className="px-6 py-3">Patient Issue</th>
                                                <th scope="col" className="px-6 py-3">Appointment Date</th>
                                                <th scope="col" className="px-6 py-3">Appointment Time</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="px-6 py-2">Marcus Philips</th>
                                                <td className="px-6 py-2">Viral infection</td>
                                                <td className="px-6 py-2">Feeling Tired</td>
                                                <td className="px-6 py-2">2 jan, 2022</td>

                                                <td className="px-6 py-2 text-bold">
                                                    <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                                </td>
                                                <td className="px-6 py-2 text-bold">
                                                    <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }} onClick={handleShow} >                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                                    </div>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                    <Modal show={show} onHide={handleClose} centered className='pb-2 d-flex align-items-center justify-between'>
                                        <Modal.Header closeButton className="pb-0">
                                            <Modal.Title className='text-sm'><h5>Patient Details</h5></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="pb-1">
                                            <div>
                                                <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Appointment Date</span>
                                                    <span className='ms-auto fw-semibold'>2 Jan, 2022</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Appointment Time</span>
                                                    <span className='ms-auto fw-semibold'>4:30 PM</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Name</span>
                                                    <span className='ms-auto fw-semibold'>Marcus Philips</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Phone Number</span>
                                                    <span className='ms-auto fw-semibold'>93536 78642</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Age</span>
                                                    <span className='ms-auto fw-semibold'>27 Years</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Gender</span>
                                                    <span className='ms-auto fw-semibold'>Male</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Patient Issue</span>
                                                    <span className='ms-auto fw-semibold'>Stomach ache</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Disease Name</span>
                                                    <span className='ms-auto fw-semibold'>Viral infection</span>
                                                </div>
                                                 <div className='pb-2 d-flex align-items-center justify-between' style={{ width: '100%' }}>
                                                    <span>Doctor Name</span>
                                                    <span className='ms-auto fw-semibold'>Dr. Mathev Best</span>
                                                </div>
                                                 <div className='pb-2 align-items-center justify-between' style={{ width: '100%' }}>
                                                    <p className="mb-1">Patient Address</p>
                                                    <span className='ms-auto fw-semibold'>B-408 swastick plaza , shivangi marg mota varachha rajkot.</span>
                                                </div>
                                            </div>
                                        </Modal.Body>


                                    </Modal>
                                </div>)

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teleconsultation;
