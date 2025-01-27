import React from 'react'

import Image, { StaticImageData } from "next/image";

interface AuthorCardProps {
    name: string;
    bio: string;
    profilePicture: StaticImageData;
}

const AuthorCard = ({ "Faisal ALi", bio }: AuthorCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      {/* Profile Picture */}
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <Image 
          src={profilePicture} 
          alt={`${name}'s profile picture`} 
          width={64} 
          height={64} 
          className="object-cover"
        />
      </div>

      {/* Author Info */}
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{bio}</p>

        
      </div>
    </div>
  );
}


export default AuthorCard
