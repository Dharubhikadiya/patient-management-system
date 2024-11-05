import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Modal } from "react-bootstrap";
import { Grid2, TextField } from '@mui/material';
import { MdFreeCancellation, MdRemoveRedEye } from 'react-icons/md';
import NavbarAP from '../Appointment Management/NavbarAP';
import { FaAngleLeft, FaCalendarAlt } from 'react-icons/fa';
import drcristofer from '../images/dr.cristofer.png'
import { Grid } from '@mui/system';


const TeleconsultationAccess = () => {
    const [activeTab, setActiveTab] = useState('Scheduled');
    const [startDate, setStartDate] = useState('2022-01-02');
    const [endDate, setEndDate] = useState('2022-01-13');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const [isCreateVisible, setCreateVisible] = useState(false);

    const bookappointment = () => {
        setCreateVisible(!isCreateVisible)
    }

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    const handleReset = () => {
        setStartDate('2022-01-02');
        setEndDate('2022-01-13');
    };

    const DoctorDetail = () => {
        setDetailsVisible(!isDetailsVisible);
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

                {isCreateVisible && (
                    <div className="bg-white mb-3 p-3">
                        <div className='d-flex justify-between align-items-center'>
                            <h5 className='text-semibold mt-1'>Appointment Booking</h5>
                        </div>
                        <div className='flex gap-3 my-4 items-center justify-between'>
                        {/* First Row: 3 Fields and 1 Blank Spot */}
                        <TextField
                            required
                            id="specialty"
                            label="Specialty"
                            placeholder="Enter Specialty"
                            fullWidth
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                    sx: { color: 'black', fontSize: "18px", },
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
                            sx={{ flexBasis: '30%' }} // Adjusting width to 30%
                        />
                        <TextField
                            required
                            id="country"
                            label="Country"
                            placeholder="Enter Country"
                            fullWidth
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                    sx: { color: 'black', fontSize: "18px", },
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
                            sx={{ flexBasis: '30%' }}
                        />
                        <TextField
                            required
                            id="state"
                            label="State"
                            placeholder="Enter State"
                            fullWidth
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                    sx: { color: 'black', fontSize: "18px", },
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
                            sx={{ flexBasis: '30%' }}
                        />
                        {/* Blank Spot */}
                        <TextField
                            required
                            id="state"
                            label="City"
                            placeholder="Enter City"
                            fullWidth
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                    sx: { color: 'black', fontSize: "18px", },
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
                            sx={{ flexBasis: '30%' }}
                        />
                    </div>
                    
                    {/* Second Row: 3 Fields */}
                    <div className='flex gap-3 my-3 items-center justify-between'>
                        <TextField
                            required
                            id="hospital"
                            label="Hospital"
                            placeholder="Enter Hospital"
                            fullWidth
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                    sx: { color: 'black', fontSize: "18px", },
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
                            sx={{ flexBasis: '30%' }}
                        />
                        <TextField
                            required
                            id="doctor"
                            label="Doctor"
                            placeholder="Enter Doctor"
                            fullWidth
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                    sx: { color: 'black', fontSize: "18px", },
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
                            sx={{ flexBasis: '30%' }}
                        />
                        <TextField
                            required
                            id="appointmentType"
                            label="Appointment Type"
                            placeholder="Enter Appointment Type"
                            fullWidth
                            size="small"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                    sx: { color: 'black', fontSize: "18px", },
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
                            sx={{ flexBasis: '30%' }}
                        />
                        <div style={{ flexBasis: '30%' }}></div>
                    </div>
                    
                    
                    

                    </div>
                )}


                    <div className='bg-white p-3 overflow'>
                        <div>
                            <ul className='mb-1 d-flex gap-4 cursor-pointer p-0 pb-3'>
                                <li
                                    className={`first-item ${activeTab === 'Scheduled' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'Scheduled' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('Scheduled')}
                                >
                                    Scheduled Appointment
                                </li>
                                <li
                                    className={`${activeTab === 'Previous' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'Previous' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('Previous')}
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
                                <li
                                    className={`${activeTab === 'Pending' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'Pending' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('Pending')}
                                >
                                    Pending Appointment
                                </li>


                            </ul>
                        </div>
                        <div className='d-flex justify-between'>
                        <h5 className='text-semibold mt-1'>My Appointment</h5>
                        
                        <div className='d-flex gap-3'>
                        <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search Doctor"
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
                                <FaCalendarAlt className='me-2' /> {moment(startDate).format('D MMM, YYYY')} - {moment(endDate).format('D MMM, YYYY')}
                            </button>

                            <button  onClick={bookappointment} className="rounded-lg px-2 d-flex justify-content-center align-items-center bg-[#0EABEB] text-white">
                                <FaCalendarAlt className='me-2' />Book Appointment
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

                        {activeTab === 'Scheduled' &&
                            (
                                <>
                                  
                                    <div className="gap-4 h-50 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={handleShow2} ><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>
                                            <div className="card-body px-2 py-1 mt-2 flex justify-between">
                                                <button
                                                    className="flex fw-semibold items-center justify-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] me-2 w-full py-1 rounded hover:text-white">
                                                    <MdFreeCancellation className='me-2 fs-5' /> Cancel
                                                </button>
                                                <button
                                                    className="flex fw-semibold items-center justify-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] me-2 w-full py-1 rounded hover:text-white">
                                                    <BiSolidPhoneCall className='me-2 fs-5' /> Join Call
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white'  onClick={handleShow2}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>
                                            <div className="card-body px-2 py-1 mt-2 flex justify-between">
                                                <button
                                                    className="flex fw-semibold items-center justify-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] me-2 w-full py-1 rounded hover:text-white">
                                                    <MdFreeCancellation className='me-2 fs-5' /> Cancel
                                                </button>
                                                <button
                                                    className="flex fw-semibold items-center justify-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] me-2 w-full py-1 rounded hover:text-white">
                                                    <BiSolidPhoneCall className='me-2 fs-5' /> Join Call
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Modal show={show2} onHide={handleClose2} centered dialogClassName="modal-md">
                                            <Modal.Body>
                                                <div>
                                                <div onClick={handleClose2} className='text-xl fw-semibold mb-4 flex items-center'><span className='border-1 rounded-circle me-3 p-1'><FaAngleLeft /></span>Doctor Management</div>
                                                    <div className=''>
                                                        <img src={drcristofer} alt='' />
                                                    </div>

                                                    <div className=' my-3 py-2 rounded-3 bg-[#F6F8FB] px-3'>
                                                        <div className='flex'>
                                                            <div>
                                                                <p className='mb-0 text-[#A7A7A7]'>Hospital Name</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Shamuba Hospital</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Break Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>1 Hour</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Years Of Experience</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6+ Year</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Specialty Type</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Obstetrics and genecology</p>
                                                            </div>
                                                            <div>
                                                                <p className='mb-1 text-[#A7A7A7]'>Doctor Qualification</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>MBBS</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Working Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6 Hour</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Emergency Contact Number</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>48555-20103</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='mb-0 text-[#A7A7A7]'>Description</p>
                                                            <p className='mb-2 text-[#141414] fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>

                                        </Modal>
                                        {isDetailsVisible && (
                                            <div>

                                                <div className='bg-[#F6F8FB] pe-3'>
                                                    <img src={drcristofer} alt='' />
                                                </div>

                                                <div className='flex  justify-between mb-3 bg-[#F6F8FB] px-3'>
                                                    <div>
                                                        <p className='mb-2'><strong>Hospital Name:</strong>hospital</p>
                                                        <p className='mb-2'><strong>Patient Name:</strong>name</p>
                                                        <p className='mb-2'><strong>Gender:</strong>gender</p>
                                                        <p className='mb-2'><strong>Address:</strong> address</p>
                                                    </div>
                                                    <div>
                                                        <p className='mb-2'><strong>Prescription Date:</strong> date</p>
                                                        <p className='mb-2'><strong>Age:</strong>age</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )
                        }

                        {activeTab === 'Previous' &&
                           (
                                <>



                                    <div className="gap-4 h-50 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={handleShow2} ><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-1 pb-2 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>
                                            
                                        </div>
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white'  onClick={handleShow2}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-1 pb-2 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <Modal show={show2} onHide={handleClose2} centered dialogClassName="modal-md">
                                            <Modal.Body>
                                                <div>
                                                <div onClick={handleClose2} className='text-xl fw-semibold mb-4 flex items-center'><span className='border-1 rounded-circle me-3 p-1'><FaAngleLeft /></span>Doctor Management</div>
                                                    <div className=''>
                                                        <img src={drcristofer} alt='' />
                                                    </div>

                                                    <div className=' my-3 py-2 rounded-3 bg-[#F6F8FB] px-3'>
                                                        <div className='flex'>
                                                            <div>
                                                                <p className='mb-0 text-[#A7A7A7]'>Hospital Name</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Shamuba Hospital</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Break Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>1 Hour</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Years Of Experience</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6+ Year</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Specialty Type</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Obstetrics and genecology</p>
                                                            </div>
                                                            <div>
                                                                <p className='mb-1 text-[#A7A7A7]'>Doctor Qualification</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>MBBS</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Working Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6 Hour</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Emergency Contact Number</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>48555-20103</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='mb-0 text-[#A7A7A7]'>Description</p>
                                                            <p className='mb-2 text-[#141414] fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>

                                        </Modal>
                                        {isDetailsVisible && (
                                            <div>

                                                <div className='bg-[#F6F8FB] pe-3'>
                                                    <img src={drcristofer} alt='' />
                                                </div>

                                                <div className='flex  justify-between mb-3 bg-[#F6F8FB] px-3'>
                                                    <div>
                                                        <p className='mb-2'><strong>Hospital Name:</strong>hospital</p>
                                                        <p className='mb-2'><strong>Patient Name:</strong>name</p>
                                                        <p className='mb-2'><strong>Gender:</strong>gender</p>
                                                        <p className='mb-2'><strong>Address:</strong> address</p>
                                                    </div>
                                                    <div>
                                                        <p className='mb-2'><strong>Prescription Date:</strong> date</p>
                                                        <p className='mb-2'><strong>Age:</strong>age</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )

                        }

                        {activeTab === 'cancel' &&
                             (
                                <>
                                    <div className="gap-4 h-50 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={handleShow2} ><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-1 pb-2 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>
                                            
                                        </div>
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white'  onClick={handleShow2}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-1 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-1 pb-2 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <Modal show={show2} onHide={handleClose2} centered dialogClassName="modal-md">
                                            <Modal.Body>
                                                <div>
                                                <div onClick={handleClose2} className='text-xl fw-semibold mb-4 flex items-center'><span className='border-1 rounded-circle me-3 p-1'><FaAngleLeft /></span>Doctor Management</div>
                                                    <div className=''>
                                                        <img src={drcristofer} alt='' />
                                                    </div>

                                                    <div className=' my-3 py-2 rounded-3 bg-[#F6F8FB] px-3'>
                                                        <div className='flex'>
                                                            <div>
                                                                <p className='mb-0 text-[#A7A7A7]'>Hospital Name</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Shamuba Hospital</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Break Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>1 Hour</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Years Of Experience</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6+ Year</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Specialty Type</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Obstetrics and genecology</p>
                                                            </div>
                                                            <div>
                                                                <p className='mb-1 text-[#A7A7A7]'>Doctor Qualification</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>MBBS</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Working Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6 Hour</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Emergency Contact Number</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>48555-20103</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='mb-0 text-[#A7A7A7]'>Description</p>
                                                            <p className='mb-2 text-[#141414] fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>

                                        </Modal>
                                        {isDetailsVisible && (
                                            <div>

                                                <div className='bg-[#F6F8FB] pe-3'>
                                                    <img src={drcristofer} alt='' />
                                                </div>

                                                <div className='flex  justify-between mb-3 bg-[#F6F8FB] px-3'>
                                                    <div>
                                                        <p className='mb-2'><strong>Hospital Name:</strong>hospital</p>
                                                        <p className='mb-2'><strong>Patient Name:</strong>name</p>
                                                        <p className='mb-2'><strong>Gender:</strong>gender</p>
                                                        <p className='mb-2'><strong>Address:</strong> address</p>
                                                    </div>
                                                    <div>
                                                        <p className='mb-2'><strong>Prescription Date:</strong> date</p>
                                                        <p className='mb-2'><strong>Age:</strong>age</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )

                        }

                        {activeTab === 'Pending' &&
                            (
                                <>
                                    <div className="gap-4 h-50 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={handleShow2} ><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>
                                            <div className="card-body px-2 py-1 mt-2 flex justify-between">
                                                <button
                                                    className="flex fw-semibold items-center justify-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] me-2 w-full py-1 rounded hover:text-white">
                                                    <MdFreeCancellation className='me-2 fs-5' /> Cancel
                                                </button>
                                                <button
                                                    className="flex fw-semibold items-center text-[#4F4F4F] bg-[#F6F8FB]  hover:bg-[#0EABEB] px-2 py-1 rounded hover:text-white">
                                                    <RiCalendarScheduleFill className='me-2' />Reschedule
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card border" style={{ maxWidth: '18rem' }}>
                                            <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                                <span>Dr. Nolan George</span>
                                                <div className='flex'>
                                                    <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white'  onClick={handleShow2}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                                </div>
                                            </div>
                                            <div className="card-body px-2 pt-1 pb-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Type</p>
                                                <p className="mb-0 text-[#FFC313] text-sm fw-semibold">Online</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Hospital Name</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Shamuba Hospital</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Date</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">2 Jan, 2022</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Appointment Time</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">10:10 AM</p>
                                            </div>
                                            <div className="card-body px-2 py-0 flex justify-between">
                                                <p className="mb-0 text-[#818194] text-sm">Patient Issue</p>
                                                <p className="mb-0 text-[#4F4F4F] text-sm fw-semibold">Feeling Tired</p>
                                            </div>
                                            <div className="card-body px-2 py-1 mt-2 flex justify-between">
                                                <button
                                                    className="flex fw-semibold items-center justify-center text-[#4F4F4F] bg-[#F6F8FB] hover:bg-[#39973D] me-2 w-full py-1 rounded hover:text-white">
                                                    <MdFreeCancellation className='me-2 fs-5' /> Cancel
                                                </button>
                                                <button
                                                    className="flex fw-semibold items-center text-[#4F4F4F] bg-[#F6F8FB]  hover:bg-[#0EABEB] px-2 py-1 rounded hover:text-white">
                                                    <RiCalendarScheduleFill className='me-2' />Reschedule
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Modal show={show2} onHide={handleClose2} centered dialogClassName="modal-md">
                                            <Modal.Body>
                                                <div>
                                                <div onClick={handleClose2} className='text-xl fw-semibold mb-4 flex items-center'><span className='border-1 rounded-circle me-3 p-1'><FaAngleLeft /></span>Doctor Management</div>
                                                    <div className=''>
                                                        <img src={drcristofer} alt='' />
                                                    </div>

                                                    <div className=' my-3 py-2 rounded-3 bg-[#F6F8FB] px-3'>
                                                        <div className='flex'>
                                                            <div>
                                                                <p className='mb-0 text-[#A7A7A7]'>Hospital Name</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Shamuba Hospital</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Break Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>1 Hour</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Years Of Experience</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6+ Year</p>
                                                                <p className='mb-0 text-[#A7A7A7]'>Specialty Type</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>Obstetrics and genecology</p>
                                                            </div>
                                                            <div>
                                                                <p className='mb-1 text-[#A7A7A7]'>Doctor Qualification</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>MBBS</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Working Time</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>6 Hour</p>
                                                                <p className='mb-1 text-[#A7A7A7]'>Emergency Contact Number</p>
                                                                <p className='mb-2 text-[#141414] fw-semibold'>48555-20103</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='mb-0 text-[#A7A7A7]'>Description</p>
                                                            <p className='mb-2 text-[#141414] fw-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>

                                        </Modal>
                                        {isDetailsVisible && (
                                            <div>

                                                <div className='bg-[#F6F8FB] pe-3'>
                                                    <img src={drcristofer} alt='' />
                                                </div>

                                                <div className='flex  justify-between mb-3 bg-[#F6F8FB] px-3'>
                                                    <div>
                                                        <p className='mb-2'><strong>Hospital Name:</strong>hospital</p>
                                                        <p className='mb-2'><strong>Patient Name:</strong>name</p>
                                                        <p className='mb-2'><strong>Gender:</strong>gender</p>
                                                        <p className='mb-2'><strong>Address:</strong> address</p>
                                                    </div>
                                                    <div>
                                                        <p className='mb-2'><strong>Prescription Date:</strong> date</p>
                                                        <p className='mb-2'><strong>Age:</strong>age</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeleconsultationAccess;









// import React from 'react'

// const TeleconsultationAccess = () => {
//   return (
//     <div>TeleconsultationAccess</div>
//   )
// }

// export default TeleconsultationAccess;