import React from "react";
import classNames from 'classnames'
import { PiCircleDashedFill } from "react-icons/pi";

interface StatusProps {
    value: string;
    classColor: string;
}

const Status: React.FC<StatusProps> = ({ value, classColor }) => {
  return (
    <span className={classNames("flex items-center", classColor)}><PiCircleDashedFill className="mr-2" /> <span className="text-[#8e8e8e]">{value}</span></span>
  );
};

export default Status;
