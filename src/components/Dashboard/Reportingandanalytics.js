import React from 'react'
import Navbar from './Navbar';
import PatientsStatistics from './PatientsStatistics';
import Reportcards from './Reportcards';
import PatientCountDep from './PatientCountDep';
import DoctorCountDep from './DoctorCountDep';
import PatientAge from './PatientAge';
import AppointmentChart from './AppointmentChart';
import PatientSummaryChart from './PatientSummaryChart';

const Reportingandanalytics = () => {
  return (
    <div className="flex-grow bg-gray-100 overflow-auto h-screen">
    <div className="sticky top-0 z-10">
      <Navbar />
    </div>
    <div className="grid grid-cols-1 gap-3 mt-6 px-6 mb-6">
      <div className="grid grid-cols-1 gap-3">
        <Reportcards />
      </div>
      <div className="grid grid-cols-2 gap-3">
      <AppointmentChart />
          <PatientSummaryChart />
      </div>
      <div className='grid grid-cols-3 gap-3'>
          <PatientCountDep />
          <DoctorCountDep />
          <PatientAge />
        </div>
    </div>
  </div>
  )
}

export default Reportingandanalytics;

