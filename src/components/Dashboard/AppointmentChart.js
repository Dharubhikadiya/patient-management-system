import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AppointmentChart = () => {
  const appointmentData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Other Appointment',
        data: [40, 45, 30, 45, 55, 50],
        backgroundColor: '#1E97E6',
      },
      {
        label: 'Online Consultation',
        data: [20, 30, 40, 35, 45, 40],
        backgroundColor: '#3FD9FF',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Appointment</h3>
      <div style={{ height: '300px' }}>
        <Bar data={appointmentData} options={options} />
      </div>
    </div>
  );
};

export default AppointmentChart;
