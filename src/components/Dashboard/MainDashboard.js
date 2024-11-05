import React from 'react'
import Navbar from './Navbar';
import StatsCards from './StatsCards';
import PatientsStatistics from './PatientsStatistics';
import BillingPayments from './BillingPayments';
import AppointmentsList from './AppointmentsList';
import PatientsBreakdown from './PatientsBreakdown';

const MainDashboard = () => {
  return (
    <div className="flex-grow bg-gray-100 overflow-auto">
  <div className="sticky top-0 z-10">
    <Navbar />
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-6 px-6 mb-6">
    <div className="grid md:col-span-8 gap-3">
      <StatsCards />
      <PatientsStatistics />
      <AppointmentsList />
    </div>
    <div className="grid lg:col-span-4 gap-3">
      <div className="d-flex justify-content-end w-full">
        <BillingPayments />
      </div>
      <div className="d-flex justify-content-end w-full">
        <PatientsBreakdown />
      </div>
    </div>
  </div>
</div>

  )
}

export default MainDashboard
