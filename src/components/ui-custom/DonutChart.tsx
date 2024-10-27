import React, { useState } from 'react';
import Chart from 'react-apexcharts';

interface DonutChartProps {
  percentage: number;
  color: string;
  label: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ percentage, color, label }) => {
  const [chartOptions] = useState({
    plotOptions: {
      radialBar: {
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
          },
          value: {
            color: "#c6c6c6",
            fontSize: "16px",
            show: true,
            offsetY: 6
          }
        }
      }
    },
    labels: [''],
    colors: [color],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.9,
    }
  });

  return (
    <div className="flex flex-col items-center">
      <Chart options={chartOptions} series={[percentage]} type="radialBar" height="350" width="120" />
    </div>
  );
};

export default DonutChart;
