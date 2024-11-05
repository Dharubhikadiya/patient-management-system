import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import NavbarAP from './NavbarAP';
import 'react-datepicker/dist/react-datepicker.css';
import { Grid2, TextField } from '@mui/material';
import { MdRemoveRedEye } from "react-icons/md";
import men from '../images/men.png';
import { Grid } from '@mui/system';

const PrescriptionCreate = () => {

    const [isCreateVisible, setCreateVisible] = useState(false);
    const [isDetailsVisible, setDetailsVisible] = useState(false);

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    const createprescription = () => {
        setCreateVisible(!isCreateVisible)
    }

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
                                    <h5 className='text-semibold mt-1'>Create Prescription</h5>
                                </div>
                                <div className='flex my-3 items-center justify-between '>
                                    <div className='flex'>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <TextField
                                                    required
                                                    id="name"
                                                    label="Patient Name"
                                                    placeholder="Enter Patient Name"
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
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    required
                                                    id="age"
                                                    label="Age"
                                                    placeholder="Enter your Age"
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
                                                                fontSize: 'small', // Set placeholder font size to small
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField
                                                    required
                                                    id="phone"
                                                    label="Gender"
                                                    placeholder="Enter Gender"
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
                                                                fontSize: 'small', // Set placeholder font size to small
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs></Grid>
                                        </Grid>

                                    </div>
                                    <div className="flex items-end justify-end">
                                        <button className='bg-[#0EABEB] p-2 text-white px-4 rounded'>Send</button>
                                    </div>
                                </div>
                            </div>
                        )}


                    {isDetailsVisible && (
                        <div className="bg-white mb-3 p-3">
                            <div className='d-flex justify-between align-items-center'>
                                <h5 className='text-semibold mt-1'>Patient Details</h5>
                                <div className='d-flex gap-3'>

                                </div>
                            </div>

                            <div className='flex mt-3 items-center justify-between'>
                                <div>
                                    <img src={men} width="120px"></img>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col mb-3'>
                                        <span className='text-gray-400'>Patient Name</span>
                                        <span>Marcus Phillips</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-400'>Doctor Name</span>
                                        <span>Dr. Marcus Phillips</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col mb-3'>
                                        <span className='text-gray-400'>Patient Number</span>
                                        <span>9913044537</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-400'>Patient Age</span>
                                        <span>20 Years</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col mb-3'>
                                        <span className='text-gray-400'>Patient Issue</span>
                                        <span>Feeling tired</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-400'>Appointment Time</span>
                                        <span>Online</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col mb-3'>
                                        <span className='text-gray-400'>Patient Gender</span>
                                        <span>Male</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-400'>Patient Address</span>
                                        <span>B-408 swastix plaza, mota varachha rajkot</span>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col mb-3'>
                                        <span className='text-gray-400'>Last Appointment Date</span>
                                        <span>2 jan, 2022</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-400'>Last Appointment Time</span>
                                        <span>4:30 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='bg-white p-3 overflow'>

                        <div>
                            <div className='d-flex justify-between'>
                                <h5 className='text-semibold mt-1'>Today Appointment</h5>
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
                                        <span>Jaydon Philips</span>
                                        <div className='flex'>
                                            <div className='bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-3xl px-2'><span className='px-2'>New</span></div>
                                            <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={toggleDetails}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                        </div>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Appointment Type</p>
                                        <p className="mb-0 text-[#5678E9] fw-semibold">Onsite</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Patient Age</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">36 Years</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Patient Gender</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">Male</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Appointment Time</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">10:10 AM</p>
                                    </div>
                                    <div className="card-body px-2 py-1 mt-2 flex justify-center">
                                        <button
                                            onClick={createprescription}
                                            className="flex fw-semibold w-full text-center items-center text-[#4F4F4F] bg-[#F6F8FB] justify-center hover:bg-[#0EABEB] px-2 py-2 rounded hover:text-white">
                                            Create Prescription
                                        </button>
                                    </div>
                                </div>
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                        <span>Jaydon Philips</span>
                                        <div className='flex'>
                                            <div className='bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-3xl px-2'><span className='px-2'>New</span></div>
                                            <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={toggleDetails}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                        </div>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Appointment Type</p>
                                        <p className="mb-0 text-[#5678E9] fw-semibold">Onsite</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Patient Age</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">36 Years</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Patient Gender</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">Male</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Appointment Time</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">10:10 AM</p>
                                    </div>
                                    <div className="card-body px-2 py-1 mt-2 flex justify-center">
                                        <button
                                            onClick={createprescription}
                                            className="flex fw-semibold w-full text-center items-center text-[#4F4F4F] bg-[#F6F8FB] justify-center hover:bg-[#0EABEB] px-2 py-2 rounded hover:text-white">
                                            Create Prescription
                                        </button>
                                    </div>
                                </div>
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex items-center justify-between text-md bg-[#F6F8FB]">
                                        <span>Jaydon Philips</span>
                                        <div className='flex'>
                                            <div className='bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-3xl px-2'><span className='px-2'>New</span></div>
                                            <div className='ms-1 bg-[#DFF0F9] text-[#0EABEB] p-1 rounded-lg border-1 bg-white' onClick={toggleDetails}><MdRemoveRedEye className='mt-1 mx-1' /></div>
                                        </div>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Appointment Type</p>
                                        <p className="mb-0 text-[#5678E9] fw-semibold">Onsite</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Patient Age</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">36 Years</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Patient Gender</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">Male</p>
                                    </div>
                                    <div className="card-body px-2 py-1 flex justify-between">
                                        <p className="mb-0 text-[#818194]">Appointment Time</p>
                                        <p className="mb-0 text-[#4F4F4F] fw-semibold">10:10 AM</p>
                                    </div>
                                    <div className="card-body px-2 py-1 mt-2 flex justify-center">
                                        <button
                                            onClick={createprescription}
                                            className="flex fw-semibold w-full text-center items-center text-[#4F4F4F] bg-[#F6F8FB] justify-center hover:bg-[#0EABEB] px-2 py-2 rounded hover:text-white">
                                            Create Prescription
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrescriptionCreate;