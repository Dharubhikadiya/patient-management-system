import React from 'react';
import { GoDotFill } from "react-icons/go";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Static data for the chart
const data = [

    { name: '0-2 Years', value: 35, color: '#B9459F' },  
    { name: '3-12 Years', value: 35, color: '#3D429F' },  
    { name: '13-19 Years', value: 35, color: '#4683A5' }, 
    { name: '20-39 Years', value: 35, color: '#E3B340' }, 
    { name: '40-59 Years', value: 35, color: '#389486' }, 
    { name: '60 And Above', value: 35, color: '#CA7C67' }, 
];


export default function PatientAge() {
    return (
        <div className='bg-white p-2 rounded-lg' style={{ height: "343px" }}>
            <h3 className='text-xl font-bold p-2 d-flex'>Patients Age</h3>
            <div className="flex justify-center items-center rounded-lg bg-[#F6F8FB]" >
                <div className="w-48 h-64">
                    <ResponsiveContainer>
                        <PieChart>
                            {/* Pie Component */}
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                startAngle={90}
                                endAngle={-270}
                                paddingAngle={5}
                                cornerRadius={10}  // Rounded edges
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke={index === 1 ? '#FFFF' : 'none'}  // Add the black border to old patients
                                        strokeWidth={index === 1 ? 3 : 0}  // Increase border width
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="items-start bg-white p-2 rounded-lg">
                    <div className="flex items-center justify-between mb-2 border-b border-dashed border-b-1 border-gray-300">
                        <span className="text-gray-500 text-md text-dark fw-semibold flex pe-3">
                            <GoDotFill className='text-[#B9459F] mt-1 me-1 fs-6' />
                            0-2 Years
                        </span>
                        <span className="text-[#B9459F] font-bold">0%</span>
                    </div>
                    <div className="flex items-center justify-between mb-2 border-b border-dashed border-b-1 border-gray-300">
                    <span className="text-gray-500 text-md text-dark fw-semibold flex pe-3">
                        <GoDotFill className='text-[#3D429F] mt-1 me-1 fs-6' />
                        3-12 Years
                    </span>
                    <span className="text-[#3D429F] font-bold">0%</span>
                </div>
                <div className="flex items-center justify-between mb-2 border-b border-dashed border-b-1 border-gray-300">
                <span className="text-gray-500 text-md text-dark fw-semibold flex pe-3">
                    <GoDotFill className='text-[#4683A5] mt-1 me-1 fs-6' />
                    13-19 Years
                </span>
                <span className="text-[#4683A5] font-bold">0%</span>
            </div>
            <div className="flex items-center justify-between mb-2 border-b border-dashed border-b-1 border-gray-300">
            <span className="text-gray-500 text-md text-dark fw-semibold flex pe-3">
                <GoDotFill className='text-[#E3B340] mt-1 me-1 fs-6' />
                20-39 Years
            </span>
            <span className="text-[#E3B340] font-bold">0%</span>
        </div>
        <div className="flex items-center justify-between mb-2 border-b border-dashed border-b-1 border-gray-300">
        <span className="text-gray-500 text-md text-dark fw-semibold flex pe-3">
            <GoDotFill className='text-[#389486] mt-1 me-1 fs-6' />
            40-59 Years
        </span>
        <span className="text-[#389486] font-bold">0%</span>
    </div>
    <div className="flex items-center justify-between">
    <span className="text-gray-500 text-md text-dark fw-semibold flex pe-3">
        <GoDotFill className='text-[#CA7C67] mt-1 me-1 fs-6' />
       60 And Above
    </span>
    <span className="text-[#CA7C67] font-bold">0%</span>
</div>


                </div>

            </div>
        </div>
    );
}
