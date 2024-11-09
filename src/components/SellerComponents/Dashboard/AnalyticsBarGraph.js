// src/components/SellerComponents/AnalyticsBarGraph/AnalyticsBarGraph.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsBarGraph = () => {
  const data = {
    labels: ['1-7 days', '8-14 days', '15-21 days', '22-28 days', '29-30 days'],
    datasets: [
      {
        label: 'Received Inquiries',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Active Inquiries',
        data: [2, 3, 19, 5, 1],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Completed Inquiries',
        data: [3, 10, 13, 15, 19],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },

    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Inquiries Analytics',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week Intervals',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Inquiries',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default AnalyticsBarGraph;
