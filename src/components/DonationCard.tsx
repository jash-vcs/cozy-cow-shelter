
import React from 'react';

interface DonationCardProps {
  title: string;
  description: string;
  amount: number;
  icon: React.ReactNode;
  benefits: string[];
}

const DonationCard: React.FC<DonationCardProps> = ({ 
  title, 
  description, 
  amount, 
  icon,
  benefits 
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 md:p-8 flex-grow">
        <div className="mb-6 bg-cow-sage/20 w-16 h-16 rounded-full flex items-center justify-center text-cow-forest">
          {icon}
        </div>
        <h3 className="font-serif text-2xl font-bold mb-2 text-cow-brown">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {benefits.length > 0 && (
          <div className="mb-6">
            <p className="font-medium text-sm mb-2 text-cow-earth">Your donation will help:</p>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-cow-gold mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="p-6 md:px-8 md:pt-0 md:pb-8">
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-cow-brown">${amount}</span>
          <span className="text-gray-500 ml-1">/donation</span>
        </div>
        <button className="w-full btn-primary">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
