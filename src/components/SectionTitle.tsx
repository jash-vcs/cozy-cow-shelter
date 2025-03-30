
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[alignment]}`}>
      <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-4 text-cow-brown ${alignment === 'center' ? 'title-accent before:mx-auto' : 'title-accent'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
