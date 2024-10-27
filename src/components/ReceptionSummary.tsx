import React from 'react';
import box from '../assets/images/img/box.png';
import boxChecked from '../assets/images/img/box-checked.png';

interface SummaryData {
    label: string;
    count: number;
    icon: React.ReactNode;
  }
  const receptionData: SummaryData[] = [
    { label: 'Packages Received', count: 10, icon: <img src={box} alt='Packages received' className="text-2xl" /> },
    { label: 'Processed Packages', count: 5, icon: <img src={boxChecked} alt='Processed packages' className="text-2xl" /> },
  ];
const ReceptionSummary: React.FC = () => {
  return (
    <div className="p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">Reception Summary</h2>
      <div className="space-y-4">
        {receptionData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div>{item.icon}</div>
              <span className="font-bold text-lg text-[#8e8e8e]">{item.label}</span>
            </div>
            <span className="font-semibold text-[#8e8e8e]">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceptionSummary;
