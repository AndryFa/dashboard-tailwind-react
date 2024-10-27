import React from 'react';
import DonutChart from './ui-custom/DonutChart';
import { ReactComponent as SparePartsIcon} from '../assets/images/svg/spare-parts.svg';
import { ReactComponent as RentalItemsIcon} from '../assets/images/svg/rental-items.svg';

const ToolsAvailability: React.FC = () => {
  return (
    <div className="bg-white rounded-[25px] shadow-lg min-h-80 max-h-80 p-6 border border-gray-300">
        <div className="flex items-center mb-2">
            <h2 className="text-xl font-semibold">Tools and Equipments Availability</h2>
        </div>
        <div className="grid grid-rows-2">
            <div className="grid grid-cols-3 items-center">
                <div>
                    <RentalItemsIcon/>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="text-lg text-[#8e8e8e] font-semibold">Rental Items</p>
                </div>
                <div>
                    <DonutChart percentage={50} color="#FFA500" label="Rental Items" />
                </div>
            </div>
            <div className="grid grid-cols-3 items-center">
                <div>
                    <SparePartsIcon/>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="text-lg text-[#8e8e8e] font-semibold">Spare Parts</p>
                </div>
                <div>
                    <DonutChart percentage={75} color="#4CAF50" label="Spare Parts" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ToolsAvailability;
