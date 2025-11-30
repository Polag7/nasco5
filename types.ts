
export type Category = 
  | 'Food Industry'
  | 'Beverage Industry'
  | 'Pharmaceuticals'
  | 'Meat & Slaughter House'
  | 'Dairy Products'
  | 'Confectionery, Bakery & Sweets'
  | 'Car Care'
  | 'Rice & Flour'
  | 'Sea Food & Fisheries'
  | 'Hospitals & Health Care'
  | 'Hotel, Restaurants, Fast Food & Hospitality Sector'
  | 'Commercial Buildings, Schools, Universities & Janitorial Contractors'
  | 'Biosecurity of Poultry & Dairy Farms';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  categories: Category[];
  description: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  directions: string[];
  images: string[];
  caution?: string[];
}
