
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText = "Learn More", 
  ctaLink = "/about",
  backgroundImage = "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80" 
}) => {
  return (
    <div className="hero-section">
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 opacity-25" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <Link 
              to={ctaLink} 
              className="btn-primary inline-flex items-center gap-2 animate-fade-in"
              style={{animationDelay: '0.4s'}}
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
