import React from 'react'
import TodayAppointment from './TodayAppointment';
import NavbarAP from './NavbarAP';
import PatientRecordAccess from './PatientRecordAccess';

const MainAppointmentDash = () => {
  return (
    <div className="flex-grow bg-gray-100 overflow-auto">
        <div className="sticky top-0 z-10">
          <NavbarAP />
        </div>
        <div className="gap-3 mt-6 px-6 mb-6 ">
          <div className="grid grid-cols-1 gap-3">
            <TodayAppointment/>  
          </div>
        </div> 
       
      </div>
  )
}

export default MainAppointmentDash;
