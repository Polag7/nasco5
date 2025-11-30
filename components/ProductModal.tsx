
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, Check, MessageCircle, AlertTriangle } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  // Reset active image when product changes
  useEffect(() => {
    setActiveImage(product.images[0]);
  }, [product]);

  if (!isOpen) return null;

  const whatsappNumber = "+923321444065";
  const whatsappMessage = encodeURIComponent(`I'm interested in ${product.name}. Please provide more details.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="pr-8">
            <h2 className="text-2xl font-bold text-slate-800">{product.name}</h2>
            <p className="text-slate-500 text-sm mt-1">{product.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-red-500 flex-shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body - Scrollable */}
        <div className="overflow-y-auto custom-scrollbar flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Images */}
            <div className="space-y-4">
              <div className="aspect-square w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md border-2 overflow-hidden transition-all ${
                        activeImage === img ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Specifications Box */}
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                   Specifications
                </h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-slate-200 last:border-0">
                      <span className="text-slate-500">{key}</span>
                      <span className="font-medium text-slate-800 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Product Description</h3>
                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Industry Tags */}
              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Suitable for Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((cat, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium border border-slate-200">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <div className="mt-1 min-w-[18px]">
                        <Check size={18} className="text-green-500" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.applications.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.directions && (
                <div>
                   <h3 className="text-lg font-semibold text-slate-900 mb-3">Directions for Use</h3>
                   <ul className="space-y-2 text-slate-600 text-sm bg-yellow-50/50 p-4 rounded-lg border border-yellow-100">
                     {product.directions.map((step, idx) => (
                       <li key={idx} className="flex gap-2">
                         <span className="font-bold text-yellow-600">{idx + 1}.</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
              )}

              {product.caution && (
                 <div className="flex gap-3 bg-red-50 p-4 rounded-lg border border-red-100 text-sm text-red-800">
                    <AlertTriangle className="flex-shrink-0" size={20} />
                    <p>{product.caution.join(' ')}</p>
                 </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-gray-500 hidden sm:block">
            Need bulk pricing or custom formulation?
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-0.5"
          >
            <MessageCircle size={24} />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
