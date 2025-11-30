import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const whatsappLink = "https://wa.me/923321444065";

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-auto py-4 items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-3xl font-extrabold text-blue-900 leading-none tracking-tight">NASCO</h1>
              <p className="text-[10px] sm:text-xs text-slate-600 font-semibold tracking-normal mt-1 max-w-[250px] sm:max-w-none leading-tight">
                FOOD-grade Industrial CLEANING & HYGIENE Chemicals
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#categories" className="text-slate-700 hover:text-blue-700 font-medium transition-colors text-sm uppercase tracking-wide">Products</a>
            <a href="#about" className="text-slate-700 hover:text-blue-700 font-medium transition-colors text-sm uppercase tracking-wide">About Us</a>
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl absolute w-full">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#categories" 
              className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium border border-transparent hover:border-blue-100 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#about" 
              className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg font-medium border border-transparent hover:border-blue-100 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-blue-600 text-white rounded-lg font-bold text-center shadow-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;