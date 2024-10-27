import React, { useState } from 'react';
import Chart from 'react-apexcharts';

interface WorkOrderStatusProps {
  completed: number;
  inProgress: number;
  due: number;
}

const WorkOrderStatus: React.FC<WorkOrderStatusProps> = ({ completed, inProgress, due }) => {
    const [chartOptions] = useState({
        labels: ['Completed', 'Work In Progress', 'Due'],
        colors: ['#4CAF50', '#FFA500', '#F44336'],
        legend: { 
            show: false
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        }
                    }
                }
            }
        }
      });

  const chartSeries: number[] = [completed, inProgress, due];

  return (
    <div className="bg-white rounded-[25px] shadow-lg min-h-80 max-h-80 p-6 border border-gray-300">
      <h2 className="text-lg font-semibold text-[#393939] mb-4">Work Order Status</h2>
      <div className="flex items-center space-x-4 pt-6">
        <Chart  options={chartOptions} series={chartSeries} type="donut" width="150" />
        <div className="space-y-2 w-full p-3">
          <div className="flex justify-between items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span>Completed</span>
            <span className="ml-auto">{completed}</span>
          </div>
          <div className="flex justify-between items-center border-t">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span>Work In Progress</span>
            <span className="ml-auto">{inProgress}</span>
          </div>
          <div className="flex items-center justify-between border-t">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span>Due</span>
            <span className="ml-auto">{due}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderStatus;
