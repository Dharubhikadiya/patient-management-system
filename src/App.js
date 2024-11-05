import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Login from './components/Signup-Login-Pages/Login';
import Registration from './components/Signup-Login-Pages/Registration';
import ForgotPassword from './components/Signup-Login-Pages/ForgotPassword';
import Otp from './components/Signup-Login-Pages/Otp';
import ResetPassword from './components/Signup-Login-Pages/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import Sidebar from './components/Dashboard/Sidebar';
import AppointmentDashboard from './components/Appointment Management/AppointmentDashboard';
import SidebarAP from './components/Appointment Management/SidebarAP';
import PatientRecordAccess from './components/Appointment Management/PatientRecordAccess';
import TodayAppointment from './components/Appointment Management/TodayAppointment';
import AllUploadFiles from './components/Appointment Management/AllUploadFiles';
import PrescriptionManage from './components/Appointment Management/PrescriptionManage';
import OlderPrescription from './components/Appointment Management/OlderPrescription';
import Teleconsultation from './components/Appointment Management/Teleconsultation';
import Chat from './components/Appointment Management/Chat';
import Monitorbilling from './components/Dashboard/Monitorbilling';
import ProfilePage from './components/Dashboard/ProfilePage';
import PrescriptionCreate from './components/Appointment Management/PrescriptionCreate';
import InsuranceClaims from './components/Dashboard/InsuranceClaims';
import PaymentProcess from './components/Dashboard/PaymentProcess';
import Reportingandanalytics from './components/Dashboard/Reportingandanalytics';
import SidebarPtP from './components/Patient Panel/SidebarPtP';
import AppointmentBooking from './components/Patient Panel/AppointmentBooking';
import Personalhealthrecord from './components/Patient Panel/Personalhealthrecord';
import PrescriptionAccess from './components/Patient Panel/PrescriptionAccess';
import TeleconsultationAccess from './components/Patient Panel/TeleconsultationAccess';
import Chatp from './components/Patient Panel/Chatp';
import Bills from './components/Patient Panel/Bills';

function MainLayout() {
  const location = useLocation(); 
  const noSidebarRoutes = ["/", "/register", "/forgotpassword", "/otp", "/resetpassword"];

  const appointmentSidebarRoutes = ["/doctorpanel", "/patientrecordaccess","/prescriptioncreate", "/prescriptionmanage", "/olderprescription", "/teleconsultion" , "/chat"];

  const patientPanelRoutes = ["/patientpanel", "/appointmentbooking", "/prescriptionaccess", "/teleconsultationaccess", "/chatp", "/bills"];

  return (
    <div className="flex">

    {!noSidebarRoutes.includes(location.pathname) && (
      patientPanelRoutes.includes(location.pathname) ? (
        <SidebarPtP />
      ) : appointmentSidebarRoutes.includes(location.pathname) ? (
        <SidebarAP />
      ) : (
        <Sidebar />
      )
    )}
      
      <div className="flex-1"> 
        <Routes>
          {/* Auth-related routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctordashboard" element={<DoctorDashboard />} />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
          <Route path="/monitorbilling" element={<Monitorbilling />} />
          <Route path="/insuranceclaims" element={<InsuranceClaims />} />
          <Route path="/paymentprocess" element={<PaymentProcess />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/reportingandanalytics" element={<Reportingandanalytics />} />

          {/* Appointment Management */}
          <Route path="/doctorpanel" element={<AppointmentDashboard/>} />
          <Route path="/todayappointments" element={<TodayAppointment/>} />
          <Route path="/patientrecordaccess" element={<PatientRecordAccess/>} />
          <Route path="/alluploadfiles" element={<AllUploadFiles/>} />
          <Route path="/prescriptioncreate" element={<PrescriptionCreate/>} />
          <Route path="/prescriptionmanage" element={<PrescriptionManage/>} />
          <Route path="/olderprescription" element={<OlderPrescription/>} />
          <Route path="/teleconsultion" element={<Teleconsultation/>} />
          <Route path="/chat" element={<Chat/>} />

           {/* Patient Panel */}
           <Route path='/sidebarptp' element={<SidebarPtP/>}></Route>
           <Route path='/appointmentbooking' element={<AppointmentBooking/>}></Route>
           <Route path='/patientpanel' element={<Personalhealthrecord/>}></Route>
           <Route path='/prescriptionaccess' element={<PrescriptionAccess/>}></Route>
           <Route path='/teleconsultationaccess' element={<TeleconsultationAccess/>}></Route>
           <Route path='/chatp' element={<Chatp/>}></Route>
           <Route path='/bills' element={<Bills/>}></Route>

          {/* Billing Sub-routes */}  
          <Route path="/billing/monitor" element={<div>Monitor Billing Component</div>} />
          <Route path="/billing/insurance" element={<div>Insurance Claims Component</div>} />
          <Route path="/billing/payment" element={<div>Payment Process Component</div>} />

          {/* Reporting */}
          <Route path="/reports" element={<div>Reporting And Analytics Component</div>} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
