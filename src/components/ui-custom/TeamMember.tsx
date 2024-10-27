import React from "react";

interface ProfileBadgeProps {
    name: string;
    imageUrl: string;
    icon: string;
}

const TeamMember: React.FC<ProfileBadgeProps> = ({ name, imageUrl, icon }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={imageUrl}
        alt={name}
        className="w-8 h-8 rounded-full"
      />
      <span className="font-medium">{ name }</span>
      <span>{icon}</span> 
    </div>
  );
};

export default TeamMember;
