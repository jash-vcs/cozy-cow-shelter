
import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-cow-brown" />
          <span className="font-serif text-xl font-bold text-cow-brown">Cozy Cow Shelter</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-cow-brown transition-colors">Home</Link>
          <Link to="/about" className="font-medium hover:text-cow-brown transition-colors">About Us</Link>
          <Link to="/gallery" className="font-medium hover:text-cow-brown transition-colors">Gallery</Link>
          <Link to="/blog" className="font-medium hover:text-cow-brown transition-colors">Blog</Link>
          <Link to="/donate" className="font-medium text-cow-brown hover:text-cow-earth transition-colors">Donate</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cow-brown"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/gallery" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>Gallery</Link>
            <Link to="/blog" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link to="/donate" className="font-medium text-cow-brown hover:text-cow-earth transition-colors" onClick={toggleMenu}>Donate</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
