import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);
import classnames from 'classnames';

const data = {
  labels: ['Category 1', 'Category 2'],
  datasets: [
    {
      data: [15, 25],
      backgroundColor: ['#C8D5E3', '#0E3A65']
    }
  ]
};

const DoughnutChart = ({ className = '', chartClasses = '', innerTextClasses = '' }) => {
  return (
    <div className={classnames('flex my-6 relative', [className])}>
      <Doughnut
        data={data}
        cutoutPercentage={10}
        width={50}
        className={classnames('mx-auto w-20 h-20', [chartClasses])}
      />
      <span className={classnames('absolute inset-1/4 text-red mt-1', [innerTextClasses])}>
        65%
      </span>
      <p className="text-sm text-gray text-center mt-2">Profile completion</p>
    </div>
  );
};

export default DoughnutChart;
