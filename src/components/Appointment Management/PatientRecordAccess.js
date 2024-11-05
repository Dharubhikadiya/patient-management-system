import React, { useState, useEffect } from 'react'
import NavbarAP from './NavbarAP';
import { MdRemoveRedEye } from 'react-icons/md';
import { LuSearch } from 'react-icons/lu';
import { RiWomenFill } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaSquarePlus } from 'react-icons/fa6';
import men from '../images/men.png';
import placeholderImage from '../images/dummy upload image.png';

const PatientRecordAccess = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false); 
    const [isDetailsVisible, setDetailsVisible] = useState(false); 
    const [isDialogOpen, setDialogOpen] = useState(false); 
    const [uploadedFiles, setUploadedFiles] = useState([]); 

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible); 
    };

    const toggleDialog = () => {
        setDialogOpen(!isDialogOpen);
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); 
        const validFiles = files.filter(file => 
            (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif') && file.size <= 10 * 1024 * 1024
        );

        if (validFiles.length > 0) {
            setUploadedFiles(prevFiles => [...prevFiles, ...validFiles]); // Append valid files to the state
        } else {
            alert('Please upload valid image files (png, jpg, gif) up to 10MB each.'); // Alert for invalid files
        }
    };

    return (
        <div className="flex h-screen">
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <NavbarAP />
                </div>
                <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">

                    {isDetailsVisible && (

                        <div className="bg-white mb-3 p-3">
                            <div className='d-flex justify-between align-items-center'>
                                <h5 className='text-semibold mt-1'>Patient Details</h5>
                                <div className='d-flex gap-3'>
                                    <div>
                                        <button
                                            className="fw-semibold text-white bg-[#0EABEB] rounded-lg px-2 py-1 flex items-center"
                                            onClick={toggleDialog} // Open dialog on button click
                                        >
                                            <FaSquarePlus className='me-2' /> Add Record
                                        </button>
                                    </div>
                                </div>
                            </div>



                            {isDialogOpen && (
                                <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-3 rounded shadow-lg w-85">
                                        <h2 className="text-xl font-semibold">Add Record</h2>
                                        <div className="mt-3">
                                            <label className="text-center cursor-pointer border-2 border-dashed p-2 w-80">
                                                {uploadedFiles.length > 0 ? (
                                                    uploadedFiles.map((file, index) => (
                                                        <img key={index} src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} className="w-80 h-24" />
                                                    ))
                                                ) : (
                                                    <>
                                                        <div className='flex items-center justify-center'>
                                                        <img src={placeholderImage} alt="Placeholder" className="w-8 h-8 mb-2" />   
                                                        </div>
                                                        <p className="text-gray-500 mb-0">Upload files or drag and drop</p>
                                                        <p className="text-gray-400 mb-0">png, jpg, gif up to 10mb each</p>
                                                    </>
                                                )}
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept=".png, .jpg, .gif"
                                                    onChange={handleFileChange}
                                                    multiple // Allow multiple file uploads
                                                />
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <label className="block mb-2">Description:</label>
                                            <textarea placeholder='Enter Description' className="border rounded p-1 w-full" rows="2"></textarea>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <button
                                                className="border-2 rounded px-4 py-2 mr-2 w-50"
                                                onClick={toggleDialog} 
                                            >
                                                Cancel
                                            </button>
                                            <button className="hover:bg-[#0EABEB] bg-gray-100 hover:text-white rounded px-4 py-2 w-50">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}


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


                    <div className="bg-white">
                        <div className='d-flex justify-between align-items-center p-3'>
                            <h5 className='text-semibold mt-1'>Patient Record Access</h5>
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
                                <div className="relative">
                                    <button onClick={toggleDropdown} className="fw-semibold rounded-lg px-3 py-1 border-2 border-gray-300 flex items-center">
                                        Month
                                        {isDropdownOpen ? (
                                            <FaAngleUp className="ml-2" />
                                        ) : (
                                            <FaAngleDown className="ml-2" />
                                        )}
                                    </button>
                                    {isDropdownOpen && (
                                        <ul className="absolute bg-white border rounded shadow mt-2 ps-0" style={{ width: "105px" }}>
                                            <li className="px-2 py-1 hover:text-[#0EABEB] border-bottom fw-semibold cursor-pointer">Day</li>
                                            <li className="px-2 py-1 hover:text-[#0EABEB] border-bottom fw-semibold cursor-pointer">Week</li>
                                            <li className="px-2 py-1 hover:text-[#0EABEB] border-bottom fw-semibold cursor-pointer">Month</li>
                                        </ul>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="gap-2 h-50 ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Patient Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Dieses Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Patient issue
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Lat Appointment Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Last Appointment Time
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Age
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Gender
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-2">
                                            Silver
                                        </td>
                                        <td className="px-6 py-2">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-2">
                                            2 jan, 2022
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            22 Years
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiWomenFill /></div>
                                        </td>
                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-2">
                                            Silver
                                        </td>
                                        <td className="px-6 py-2">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-2">
                                            2 jan, 2022
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                            
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            22 Years
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiWomenFill /></div>
                                        </td>
                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-2">
                                            Silver
                                        </td>
                                        <td className="px-6 py-2">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-2">
                                            2 jan, 2022
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            22 Years
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiWomenFill /></div>
                                        </td>
                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={toggleDetails}>
                                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientRecordAccess;