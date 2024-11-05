import { useState } from 'react'; // Added useState for managing state
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Added ResponsiveContainer import

const yearData = [
  { name: '2001', patients: 0 },
  { name: '2002', patients: 100 },
  { name: '2003', patients: 200 },
  { name: '2004', patients: 300 },
  { name: '2005', patients: 400 },
  { name: '2006', patients: 500 },
  { name: '2007', patients: 600 },
  { name: '2008', patients: 700 },
  { name: '2009', patients: 800 },
  { name: '2010', patients: 900 },
];

const monthData = [
  { name: 'Jan', patients: 200 },
  { name: 'Feb', patients: 300 },
  { name: 'Mar', patients: 278 },
  { name: 'Apr', patients: 189 },
  { name: 'May', patients: 239 },
  { name: 'Jun', patients: 349 },
  { name: 'Jul', patients: 278 },
  { name: 'Aug', patients: 200 },
  { name: 'Sep', patients: 349 },
  { name: 'Oct', patients: 400 },
  { name: 'Nov', patients: 320 },
  { name: 'Dec', patients: 410 },
];

const weekData = [
  { name: 'Mon', patients: 120 },
  { name: 'Tue', patients: 210 },
  { name: 'Wed', patients: 180 },
  { name: 'Thu', patients: 240 },
  { name: 'Fri', patients: 300 },
  { name: 'Sat', patients: 150 },
  { name: 'Sun', patients: 200 },
];

const PatientsStatistics = () => {
  const [timePeriod, setTimePeriod] = useState('Year'); // State for time period selection
  const [data, setData] = useState(yearData); // State for chart data

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
    if (period === 'Year') {
      setData(yearData);
    } else if (period === 'Month') {
      setData(monthData);
    } else if (period === 'Week') {
      setData(weekData);
    }
  };

  return (
    <div className="bg-white p-2 px-3 rounded-lg w-full" style={{ marginTop: "0px", height: "330px" }}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <div><h2 className="text-xl pb-2 fw-bold font-semibold">Patients Statistics</h2></div>
        <div className="button-group d-flex mb-2 shadow-sm rounded text-gray-500" style={{ position: 'relative', backgroundColor: 'transparent' }}>
          <button className=" mx-2 px-2 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Year')}>Year</button>
          <button className=" btn-white px-2 py-2 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Month')}>Month</button>
          <button className=" mx-2 px-2 me-3 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Week')}>Week</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} stroke="#ccc" /> {/* Show only horizontal lines */}
          <XAxis dataKey="name" />
          <YAxis domain={[0, 1000]} ticks={[0, 200, 400, 600, 800, 1000]} />
          <Tooltip content={({ payload }) => {
            if (payload && payload.length) {
              return (
                <div className='grid px-2' style={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '5px' }}>
                  <span>Patients</span> <span>{payload[0].value}</span> {/* Show only the number of patients */}
                </div>
              );
            }
            return null;
          }} />
          <Legend />
          <Line type="monotone" dataKey="patients" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientsStatistics;
