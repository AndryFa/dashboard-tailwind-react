import React from "react";
import { ReactComponent as RentalItemsIcon} from '../assets/images/svg/rental-items.svg';
import { ToolRef, Status, TeamMember } from "./ui-custom";

const rentalData = [
  { id: 1, toolRef: 6465, member: "Alex Noman", status: "Completed", duration: "15:00", icon: "🏅" },
  { id: 2, toolRef: 5665, member: "Razib Rahman", status: "In Progress", duration: "05:00", icon: "🏆" },
  { id: 3, toolRef: 1755, member: "Luke Norton", status: "Not Started", duration: "00:00", icon: "⭐" },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Completed":
      return <Status value="Completed" classColor="text-green-500" />
      case "In Progress":
        return <Status value="In Progress" classColor="text-blue-500" />
        case "Not Started":
      return <Status value="Not Started" classColor="text-red-500" />
    default:
      return <span>{status}</span>;
  }
};

const RentalTools: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-[25px] min-h-80 max-h-80 p-6 border border-gray-300">
      <div className="flex items-center text-[#393939] mb-4">
        <span className="text-2xl mr-2"><RentalItemsIcon/></span>
        <h2 className="text-xl font-semibold">Rental Tools</h2>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left border-b table-head">
            <th className="py-2">Work Order</th>
            <th className="py-2">Tool Ref</th>
            <th className="py-2">Team Member</th>
            <th className="py-2">Status</th>
            <th className="py-2">Duration</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {rentalData.map((rental) => (
            <tr key={rental.id} className="border-b">
              <td className="py-3">{rental.id.toString().padStart(2, "0")}</td>
              <td className="py-3"><ToolRef value={rental.toolRef}/></td>
              <td className="py-3 items-center">
                <TeamMember 
                    name={rental.member}
                    imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
                    icon={rental.icon}
                />
              </td>
              <td className="py-3">{getStatusStyle(rental.status)}</td>
              <td className="py-3">{rental.duration}</td>
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

export default RentalTools;
