import noapoointment from '../images/no appoinment.png'

export default function AppointmentsList() {

  return (
    <div className="bg-white p-3 rounded-lg text-center" style={{ height: "290px" }}>
      <h3 className="text-xl font-bold mb-2 d-flex">Today's Appointments List</h3>
      <div className='mt-3 flex justify-between gap-3'>
        <div className="card border w-full">
          <div className="py-2 px-2 fw-semibold flex items-center justify-between text-sm bg-[#F6F8FB]">
            <span>Roger Lubin</span>
            <div className="bg-[#EEF1FD] text-[#5678E9] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Onsite</div>
          </div>
          <div className="card-body px-2 py-1 text-left">
            <span className='text-[#818194] mb-0 pb-0'>Doctor Name</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">Leo Geidt</p>
            <span className='text-[#818194] mb-0 pb-0'>Dieses Name</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">Meningococcal Dieses</p>
            <span className='text-[#818194] mb-0 pb-0'>Appointment Time</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">10:00 AM</p>
          </div>
        </div>
        <div className="card border w-full">
          <div className="py-2 px-2 fw-semibold flex items-center justify-between text-sm bg-[#F6F8FB]">
            <span>Jakob Korsgaard</span>
            <div className="bg-[#FFF9E7] text-[#FFC313] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Online</div>
          </div>
          <div className="card-body px-2 py-1 text-left">
            <span className='text-[#818194] mb-0 pb-0'>Doctor Name</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">Leo Geidt</p>
            <span className='text-[#818194] mb-0 pb-0'>Dieses Name</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">Meningococcal Dieses</p>
            <span className='text-[#818194] mb-0 pb-0'>Appointment Time</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">10:00 AM</p>
          </div>
        </div>
        <div className="card border w-full">
          <div className="py-2 px-2 fw-semibold flex items-center justify-between text-sm bg-[#F6F8FB]">
            <span>Roger Lubin</span>
            <div className="bg-[#EEF1FD] text-[#5678E9] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Onsite</div>
          </div>
          <div className="card-body px-2 py-1 text-left">
            <span className='text-[#818194] mb-0 pb-0'>Doctor Name</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">Leo Geidt</p>
            <span className='text-[#818194] mb-0 pb-0'>Dieses Name</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">Meningococcal Dieses</p>
            <span className='text-[#818194] mb-0 pb-0'>Appointment Time</span>
            <p className="text-[#4F4F4F] fw-semibold mb-1">10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}