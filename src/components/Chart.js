import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const DoughnutChart = ({ data }) => {
  return (
    <div className="my-6 relative">
      <Doughnut data={data} cutoutPercentage={10} className="mx-auto w-20 h-20" />
      <span className="absolute inset-1/4 text-red mt-1">65%</span>
      <p className="text-sm text-blue ">Profile completion status</p>
    </div>
  );
};

export default DoughnutChart;
