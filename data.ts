
import { Product } from './types';

export const products: Product[] = [
  // --- New Products for Food/Beverage ---
  {
    id: 'sodium-hypochlorite',
    name: 'Nasco Sodium Hypochlorite',
    subtitle: '12% Active Chlorine | 5Litre-30Litre',
    categories: ['Food Industry'],
    description: 'Sodium Hypochlorite 12% is a high-strength oxidizing agent formulated for a wide range of disinfection, sanitization, and bleaching applications. It delivers fast, reliable microbial control in water treatment, surface cleaning, and industrial sanitation systems.',
    features: [
      'Powerful and rapid-acting disinfectant',
      'Effective against viruses and bacteria',
      'Safe for pool and filter types',
      'Economical and biodegradable'
    ],
    applications: [
      'Water treatment plants & swimming pools',
      'Hospitals, kitchens, and food processing',
      'Textile bleaching'
    ],
    specifications: {
      'Active Chlorine': '12%',
      'pH': '13.0',
      'Appearance': 'Clear yellow liquid'
    },
    directions: [
      'Dilute to 0.5 – 1% solution for surface disinfection.',
      'Allow to stand for 5 – 10 minutes before rinsing.',
      'Water Treatment: Add to achieve 1–2 mg/L.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_37aaba34-7150-4aab-be06-cc8cd212c17a.png?v=1761156719&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-10Litre_a4177244-928b-4cbb-bf29-5322b24adf13.png?v=1761156719&width=1946'
    ]
  },
  {
    id: 'ipa-70',
    name: 'Nasco IPA 70%',
    subtitle: 'Surface Disinfectant | 500Ml-20Litre',
    categories: ['Food Industry'],
    description: 'Ready-to-use, fast-evaporating solution formulated with 70% isopropyl alcohol. It provides rapid, broad-spectrum antimicrobial activity against bacteria, viruses, and fungi, making it ideal for critical hygiene areas.',
    features: [
      'Broad-spectrum antimicrobial activity',
      'Fast-acting & quick-drying',
      'Leaves no residue',
      'Ready-to-use'
    ],
    applications: [
      'Hospitals & healthcare facilities',
      'Laboratories & cleanrooms',
      'Food & beverage processing areas'
    ],
    specifications: {
      'Active Ingredient': 'Isopropyl Alcohol 70% v/v',
      'Appearance': 'Clear, colorless liquid',
      'Evaporation': 'Fast'
    },
    directions: [
      'Apply directly on the surface.',
      'Wipe thoroughly to cover area.',
      'Allow to air dry.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/IPA-70.png?v=1757759040&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup_9a122c82-114b-486c-ada3-927ce941990c.png?v=1757759040&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-10Litre_89d46b05-bc24-4983-8935-63200ebdcdd1.png?v=1757759040&width=1946'
    ]
  },

  // --- Existing Products Updated with Food/Beverage Categories ---
  {
    id: 'detartreur',
    name: 'Nasco DÉTARTREUR',
    subtitle: 'Rust, Scale & Deposits Remover | 1Litre-20Litre',
    categories: ['Pharmaceuticals', 'Dairy Products', 'Confectionery, Bakery & Sweets'],
    description: 'DÉTARTREUR is a powerful blend of mineral and organic acids, enhanced with wetting agents, antifoam additives, and corrosion inhibitors, designed for fast and effective removal of rust, limescale, mineral deposits, and hard-water buildup from industrial equipment.',
    features: [
      'Works quickly and effectively',
      'Removes a wide variety of rust, scale, and mineral deposits',
      'Contains strong corrosion inhibitors for iron and copper',
      'Low-foam formula',
      'Biodegradable'
    ],
    applications: [
      'Industrial plants',
      'Boiler rooms & HVAC operations',
      'Food, beverage, and dairy facilities'
    ],
    specifications: {
      'pH': '1.0 – 1.2',
      'Physical Form': 'Clear liquid (Green)',
      'Active Ingredients': '28%'
    },
    directions: [
      'Prepare a 10–15% solution in water.',
      'Circulate through the system until scale/rust is dissolved.',
      'Flush with clean water.',
      'Neutralize with alkaline cleaner (A-420).'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Detartreur.png?v=1764090590&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_d77a6ba1-7f64-4483-8a84-48d618f85e1d.png?v=1764090563&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mokcup-20Litre1.png?v=1764090563&width=1946'
    ]
  },
  {
    id: 'clr',
    name: 'Nasco CLR',
    subtitle: 'Calcium, Limescale & Rust Remover | 500Ml-5Litre',
    categories: ['Pharmaceuticals', 'Dairy Products', 'Confectionery, Bakery & Sweets'],
    description: 'Fast-acting, water-based acidic descaler designed to remove calcium deposits, limescale, rust, and hard-water stains from industrial and domestic surfaces. It penetrates and dissolves mineral buildup quickly.',
    features: [
      'Quickly removes calcium, limescale & rust deposits',
      'Non-fuming and easy to handle',
      'Effective on stainless steel, tiles, ceramics',
      'Biodegradable surfactants'
    ],
    applications: [
      'Food-processing plants',
      'Dairy and beverage industries',
      'Pharmaceutical production',
      'Restaurants and hotels'
    ],
    specifications: {
      'pH (neat)': '1.5 – 2.5',
      'Appearance': 'Clear liquid (slightly yellow)',
      'Packaging': '500 ml | 5 Liter'
    },
    directions: [
      'Light Scale: 1:10 dilution',
      'Heavy Scale: Undiluted',
      'Apply directly, allow 3-10 minutes, rinse thoroughly.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/CLR.png?v=1764088862&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_40d27f21-4642-4f42-b71c-0a5ef8004746.png?v=1764088862&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-Bulk_ccc176f9-f592-4219-b0a1-e88d4c391b4e.png?v=1764088862&width=1946'
    ]
  },
  {
    id: 'acid-o-clean',
    name: 'Nasco Acid-O-Clean',
    subtitle: 'Non-Foaming Acidic CIP Cleaner | 1Litre-10Litre',
    categories: ['Food Industry', 'Beverage Industry', 'Pharmaceuticals', 'Dairy Products', 'Confectionery, Bakery & Sweets'],
    description: 'Acid-O-Clean is a premium, non-foaming acidic cleaner designed for Clean-in-Place (CIP) systems in food, beverage, dairy, brewing, and pharmaceutical industries. It effectively removes mineral scale, milk stone, rust, and water hardness salts from the internal surfaces of tanks, pipelines, heat exchangers, and processing equipment.',
    features: [
      'Non-foaming – ideal for automated CIP systems',
      'Dissolves mineral scale & rust quickly',
      'Improves efficiency of heat transfer surfaces',
      'Free-rinsing formula',
      'Safe for stainless steel & CIP equipment'
    ],
    applications: [
      'Dairy Equipment (milk pipelines, pasteurizers, tanks)',
      'Beverage Lines (juices, soft drinks)',
      'Heat Exchangers & Boilers'
    ],
    specifications: {
      'Packaging Size': '1 Liter, 20 Litres'
    },
    directions: [
      'Concentration: 0.5% – 3.0% (v/v)',
      'Temperature: 40 – 70°C',
      'Contact Time: 10 – 30 minutes',
      'Rinse thoroughly with potable water'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/ACID-O-CLEAN.png?v=1757756622&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup_94916aec-d481-4869-998b-35c0361efef7.png?v=1757756622&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-Bulk.png?v=1757756622&width=1946'
    ]
  },
  {
    id: 'a420',
    name: 'Nasco A-420 Alkaline Cleaner',
    subtitle: 'Non-Foaming Alkaline CIP Cleaner | 1Litre-20Litre',
    categories: ['Food Industry', 'Beverage Industry', 'Pharmaceuticals', 'Dairy Products', 'Confectionery, Bakery & Sweets'],
    description: 'NASCO A-420 Alkaline Cleaner is a high-performance, non-foaming alkaline cleaner developed for Clean-in-Place (CIP) systems in food, beverage, dairy, and pharmaceutical industries. Its advanced formulation removes organic soils, fats, oils, and protein residues from processing equipment, pipelines, tanks, and vessels—without generating foam, making it ideal for automated cleaning cycles.',
    features: [
      'Non-foaming – perfect for CIP cycles',
      'High detergency – removes fats, oils & proteins',
      'Free-rinsing formula – reduces water use',
      'Compatible with stainless steel & food-grade equipment',
      'Ensures consistent cleaning & hygiene compliance'
    ],
    applications: [
      'CIP cleaning of processing lines, pipelines, and tanks',
      'Food & beverage industry (dairy, brewing, bottling plants)',
      'Pharmaceutical manufacturing equipment',
      'Stainless steel and food-grade equipment cleaning'
    ],
    specifications: {
      'Appearance': 'Clear liquid',
      'pH (concentrate)': 'Strongly alkaline (12–13)',
      'Specific Gravity': '~1.2',
      'Packaging': '20L, 200L'
    },
    directions: [
      'Dilution: Use 1.0% – 5.0% v/v depending on soil load.',
      'Temperature: 50°C – 85°C for best performance.',
      'Contact Time: 10–30 minutes.',
      'Rinsing: Always rinse thoroughly with potable water after use.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/A420-Alkaline-Cleaner.png?v=1757751083&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre.png?v=1757751068&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-20Litre.png?v=1757751068&width=1946'
    ]
  },
  {
    id: 'general-clean-dc',
    name: 'Nasco General Clean-DC',
    subtitle: 'Cleaner - Disinfectant - Fungicide | 500Ml-10Litre',
    categories: ['Food Industry', 'Beverage Industry', 'Pharmaceuticals'],
    description: 'Clear, light blue liquid cleaner with foaming tendencies. Specially formulated to clean and disinfect surfaces in food operations, veterinary clinics, nursing homes, and hospitals.',
    features: [
      'Cleans and disinfects in one step',
      'Effective against organic odors',
      'Excellent foaming and rinsability',
      'Biodegradable'
    ],
    applications: [
      'Food processing plants',
      'Veterinary clinics & hospitals',
      'Nursing homes'
    ],
    specifications: {
      'pH': '4.5 – 5.5',
      'Appearance': 'Clear blue liquid',
      'Density': '1.01'
    },
    directions: [
      'General Surface Cleaning: Use 100 ml per liter of water.',
      'For strong organic odors: Use 150–200 ml per liter.',
      'Laundry (Anti-Fungal): Use 1000 ml per 50 kg cloth.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/General-Clean-DC_7f9afc6c-44dd-4c29-a85f-3fb7a7e42476.png?v=1756842359&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-500Ml_758dea0e-c19e-4f1b-8a88-44968f81795f.png?v=1756842383&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-10Litre_897642f6-c135-493f-9446-ae521a64ff33.png?v=1756842382&width=1946'
    ]
  },
  {
    id: 'pro-clean',
    name: 'Nasco PRO-CLEAN',
    subtitle: 'Chlorinated Foaming Drain Cleaner & Sanitizer | 500Ml-10Litre',
    categories: ['Food Industry', 'Beverage Industry', 'Pharmaceuticals'],
    description: 'Concentrated alkaline, chlorinated cleaner designed for deep drain cleaning, sanitization, and control of drain flies. Its high-stability foaming action clings to drain surfaces, ensuring maximum contact time.',
    features: [
      'Powerful foaming action',
      'Sanitizes & disinfects',
      'Eliminates drain flies',
      'Removes organic build-up & odors'
    ],
    applications: [
      'Food processing plant drains',
      'Restaurant & commercial kitchen drains',
      'Pharmaceutical drains'
    ],
    specifications: {
      'pH': '11 – 12 (alkaline)',
      'Appearance': 'Clear red liquid',
      'Foam': 'High & stable'
    },
    directions: [
      'Dilute with water at 2–5% v/v.',
      'Apply using a foam-generating machine.',
      'Allow 10–15 minutes contact time.',
      'Rinse thoroughly.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Pro-Clean.png?v=1758538721&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup_0a8c1c82-0c5e-428e-9c3a-53813302beae.png?v=1758538721&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_cd717850-515d-4f2b-8927-98c77c2b10e2.png?v=1758538721&width=1946'
    ]
  },
  {
    id: 'safon',
    name: 'Nasco Safon',
    subtitle: 'Food-safe & food-grade Liquid Hand Soap | 500Ml-10Litre',
    categories: ['Food Industry', 'Beverage Industry', 'Pharmaceuticals'],
    description: 'Transparent foaming liquid hand soap formulated with food-grade ingredients. Designed for use in high-compliance environments, it is odorless, fragrance-free, and removes transit flora efficiently.',
    features: [
      'Food-safe & food-grade formula',
      'No odor, no fragrance, no color',
      'High foaming action',
      'Gentle on skin – enriched with emollients'
    ],
    applications: [
      'Food processing plants',
      'Restaurants & commercial kitchens',
      'Medical facilities'
    ],
    specifications: {
      'pH': '7.2 – 7.8 (neutral)',
      'Odor': 'None',
      'Biodegradable': 'Yes'
    },
    directions: [
      'Apply 2 ml to dry skin.',
      'Lather with water.',
      'Rinse thoroughly.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Safon-Hand-Soap.png?v=1758536822&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-500Ml-Pump.png?v=1758536822&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_2456d8b8-79af-47dd-8e71-ceba65aed7e0.png?v=1758536822&width=1946'
    ]
  },

  // --- Multi-Purpose Heavy Duty (Meat, Rice, Sea Food, Hospitality, Commercial, Biosecurity) ---
  {
    id: 'lustrex',
    name: 'Nasco Lustrex',
    subtitle: 'Stainless Steel Rust Cleaner and Shiner | 500Ml-5Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hospitals & Health Care', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Powerful, food-grade, and HALAL-certified solution formulated to efficiently and effectively clean and restore stainless steel surfaces. It is ideal for use in food processing, hospitality, healthcare, and industrial environments where hygiene and appearance are critical.',
    features: [
      'Removes fingerprints, water marks, and rust',
      'Maintains natural shine',
      'Food-grade and HALAL certified',
      'Non-abrasive'
    ],
    applications: [
      'Food Processing Plants',
      'Commercial Kitchens',
      'Pharmaceutical Facilities',
      'Hospitals & Healthcare'
    ],
    specifications: {
      'Form': 'Liquid',
      'Usage': 'Ready to use'
    },
    directions: [
      'Shake Well.',
      'Apply using a soft cloth or sponge.',
      'Gently scrub to remove dirt/rust.',
      'Rinse thoroughly and wipe dry.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Stainless-Steel.png?v=1755438434&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Stainless-Steel-Cleaner-Bulk.png?v=1755438434&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_a9360820-c640-4f1e-88d5-b530d18d6435.png?v=1755438434&width=1946'
    ]
  },
  {
    id: 'lucid',
    name: 'Nasco LUCID',
    subtitle: '(Bathrooms and Kitchen) Tile & Grout Cleaner | 500Ml-10Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Concentrated, powerful cleaner specifically formulated for effective removal of tough stains, soap scum, lime scale, and mineral deposits from bathroom and kitchen tiles and grout lines.',
    features: [
      'Contains food-grade acid for safe descaling',
      'Removes soap scum, lime scale, and grout discoloration',
      'Safe for use in kitchens and bathrooms',
      'Leaves surfaces clean and shiny'
    ],
    applications: [
      'Bathroom tiles and grout',
      'Kitchen backsplashes',
      'Showers and tubs'
    ],
    specifications: {
      'pH': '2.0 – 3.5',
      'Appearance': 'Clear to pale yellow liquid',
      'Specific Gravity': '1.02 – 1.05'
    },
    directions: [
      'Dilute one part LUCID with 9 parts water (or use neat for tough stains).',
      'Apply directly on tiles and grout.',
      'Allow to sit 5-10 mins, scrub lightly, rinse thoroughly.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Tile-and-Grout.png?v=1755502843&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_aefc4975-1413-4c1c-ab2d-f4944fbbab9f.png?v=1755502843&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Tiles-and-Grout-Cleaner-Bulk.png?v=1755502843&width=1946'
    ]
  },
  {
    id: 'marmitax',
    name: 'Nasco Marmitax',
    subtitle: 'Dish Washing Liquid Detergent for Pots and Pans | 500Ml-10Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Concentrated, pH balanced high sudsing detergent for use in food service operations for washing pots and pans, dishes, or as a general cleaner on floors, walls and equipment.',
    features: [
      'Completely soluble in hot or cold water',
      'Free rinsing, no spotting',
      'Mild to the hands',
      'Non-corrosive, even on aluminum'
    ],
    applications: [
      'Food service operations',
      'General cleaning'
    ],
    specifications: {
      'pH': '6.5 - 7.5',
      'Physical form': 'Clear yellow liquid',
      'Foaming': 'Very high'
    },
    directions: [
      'Pour 2 oz. of product into sink and add water.',
      'Soak dishes, pots & pans.',
      'Scrub clean and rinse.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Dish-Wash_70260876-d5d6-4138-8562-df1eea1b9ce8.png?v=1755439361&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Dish-Wash-New_4d2661e9-2a09-40be-a772-e79b3bd88e95.png?v=1755439361&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Dish-Wash-Bulk.png?v=1755439361&width=1946'
    ]
  },
  {
    id: 'windeze',
    name: 'Nasco Windeze',
    subtitle: 'Glass & Multi-Surface Cleaner | 500Ml-10Litre',
    categories: ['Car Care', 'Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hospitals & Health Care', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Powerful, highly concentrated glass and multi-surface cleaner designed for streak-free shine. Works on glass, mirrors, windows, car windshields, and chrome.',
    features: [
      'Highly concentrated for economical use',
      'Streak-free finish',
      'Ammonia-free formula',
      'Fast drying and residue-free'
    ],
    applications: [
      'Windows & Mirrors',
      'Car windshields',
      'Chrome fixtures',
      'Ceramic tiles'
    ],
    specifications: {
      'Form': 'Concentrate',
      'Ratio': '1:9 dilution recommended for general use'
    },
    directions: [
      'Dilute 50 ml concentrate with 450 ml clean water.',
      'Spray diluted solution onto surface.',
      'Wipe gently with lint-free cloth.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Glass-Cleaner.png?v=1755504822&width=1946',
      'https://nscohygiene.com/cdn/shop/files/New-Mockup_0a36c11d-e41f-4f39-a187-6389cc6bd7fc.png?v=1755504822&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Final_552160d5-1de7-403a-8bb5-efaba961eb46.png?v=1755504822&width=1946'
    ]
  },
  {
    id: 'sanifect',
    name: 'Nasco Sanifect',
    subtitle: 'Bathroom Cleaner | 500Ml-10Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hospitals & Health Care', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Concentrated heavy-duty germicidal porcelain bowl and urinal cleaner, deodorant and disinfectant.',
    features: [
      'Attacks lime and scale rapidly',
      'Dissolves germ breeding films',
      'Quickly kills disease and odour causing bacteria',
      'Renews true whiteness'
    ],
    applications: [
      'Toilet bowls and urinals',
      'Bathroom sinks',
      'Ceramic wall and floor tiles'
    ],
    specifications: {
      'Colour': 'Red',
      'Total actives': '49.6%',
      'Odour': 'Pleasant'
    },
    directions: [
      'Squirt a light stream inside bowl or urinal.',
      'Spread with mop.',
      'Allow to act for a few minutes.',
      'Flush clean.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Toilet-Cleaner.png?v=1755501420&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Final.png?v=1755501420&width=1946',
      'https://nscohygiene.com/cdn/shop/files/sanifect-toilet-sweep-Bulk.png?v=1755501420&width=1946'
    ]
  },
  {
    id: 'grill-clean',
    name: 'Nasco Grill Clean',
    subtitle: 'Alkaline Oven and Grill Cleaner | 500Ml-5Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Designed to remove burnt-on protein and carbon from hot plates, ovens, fryers, grills, filters, barbecues, roasters, coffee urns, etc.',
    features: [
      'Economical in use dilution',
      'Works quickly',
      'Approved for Food Plant Use',
      'Biodegradable'
    ],
    applications: [
      'Restaurants, pizzerias',
      'Bakeries, food processing industries'
    ],
    specifications: {
      'pH': '12.5 - 13.8',
      'Physical Form': 'Liquid',
      'Foaming': 'Moderate'
    },
    directions: [
      'Pre-heat surface to 80°C then shut off.',
      'Griddles: Mix 1:1 with water, apply, wait 5-10 mins, wipe clean.',
      'Ovens: Apply undiluted, wait 5-10 mins, scrub if needed, rinse.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Oven-Cleaner.png?v=1755503301&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_dd4f7da1-013c-4f81-910c-fb7fc4ca0571.png?v=1755503301&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Oven-Cleaner-Bulk.png?v=1755503301&width=1946'
    ]
  },
  {
    id: 'multi-phen',
    name: 'Nasco Multi-Phen',
    subtitle: 'Concentrated Phenyl | 500Ml-10Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hospitals & Health Care', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Multi-purpose phenyl for clean air and healthy environment. Environmentally friendly and biodegradable.',
    features: [
      'Concentrated formula',
      'Biodegradable',
      'Keeps smell for 24 hours',
      'Safe for humans and animals'
    ],
    applications: [
      'Kennels, airports, hospitals',
      'Homes, offices, factories'
    ],
    specifications: {
      'Usage': 'Dilute before use',
      'Safety': 'Avoid skin contact'
    },
    directions: [
      'Use 3.5 ml phenyl per 1 liter of water.',
      'Use 3.5 ml phenyl per 15 sq ft area of floor.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Multi-Phen_c182f1a8-775b-487e-ad65-5391395a0af1.png?v=1755504318&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Multi-Phen_942e3998-edf9-4da9-b66c-dadcd3d3a987.png?v=1755504318&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Multi-Phen-Bulk.png?v=1755504318&width=1946'
    ]
  },
  {
    id: 'drain-x',
    name: 'Nasco Drain-X',
    subtitle: 'Heavy Duty Alkaline Drain Opener / Cleaner | 1Litre-10Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hospitals & Health Care', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'A non-acid drain opener that is non-fuming and safe for use in all plumbing lines, septic tanks, garbage disposals, and on porcelain. Pours through standing water so clogged drains do not have to be emptied first. Will dissolve starches, fats, oils, greases, hair, vegetable gums and other organic wastes.',
    features: [
      'Safe for use in all plumbing lines',
      'Non-fuming, non-foaming',
      'Contains no sulfuric acids',
      'Works in standing water'
    ],
    applications: [
      'Wherever drains needs to un-block'
    ],
    specifications: {
      'pH': '13.9',
      'Physical form': 'Clear liquid',
      'Rinsability': 'Excellent'
    },
    directions: [
      'FOR CLOGGED DRAINS: Use 1-liter minimum and allow to work for 15 minutes. Flush with warm water.',
      'FOR SLOW DRAINS: Use 1-liter liquid twice in 15 minute intervals.',
      'PREVENTION: Use 1-liter liquid weekly.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Drain-X_0bc50b8c-d1df-470b-906d-f259d9394eaf.png?v=1755504551&width=1946',
      'https://nscohygiene.com/cdn/shop/files/New-Mockup_0bf3ad9b-6b98-4488-ae14-ab19126be9bf.png?v=1762076083&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Drain-X-Bulk.png?v=1762076083&width=1946'
    ]
  },
  {
    id: 'fabri-clean',
    name: 'Nasco Fabri-Clean',
    subtitle: 'Upholstery and Leather Cleaner | 500Ml-10Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Specially formulated cleaning solution designed to gently and effectively remove dirt, stains, and grime from fabric upholstery and leather surfaces without causing damage or discoloration.',
    features: [
      'Effective removal of dirt, stains, and oils',
      'Safe and gentle on delicate fabrics and leather',
      'Helps maintain softness and color',
      'Fast-acting spray formulation'
    ],
    applications: [
      'Fabric upholstery (sofas, chairs)',
      'Leather furniture and car seats',
      'Commercial furniture cleaning'
    ],
    specifications: {
      'pH': '6.5 – 7.5',
      'Appearance': 'Clear to pale yellow liquid',
      'Solubility': 'Completely miscible with water'
    },
    directions: [
      'Shake well before use.',
      'Spray lightly onto the surface.',
      'Gently scrub with a soft brush or cloth.',
      'Wipe clean with a damp cloth.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Farbi-Clean.png?v=1755439792&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Fabri-Clean-new_73761dc1-0649-4a4f-a1a2-ff2769c1e035.png?v=1755439792&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Fabri-Clean-Bulk1.png?v=1755439792&width=1946'
    ]
  },
  {
    id: 'liquid-laundry',
    name: 'Nasco Liquid Laundry',
    subtitle: 'Anti-Fungal and Anti-Bacterial | 500Ml-10Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hospitals & Health Care', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Blue liquid blend of anionic and nonionic surfactants, soil suspending agents, odour neutralizers, optical brighteners and quaternary ammonium compounds for antifungal and antibacterial actions.',
    features: [
      'Economical - use only 400 - 800 ml per 100 kg of work',
      'Whitens whites - Brightens colours',
      'Biodegradable',
      'Compatible with NFPA 1581 standard'
    ],
    applications: [
      'Institutions, hospitals, hotels',
      'Industrial laundries'
    ],
    specifications: {
      'pH': '8.2 - 8.5',
      'Physical form': 'Clear blue liquid',
      'Density': '1.02'
    },
    directions: [
      'Use 400 - 800 ml per 100 kg of work.',
      'Use 120 ml per load for household washers.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Liquid-Laundry.png?v=1755502138&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Liquid-Laundary_8bb52225-c643-4bbc-b978-3bd2a948e66d.png?v=1755502138&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Liquid-Laundry-Bulk.png?v=1755502138&width=1946'
    ]
  },
  {
    id: 'wood-glow',
    name: 'Nasco Wood Glow',
    subtitle: 'Premium Wood Polish Spray | 500Ml-5Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Premium-quality wood polish designed to clean, nourish, and restore the natural shine of wooden surfaces. It enhances the color and grain of wood while providing a protective layer that repels dust and dirt.',
    features: [
      'Enhances natural wood grain and color',
      'Cleans and polishes in one easy step',
      'Repels dust and fingerprints'
    ],
    applications: [
      'Wooden furniture',
      'Wooden floors and paneling',
      'Office and home wooden fixtures'
    ],
    specifications: {
      'pH': 'Neutral (around 7)',
      'Appearance': 'Clear to pale amber liquid',
      'Odor': 'Pleasant, mild wood fragrance'
    },
    directions: [
      'Shake well before use.',
      'Spray lightly onto the wood surface.',
      'Wipe with a clean, soft cloth.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Wood-Glow_6bff86d1-4e95-40fc-9de8-8ffeb8836449.png?v=1755503784&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_e4080b5d-ee56-4c63-b753-30d790e451bf.png?v=1755503784&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Wood-Glow-Bulk1.png?v=1755503784&width=1946'
    ]
  },
  {
    id: 'frigo',
    name: 'Nasco FRIGO',
    subtitle: 'Fridge, Freezer & Ice Cleaner | 500Ml-5Litre',
    categories: ['Meat & Slaughter House', 'Rice & Flour', 'Sea Food & Fisheries', 'Hotel, Restaurants, Fast Food & Hospitality Sector', 'Commercial Buildings, Schools, Universities & Janitorial Contractors', 'Biosecurity of Poultry & Dairy Farms'],
    description: 'Specially formulated solution designed to effectively melt ice buildup and clean both the interior and exterior surfaces of refrigerators and freezers. Can be used to minus 40-Degree-C.',
    features: [
      'Multi-Surface Cleaning: Plastic, metal, and concrete',
      'Ice Melting: Aids in melting existing ice formations',
      'Dirt & Grease Removal',
      'Deodorizing: Leaves a fresh, clean scent'
    ],
    applications: [
      'Refrigerators and freezers',
      'Cold storage areas',
      'Food service establishments'
    ],
    specifications: {
      'pH': '5.0 – 6.5',
      'Appearance': 'Clear to slightly cloudy liquid',
      'Flash Point': 'Non-flammable'
    },
    directions: [
      'Ensure the appliance is unplugged and empty.',
      'Spray the cleaner directly onto icy or soiled surfaces.',
      'Allow to sit for 5–10 minutes.',
      'Wipe surfaces with a clean cloth or sponge.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/FRIGO_102997af-b33b-4d0e-8040-21656fd33a85.png?v=1755502387&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_9b19eee7-a379-4a28-b6c5-74f1551a5a68.png?v=1755502387&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_9b19eee7-a379-4a28-b6c5-74f1551a5a68.png?v=1755502387&width=1946'
    ]
  },

  // --- Car Care ---
  {
    id: 'car-wash-shampoo',
    name: 'Nasco Car Wash Shampoo Graphene Coated',
    subtitle: '1Litre-30Litre',
    categories: ['Car Care'],
    description: 'Advanced graphene-infused shampoo that delivers the highest level of cleaning, gloss, and protection in one wash. Its unique graphene nano-technology creates a durable shield against water spots, UV rays, dirt, and road grime while enhancing depth, slickness, and shine.',
    features: [
      'Graphene-infused formula – advanced nano-protection',
      'Anti-static properties – reduces dust build-up',
      'Extreme hydrophobicity – superior water-beading',
      'Enhanced gloss & depth',
      'UV & chemical resistance'
    ],
    applications: [
      'Professional detailing studios',
      'Luxury & performance vehicles',
      'Suitable for cars, bikes, SUVs, and trucks'
    ],
    specifications: {
      'Appearance': 'Viscous liquid',
      'Color': 'Dark Gray / Graphite Black',
      'pH': 'Neutral (6.5 – 7.5)',
      'Packaging': '1L, 5L, 30L'
    },
    directions: [
      'Dilute 30–50 ml per 10 liters of water.',
      'Wash vehicle with sponge or microfiber mitt.',
      'Rinse thoroughly and dry.',
      'For Foam Cannon: Dilute 1:5 to 1:10.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Car-Wash-Shampoo-Graphene-Coated.png?v=1758017636&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_621ae813-0ec3-4050-ad20-9ae20a32acd7.png?v=1758017636&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_097bc58f-ba5e-47c6-9f89-1dad2f94fed1.png?v=1758017636&width=1946'
    ]
  },
  {
    id: 'aerogel',
    name: 'Nasco AERO-GEL',
    subtitle: 'Gel Air Freshener | 1 Litre',
    categories: ['Car Care'],
    description: 'NASCO AERO-GEL is a premium gel-based air freshener that delivers a steady and long-lasting fragrance release to keep your car and small spaces smelling fresh for weeks. Unlike sprays that fade quickly, its slow-release gel technology ensures a consistent aroma, making every ride or room feel clean and inviting.',
    features: [
      'Long-lasting freshness – up to 30+ days',
      'Slow-release gel technology',
      'Compact & portable',
      'Spill-proof design',
      'Multiple fragrances available'
    ],
    applications: [
      'Cars (dashboards, cup holders)',
      'Offices & workspaces',
      'Closets, drawers & small enclosed spaces'
    ],
    specifications: {
      'Appearance': 'Gel in cup/container',
      'Fragrance Life': '30–45 days',
      'Packaging': '1 Litre Jar'
    },
    directions: [
      'Remove the lid and protective seal.',
      'Place the gel container in the desired location.',
      'Adjust fragrance strength by sliding vent cover.',
      'Replace once fragrance fades.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_49b0da57-f4cd-4890-8a2b-9fffc7f5634f.png?v=1758038515&width=1946'
    ]
  },
  {
    id: 'ap-cleaner-disinfectant',
    name: 'Nasco All Purpose Car Cleaner & Disinfectant Spray',
    subtitle: '1Litre-30Litre',
    categories: ['Car Care'],
    description: 'A ready-to-use, multi-surface solution that not only cleans but also disinfects car interiors and exteriors. Its balanced formula removes dust, fingerprints, light grease, and everyday dirt while eliminating 99.9% of bacteria and viruses from high-touch areas.',
    features: [
      '2-in-1 formula – cleans and disinfects',
      'Eliminates 99.9% of bacteria & viruses',
      'Safe for plastic, vinyl, fabric, glass & painted surfaces',
      'Streak-free finish'
    ],
    applications: [
      'Interior: dashboards, steering wheels, seats',
      'Exterior: door handles, trims',
      'Fleet & commercial vehicles'
    ],
    specifications: {
      'Appearance': 'Clear liquid',
      'pH': 'Neutral (6.5 – 7.5)',
      'Packaging': '1 Litre, 5 L, 30 L'
    },
    directions: [
      'Spray directly onto surface or microfiber cloth.',
      'Wipe evenly to clean and disinfect.',
      'On food-contact areas, rinse with potable water.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/All-Purpose-Car-Cleaner-_-Disinfectant-Spray.png?v=1758027743&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_da6e2c0e-a772-42f8-a7fe-4cc466de7dc9.png?v=1758027743&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_74aaa253-cb41-428a-bc7a-be22981d2eb1.png?v=1758027743&width=1946'
    ]
  },
  {
    id: 'ap-cleaner-spray',
    name: 'Nasco All Purpose Car Cleaner Spray',
    subtitle: '1Litre-30Litre',
    categories: ['Car Care'],
    description: 'A ready-to-use, multi-surface cleaner designed for both interior and exterior car care. Its balanced formulation safely removes dust, fingerprints, light grease, food stains, and everyday dirt from a wide range of automotive surfaces. Quick and easy to use, it leaves a fresh, clean look without streaks or residue.',
    features: [
      'Multi-surface formula – safe for plastic, vinyl, rubber, fabric & painted surfaces',
      'Quick clean action – removes dust, light dirt & smudges instantly',
      'Streak-free finish – leaves no residue behind',
      'Ready-to-use spray – no dilution required',
      'Fresh fragrance – keeps interiors smelling clean'
    ],
    applications: [
      'Interior: dashboards, panels, seats, door trims, carpets',
      'Exterior: body panels, wheels, trims, glass',
      'Accessories: steering wheels, gear knobs'
    ],
    specifications: {
      'Appearance': 'Clear to light-colored liquid',
      'pH': 'Neutral (6.5 – 7.5)',
      'Packaging': '1 Litre, 5 L , 30 L'
    },
    directions: [
      'Spray directly on the surface or onto a microfiber cloth.',
      'Wipe evenly until dirt and dust are removed.',
      'Buff with a clean, dry microfiber for best results.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/All-Purpose-Car-Cleaner-Spray.png?v=1758026198&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_6fef688f-d085-4666-a176-e6d225511d2f.png?v=1758026198&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-30Litre_baaa0bd2-7111-477c-8211-0f3b47b72f4d.png?v=1758026198&width=1946'
    ]
  },
  {
    id: 'ap-interior-gel',
    name: 'Nasco All Purpose Interior Cleaning & Disinfectant Gel',
    subtitle: '1Litre-30Litre',
    categories: ['Car Care'],
    description: 'A ready-to-use gel-based cleaner formulated for safe and effective cleaning + disinfection of car interiors. Its thick gel consistency allows for controlled application on surfaces, preventing spills and over-spray. It removes dust, smudges, food stains, and grease while killing 99.9% of bacteria and viruses on high-touch surfaces.',
    features: [
      'Gel-based formula – controlled application, no dripping',
      'Cleans & disinfects in one step',
      'Eliminates 99.9% of bacteria & viruses',
      'Safe on interior materials – plastic, vinyl, rubber',
      'Residue-free finish'
    ],
    applications: [
      'Dashboards & panels',
      'Steering wheels & gear knobs',
      'Door handles & trims',
      'Consoles, cup holders & switches'
    ],
    specifications: {
      'Appearance': 'Thick gel',
      'pH': 'Neutral (6.5 – 7.5)',
      'Packaging': '1 Litre, 5 L, 30 L'
    },
    directions: [
      'Apply a small amount of gel onto a microfiber cloth or directly onto the surface.',
      'Spread evenly and wipe to clean.',
      'For disinfection, allow to sit for 30–60 seconds before wiping dry.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/All-Purpose-Interior-Cleaning-_-Disinfectant-Gel.png?v=1758033029&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_79a3ef74-c699-4dfd-82eb-2e30a3167943.png?v=1758033029&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_03c9ecd8-78d8-4e32-90bf-a325bf8db099.png?v=1758033029&width=1946'
    ]
  },
  {
    id: 'carpex',
    name: 'Nasco CARPEX',
    subtitle: 'Car Carpet Cleaning Shampoo | 1Litre-30Litre',
    categories: ['Car Care'],
    description: 'Professional-grade carpet cleaning shampoo designed to remove dirt, mud, food spills, and tough stains from car carpets and upholstery. Its foaming action penetrates deep into fibers, lifting dirt and grime while neutralizing unpleasant odors.',
    features: [
      'Deep fiber-cleaning formula',
      'Removes stains & odors',
      'Rich foaming action',
      'Safe for multiple fabrics'
    ],
    applications: [
      'Car carpets & floor mats',
      'Fabric seats & upholstery',
      'Trunk liners'
    ],
    specifications: {
      'Appearance': 'Liquid concentrate',
      'pH': 'Mildly neutral (6.0 – 7.5)',
      'Packaging': '1L, 5L, 30L'
    },
    directions: [
      'Dilute shampoo with water (1:10 for normal, 1:5 for heavy).',
      'Apply solution onto carpet/fabric.',
      'Scrub gently with a soft brush.',
      'Vacuum or wipe away foam.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Car-Carpet-Cleaning-Shampoo.png?v=1758042896&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_9f617283-99cf-4d4c-bc39-ed1ebd858f59.png?v=1758042896&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_c1ac2837-e12b-4e40-9d97-022657de2e91.png?v=1758042896&width=1946'
    ]
  },
  {
    id: 'dashx',
    name: 'Nasco DASHX',
    subtitle: 'Dashboard Cleaner & Polish | 1Litre-30Litre',
    categories: ['Car Care'],
    description: 'Professional dashboard cleaner & polish that removes dust, dirt, fingerprints, and light stains while restoring a natural glossy finish. Enriched with UV protectants, it prevents dashboard fading, cracking, and discoloration.',
    features: [
      'Cleans & polishes in one step',
      'UV protection – prevents fading & cracking',
      'Anti-static formula – repels dust',
      'Restores natural gloss',
      'Safe for dashboards, trims, consoles'
    ],
    applications: [
      'Dashboards & instrument panels',
      'Door trims & interior plastics',
      'Consoles & cup holders',
      'Vinyl & rubber surfaces'
    ],
    specifications: {
      'Appearance': 'Liquid',
      'Finish': 'Glossy, non-greasy',
      'Packaging': '1 Litre, 5 L, 30 L'
    },
    directions: [
      'Spray directly on a microfiber cloth or sponge.',
      'Wipe evenly across the dashboard and trims.',
      'Buff lightly with a clean, dry microfiber for a polished finish.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Dashboard-Cleaner-_-Polish.png?v=1758036242&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_dc5b1023-3d78-47e1-af11-287507ffc891.png?v=1758036242&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_13c2b78e-de86-4f74-9f4b-4653a55c0098.png?v=1758036242&width=1946'
    ]
  },
  {
    id: 'degron',
    name: 'Nasco DEGRON',
    subtitle: 'Car Engine Degreaser | 1Litre-30Litre',
    categories: ['Car Care'],
    description: 'Heavy-duty engine degreaser specially formulated to dissolve oil, grease, dirt, and grime from car engines and components. Its fast-acting formula penetrates deep to loosen stubborn deposits while being safe on metal, plastic, and rubber parts.',
    features: [
      'Powerful grease-cutting formula',
      'Safe on metals, plastics & rubbers',
      'Fast action – works within minutes',
      'Restores clean engine bay look',
      'Easy spray application'
    ],
    applications: [
      'Car engines (all types)',
      'Engine bays, covers & housings',
      'Transmission casings',
      'Mechanical parts'
    ],
    specifications: {
      'Appearance': 'Liquid',
      'Color': 'Orange / Deep Yellow',
      'pH': 'Alkaline (10.0 – 12.0)',
      'Packaging': '1 Litre, 5L, 30L'
    },
    directions: [
      'Ensure engine is cool before application.',
      'Spray DEGRON generously over greasy areas.',
      'Allow 2–3 minutes dwell time.',
      'Agitate with brush for heavy deposits and rinse.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Car-Engine-Degreaser.png?v=1758045581&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_24c441fc-c11a-4a4b-9780-a135a35f0849.png?v=1758045581&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_f1585e6a-6592-4de4-869a-be1a790a1145.png?v=1758045581&width=1946'
    ]
  },
  {
    id: 'leathique',
    name: 'Nasco LEATHIQUE',
    subtitle: 'Leather Cleaner & Conditioner | 1Litre-30Litre',
    categories: ['Car Care'],
    description: '2-in-1 cleaner and conditioner specially formulated for genuine and synthetic leather surfaces. It gently removes dirt, body oils, and light stains, while enriching leather with natural conditioners to restore softness, flexibility, and shine.',
    features: [
      'Cleans & conditions in one step',
      'Restores softness & natural sheen',
      'Prevents drying, cracking & fading',
      'UV protection'
    ],
    applications: [
      'Car leather seats',
      'Steering wheels & gear knobs',
      'Dashboards & trims'
    ],
    specifications: {
      'Appearance': 'Creamy liquid',
      'Color': 'Beige / Light Brown',
      'pH': 'Balanced (5.0 – 6.5)'
    },
    directions: [
      'Apply a small amount onto a microfiber cloth.',
      'Gently rub into leather surface in circular motions.',
      'Buff with a clean, dry cloth.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Leather-Cleaner-and-Conditioner.png?v=1758044223&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_62b0a78f-018b-4880-878f-3b35ace75138.png?v=1758044223&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_5b2d0623-32d4-494b-8c45-44da1857d767.png?v=1758044223&width=1946'
    ]
  },
  {
    id: 'tirex',
    name: 'Nasco TIREX',
    subtitle: 'Car Wheel Cleaner | 1Litre-30Litre',
    categories: ['Car Care'],
    description: 'Professional-grade wheel & tire cleaner formulated to tackle the toughest contaminants. It penetrates and dissolves brake dust, road grime, oil, tar, and mud while being safe on alloy, chrome, painted, and steel rims.',
    features: [
      'Heavy-duty cleaning power',
      'Safe on multiple wheel types',
      'Restores shine',
      'Foaming spray formula'
    ],
    applications: [
      'Alloy & chrome wheels',
      'Painted rims & hubcaps',
      'Tire sidewalls'
    ],
    specifications: {
      'Appearance': 'Liquid',
      'Color': 'Bright Purple or Red',
      'pH': 'Mildly acidic to neutral'
    },
    directions: [
      'Spray directly onto cool, dry wheels.',
      'Allow to dwell for 1–2 minutes.',
      'Agitate with a wheel brush.',
      'Rinse thoroughly with clean water.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Car-Wheel-Cleaner.png?v=1758034894&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_bc43caf7-29a5-4dfb-89fb-6e972b3c555b.png?v=1758034894&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_d353d11d-208c-433a-9244-ba15381c2def.png?v=1758034894&width=1946'
    ]
  },
  {
    id: 'thermo-guard',
    name: 'Nasco Thermo-Guard',
    subtitle: 'Anti-Rust & Anti-Freeze Radiator Coolant | 1Litre-30Litre',
    categories: ['Car Care'],
    description: 'High-performance radiator coolant formulated with anti-rust inhibitors and anti-freeze agents to protect your engine in all seasons. Prevents overheating in summer and freezing in winter.',
    features: [
      'Dual protection – anti-freeze + anti-rust',
      'Year-round performance',
      'Prevents corrosion & scaling',
      'Improves heat transfer'
    ],
    applications: [
      'Radiators & cooling systems',
      'Passenger cars, SUVs, trucks',
      'Commercial vehicles'
    ],
    specifications: {
      'pH': '8.0 – 9.5',
      'Freezing Point': 'Up to -35°C',
      'Boiling Point': 'Up to 108°C'
    },
    directions: [
      'Ensure engine is cool.',
      'Drain old coolant.',
      'Fill radiator with NASCO THERMO-GUARD.',
      'Start engine to circulate.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Anti-Rust-_-Anti-Freeze-Radiator-Coolant.png?v=1758041396&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-1Litre_1ab14a01-e9a0-410d-8489-896e5e2f4bae.png?v=1758041396&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_ec43afcf-0226-4e1b-b631-c9de5bf32df0.png?v=1758041396&width=1946'
    ]
  },

  // --- Hospitals & Healthcare (Specific items not covered in Multi-Purpose) ---
  {
    id: 'instru-milk',
    name: 'Nasco Instru-Milk',
    subtitle: 'Instrument Lubricant & Corrosion Protector | 500Ml-10Litre',
    categories: ['Hospitals & Health Care'],
    description: 'Milky-white emulsion specially formulated for the post-cleaning care of surgical and medical instruments. Provides a protective lubricating layer that prevents rust, stains, and corrosion while maintaining smooth function of hinged parts.',
    features: [
      'Lubricates hinged and moving parts',
      'Prevents rust, stains & corrosion',
      'Water-based – allows sterilant penetration',
      'Extends instrument life'
    ],
    applications: [
      'Surgical instruments',
      'Dental instruments',
      'Laboratory equipment'
    ],
    specifications: {
      'pH': '7.0 – 7.5 (neutral)',
      'Appearance': 'Milky-white emulsion',
      'Packaging': '1L, 5L, 20L'
    },
    directions: [
      'Mix 1 part INSTRU-MILK with 9 parts water (10% solution).',
      'Immerse cleaned instruments for 30s – 1 min.',
      'Remove and allow to air dry. Do not rinse.',
      'Proceed with sterilization.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Instru-Milk.png?v=1756918300&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-500Ml_e9155969-cd86-41c3-bef0-947e0c5f85db.png?v=1756918300&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_e0ea9ae5-4307-456c-9863-24a398a23a3e.png?v=1756918300&width=1946'
    ]
  },
  {
    id: 'chlor-s',
    name: 'Nasco CHLOR-S',
    subtitle: 'Cleaner & Disinfectant for Blood Spills and Operation Rooms | 500Ml-10Litre',
    categories: ['Hospitals & Health Care'],
    description: 'High-strength chlorine-based disinfectant specifically formulated for use in hospitals, operating rooms, laboratories, and healthcare facilities. Highly effective against bloodborne pathogens, viruses, bacteria, and fungi.',
    features: [
      'Effective against bloodborne pathogens (HIV, HBV, HCV)',
      'Rapid action for blood spill emergencies',
      'Surgical-grade disinfection',
      'Reliable chlorine-based formulation'
    ],
    applications: [
      'Hospitals & operation theaters',
      'Laboratories',
      'Blood spill decontamination',
      'High-risk surfaces'
    ],
    specifications: {
      'Active Ingredient': 'Stabilized sodium hypochlorite',
      'pH': '11–12 (alkaline)',
      'Packaging': '1L, 5L, 20L'
    },
    directions: [
      'For Blood Spills: Apply directly, allow 10 mins contact time.',
      'For Surfaces: Dilute 50 ml in 1 liter water (5%).',
      'Rinse with clean water if required.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/CHLOR-S.png?v=1756922209&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-500Ml_b92b5c51-f0d3-44ca-97ec-d700bc14ae5d.png?v=1756922209&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre_65c87b7b-34da-4278-b69b-b9df282f4abb.png?v=1756922209&width=1946'
    ]
  },
  {
    id: 'neutra-soak',
    name: 'Nasco Neutra-Soak',
    subtitle: 'Pre-Soaking Solution for Medical Instruments | 500Ml-10Litre',
    categories: ['Hospitals & Health Care'],
    description: 'Professional-grade pre-soaking solution designed for the first stage of instrument reprocessing. Effectively loosens blood, protein, mucus, and biofilm residues from medical instruments.',
    features: [
      'Loosens blood, protein & biofilm deposits',
      'Neutral pH – safe for delicate instruments',
      'Prevents soil from drying & hardening'
    ],
    applications: [
      'Hospitals & surgical theaters',
      'Dental clinics',
      'Laboratories'
    ],
    specifications: {
      'pH': 'Neutral (6.5 – 7.5)',
      'Appearance': 'Clear, light-green liquid',
      'Biodegradability': 'Yes'
    },
    directions: [
      'Mix 20–30 ml per 1 liter of water (2–3%).',
      'Soak instruments for 10–15 minutes.',
      'Transfer to cleaning system.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Neutra-Soak.png?v=1756901661&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-500Ml_9b498cfe-f50a-483a-8c6b-1fca0a908cc0.png?v=1756901661&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre1_0a1ed14a-6718-4263-8189-4248129f7ce7.png?v=1756901661&width=1946'
    ]
  },
  {
    id: 'sanigel',
    name: 'Nasco Sanigel',
    subtitle: '80% Alcohol Hand Sanitiser | 500Ml-10Litre',
    categories: ['Hospitals & Health Care'],
    description: 'Transparent gel for rapid and thorough degerming of the skin. Contains emollients to soften the hands.',
    features: [
      '80% Isopropyl Alcohol',
      'Leaves hands smooth and soft',
      'Dries completely, no rinsing necessary',
      'Biodegradable'
    ],
    applications: [
      'Hospitals, medical buildings',
      'Food processing plants',
      'Wherever hands need to be sanitized'
    ],
    specifications: {
      'pH': '7.5 - 8.5',
      'Viscosity': '4000 - 12000 cps',
      'Bactericide': '80% Isopropyl Alcohol'
    },
    directions: [
      'Apply to hands and arms and massage.',
      'Skin should be wetted for 30 seconds for full effect.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Hand-Sanitizer.png?v=1755502593&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockups_39a794d2-6dff-43d7-84e1-406c99db01d0.png?v=1755502593&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Hand-sanitizer-Bulk.png?v=1755502593&width=1946'
    ]
  },
  {
    id: 'pro-scrub',
    name: 'Nasco PRO-SCRUB',
    subtitle: 'Surgical Scrub Soap – Antimicrobial Hand & Skin Cleanser | 500Ml-10Litre',
    categories: ['Hospitals & Health Care'],
    description: 'Specialized surgical scrub soap formulated for pre-operative hand and arm cleansing by healthcare professionals. Contains effective antimicrobial agents that reduce bacteria on the skin.',
    features: [
      'Broad-spectrum antimicrobial action',
      'Gentle on skin with frequent use',
      'Effective in both surgical and routine healthcare use'
    ],
    applications: [
      'Hospitals & surgical theaters',
      'Dental & veterinary clinics',
      'Healthcare professionals'
    ],
    specifications: {
      'pH': '6.0 – 7.0 (skin-friendly)',
      'Appearance': 'Clear to light amber liquid',
      'Solubility': 'Fully soluble in water'
    },
    directions: [
      'Pre-operative: Scrub hands and forearms for 2–3 minutes.',
      'Routine: Lather well for 30 seconds.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Pro-Scrub.png?v=1756831312&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-500Ml_1a60744f-bb9e-45bb-8a9f-aa6a5c6504fa.png?v=1756831346&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Mockup-5Litre.png?v=1756831348&width=1946'
    ]
  },
  {
    id: 'general-clean-f',
    name: 'Nasco General Clean "F"',
    subtitle: 'Floor Cleaner | Highly Concentrated - 500Ml-5Litre',
    categories: ['Hospitals & Health Care'],
    description: 'A liquid "self-foaming" moderately alkaline cleaner that penetrates, disperses, and emulsifies tenacious soils by synergistic action. Safe for use on walls, floors, aluminium, stainless steel, and more.',
    features: [
      'Economical in use dilution',
      'Safe on all paints where water can be used',
      'Will not streak in proper diluted use',
      'Biodegradable'
    ],
    applications: [
      'Hospitals, municipalities, restaurants, hotels',
      'Food plants, dairies, bakeries'
    ],
    specifications: {
      'pH (concentrate)': '12.3 - 12.4',
      'Physical form': 'Clear blue-violet liquid',
      'Density': '1.08'
    },
    directions: [
      'General cleaning: Mix 1:40 for light soil, up to 1:10 for heavy soil.',
      'Pressure Washers: 1:100 - 1:150.',
      'Always rinse with potable water on food contact surfaces.'
    ],
    images: [
      'https://nscohygiene.com/cdn/shop/files/Floor-Cleaner_204c961a-65cb-4660-be95-c821ab1eb9e2.png?v=1755501813&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Floor-Cleaner_555c94b3-dce2-4f84-9a43-94470b97f707.png?v=1755501813&width=1946',
      'https://nscohygiene.com/cdn/shop/files/Floor-Cleaner-Bulk.png?v=1755501813&width=1946'
    ]
  }
];
