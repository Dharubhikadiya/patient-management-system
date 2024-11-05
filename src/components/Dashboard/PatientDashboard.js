// Dashboard.js
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import PatientRecord from './PatientRecord';

export default function PatientDashboard() {
  return (
    <div className="flex h-screen ">
      
      <div className="flex-grow bg-gray-100 overflow-auto"> 
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">
            <PatientRecord/>
        </div>
      </div>
    </div>
  );
}

