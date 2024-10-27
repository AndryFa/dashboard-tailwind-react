import React from "react";
import { ToolRef, Status } from "./ui-custom";

const Stocks = [
  { toolRef: 6465, equipment: "Screws", status: "Low" },
  { toolRef: 6466, equipment: "Wires (electrical)", status: "None" },
  { toolRef: 6467, equipment: "Bolts", status: "None" },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Low":
        return <Status value="Low" classColor="text-orange-500" />
    case "None":
        return <Status value="None" classColor="text-red-500" />
    default:
      return <span>{status}</span>;
  }
};

const RestockItms: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-[25px] min-h-80 max-h-80 p-6 border border-gray-300">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Restock Items</h2>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Tool Ref</th>
            <th className="text-center">Tool/Equipment</th>
            <th className="py-2">Stock Status</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {Stocks.map((item) => (
            <tr key={item.toolRef} className="border-b">
              <td className="py-3"><ToolRef value={item.toolRef}/></td>
              <td className="text-center">{item.equipment}</td>
              <td className="py-3">{getStatusStyle(item.status)}</td>
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

export default RestockItms;
