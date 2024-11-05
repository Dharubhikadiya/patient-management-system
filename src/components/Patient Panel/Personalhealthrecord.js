import React, { useState, useEffect } from 'react'
import { MdRemoveRedEye } from 'react-icons/md';
import { LuSearch } from 'react-icons/lu';
import { RiWomenFill } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaSquarePlus } from 'react-icons/fa6';
import men from '../images/men.png';
import avatar from '../images/Avatar 2.png';
import NavbarAP from '../Appointment Management/NavbarAP';
import { GoDotFill } from "react-icons/go";
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'

const Personalhealthrecord = () => {

    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible);
    };

    const toggleDialog = () => {
        setDialogOpen(!isDialogOpen);
    };

    return (
        <div className="flex h-screen">
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <NavbarAP />
                </div>
                <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">
                    <div className="bg-white mb-3 p-3">
                        <div className='d-flex justify-between align-items-center'>
                            <h5 className='text-semibold mt-1'>Patient Details</h5>
                            <div className='d-flex gap-3'>
                                <div>
                                    <button
                                        className="fw-semibold text-white bg-[#0EABEB] rounded-lg px-2 py-1 flex items-center"
                                        onClick={toggleDialog} // Open dialog on button click
                                    >
                                        <FaSquarePlus className='me-2' /> Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 items-center justify-between'>
                            <div>
                                <img src={men} width="120px"></img>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col mb-3'>
                                    <span className='text-gray-400'>Name</span>
                                    <span>Marcus Phillips</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-gray-400'>Height (cm)</span>
                                    <span>160</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col mb-3'>
                                    <span className='text-gray-400'>Number</span>
                                    <span>9913044537</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-gray-400'>Weight (Kg)</span>
                                    <span>50</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col mb-3'>
                                    <span className='text-gray-400'>Email</span>
                                    <span>john@gmail.com</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-gray-400'>Country</span>
                                    <span>India</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col mb-3'>
                                    <span className='text-gray-400'>Gender</span>
                                    <span>Male</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-gray-400'>State</span>
                                    <span>Gujarat</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col mb-3'>
                                    <span className='text-gray-400'>DOB</span>
                                    <span>2 jan, 2022</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-gray-400'>City</span>
                                    <span>Ahmadabad</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col mb-3'>
                                    <span className='text-gray-400'>Age</span>
                                    <span>20 Years</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-gray-400'>Address</span>
                                    <span>B-408 swastik society,mota varachha,rajkot</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-12 flex gap-2 mb-2'>
                        <div className="grid col-span-7 bg-white m-1 p-3">
                            <div className='flex justify-between items-center'>
                                <h5 className='text-semibold'>Medical History</h5>
                                <p className='text-primary mb-0 text-sm'>View All History</p>
                            </div>
                            <div className="mt-3 flex justify-between gap-2">
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex justify-between text-sm bg-[#F6F8FB]">
                                        <span>Dulce Scheleifer</span>
                                        <span className='text-sm text-[#4F4F4F]'>2 jan,2022</span>
                                    </div>
                                    <div className="card-body px-2 py-1">
                                        <p className="text-[#4F4F4F] fw-semibold my-1">Feeling Tired</p>
                                        <p className="mb-0 text-[#818194] text-xs">the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the.</p>
                                    </div>
                                </div>
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex justify-between text-sm bg-[#F6F8FB]">
                                        <span>Dulce Scheleifer</span>
                                        <span className='text-sm text-[#4F4F4F]'>2 jan,2022</span>
                                    </div>
                                    <div className="card-body px-2 py-1">
                                        <p className="text-[#4F4F4F] fw-semibold my-1">Feeling Tired</p>
                                        <p className="mb-0 text-[#818194] text-xs">the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the.</p>
                                    </div>
                                </div>
                                <div className="card border" style={{ maxWidth: '18rem' }}>
                                    <div className="py-2 px-2 fw-semibold flex justify-between text-sm bg-[#F6F8FB]">
                                        <span>Dulce Scheleifer</span>
                                        <span className='text-sm text-[#4F4F4F]'>2 jan,2022</span>
                                    </div>
                                    <div className="card-body px-2 py-1">
                                        <p className="text-[#4F4F4F] fw-semibold my-1">Feeling Tired</p>
                                        <p className="mb-0 text-[#818194] text-xs">the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid col-span-5 bg-white m-1">

                            <div className='px-2 '>
                                <div className='flex justify-between items-center'>
                                    <h5 className='text-semibold  py-3 mb-0 ps-2'>Prescriptions</h5>
                                    <p className='text-primary mb-0 text-sm'>View All Prescription</p>
                                </div>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="ps-2 py-3">
                                                Hospital Name
                                            </th>
                                            <th scope="col" className=" py-3">
                                                Date
                                            </th>
                                            <th scope="col" className=" py-3">
                                                Dieses Name
                                            </th>
                                            <th scope="col" className=" py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="ps-2 py-2">
                                                Apollo Hospitals
                                            </td>
                                            <td className=" py-2">
                                                2 jan, 2022
                                            </td>
                                            <td className=" py-2">
                                                Colds and Flu
                                            </td>
                                            <td className=" py-2">
                                                <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="ps-2 py-2">
                                                Medanta The Medicity
                                            </td>
                                            <td className=" py-2">
                                                2 jan, 2022
                                            </td>
                                            <td className=" py-2">
                                                Colds and Flu
                                            </td>
                                            <td className=" py-2">
                                                <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="ps-2 py-2">
                                                Medanta The Medicity
                                            </td>
                                            <td className=" py-2">
                                                2 jan, 2022
                                            </td>
                                            <td className=" py-2">
                                                Colds and Flu
                                            </td>
                                            <td className=" py-2">
                                                <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-6" />
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-12 flex gap-2'>
                        <div className="grid col-span-7 bg-white m-1 p-3">
                            <div className='flex justify-between items-center mb-2'>
                                <h5 className='text-semibold'>Test Report</h5>
                                <p className='text-primary mb-0 text-sm'>View All Reports</p>
                            </div>
                            <div className='flex items-center justify-between gap-2 mb-2'>
                                <div className='border-1 p-2 rounded-lg w-full'>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className='flex items-center'>
                                            <div className='me-2'>
                                                <img src={avatar} width="130%" />
                                            </div>
                                            <div className='dname-ddate'>
                                                <p className='mb-0 text-md fw-semibold'>Dr. Marcus Phillips</p>
                                                <span className='text-[#A7A7A7] text-sm'>2 jan, 2022</span>
                                            </div>
                                        </div>
                                        <div className="d-flex bg-[#F6F8FB] p-2 rounded-md align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                            <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between text-sm my-1'>
                                        <span className='text-[#818194]'><strong className='text-dark'>Dieses :</strong> Viral Infection</span>
                                        <span className='text-[#39973D] fw-semibold flex items-center'><GoDotFill className='me-1' />
                                            Pathology Test</span>
                                    </div>
                                </div>
                                <div className='border-1 p-2 rounded-lg w-full'>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className='flex items-center'>
                                            <div className='me-2'>
                                                <img src={avatar} width="130%" />
                                            </div>
                                            <div className='dname-ddate'>
                                                <p className='mb-0 text-md fw-semibold'>Dr. Marcus Phillips</p>
                                                <span className='text-[#A7A7A7] text-sm'>2 jan, 2022</span>
                                            </div>
                                        </div>
                                        <div className="d-flex bg-[#F6F8FB] p-2 rounded-md align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                            <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between text-sm my-1'>
                                        <span className='text-[#818194]'><strong className='text-dark'>Dieses :</strong> Viral Infection</span>
                                        <span className='text-[#39973D] fw-semibold flex items-center'><GoDotFill className='me-1' />
                                            Pathology Test</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='border-1 p-2 rounded-lg w-full'>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className='flex items-center'>
                                            <div className='me-2'>
                                                <img src={avatar} width="130%" />
                                            </div>
                                            <div className='dname-ddate'>
                                                <p className='mb-0 text-md fw-semibold'>Dr. Marcus Phillips</p>
                                                <span className='text-[#A7A7A7] text-sm'>2 jan, 2022</span>
                                            </div>
                                        </div>
                                        <div className="d-flex bg-[#F6F8FB] p-2 rounded-md align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                            <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between text-sm my-1'>
                                        <span className='text-[#818194]'><strong className='text-dark'>Dieses :</strong> Viral Infection</span>
                                        <span className='text-[#39973D] fw-semibold flex items-center'><GoDotFill className='me-1' />
                                            Pathology Test</span>
                                    </div>
                                </div>
                                <div className='border-1 p-2 rounded-lg w-full'>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className='flex items-center'>
                                            <div className='me-2'>
                                                <img src={avatar} width="130%" />
                                            </div>
                                            <div className='dname-ddate'>
                                                <p className='mb-0 text-md fw-semibold'>Dr. Marcus Phillips</p>
                                                <span className='text-[#A7A7A7] text-sm'>2 jan, 2022</span>
                                            </div>
                                        </div>
                                        <div className="d-flex bg-[#F6F8FB] p-2 rounded-md align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                            <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                        </div>
                                    </div>
                                    <div className='flex justify-between text-sm my-1'>
                                        <span className='text-[#818194]'><strong className='text-dark'>Dieses :</strong> Viral Infection</span>
                                        <span className='text-[#39973D] fw-semibold flex items-center'><GoDotFill className='me-1' />
                                            Pathology Test</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid col-span-5 bg-white m-1">
                            <div className='px-2 '>
                                <div className='flex justify-between items-center'>
                                    <h5 className='text-semibold  py-3 mb-0 ps-2'>Patient Status</h5>
                                </div>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-2 text-md fw-semibold'>
                                        <img src={p1} />
                                        <span>Shamuba Hospital</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-md fw-semibold'>
                                        <img src={p2} />
                                        <span>Dr. Mathew Best</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-md fw-semibold'>
                                        <img src={p3} />
                                        <span>2 jan, 2022</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-md fw-semibold me-2'>
                                        <img src={p4} />
                                        <span>Chance Carder</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center gap-2 text-md fw-semibold'>
                                        <img src={p5} />
                                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
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

export default Personalhealthrecord;