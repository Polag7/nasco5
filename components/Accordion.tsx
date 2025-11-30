
import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Product } from '../types';

interface AccordionProps {
  title: string;
  count: number;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, count, products, onProductClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-slate-200 mt-4 pt-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-slate-700 font-semibold hover:text-blue-600 transition-colors"
      >
        <span className="text-sm">{title} ({count} Items)</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="pl-0 pb-3 space-y-1">
          {products.map((product) => (
            <li 
              key={product.id}
              onClick={() => onProductClick(product)}
              className="flex items-start gap-2 py-2 px-1 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded cursor-pointer border-b border-dashed border-slate-100 last:border-0"
            >
              <span className="flex-1 leading-snug">{product.name} <span className="text-xs text-slate-400">| {product.subtitle.split('|')[1] || product.subtitle}</span></span>
              <ExternalLink size={12} className="mt-1 flex-shrink-0 opacity-50" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
