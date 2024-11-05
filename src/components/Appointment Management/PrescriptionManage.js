import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { MdRemoveRedEye } from 'react-icons/md';
import NavbarAP from './NavbarAP';
import { RiWomenFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import hospitallogo from '../images/hospital logo.png';
import additionalnote from '../images/additional note.png';
import sign from '../images/hospital sign.png';

const PrescriptionManage = () => {
    const [activeTab, setActiveTab] = useState('today');
    const [isDetailDialogOpen, setDetailDialogOpen] = useState(false); // State for detail dialog visibility
    const [selectedPatient, setSelectedPatient] = useState(null);

    const openDetailDialog = (patient) => {
        setSelectedPatient(patient); // Set the selected patient details
        setDetailDialogOpen(true); // Open the detail dialog
    };

    const toggleNotification = () => {
        setDetailDialogOpen(prevState => !prevState);
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
                                    Today Prescription
                                </li>
                                <li
                                    className={`${activeTab === 'upcoming' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                                    style={{ borderBottom: activeTab === 'upcoming' ? "3px solid #0EABEB" : "none" }}
                                    onClick={() => setActiveTab('upcoming')}
                                >
                                    Older Prescription
                                </li>
                            </ul>
                        </div>
                        <div className='d-flex justify-between'>
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
                        <div className="gap-4 h-50 mt-3">
                            {activeTab === 'today' ? ( // Show the Today table only when 'today' tab is active
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Patient Name</th>
                                            <th scope="col" className="px-6 py-3">Patient Number</th>
                                            <th scope="col" className="px-6 py-3">Appointment Type</th>
                                            <th scope="col" className="px-6 py-3">Appointment Time</th>
                                            <th scope="col" className="px-6 py-3">Age</th>
                                            <th scope="col" className="px-6 py-3">Gender</th>
                                            <th scope="col" className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="px-6 py-2">xyz</th>
                                            <td className="px-6 py-2">7894561235</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#FFF9E7] text-[#FFC313] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Online</div>
                                            </td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                            </td>
                                            <td className="px-6 py-2">22 Years</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiWomenFill /></div>
                                            </td>
                                            <td className="px-6 py-2">
                                                <div className="d-flex align-items-center justify-content-center" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="px-6 py-2">xyz</th>
                                            <td className="px-6 py-2">7894561235</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#EEF1FD] text-[#5678E9] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Onsite</div>
                                            </td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                            </td>
                                            <td className="px-6 py-2">22 Years</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiWomenFill /></div>
                                            </td>
                                            <td className="px-6 py-2">
                                                <div className="d-flex align-items-center justify-content-center" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : ( // Show the Upcoming table only when 'upcoming' tab is active
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Patient Name</th>
                                            <th scope="col" className="px-6 py-3">Patient Number</th>
                                            <th scope="col" className="px-6 py-3">Appointment Type</th>
                                            <th scope="col" className="px-6 py-3">Appointment Date</th>
                                            <th scope="col" className="px-6 py-3">Appointment Time</th>
                                            <th scope="col" className="px-6 py-3">Age</th>
                                            <th scope="col" className="px-6 py-3">Gender</th>
                                            <th scope="col" className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="px-6 py-2">xyz</th>
                                            <td className="px-6 py-2">7894561235</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#FFF9E7] text-[#FFC313] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Online</div>
                                            </td>
                                            <td className="px-6 py-2">2 Jan, 2022</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                            </td>
                                            <td className="px-6 py-2">22 Years</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiWomenFill /></div>
                                            </td>
                                            <td className="px-6 py-2">
                                                <div className="d-flex align-items-center justify-content-center" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="px-6 py-2">xyz</th>
                                            <td className="px-6 py-2">7894561235</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#EEF1FD] text-[#5678E9] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Onsite</div>
                                            </td>
                                            <td className="px-6 py-2">2 jan, 2022</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                            </td>
                                            <td className="px-6 py-2">22 Years</td>
                                            <td className="px-6 py-2 text-bold">
                                                <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl text-lg d-flex align-items-center justify-content-center" style={{ width: "30px", height: "30px", fontWeight: "500" }}><RiWomenFill/></div>
                                            </td>
                                            <td className="px-6 py-2">
                                                <div className="d-flex align-items-center justify-content-center" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    {/* Detail Dialog for displaying patient information */}
                    {isDetailDialogOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

                            <div className="bg-white p-2 rounded shadow-lg" style={{ width: "550px", height: "650px" }} >
                                <div className="d-flex align-items-center justify-content-between px-2 border-bottom pb-2">
                                    <span className="text-dark font-semibold text-lg">Prescription</span>
                                    <span className="text-gray-500 text-white d-flex align-items-center justify-content-center rounded-circle cursor-pointer" style={{ width: "14px", height: "14px", backgroundColor: "#E11D29" }} onClick={toggleNotification}><IoClose /></span>
                                </div>
                                <div className='border rounded p-2'>
                                {selectedPatient && (
                                    <div> 

                                        <div className='bg-[#F6F8FB] pe-3'>
                                            <img src={hospitallogo} alt=''/>
                                        </div>

                                        <div className='flex  justify-between mb-3 bg-[#F6F8FB] px-3'>
                                            <div>
                                                <p className='mb-2'><strong>Hospital Name:</strong> {selectedPatient.hospital}</p>
                                                <p className='mb-2'><strong>Patient Name:</strong> {selectedPatient.name}</p>
                                                <p className='mb-2'><strong>Gender:</strong> {selectedPatient.gender}</p>
                                                <p className='mb-2'><strong>Address:</strong> {selectedPatient.address}</p>
                                            </div>
                                            <div>
                                                <p className='mb-2'><strong>Prescription Date:</strong> {selectedPatient.date}</p>
                                                <p className='mb-2'><strong>Age:</strong> {selectedPatient.age}</p>
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <table className=" w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 text-left bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                                    <tr>
                                                        <th scope="col" className="py-3 ps-3">
                                                            Medicine Name
                                                        </th>
                                                        <th scope="col" className="py-3">
                                                            Strength
                                                        </th>
                                                        <th scope="col" className="py-3 px-4">
                                                            Dose
                                                        </th>
                                                        <th scope="col" className="py-3">
                                                            Duration
                                                        </th>
                                                        <th scope="col" className="py-3">
                                                            When to take
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="py-2 ps-3 font-medium text-left text-gray-900 whitespace-nowrap dark:text-white">
                                                            Calcium carbonate
                                                        </th>
                                                        <td className="py-2 text-dark fw-semibold">
                                                            100 Mg
                                                        </td>
                                                        <td className="py-2 text-dark fw-semibold">
                                                            1-0-1
                                                        </td>
                                                        <td className="py-2 text-bold">
                                                            <div className="bg-[#EBF5Ec] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center " style={{ width: "70px", height: "30px", fontWeight: "500" }}>2 Day</div>
                                                        </td>
                                                        <td className="py-2 text-bold d-flex align-items-center justify-content-center">
                                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "100px", height: "30px", fontWeight: "500" }}>Before Food</div>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="py-2 ps-3 font-medium text-left text-gray-900 whitespace-nowrap dark:text-white">
                                                            Calcium carbonate
                                                        </th>
                                                        <td className="py-2 text-dark fw-semibold">
                                                            100 Mg
                                                        </td>
                                                        <td className="py-2 text-dark fw-semibold">
                                                            1-0-1
                                                        </td>
                                                        <td className="py-2 text-bold">
                                                            <div className="bg-[#EBF5Ec] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center " style={{ width: "70px", height: "30px", fontWeight: "500" }}>2 Day</div>
                                                        </td>
                                                        <td className="py-2 text-bold d-flex align-items-center justify-content-center">
                                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "100px", height: "30px", fontWeight: "500" }}>With Food</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                <div className='mt-4 px-3'>
                                    <img src={additionalnote} alt=''/>
                                </div>

                                <div className='mt-5 px-3 pt-3'>
                                    <img src={sign} alt=''/>
                                </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PrescriptionManage;