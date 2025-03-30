
import React, { useState } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { navbarContent } from '../constants/siteData';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-cow-brown" />
          <span className="font-serif text-xl font-bold text-cow-brown">{t(navbarContent.siteName)}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-medium hover:text-cow-brown transition-colors">
            {t(navbarContent.links.home)}
          </Link>
          <Link to="/about" className="font-medium hover:text-cow-brown transition-colors">
            {t(navbarContent.links.about)}
          </Link>
          <Link to="/gallery" className="font-medium hover:text-cow-brown transition-colors">
            {t(navbarContent.links.gallery)}
          </Link>
          <Link to="/blog" className="font-medium hover:text-cow-brown transition-colors">
            {t(navbarContent.links.blog)}
          </Link>
          <Link to="/donate" className="font-medium text-cow-brown hover:text-cow-earth transition-colors">
            {t(navbarContent.links.donate)}
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="ml-2 flex items-center gap-1 border-cow-brown hover:text-cow-brown hover:bg-cow-brown/10"
          >
            <Globe size={16} />
            <span>{t(navbarContent.languageToggle)}</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-1 border-cow-brown hover:text-cow-brown hover:bg-cow-brown/10"
          >
            <Globe size={16} />
            <span className="text-xs">{t(navbarContent.languageToggle)}</span>
          </Button>
          <button 
            className="text-cow-brown"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>
              {t(navbarContent.links.home)}
            </Link>
            <Link to="/about" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>
              {t(navbarContent.links.about)}
            </Link>
            <Link to="/gallery" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>
              {t(navbarContent.links.gallery)}
            </Link>
            <Link to="/blog" className="font-medium hover:text-cow-brown transition-colors" onClick={toggleMenu}>
              {t(navbarContent.links.blog)}
            </Link>
            <Link to="/donate" className="font-medium text-cow-brown hover:text-cow-earth transition-colors" onClick={toggleMenu}>
              {t(navbarContent.links.donate)}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
