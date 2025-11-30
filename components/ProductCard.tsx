
import React from 'react';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-200 cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden border-b border-slate-100">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Only show the first category as a badge if available */}
        {product.categories.length > 0 && (
          <div className="absolute top-3 left-3 max-w-[90%]">
            <span className="inline-block bg-white/95 backdrop-blur text-slate-700 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-slate-100 truncate w-full">
              {product.categories[0]}
              {product.categories.length > 1 && <span className="text-slate-400 ml-1">+{product.categories.length - 1}</span>}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-slate-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center text-blue-600 font-medium text-sm mt-auto group-hover:underline">
          View Details
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
