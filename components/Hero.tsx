import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-slate-900 text-white pt-40 pb-24 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-blue-900/50 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-800">
            Trusted Since 2006
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Industrial Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Hygiene Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            One-Stop-Source for over 2000+ industrial cleaning and hygiene formulations. 
            HALAL Certified and Food-Grade solutions for specialized industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="#categories" 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
            >
              Browse Catalog <ArrowDown size={18} />
            </a>
            <a 
              href="https://wa.me/923321444065" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;