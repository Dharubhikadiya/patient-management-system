import React from 'react';
import { FaUserGroup } from "react-icons/fa6";

const PatientCountDep = () => {
   
      return (
        <div className="bg-white p-3 rounded-lg text-center" style={{ height:"343px"}}>
          <h3 className="text-xl font-bold mb-3 d-flex">Patients Count Department</h3>
          <div className='mt-2 flex justify-between gap-3'>
        <div className="card border w-full">
          <div className="py-2 px-3 fw-semibold flex items-center justify-between text-sm bg-[#F6F8FB]">
            <span>Department Name</span>
            <span>Patient Count</span>
          </div>
          <div className="card-body px-3 py-1 text-left flex items-center justify-between">
            <p className="text-[#4F4F4F] fw-semibold mb-1">Cardilogy</p>
            <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-sm my-1" style={{ width: "80px", height: "30px", fontWeight: "500" }}><FaUserGroup className='me-2'/>105</div>
          </div>
          <div className="card-body px-3 py-1 text-left flex items-center justify-between">
            <p className="text-[#4F4F4F] fw-semibold mb-1">Endocrinologist</p>
            <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-sm my-1" style={{ width: "80px", height: "30px", fontWeight: "500" }}><FaUserGroup className='me-2'/>105</div>
          </div>
          <div className="card-body px-3 py-1 text-left flex items-center justify-between">
          <p className="text-[#4F4F4F] fw-semibold mb-1">Gastroenterologist</p>
          <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-sm my-1" style={{ width: "80px", height: "30px", fontWeight: "500" }}><FaUserGroup className='me-2'/>105</div>
        </div>
        <div className="card-body px-3 py-1 text-left flex items-center justify-between">
        <p className="text-[#4F4F4F] fw-semibold mb-1">Anestheesiologist</p>
        <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-sm my-1" style={{ width: "80px", height: "30px", fontWeight: "500" }}><FaUserGroup className='me-2'/>105</div>
      </div>
       <div className="card-body px-3 py-1 text-left flex items-center justify-between">
            <p className="text-[#4F4F4F] fw-semibold mb-1">Pediatrician</p>
            <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center text-sm my-1" style={{ width: "80px", height: "30px", fontWeight: "500" }}><FaUserGroup className='me-2'/>105</div>
          </div>
      </div>
          </div>
        </div>
      );
    }

export default PatientCountDep;