
import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cow-earth text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-cow-gold" />
              <span className="font-serif text-xl font-bold">Cozy Cow Shelter</span>
            </div>
            <p className="text-cow-cream/80 max-w-xs">
              Providing a safe haven for cows and promoting compassionate living through education and advocacy.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cow-cream/80 hover:text-cow-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-cow-cream/80 hover:text-cow-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cow-cream/80 hover:text-cow-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="text-cow-cream/80 hover:text-cow-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/donate" className="text-cow-cream/80 hover:text-cow-gold transition-colors">Donate</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cow-gold" />
                <span className="text-cow-cream/80">123 Meadow Lane, Green Valley</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-cow-gold" />
                <span className="text-cow-cream/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-cow-gold" />
                <span className="text-cow-cream/80">hello@cozycowshelter.org</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-cow-cream/80 hover:text-cow-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cow-cream/80 hover:text-cow-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cow-cream/80 hover:text-cow-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cow-cream/20 mt-8 pt-8 text-center text-cow-cream/60">
          <p>© {new Date().getFullYear()} Cozy Cow Shelter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
