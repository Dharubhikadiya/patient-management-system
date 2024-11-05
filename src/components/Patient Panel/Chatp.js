import React from 'react';
import { LuSearch } from 'react-icons/lu';
import nochat from '../images/no chat.png';
import nochatshow from '../images/nochatshow.png';
import NavbarAP from '../Appointment Management/NavbarAP';

const Chatp = () => {
    const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

    return (
        <div className="flex h-screen">
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <NavbarAP />
                </div>
                <div className="flex gap-3 mt-6 px-6 mb-6 overflow-auto h-full">
                    <div className="w-1/4 bg-white shadow-md rounded-md p-3 overflow-y-auto">
                        <h2 className="text-lg font-semibold mb-2">Chat</h2>
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
                       <div className='flex items-center justify-center mt-6 pt-6'>
                                <img src={nochat} className='mt-6 pt-6' width="50%"/>        
                       </div>
                    </div>
                    <div className="w-3/4 shadow-md rounded-md p-4 flex flex-col justify-between">
                    <div className='flex items-center justify-center mt-6 pt-6'>
                    <img src={nochatshow} className='mt-6 pt-6' width="45%"/>        
           </div>      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatp;
