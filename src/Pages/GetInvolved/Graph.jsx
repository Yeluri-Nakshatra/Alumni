import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: true,
        
        font: {
          size: 16,
        },
        align: 'start',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 0, 0, 0.2)', // Red grid lines
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 0, 0, 0.2)', // Red grid lines
        },
      },
    },
  };
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Replace with your x-axis data
    datasets: [
      {
        
        data: [7, 12, 15, 8, 10], // Replace with your y-axis data
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue area
        borderColor: 'rgba(54, 162, 235, 1)', // Line color
        tension: 0.4, // Smooth curve
      },
    ],
  };
  
const Graph = () => {
    return <Line options={options} data={data} />;
}

export default Graph