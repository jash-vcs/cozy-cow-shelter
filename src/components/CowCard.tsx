
import React from 'react';

interface CowCardProps {
  name: string;
  image: string;
  description: string;
  age?: string;
}

const CowCard: React.FC<CowCardProps> = ({ name, image, description, age }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-cow-brown mb-1">{name}</h3>
        {age && <p className="text-sm text-cow-brown/70 mb-3">{age}</p>}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CowCard;
