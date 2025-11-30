import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductModal from './components/ProductModal';
import Accordion from './components/Accordion';
import { products } from './data';
import { Product, Category } from './types';
import { 
  Utensils, 
  Wine, 
  Pill, 
  Beef, 
  Fish, 
  Milk, 
  Cookie, 
  Car, 
  Wheat, 
  Hospital, 
  Hotel, 
  Building2, 
  School, 
  PawPrint,
  MapPin,
  Phone
} from 'lucide-react';

type TabType = 'industrial' | 'institutional' | 'livestock';

interface CategoryCardData {
  id: Category;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const groups: Record<TabType, CategoryCardData[]> = {
  industrial: [
    { id: 'Food Industry', title: 'Food Industry', description: 'Specialized cleaning and sanitation products for the food industry', icon: <Utensils size={40} /> },
    { id: 'Beverage Industry', title: 'Beverage Industry', description: 'Professional cleaning solutions for beverage manufacturing', icon: <Wine size={40} /> },
    { id: 'Pharmaceuticals', title: 'Pharmaceuticals', description: 'Sterilization and cleaning products for pharmaceutical industry', icon: <Pill size={40} /> },
    { id: 'Meat & Slaughter House', title: 'Meat & Slaughter House', description: 'Special cleaning and disinfection products for meat industry', icon: <Beef size={40} /> },
    { id: 'Sea Food & Fisheries', title: 'Sea Food & Fisheries', description: 'Specialized cleaning products for seafood and fisheries industry', icon: <Fish size={40} /> },
    { id: 'Dairy Products', title: 'Dairy Products', description: 'Specialized cleaning and sanitation products for dairy industry', icon: <Milk size={40} /> },
    { id: 'Confectionery, Bakery & Sweets', title: 'Confectionery, Bakery & Sweets', description: 'Safe cleaning products for sweets and bakery industry', icon: <Cookie size={40} /> },
    { id: 'Car Care', title: 'Car Care', description: 'Special cleaning and polishing products for cars and vehicles', icon: <Car size={40} /> },
    { id: 'Rice & Flour', title: 'Rice & Flour', description: 'Specialized cleaning products for rice and flour industry', icon: <Wheat size={40} /> },
  ],
  institutional: [
    { id: 'Hospitals & Health Care', title: 'Hospitals & Health Care', description: 'Disinfectants and cleaning supplies for healthcare facilities.', icon: <Hospital size={40} /> },
    { id: 'Hotel, Restaurants, Fast Food & Hospitality Sector', title: 'Hotel, Restaurants', description: 'Professional cleaning products for hospitality industry.', icon: <Hotel size={40} /> },
    { id: 'Commercial Buildings, Schools, Universities & Janitorial Contractors', title: 'Commercial Buildings', description: 'Cleaning solutions for commercial and office buildings.', icon: <Building2 size={40} /> },
    // Duplicate category ID for Schools as requested in display but maps to same data
    { id: 'Commercial Buildings, Schools, Universities & Janitorial Contractors', title: 'Schools & Offices', description: 'General cleaning and hygiene products for public and private spaces.', icon: <School size={40} /> },
  ],
  livestock: [
    { id: 'Biosecurity of Poultry & Dairy Farms', title: 'Dairy Farm Hygiene', description: 'Effective cleaning for milking equipment and animal housing.', icon: <Milk size={40} /> },
    // Reuse same category filter for Poultry
    { id: 'Biosecurity of Poultry & Dairy Farms', title: 'Poultry & Animal Housing', description: 'Disinfectants and cleaners for poultry and livestock sheds.', icon: <PawPrint size={40} /> },
  ]
};

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('industrial');

  const getProductsByCategory = (category: Category) => {
    return products.filter(p => p.categories.includes(category));
  };

  const TabButton = ({ id, label, colorClass }: { id: TabType, label: string, colorClass: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 ${
        activeTab === id 
          ? `${colorClass} text-white shadow-lg scale-105` 
          : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <Hero />
      
      <main id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Products</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Specialized cleaning solutions tailored for every major industry sector.
            Select a category below to explore our comprehensive range.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <TabButton id="industrial" label="Industrial Products" colorClass="bg-[#2E86AB]" />
          <TabButton id="institutional" label="Institutional Products" colorClass="bg-[#F76C6C]" />
          <TabButton id="livestock" label="Livestock Products" colorClass="bg-[#28a745]" />
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groups[activeTab].map((card, index) => {
              const categoryProducts = getProductsByCategory(card.id);
              
              // Border color based on active tab
              const borderClass = 
                activeTab === 'industrial' ? 'border-t-[#2E86AB]' : 
                activeTab === 'institutional' ? 'border-t-[#F76C6C]' : 
                'border-t-[#28a745]';

              const iconColorClass = 
                activeTab === 'industrial' ? 'text-[#2E86AB]' : 
                activeTab === 'institutional' ? 'text-[#F76C6C]' : 
                'text-[#28a745]';

              return (
                <div 
                  key={`${card.id}-${index}`}
                  className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${borderClass} hover:shadow-xl transition-shadow duration-300 flex flex-col`}
                >
                  <div className={`mb-4 flex justify-center ${iconColorClass}`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 text-center mb-3">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-500 text-center text-sm mb-6 flex-grow">
                    {card.description}
                  </p>
                  
                  <Accordion 
                    title="View Product List" 
                    count={categoryProducts.length}
                    products={categoryProducts}
                    onProductClick={setSelectedProduct}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal */}
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </main>

      {/* About Us Section */}
      <section id="about" className="bg-white py-20 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 relative inline-block">
            About Us
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <div className="text-slate-600 leading-relaxed text-lg space-y-6 text-justify sm:text-center">
             <p>
               We have One-Stop-Source with 2000-plus range of "Industrial Hygiene and Cleaning Chemicals" manufacturing in a state-of-the-art Plant to supply and export in Southeast Asia, Middle East and African Countries.
             </p>
             <p>
               Beside above, NASCO is a leading Importer, Representative, Stockiest and Supplier Company, having offices in Lahore - Faisalabad - Rawalpindi and Dubai-U.A.E. and involve in trading of Membrane Filters and Filtration Accessories, Laboratory use Chemicals, Glass & Plastic ware, Lab Instruments and Equipments, Food Color, Encapsulated Powder Flavors and Fine bulk Fragrances.
             </p>
             <p>
               Our products are well accepted in all leading Industries including Food, Pharmaceutical, Cosmetics, Juices, Beverage, Bottled Water, Dairies, Confectionery, Hotel & Hospitality, Hospital & Healthcare, Govt. Institutions, Grocery Stores & Hyper Market, Poultry, Pulp & Paper Mills, Auto Mobiles, Oil & Lubricant Industries.
             </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-white leading-none">NASCO</span>
                  <span className="text-[10px] text-slate-400 font-semibold mt-1">
                    FOOD-grade Industrial CLEANING & HYGIENE Chemicals
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Providing HALAL Certified and FOOD-grade Industrial Chemicals.
                Trusted Since 2006.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Phone size={20} className="text-blue-500" />
                <h3 className="text-white font-bold text-lg">Contact</h3>
              </div>
              <p className="text-sm mb-2 hover:text-white transition-colors">Phone/WhatsApp: +92 332 1444065</p>
              <p className="text-sm hover:text-white transition-colors">Email: Nsco.pk@gmail.com</p>
            </div>
            
            <div>
               <div className="flex items-center gap-2 mb-4">
                 <MapPin size={20} className="text-blue-500" />
                 <h3 className="text-white font-bold text-lg">Locations</h3>
               </div>
               <p className="text-sm text-slate-400 leading-relaxed">
                 Lahore, Faisalabad, Multan, Rawalpindi-Islamabad, Peshawar, Karachi, UAE, Sweden, UK.
               </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} NASCO Hygiene. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;