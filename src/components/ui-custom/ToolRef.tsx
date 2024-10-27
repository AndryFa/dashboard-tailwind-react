import React from "react";

interface ToolRefProps {
    value: number;
}

const Status: React.FC<ToolRefProps> = ({ value }) => {
  return (
    <span className="bg-gray-50 py-1 px-2">{value}</span>
  );
};

export default Status;
