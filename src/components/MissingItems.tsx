import React from "react";
import { ReactComponent as WarningIcon} from '../assets/images/svg/warning-svgrepo-com.svg';
import { ToolRef, TeamMember } from "./ui-custom";

const missingItems = [
    { toolRef: 6465, member: "Alex Noman", icon: "🏅" },
    { toolRef: 6466, member: "Alex Noman", icon: "🏅" },
    { toolRef: 6467, member: "Alex Noman", icon: "🏅" },
  ];

const MissingItems: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-[25px] min-h-80 max-h-80 p-6 border border-gray-300">
        <div className="flex items-center text-[#393939] mb-4">
            <span className="text-2xl mr-2"><WarningIcon className='w-8 h-8'/></span>
            <h2 className="text-xl font-semibold">Missing Items</h2>
        </div>
        <table className="w-full table-auto">
            <thead>
                <tr className="text-left border-b table-head">
                    <th className="py-2">Tool Ref</th>
                    <th className="py-2">Team Member</th>
                    <th className="py-2"></th>
                </tr>
            </thead>
            <tbody>
                {missingItems.map((item) => (
                    <tr key={item.toolRef} className="border-b">
                        <td className="py-3"><ToolRef value={item.toolRef}/></td>
                        <td className="py-3 items-center">
                            <TeamMember 
                                name={item.member}
                                imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
                                icon={item.icon}
                            />
                        </td>
                        <td className="py-3">
                            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                                Details
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default MissingItems;
