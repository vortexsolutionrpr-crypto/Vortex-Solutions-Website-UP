import { useState, useEffect, useMemo } from 'react';

// ============================================================================
// 1. CENTRALIZED BUSINESS, BRAND & SEO CONFIGURATION
// ============================================================================

const BUSINESS_CONFIG = {
  businessName: 'Vortex Solutions',
  tagline: 'Engineered Solution for Everydrop',
  secondaryTagline: 'Engineered Solutions for Every Drop.',
  domainUrl: 'https://vortexsolution.in',
  whatsappNumber: '917828140702', // Configurable business WhatsApp number
  contactPhone: '+91 78281 40702', // Configurable business phone
  contactEmail: 'vortexsolutionrpr@gmail.com',
  location: {
    city: 'Raipur',
    state: 'Chhattisgarh',
    country: 'India',
    addressLine:
      'Vortex Solutions, Opposite Amazon Store, Near Disha College, Ramnagar, Kota Rd, Raipur, Chhattisgarh, India',
  },
  businessHours: 'Monday – Saturday: 10:30 AM – 6:30 PM',
  // Logo paths (Supports GitHub raw links or public folder assets)
  logoPrimarySrc:
    'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Vortex%20Transparent%20Small.png?raw=true',
  logoFallbackSrc: '/Vortex Logo_2.jpg',
  // Background image for the First Play Card ("Engineered Solution for Everydrop")
  firstPlayCardBackgroundSrc:
    'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Untitled%20-%2009%20October%202026%20at%2011.16.24-3-3.png?raw=true',
};

/**
 * Verified Social Media Configuration
 */
interface SocialProfile {
  id: string;
  platform: 'Instagram' | 'LinkedIn' | 'Facebook' | 'YouTube' | 'WhatsApp';
  label: string;
  url: string;
  isVerified: boolean;
}

const SOCIAL_LINKS_CONFIG: SocialProfile[] = [
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    label: 'Chat with Vortex Solutions on WhatsApp',
    url: `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`,
    isVerified: true,
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    label: 'Vortex Solutions on LinkedIn (Configure official URL)',
    url: '',
    isVerified: false,
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    label: 'Vortex Solutions on Instagram (Configure official URL)',
    url: '',
    isVerified: false,
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    label: 'Vortex Solutions on Facebook (Configure official URL)',
    url: '',
    isVerified: false,
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    label: 'Vortex Solutions on YouTube (Configure official URL)',
    url: '',
    isVerified: false,
  },
];

// ============================================================================
// 2. BRAND DATA & STANDARDIZED LOGO CONFIGURATION
// ============================================================================

export interface BrandItem {
  id: string;
  name: string;
  logoUrl?: string;
  accentColor: string;
  tagline: string;
  specialization: string;
  seoDescription: string;
  productTypes: string[];
}

const BRAND_CATALOG: Record<string, BrandItem> = {
  Wilo: {
    id: 'wilo',
    name: 'Wilo',
    logoUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/WILO_Logo_2013.svg.webp?raw=true',
    accentColor: '#009C82',
    tagline:
      'Pioneering for You — Complete Industrial, Commercial & Agricultural Pumping Systems',
    specialization:
      'Submersible, Openwell, Monoblock, Slurry, Mud, STP, Pressure Booster & Industrial Pumps',
    seoDescription:
      'Wilo pumping solutions supplied in Raipur, Chhattisgarh including borewell & openwell submersibles, monoblock pumps, slurry & mud pumps, hydro-pneumatic pressure boosters, STP sewage pumps, dewatering units, and industrial process pumps.',
    productTypes: [
      'Submersible Pumps',
      'Openwell Pumps',
      'Monoblock Pumps',
      'Slurry & Mud Pumps',
      'STP & Wastewater Pumps',
      'Pressure Booster Pumps',
      'Industrial Pumps',
      'Dewatering Pumps',
      'Agricultural Pumps',
      'Domestic Water Pumps',
      'Self Priming Pumps',
    ],
  },
  Havells: {
    id: 'havells',
    name: 'Havells',
    logoUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Untitled%20-%2009%20October%202026%20at%2011.16.24-3-2.png?raw=true',
    accentColor: '#E4002B',
    tagline: 'Energy-Efficient Residential & Commercial Air-Source Heat Pumps',
    specialization: 'Domestic Heat Pumps & Commercial Heat Pump Water Heaters',
    seoDescription:
      'Havells domestic and commercial air-source heat pump water heating solutions in Raipur, Chhattisgarh for villas, hotels, hospitals, hostels, and commercial complexes.',
    productTypes: ['Heat Pumps', 'Commercial Heat Pumps'],
  },
  SFMC: {
    id: 'sfmc',
    name: 'SFMC',
    logoUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/images%20(1).jpeg?raw=true',
    accentColor: '#0B2545',
    tagline:
      'Advanced Polymer High-Performance Industrial, Municipal & Infrastructure Piping',
    specialization:
      'PPR-FR Pipes, PPR Composite Pipes, DWC Corrugated Pipes & HDPE Pipes',
    seoDescription:
      'SFMC piping systems in Raipur, Chhattisgarh for industrial fire-retardant PPR-FR pipes, glass-fiber PPR composite hot water lines, PE-100/PE-80 HDPE pipes, underground DWC sewerage drainage pipes, and uPVC column pipes.',
    productTypes: [
      'PPR & PPR Composite Pipes',
      'PPR-FR Fire-Retardant Pipes',
      'DWC Pipes',
      'HDPE Pipes',
      'Column Pipes',
      'Pipe Fittings & Accessories',
    ],
  },
  Astral: {
    id: 'astral',
    name: 'Astral',
    logoUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/1741103005090.png?raw=true',
    accentColor: '#0054A6',
    tagline: 'Premium Domestic, Commercial & Sanity Plumbing Systems',
    specialization: 'PVC, uPVC, CPVC & SWR Pipes and Plumbing Fittings',
    seoDescription:
      'Astral pipes and fittings in Raipur, Chhattisgarh exclusively featuring CPVC hot & cold plumbing pipes, uPVC pressure pipes, PVC pipes, and SWR soil, waste & rainwater drainage systems.',
    productTypes: [
      'CPVC & PVC Pipes',
      'uPVC Pipes',
      'SWR Pipes',
      'Pipe Fittings & Accessories',
    ],
  },
};

const BRANDS = Object.keys(BRAND_CATALOG);

// ============================================================================
// 3. EXPANDED & SYSTEMATIC PRODUCT CATALOG DATA
// ============================================================================

export interface CategoryItem {
  id: string;
  name: string;
  group:
    | 'Pumping Solutions'
    | 'Pipes & Fittings'
    | 'Water Treatment & Conditioning'
    | 'Electrical & Accessories';
  tag: string;
  shortDesc: string;
  seoSummary: string;
  applications: string[];
  selectionGuidance: string;
  heroImage: string;
}

const CATEGORIES: CategoryItem[] = [
  // PUMPING SOLUTIONS (WILO & HAVELLS HEAT PUMPS)
  {
    id: 'stp-wastewater-pumps',
    name: 'STP & Wastewater Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo Sewage & Effluent',
    shortDesc:
      'Wilo non-clog sewage treatment plant and effluent submersible pumps for commercial & municipal use.',
    seoSummary:
      'Heavy-duty Wilo STP and wastewater pumps in Raipur designed for sewage treatment plants, commercial basements, hospitals, hotels, and industrial effluent transfer.',
    applications: [
      'Sewage Treatment Plants (STP)',
      'Effluent Treatment Plants (ETP)',
      'Hotel & Hospital Basements',
      'Municipal Wastewater Lift Stations',
    ],
    selectionGuidance:
      'Select based on solid-passage size (mm), flow rate (m³/hr), total dynamic head (meters), and fluid pH/temperature characteristics.',
    heroImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pressure-booster-pumps',
    name: 'Pressure Booster Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo Constant Pressure',
    shortDesc:
      'Wilo single and multi-pump hydro-pneumatic booster systems for uniform water pressure across floors.',
    seoSummary:
      'Automatic Wilo pressure booster pumps and VFD hydro-pneumatic systems in Raipur and Chhattisgarh for apartments, luxury villas, hotels, and commercial complexes.',
    applications: [
      'High-Rise Residential Towers',
      'Hotels & Resorts',
      'Hospitals & Hostels',
      'Luxury Villas & Bungalows',
    ],
    selectionGuidance:
      'Sized according to peak simultaneous bathroom/fixture demand, building height (static head), and desired outlet pressure (bar).',
    heroImage:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Wilo%20Inline.jpg?raw=true',
  },
  {
    id: 'submersible-pumps',
    name: 'Submersible Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo Borewell & Openwell',
    shortDesc:
      'Wilo corrosion-resistant deep borewell and openwell submersible pump sets for reliable groundwater extraction.',
    seoSummary:
      'Wilo borewell and openwell submersible pumps in Raipur for domestic, agricultural, and industrial groundwater extraction.',
    applications: [
      'Deep Tube Wells & Borewells',
      'Underground Sumps & Tanks',
      'Farm & Orchard Irrigation',
      'Community Water Supply',
    ],
    selectionGuidance:
      'Match borewell casing diameter (e.g., 100mm / 150mm), water table depth, required discharge (LPM), and power supply (Single Phase or Three Phase).',
    heroImage:
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'industrial-pumps',
    name: 'Industrial Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo Process, HVAC & Plant',
    shortDesc:
      'Wilo continuous-duty end-suction, multistage, and process centrifugal pumps for industrial utilities.',
    seoSummary:
      'Wilo industrial centrifugal and process pumps in Raipur for steel plants, power units, cooling towers, HVAC circulation, and manufacturing utilities.',
    applications: [
      'Cooling Tower & Chiller Circulation',
      'Boiler Feed & Condensate',
      'Manufacturing Process Lines',
      'Industrial Water Supply',
    ],
    selectionGuidance:
      'Evaluated on duty point efficiency, material of construction (Cast Iron / SS304 / SS316), shaft sealing type, and continuous operating hours.',
    heroImage:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Insustrialwilo.jpeg?raw=true',
  },
  {
    id: 'slurry-mud-pumps',
    name: 'Slurry & Mud Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo High Solids & Abrasive Fluids',
    shortDesc:
      'Wilo high-torque mud and slurry pumps engineered for construction trenches, mining, and thick sludge.',
    seoSummary:
      'Heavy-duty Wilo slurry and mud pumps in Raipur for construction site dewatering, industrial sludge pits, sand-laden water, and agricultural silt removal.',
    applications: [
      'Construction Foundation Pits',
      'Industrial Sludge & Ash Pits',
      'Mining & Quarry Dewatering',
      'Silt & Mud Transfer',
    ],
    selectionGuidance:
      'Choose agitator or non-clog cutter-equipped Wilo models when pumping settled sand, bentonite, or fibrous slurry with high specific gravity.',
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'dewatering-pumps',
    name: 'Dewatering Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo Stormwater & Site Drainage',
    shortDesc:
      'Wilo portable and stationary submersible dewatering pumps for rapid flood, trench, and basement drainage.',
    seoSummary:
      'Wilo submersible dewatering pumps in Raipur for civil contractors, monsoon flood control, basement sumps, and utility tunnel drainage.',
    applications: [
      'Monsoon & Flood Drainage',
      'Basement & Parking Sumps',
      'Civil Excavation Trenches',
      'Utility Tunnel Dewatering',
    ],
    selectionGuidance:
      'Consider portable lightweight units with float switches for automatic sump operation and top-discharge cooling for low-water pumping.',
    heroImage:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'agricultural-pumps',
    name: 'Agricultural Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo Openwell & Monoblock',
    shortDesc:
      'Wilo high-discharge agricultural openwell, centrifugal monoblock, and borewell pumps built for wide voltage operation.',
    seoSummary:
      'Wilo agricultural openwell, monoblock, and irrigation pumps in Raipur and Chhattisgarh designed for canal water lifting, drip/sprinkler networks, and deep borewell farming.',
    applications: [
      'Drip & Sprinkler Irrigation',
      'Canal & River Water Lifting',
      'Multi-Acre Crop Watering',
      'Rural Water Distribution',
    ],
    selectionGuidance:
      'Prioritize wide-voltage motor windings and high discharge at moderate head for flood or sprinkler irrigation schedules.',
    heroImage:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'domestic-water-pumps',
    name: 'Domestic Water Pumps',
    group: 'Pumping Solutions',
    tag: 'Wilo Home & Residential',
    shortDesc:
      'Wilo quiet, energy-efficient self-priming monoblock, regenerative, and home booster pumps.',
    seoSummary:
      'Wilo domestic water pumps, monoblocks, and home pressure boosters in Raipur for municipal line suction, sump-to-overhead tank transfer, and residential bathrooms.',
    applications: [
      'Sump to Overhead Tank Transfer',
      'Direct Municipal Line Suction',
      'Individual Bungalow Water Supply',
      'Garden & Lawn Sprinklers',
    ],
    selectionGuidance:
      'Select based on suction lift distance, overhead tank height, and thermal overload protection (TOP) for household safety.',
    heroImage:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'heat-pumps',
    name: 'Heat Pumps',
    group: 'Pumping Solutions',
    tag: 'Havells Domestic & Commercial',
    shortDesc:
      'Havells commercial and residential air-source heat pump water heaters with high coefficient of performance (COP).',
    seoSummary:
      'Havells air-source domestic and commercial heat pumps in Raipur delivering energy-efficient centralized hot water for hotels, hospitals, hostels, and villas.',
    applications: [
      'Hotels, Resorts & Guest Houses',
      'Hospitals & Nursing Homes',
      'Student Hostels & Ashrams',
      'Luxury Residential Villas',
    ],
    selectionGuidance:
      'Sized by daily hot water requirement (Liters/day), peak hour recovery rate, ambient operating temperature range, and storage tank capacity.',
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
  },

  // WATER TREATMENT & CONDITIONING
  {
    id: 'water-softeners-treatment',
    name: 'Water Softeners & Treatment',
    group: 'Water Treatment & Conditioning',
    tag: 'Hard Water Conditioning & Filtration',
    shortDesc:
      'Automatic and manual ion-exchange water softener systems and multigrade sand filters for scale-free water.',
    seoSummary:
      'Domestic, commercial, and industrial water softener systems and installation service in Raipur, Chhattisgarh to eliminate hard water scaling in bathrooms, heat pumps, boilers, and pipelines.',
    applications: [
      'Bungalows, Villas & Apartment Complexes',
      'Hotels, Hospitals & Commercial Laundries',
      'Heat Pump, Boiler & Cooling Tower Feed Protection',
      'RO Pre-Treatment & Borewell Water Conditioning',
    ],
    selectionGuidance:
      'Sized based on raw water hardness (ppm of CaCO₃), daily water consumption (Liters/day), peak flow rate (LPM/m³h), and regeneration cycle (automatic MPV or manual).',
    heroImage:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
  },

  // PIPES & FITTINGS (SFMC & ASTRAL)
  {
    id: 'ppr-composite-pipes',
    name: 'PPR & PPR Composite Pipes',
    group: 'Pipes & Fittings',
    tag: 'SFMC Hot & Cold / Fire-Retardant',
    shortDesc:
      'SFMC 3-layer PPR-FR fire-retardant and glass-fiber reinforced PPR composite piping systems.',
    seoSummary:
      'SFMC PPR pipes, PPR-FR fire-retardant pipes, and glass-fiber PPR composite hot-and-cold water piping systems in Raipur, Chhattisgarh.',
    applications: [
      'Centralized Hot & Cold Water Lines',
      'Heat Pump & Solar Water Heater Distribution',
      'Industrial Compressed Air & Chemical Lines',
      'Commercial Plumbing Shafts',
    ],
    selectionGuidance:
      'Use SFMC fiber-reinforced PPR composite pipes for hot water lines to minimize linear thermal expansion and SFMC PPR-FR where fire-retardant properties are required.',
    heroImage:
      'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hdpe-pipes',
    name: 'HDPE Pipes',
    group: 'Pipes & Fittings',
    tag: 'SFMC High-Density Polyethylene',
    shortDesc:
      'SFMC flexible, corrosion-free PE-80 and PE-100 HDPE pipes for water supply, infrastructure, and effluent.',
    seoSummary:
      'SFMC HDPE pipes and coils in Raipur for potable water supply, industrial effluent disposal, and agricultural irrigation networks.',
    applications: [
      'Potable Water Transmission Mains',
      'Agricultural Drip & Sprinkler Mains',
      'Industrial Effluent & Slurry Lines',
      'Trenchless Horizontal Directional Drilling',
    ],
    selectionGuidance:
      'Specified by material grade (PE-80 / PE-100), pressure rating (PN6 to PN16), and outer diameter (20mm to 630mm+) with butt-fusion or electrofusion joints.',
    heroImage:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'dwc-pipes',
    name: 'DWC Pipes',
    group: 'Pipes & Fittings',
    tag: 'SFMC Underground Drainage & Ducting',
    shortDesc:
      'SFMC Double Wall Corrugated HDPE pipes with smooth inner walls for underground sewerage and cable protection.',
    seoSummary:
      'SFMC Double Wall Corrugated (DWC) pipes in Raipur for underground stormwater drainage, municipal sewerage networks, and optical/electrical cable ducting.',
    applications: [
      'Underground Sewerage & Stormwater Networks',
      'Smart City & Township Drainage',
      'Highway & Culvert Crossings',
      'Underground Power & Telecom Cable Ducting',
    ],
    selectionGuidance:
      'Selected by ring stiffness class (SN4 or SN8) and internal diameter (ID 75mm to 1000mm) depending on soil load and traffic overburden.',
    heroImage:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cpvc-pvc-pipes',
    name: 'CPVC, uPVC, PVC & SWR Pipes',
    group: 'Pipes & Fittings',
    tag: 'Astral Plumbing & Drainage',
    shortDesc:
      'Astral lead-free CPVC hot/cold plumbing pipes, uPVC/PVC pressure pipes, and SWR drainage piping systems.',
    seoSummary:
      'Astral CPVC Pro, uPVC lead-free pressure pipes, PVC pipes, and SWR drainage piping systems in Raipur for residential apartments, commercial buildings, and sanitation.',
    applications: [
      'Internal Bathroom & Kitchen Plumbing',
      'Soil, Waste & Rainwater (SWR) Drainage',
      'Cold Water Ring Mains',
      'Commercial & Residential Sanitation',
    ],
    selectionGuidance:
      'Choose Astral SDR-11 / SDR-13.5 CPVC for hot and cold indoor plumbing up to 82°C, uPVC for cold water distribution, and ring-fit/solvent-weld SWR pipes for drainage stacks.',
    heroImage:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'column-pipes',
    name: 'Column Pipes',
    group: 'Pipes & Fittings',
    tag: 'SFMC Submersible Pump Risers',
    shortDesc:
      'SFMC high-tensile uPVC riser column pipes with square threads and locking systems for borewell submersible pumps.',
    seoSummary:
      'Heavy-duty SFMC uPVC submersible column pipes in Raipur engineered to replace galvanized iron (GI) riser pipes in deep agricultural and domestic borewells.',
    applications: [
      'Deep Borewell Submersible Pump Installation',
      'Agricultural & Industrial Tube Wells',
      'High-Head Groundwater Extraction',
    ],
    selectionGuidance:
      'Match pipe class (Medium, Standard, Heavy, Super Heavy) to total pump installation depth and dynamic delivery head.',
    heroImage:
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pipe-fittings-accessories',
    name: 'Pipe Fittings & Accessories',
    group: 'Pipes & Fittings',
    tag: 'Astral & SFMC Joints & Valves',
    shortDesc:
      'Molded and fabricated CPVC, uPVC, SWR (Astral) and PPR, HDPE, DWC (SFMC) couplers, elbows, tees, and valves.',
    seoSummary:
      'Complete range of Astral CPVC/uPVC/SWR plumbing fittings and SFMC PPR fusion fittings, HDPE butt-weld/electrofusion fittings, and DWC couplers in Raipur.',
    applications: [
      'Leak-Proof Pipeline Branching',
      'Pump Room Header Assemblies',
      'Flanged Equipment Connections',
      'Underground Manhole Transitions',
    ],
    selectionGuidance:
      'Always pair pipes with pressure-matched fittings from the same polymer family to ensure homogeneous fusion, solvent weld, or elastomeric sealing.',
    heroImage:
      'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=900&q=80',
  },

  // ELECTRICAL & PUMP ACCESSORIES
  {
    id: 'electrical-pump-accessories',
    name: 'Electrical & Pump Accessories',
    group: 'Electrical & Accessories',
    tag: 'Cables, Panels & Pressure Tanks',
    shortDesc:
      'Submersible flat cables, motor control panels, hydro-pneumatic pressure tanks, and float switches.',
    seoSummary:
      'Submersible 3-core flat cables, single/three-phase pump starter control panels, diaphragm pressure tanks, and dry-run protection accessories in Raipur.',
    applications: [
      'Submersible Motor Power Supply',
      'Dry-Run & Overload Pump Protection',
      'Hydro-Pneumatic Pressure Tank Buffering',
      'Automated Tank Level Control',
    ],
    selectionGuidance:
      'Size copper conductor cross-section (sq. mm) based on motor HP and cable run length to prevent voltage drop in deep borewells.',
    heroImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  },
];

export interface ProductItem {
  id: string;
  name: string;
  brand: 'Wilo' | 'Havells' | 'SFMC' | 'Astral' | 'Vortex Water Tech';
  category: string;
  highlight: string;
  description: string;
  applicationArea: string;
  imageUrl: string;
  imageAlt: string;
}

const PRODUCTS: ProductItem[] = [
  // WILO PUMPING SOLUTIONS
  {
    id: 'wilo-stp-sewage-series',
    name: 'Wilo Submersible Sewage & STP Pump Series',
    brand: 'Wilo',
    category: 'STP & Wastewater Pumps',
    highlight: 'Non-Clog Impeller Design',
    description:
      'Heavy-duty Wilo submersible sewage pumps engineered for continuous wastewater transfer, raw sewage handling, and commercial STP installations.',
    applicationArea:
      'Commercial STPs, Hospitals, Hotels & Municipal Lift Stations',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/NonClog%20Pump.png?raw=true',
    imageAlt:
      'Wilo Submersible Sewage and STP Pump for wastewater treatment plants',
  },
  {
    id: 'wilo-hydro-pneumatic-booster',
    name: 'Wilo Multistage Hydro-Pneumatic Booster System',
    brand: 'Wilo',
    category: 'Pressure Booster Pumps',
    highlight: 'Constant Pressure Control',
    description:
      'High-efficiency Wilo vertical multistage centrifugal booster system with smart controller and pressure vessel for uniform water pressure across all floors.',
    applicationArea:
      'High-Rise Apartments, Hotels, Hospitals & Commercial Towers',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Multi%20Stage%20Pump.jpeg?raw=true',
    imageAlt: 'Wilo Multistage Hydro-Pneumatic Pressure Booster Pump System',
  },
  {
    id: 'wilo-borewell-submersible',
    name: 'Wilo Stainless Steel Borewell Submersible Pump Set',
    brand: 'Wilo',
    category: 'Submersible Pumps',
    highlight: 'High-Head Deep Extraction',
    description:
      'Corrosion-resistant Wilo water-filled and oil-filled borewell submersible pump sets designed for high-head groundwater extraction even under voltage fluctuations.',
    applicationArea:
      'Deep Borewells, Housing Societies, Industries & Farm Tube Wells',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Submersible.jpeg?raw=true',
    imageAlt: 'Wilo Stainless Steel Borewell Submersible Water Pump Set',
  },
  {
    id: 'wilo-slurry-mud-pump',
    name: 'Wilo Heavy-Duty Mud & Slurry Submersible Pump',
    brand: 'Wilo',
    category: 'Slurry & Mud Pumps',
    highlight: 'High Solids & Silt Handling',
    description:
      'Rugged Wilo mud and slurry pump engineered for construction trenches, abrasive silt-laden water transfer, and industrial effluent sumps.',
    applicationArea:
      'Construction Sites, Mining Trenches, Industrial Sludge & Silt Pits',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Slurry.jpeg?raw=true',
    imageAlt: 'Wilo Heavy-Duty Mud and Slurry Dewatering Pump',
  },
  {
    id: 'wilo-end-suction-industrial',
    name: 'Wilo End-Suction & Process Industrial Pump',
    brand: 'Wilo',
    category: 'Industrial Pumps',
    highlight: 'Continuous Duty Industrial',
    description:
      'Robust cast-iron and stainless-steel Wilo centrifugal process pumps designed for industrial utility water supply, cooling towers, and HVAC circulation.',
    applicationArea:
      'Industrial Plants, HVAC Chiller Lines & Manufacturing Units',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Insustrialwilo.jpeg?raw=true',
    imageAlt: 'Wilo Industrial Centrifugal Process and Circulation Pump',
  },
  {
    id: 'wilo-dewatering-drainage-pump',
    name: 'Wilo Submersible Dewatering & Sump Pump',
    brand: 'Wilo',
    category: 'Dewatering Pumps',
    highlight: 'Automatic Float Operation',
    description:
      'Compact, high-flow Wilo submersible drainage pump for rapid evacuation of stormwater, basement seepage, and utility sumps.',
    applicationArea: 'Basement Parking Sumps, Stormwater Pits & Civil Sites',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Dewatering.jpeg?raw=true',
    imageAlt: 'Wilo Submersible Dewatering and Basement Sump Drainage Pump',
  },
  {
    id: 'wilo-openwell-monoblock',
    name: 'Wilo Openwell Submersible & Centrifugal Monoblock Pump',
    brand: 'Wilo',
    category: 'Agricultural Pumps',
    highlight: 'Wide Voltage & High Discharge',
    description:
      'High-discharge Wilo horizontal openwell submersible and centrifugal monoblock pumps built for continuous farm irrigation, sumps, and water transfer.',
    applicationArea:
      'Crop Irrigation, Canal Water Lifting, Underground Sumps & Sprinklers',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/MonoBlock.jpeg?raw=true',
    imageAlt: 'Wilo Openwell Submersible and Centrifugal Monoblock Pump',
  },
  {
    id: 'wilo-domestic-pressure-booster',
    name: 'Wilo Compact Home Pressure Booster Pump',
    brand: 'Wilo',
    category: 'Domestic Water Pumps',
    highlight: 'Silent Automatic Operation',
    description:
      'Compact Wilo single-pump automatic booster with integrated pressure switch and tank for bungalows, villas, and flat bathrooms.',
    applicationArea: 'Independent Houses, Villas & Rooftop Tank Boosting',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/HiMulti5.jpeg?raw=true',
    imageAlt: 'Wilo Compact Residential Pressure Booster Water Pump',
  },
  {
    id: 'wilo-self-priming-domestic',
    name: 'Wilo Self-Priming Monoblock & Regenerative Water Pump',
    brand: 'Wilo',
    category: 'Domestic Water Pumps',
    highlight: 'Thermal Overload Protection',
    description:
      'High-suction Wilo domestic self-priming monoblock water pump with brass impeller and thermal overload protector for daily household tank filling.',
    applicationArea:
      'Home Sump-to-Overhead Tank Transfer & Domestic Water Supply',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/VN10%20wilo.jpg?raw=true',
    imageAlt: 'Wilo Domestic Self-Priming Monoblock Water Pump',
  },

  // HAVELLS HEAT PUMPS
  {
    id: 'havells-domestic-heat-pump',
    name: 'Havells Domestic Air-Source Heat Pump Water Heater',
    brand: 'Havells',
    category: 'Heat Pumps',
    highlight: 'High COP Thermal Efficiency',
    description:
      'Advanced Havells air-source residential heat pump engineered for energy-efficient, uninterrupted hot water supply with smart digital control and up to 75% power savings.',
    applicationArea: 'Luxury Villas, Bungalows & Independent Residential Homes',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Havells%20Domestic.png?raw=true',
    imageAlt: 'Havells Domestic Air-Source Heat Pump Water Heating System',
  },
  {
    id: 'havells-commercial-heat-pump',
    name: 'Havells Commercial Air-Source Heat Pump Water Heater',
    brand: 'Havells',
    category: 'Heat Pumps',
    highlight: 'Centralized Commercial Hot Water',
    description:
      'High-capacity Havells commercial air-source heat pump engineered for heavy-duty, energy-saving centralized hot water supply in hospitality, healthcare, and institutional buildings.',
    applicationArea:
      'Hotels, Hospitals, Hostels, Resorts & Commercial Complexes',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Havells%20Commercial.png?raw=true',
    imageAlt: 'Havells Commercial Air-Source Heat Pump Water Heating System',
  },

  // WATER SOFTENER & WATER TREATMENT SERVICES/SYSTEMS
  {
    id: 'automatic-water-softener-system',
    name: 'Automatic Ion-Exchange Water Softener System (Domestic & Commercial)',
    brand: 'Vortex Water Tech',
    category: 'Water Softeners & Treatment',
    highlight: 'Hard Water Scale Elimination',
    description:
      'FRP vessel and high-grade food-safe resin water softener system with automatic/manual multi-port valve (MPV) and brine tank—complete with sizing, supply, and installation service.',
    applicationArea:
      'Bungalows, Apartments, Hotels, Hospitals & Heat Pump Protection',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/water%20softener.png?raw=true',
    imageAlt:
      'Automatic Domestic and Commercial Water Softener System in Raipur',
  },
  {
    id: 'industrial-water-softener-mgf',
    name: 'Commercial & Industrial Water Softener + Multigrade Sand Filter (MGF)',
    brand: 'Vortex Water Tech',
    category: 'Water Softeners & Treatment',
    highlight: 'Turnkey Water Conditioning Service',
    description:
      'High-flow commercial and industrial water softening and pre-filtration plants designed to prevent scale buildup in boilers, cooling towers, RO plants, and commercial plumbing.',
    applicationArea:
      'Industrial Boilers, Cooling Towers, Hospitals, Laundries & Housing Societies',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Commercial%20Water%20Softener.jpg?raw=true',
    imageAlt: 'Industrial Water Softener and Multigrade Sand Filter Plant',
  },

  // SFMC PIPING SOLUTIONS
  {
    id: 'sfmc-ppr-fr-firesafe',
    name: 'SFMC PPR-FR Fire-Retardant Piping System',
    brand: 'SFMC',
    category: 'PPR & PPR Composite Pipes',
    highlight: '3-Layer Flame Retardant',
    description:
      'SFMC three-layer fire-retardant polypropylene random copolymer (PPR-FR) piping system designed for exposed industrial utilities, compressed air, and building safety.',
    applicationArea:
      'Industrial Utilities, Compressed Air Lines & Commercial Plumbing',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/PPR-FR%20pipe.png?raw=true',
    imageAlt:
      'SFMC PPR-FR Fire-Retardant Industrial and Commercial Piping System',
  },
  {
    id: 'sfmc-ppr-composite-therm',
    name: 'SFMC Glass-Fiber Reinforced PPR Composite Pipes',
    brand: 'SFMC',
    category: 'PPR & PPR Composite Pipes',
    highlight: 'Low Linear Thermal Expansion',
    description:
      'SFMC multi-layer glass-fiber reinforced PPR composite pipes engineered to prevent pipe sagging and minimize heat loss in centralized hot and cold water lines.',
    applicationArea:
      'Havells Heat Pump Loops, Hotels, Hospitals & Centralized Hot Water',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/ppr%20pipe.png?raw=true',
    imageAlt:
      'SFMC Glass-Fiber Reinforced PPR Composite Hot and Cold Water Pipes',
  },
  {
    id: 'sfmc-hdpe-pressure-pipes',
    name: 'SFMC PE-100 / PE-80 High-Density Polyethylene (HDPE) Pipes',
    brand: 'SFMC',
    category: 'HDPE Pipes',
    highlight: 'Leak-Free Butt & Electrofusion',
    description:
      'Durable, chemical- and corrosion-resistant SFMC HDPE coils and straight lengths (PN6 to PN16) for municipal water supply, industrial effluent, and agricultural mainlines.',
    applicationArea:
      'Water Supply Mains, Industrial Effluent & Lift Irrigation',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/HSPE%20S.png?raw=true',
    imageAlt:
      'SFMC High-Density Polyethylene HDPE Water Supply and Industrial Pipes',
  },
  {
    id: 'sfmc-dwc-corrugated-pipes',
    name: 'SFMC Double Wall Corrugated (DWC) Underground Drainage Pipes',
    brand: 'SFMC',
    category: 'DWC Pipes',
    highlight: 'SN4 & SN8 Ring Stiffness',
    description:
      'Corrugated outer wall and smooth inner wall SFMC HDPE DWC piping system engineered for underground non-pressure sewerage, stormwater, and cable ducting.',
    applicationArea:
      'Township Sewerage, Highway Culverts & Underground Cable Ducts',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/DWC.png?raw=true',
    imageAlt:
      'SFMC Double Wall Corrugated DWC Underground Sewerage and Drainage Pipes',
  },

  // ASTRAL PIPING SOLUTIONS
  {
    id: 'astral-cpvc-upvc-plumbing',
    name: 'Astral CPVC Hot & Cold Water and uPVC Lead-Free Plumbing Pipes',
    brand: 'Astral',
    category: 'CPVC, uPVC, PVC & SWR Pipes',
    highlight: 'Hot & Cold Indoor Plumbing',
    description:
      'Lead-free Astral CPVC Pro and high-strength uPVC pressure pipes and fittings engineered for long-lasting residential, commercial, and institutional water distribution.',
    applicationArea:
      'Residential Apartments, Villas, Commercial Washrooms & Indoor Plumbing',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/Astral%20CPvc.png?raw=true',
    imageAlt: 'Astral CPVC and uPVC Hot and Cold Water Plumbing Pipes',
  },
  {
    id: 'astral-pvc-swr-drainage',
    name: 'Astral SWR Drainage & PVC Pressure Piping System',
    brand: 'Astral',
    category: 'CPVC, uPVC, PVC & SWR Pipes',
    highlight: 'UV-Stabilized Leak-Proof SWR',
    description:
      'Astral Soil, Waste & Rainwater (SWR) ring-fit and solvent-fit drainage pipes alongside heavy-duty PVC agricultural and sanitation piping.',
    applicationArea:
      'Building Vertical Drainage Stacks, Rainwater Harvesting & Sanitation',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/SWR.png?raw=true',
    imageAlt: 'Astral SWR Soil Waste Rainwater and PVC Piping Systems',
  },
  {
    id: 'astral-sfmc-fittings-valves',
    name: 'Astral (CPVC/uPVC/SWR) & SFMC (PPR/HDPE/DWC) Fittings & Valves',
    brand: 'Astral',
    category: 'Pipe Fittings & Accessories',
    highlight: 'Complete Jointing & Valve Range',
    description:
      'Comprehensive range of Astral CPVC, uPVC, PVC, and SWR molded fittings/valves along with SFMC PPR socket-fusion fittings, HDPE electrofusion fittings, and DWC couplers.',
    applicationArea:
      'Plumbing Manifolds, Pump Room Headers & Pipeline Branching',
    imageUrl:
      'https://github.com/vortexsolutionrpr-crypto/vortex-solutions/blob/main/PPR%20fittings.png?raw=true',
    imageAlt: 'Astral CPVC uPVC SWR and SFMC PPR HDPE Pipe Fittings and Valves',
  },
];

// ============================================================================
// 4. APPLICATIONS & SOLUTIONS SHOWCASE DATA
// ============================================================================

export interface ApplicationSolutionItem {
  id: string;
  title: string;
  sectorTag: string;
  description: string;
  relatedSolution: string;
  targetCategory: string;
  imageUrl: string;
  imageAlt: string;
}

const APPLICATION_SOLUTIONS: ApplicationSolutionItem[] = [
  {
    id: 'industrial-pumping-transfer',
    title: 'Industrial Pumping & Process Water Transfer',
    sectorTag: 'Manufacturing, Steel & Process Plants',
    description:
      'Continuous-duty Wilo centrifugal pumps, cooling tower circulation units, and corrosion-free SFMC HDPE & PPR-FR pipelines built for demanding industrial environments.',
    relatedSolution: 'Wilo Industrial Pumps + SFMC PPR-FR & HDPE Piping',
    targetCategory: 'Industrial Pumps',
    imageUrl:
      'https://cms.media.wilo.com/cdnpic/wilo778385/10971370/wilo778385_1140x_1.jpg',
    imageAlt: 'Industrial pumping and process water transfer pipelines',
  },
  {
    id: 'commercial-pressure-boosting',
    title: 'Commercial Buildings & Hydro-Pneumatic Pressure Boosting',
    sectorTag: 'High-Rise Towers, Malls & Offices',
    description:
      'Automated VFD-driven Wilo multistage booster systems paired with pressure tanks and Astral uPVC/CPVC risers to maintain uniform water pressure across every floor.',
    relatedSolution: 'Wilo Pressure Boosters + Astral CPVC/uPVC Piping',
    targetCategory: 'Pressure Booster Pumps',
    imageUrl:
      'https://cms.media.wilo.com/cdnpic/wilo778639/10972629/wilo778639_1140x_1.jpg',
    imageAlt: 'Commercial building hydro-pneumatic pressure booster pump room',
  },
  {
    id: 'hotels-residential-hot-water',
    title: 'Hotels, Hospitals & Centralized Hot Water Distribution',
    sectorTag: 'Hospitality, Healthcare & Villas',
    description:
      'High-COP Havells domestic and commercial air-source heat pumps integrated with insulated SFMC glass-fiber PPR composite piping for round-the-clock energy-saving hot water.',
    relatedSolution: 'Havells Heat Pumps + SFMC PPR Composite Piping',
    targetCategory: 'Heat Pumps',
    imageUrl:
      'https://cms.media.wilo.com/cdnpic/wilo2426/1459025/wilo2426_1140x_1.jpg',
    imageAlt:
      'Commercial Havells air-source heat pump and SFMC PPR hot water piping',
  },
  {
    id: 'water-softening-conditioning',
    title: 'Hard Water Conditioning & Water Softener Service',
    sectorTag: 'Villas, Hotels, Hospitals & Boilers',
    description:
      'End-to-end sizing, supply, and installation of automatic ion-exchange water softeners and multigrade sand filters to protect bathroom fittings, Havells heat pumps, and pipelines from scale.',
    relatedSolution: 'Automatic Water Softeners & Multigrade Filters',
    targetCategory: 'Water Softeners & Treatment',
    imageUrl: 'https://wqa.org/wp-content/uploads/2022/09/ScaleDeposit.png',
    imageAlt:
      'Automatic water softener and filtration system installation service',
  },
  {
    id: 'stp-wastewater-management',
    title: 'STP, Effluent & Underground Wastewater Infrastructure',
    sectorTag: 'Municipalities, Townships & Basements',
    description:
      'Wilo non-clog submersible sewage pumps and Wilo slurry/mud pumps paired with SFMC SN4/SN8 Double Wall Corrugated (DWC) underground drainage and Astral SWR stacks.',
    relatedSolution: 'Wilo STP & Slurry Pumps + SFMC DWC & Astral SWR Pipes',
    targetCategory: 'STP & Wastewater Pumps',
    imageUrl:
      'https://cms.media.wilo.com/cdnpic/wilo789511/11293362/wilo789511_768x432.jpg',
    imageAlt:
      'Sewage treatment plant Wilo STP pumps and SFMC DWC wastewater infrastructure',
  },
  {
    id: 'agricultural-borewell-irrigation',
    title: 'Agricultural Irrigation & Deep Borewell Extraction',
    sectorTag: 'Farms, Orchards & Rural Water Supply',
    description:
      'High-head Wilo borewell submersible, openwell, and monoblock pumps paired with SFMC heavy-duty uPVC column riser pipes, 3-core flat cables, and SFMC HDPE irrigation mains.',
    relatedSolution:
      'Wilo Submersible/Openwell/Monoblock + SFMC Column & HDPE Pipes',
    targetCategory: 'Submersible Pumps',
    imageUrl:
      'https://cms.media.wilo.com/cdnpic/wilo48919/10914349/wilo48919_1140x_1.jpg',
    imageAlt:
      'Agricultural irrigation Wilo pumping and SFMC HDPE farm pipeline network',
  },
];

// ============================================================================
// 5. KEYWORD MAP & DYNAMIC SEO METADATA ENGINE
// ============================================================================

interface SeoPageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string[];
  h1: string;
}

const SEO_KEYWORD_CLUSTERS = {
  home: [
    'Vortex Solutions Raipur',
    'pump suppliers in Raipur',
    'industrial pump dealers in Raipur',
    'water management solutions in Raipur',
    'Wilo pumps Raipur',
    'Havells heat pumps Raipur',
    'SFMC PPR HDPE DWC pipes Raipur',
    'Astral CPVC uPVC SWR pipes Raipur',
    'water softener in Raipur',
  ],
  products: [
    'Wilo STP pumps',
    'Wilo submersible pumps',
    'Wilo slurry mud pumps',
    'Wilo openwell monoblock pumps',
    'Wilo pressure booster pumps',
    'Havells heat pumps',
    'Havells commercial heat pump',
    'SFMC PPR-FR pipes',
    'SFMC PPR composite pipes',
    'SFMC DWC pipes',
    'SFMC HDPE pipes',
    'Astral PVC uPVC CPVC SWR pipes',
    'water softener dealer Raipur',
  ],
  solutions: [
    'water management solutions Raipur',
    'water softener installation service Raipur',
    'commercial hydro pneumatic booster system',
    'sewage treatment plant pumps supplier',
    'Havells hotel heat pump hot water system Raipur',
    'SFMC underground DWC drainage pipes Chhattisgarh',
  ],
  about: [
    'Vortex Solutions Raipur',
    'industrial pumping and piping supplier Raipur',
    'water softener and water treatment company Raipur',
    'B2B water management supplier Chhattisgarh',
  ],
  projects: [
    'BOQ pump quotation Raipur',
    'bulk SFMC HDPE DWC pipe supplier Chhattisgarh',
    'MEP pumping piping and water softener tender enquiry Raipur',
  ],
  contact: [
    'contact Vortex Solutions Raipur',
    'pump pipe and water softener dealer Ramnagar Raipur',
    'Wilo Havells Astral SFMC enquiry Raipur',
  ],
};

// ============================================================================
// 6. INLINE SVG ICONS (ACCESSIBLE, ZERO EXTERNAL DEPENDENCY)
// ============================================================================

const MenuIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const XIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const PhoneIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const MailIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const MapPinIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const ChevronRightIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
const SearchIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const SettingsIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
const CheckCircleIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
const MessageSquareIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
const FileTextIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);
const BotIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
    <circle cx="12" cy="5" r="2"></circle>
    <path d="M12 7v4"></path>
    <line x1="8" y1="16" x2="8" y2="16.01"></line>
    <line x1="16" y1="16" x2="16" y2="16.01"></line>
  </svg>
);
const SendIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const SocialIcon = ({
  platform,
  className = 'w-5 h-5',
}: {
  platform: SocialProfile['platform'];
  className?: string;
}) => {
  switch (platform) {
    case 'Instagram':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case 'Facebook':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case 'YouTube':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      );
    case 'WhatsApp':
    default:
      return <MessageSquareIcon className={className} />;
  }
};

// ============================================================================
// 7. UTILITIES & REUSABLE VISUAL COMPONENTS
// ============================================================================

const resolveImageUrl = (url: string) => {
  if (!url) return '';
  const trimmed = url.trim();
  if (trimmed.includes('github.com') && trimmed.includes('/blob/')) {
    return trimmed
      .replace('github.com', 'raw.githubusercontent.com')
      .replace('/blob/', '/');
  }
  return trimmed;
};

const VORTEX_SVG_FAVICON = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none"><defs><linearGradient id="g" x1="10%" y1="90%" x2="90%" y2="10%"><stop offset="0%" stop-color="#072142"/><stop offset="50%" stop-color="#146B8C"/><stop offset="100%" stop-color="#39C8DB"/></linearGradient></defs><circle cx="60" cy="60" r="56" fill="#072142"/><path d="M56 10 H106 V32 H98 V16 H56 Z" fill="url(#g)"/><path d="M64 110 H14 V88 H22 V104 H64 Z" fill="#146B8C"/><path d="M18 88 C 6 60, 18 20, 58 10" stroke="#39C8DB" stroke-width="8" stroke-linecap="round"/><path d="M102 32 C 114 60, 102 100, 62 110" stroke="#39C8DB" stroke-width="8" stroke-linecap="round"/><circle cx="60" cy="60" r="24" fill="#072142" stroke="#39C8DB" stroke-width="4"/><circle cx="60" cy="60" r="9" fill="#FFFFFF"/></svg>'
)}`;

const VortexImpellerLogo = (props: any) => {
  const [imgStep, setImgStep] = useState(0);
  const sources = [
    resolveImageUrl(BUSINESS_CONFIG.logoPrimarySrc),
    resolveImageUrl(BUSINESS_CONFIG.logoFallbackSrc),
    '/Vortex Logo.jpg',
  ].filter((src) => src && !src.includes('YOUR_USERNAME'));

  if (imgStep < sources.length) {
    return (
      <img
        src={sources[imgStep]}
        alt="Vortex Solutions Logo"
        className={props.className || 'w-12 h-12'}
        style={{ objectFit: 'contain', display: 'block', ...props.style }}
        onError={() => setImgStep(imgStep + 1)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Vortex Solutions Impeller Logo"
      className={props.className || 'w-12 h-12'}
      style={props.style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vortexMainGrad" x1="10%" y1="90%" x2="90%" y2="10%">
          <stop offset="0%" stopColor="#072142" />
          <stop offset="45%" stopColor="#146B8C" />
          <stop offset="100%" stopColor="#39C8DB" />
        </linearGradient>
      </defs>
      <path d="M56 10 H106 V32 H98 V16 H56 Z" fill="url(#vortexMainGrad)" />
      <path d="M64 110 H14 V88 H22 V104 H64 Z" fill="#082447" />
      <path
        d="M18 88 C 6 60, 18 20, 58 10"
        stroke="url(#vortexMainGrad)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M102 32 C 114 60, 102 100, 62 110"
        stroke="url(#vortexMainGrad)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="60"
        r="24"
        fill="#072142"
        stroke="url(#vortexMainGrad)"
        strokeWidth="3"
      />
      <circle cx="60" cy="60" r="8" fill="#FFFFFF" />
    </svg>
  );
};

const StandardizedBrandCard = ({
  brandKey,
  onSelectBrand,
}: {
  brandKey: string;
  onSelectBrand: (brand: string) => void;
}) => {
  const brandInfo = BRAND_CATALOG[brandKey];
  const [logoError, setLogoError] = useState(false);

  if (!brandInfo) return null;

  return (
    <article
      className="vortex-brand-card"
      onClick={() => onSelectBrand(brandInfo.name)}
      role="button"
      tabIndex={0}
      aria-label={`Explore ${brandInfo.name} products — ${brandInfo.specialization}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectBrand(brandInfo.name);
        }
      }}
    >
      <div className="vortex-brand-logo-box">
        {brandInfo.logoUrl && !logoError ? (
          <img
            src={resolveImageUrl(brandInfo.logoUrl)}
            alt={`${brandInfo.name} official brand logo`}
            className="vortex-brand-logo-img"
            loading="lazy"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div
            className="vortex-brand-wordmark"
            style={{ color: brandInfo.accentColor }}
            aria-label={`${brandInfo.name} wordmark`}
          >
            <span className="vortex-brand-wordmark-text">{brandInfo.name}</span>
            <span className="vortex-brand-wordmark-badge">
              ENGINEERED SYSTEMS
            </span>
          </div>
        )}
      </div>
      <div className="vortex-brand-meta">
        <h3 className="vortex-brand-title">{brandInfo.name} Solutions</h3>
        <p className="vortex-brand-sub">{brandInfo.specialization}</p>
        <span className="vortex-brand-link">
          Browse {brandInfo.name} Catalogue{' '}
          <ChevronRightIcon
            style={{ width: '15px', height: '15px', marginLeft: '4px' }}
          />
        </span>
      </div>
    </article>
  );
};

const ProductCardImage = ({
  imageUrl,
  imageAlt,
  category,
  brand,
}: {
  imageUrl: string;
  imageAlt: string;
  category: string;
  brand: string;
}) => {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolveImageUrl(imageUrl);

  return (
    <div className="vortex-product-image-container">
      {!hasError && resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={imageAlt}
          className="vortex-product-img"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          className="vortex-product-fallback"
          role="img"
          aria-label={imageAlt}
        >
          <SettingsIcon
            style={{
              width: '44px',
              height: '44px',
              color: '#00CEC8',
              marginBottom: '8px',
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#0B2545',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {brand} • {category}
          </span>
        </div>
      )}
      <div className="vortex-product-badge-row">
        <span className="vortex-badge-brand">{brand}</span>
        <span className="vortex-badge-category">{category}</span>
      </div>
    </div>
  );
};

// ============================================================================
// 8. MAIN APPLICATION COMPONENT
// ============================================================================

export default function VortexSolutionsApp() {
  const [currentView, setCurrentView] = useState<
    'home' | 'products' | 'solutions' | 'about' | 'projects' | 'contact'
  >('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    useState<string>('All');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // AI Assistant state
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'model',
      text: 'Hello! I am the Vortex Solutions Technical AI Assistant. How can I help you with Wilo pumps, Havells heat pumps, SFMC/Astral piping, or Water Softener systems in Raipur today?',
    },
  ]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);

  // Compute dynamic SEO metadata & JSON-LD structured data
  const activeSeoMeta: SeoPageMeta = useMemo(() => {
    if (currentView === 'products') {
      if (selectedBrandFilter !== 'All' && BRAND_CATALOG[selectedBrandFilter]) {
        const brandObj = BRAND_CATALOG[selectedBrandFilter];
        return {
          title: `${brandObj.name} Products & Systems in Raipur | Vortex Solutions`,
          description: `${brandObj.seoDescription} Request technical assistance and project quotations from Vortex Solutions, Raipur.`,
          canonicalPath: `/products?brand=${encodeURIComponent(brandObj.name)}`,
          keywords: [
            ...SEO_KEYWORD_CLUSTERS.products,
            `${brandObj.name} Raipur`,
            `${brandObj.name} dealer Chhattisgarh`,
          ],
          h1: `${brandObj.name} Products & Engineering Solutions`,
        };
      }
      if (selectedCategoryFilter !== 'All') {
        const catObj = CATEGORIES.find(
          (c) => c.name === selectedCategoryFilter
        );
        if (catObj) {
          return {
            title: `${catObj.name} Supplier in Raipur, Chhattisgarh | Vortex Solutions`,
            description: `${catObj.seoSummary} Explore Wilo, Havells, SFMC, Astral, and Water Softener solutions at Vortex Solutions.`,
            canonicalPath: `/products?category=${encodeURIComponent(
              catObj.id
            )}`,
            keywords: [
              ...SEO_KEYWORD_CLUSTERS.products,
              `${catObj.name} Raipur`,
              `${catObj.name} Chhattisgarh`,
            ],
            h1: `${catObj.name} — Specifications & Product Catalogue`,
          };
        }
      }
      return {
        title: `Pumps, Pipes, Heat Pumps & Water Softeners Catalogue | Vortex Solutions Raipur`,
        description: `Browse Wilo STP, submersible, monoblock, openwell, slurry & booster pumps, Havells heat pumps, SFMC PPR-FR, PPR composite, DWC & HDPE pipes, Astral PVC, uPVC, CPVC & SWR pipes, and Water Softeners in Raipur.`,
        canonicalPath: `/products`,
        keywords: SEO_KEYWORD_CLUSTERS.products,
        h1: `Complete Pumping, Piping, Heat Pump & Water Softener Catalogue`,
      };
    }

    if (currentView === 'solutions') {
      return {
        title: `Applications, Water Softeners & Water Management Solutions in Raipur | Vortex Solutions`,
        description: `Engineered water management, Wilo pressure boosting, STP wastewater handling, Havells heat pump hot water systems, water softener services, and SFMC/Astral piping across Chhattisgarh.`,
        canonicalPath: `/solutions`,
        keywords: SEO_KEYWORD_CLUSTERS.solutions,
        h1: `Applications & Engineered Water Management Solutions`,
      };
    }

    if (currentView === 'about') {
      return {
        title: `About Vortex Solutions | Pumps, Piping & Water Treatment Specialist Raipur`,
        description: `Learn about Vortex Solutions in Raipur, Chhattisgarh—specializing in Wilo industrial & submersible pumps, Havells heat pumps, SFMC & Astral piping, and water softener systems.`,
        canonicalPath: `/about`,
        keywords: SEO_KEYWORD_CLUSTERS.about,
        h1: `About Vortex Solutions — Engineered Fluid & Water Management`,
      };
    }

    if (currentView === 'projects') {
      return {
        title: `Project & BOQ Quotation Enquiry | Vortex Solutions Raipur`,
        description: `Submit your Bill of Quantities (BOQ) or project specifications for Wilo pumps, Havells heat pumps, SFMC HDPE/DWC/PPR piping, Astral CPVC/uPVC/SWR pipes, and water softeners in Chhattisgarh.`,
        canonicalPath: `/projects`,
        keywords: SEO_KEYWORD_CLUSTERS.projects,
        h1: `Project, Tender & Bulk BOQ Enquiries`,
      };
    }

    if (currentView === 'contact') {
      return {
        title: `Contact Vortex Solutions Raipur | Pumps, Pipes & Water Softeners`,
        description: `Contact Vortex Solutions at Ramnagar, Kota Rd, Raipur, Chhattisgarh for Wilo pumping systems, Havells heat pumps, SFMC/Astral pipes, and water softener services.`,
        canonicalPath: `/contact`,
        keywords: SEO_KEYWORD_CLUSTERS.contact,
        h1: `Contact Vortex Solutions — Raipur, Chhattisgarh`,
      };
    }

    return {
      title: `Vortex Solutions | Pumps, Pipes, Heat Pumps & Water Softeners in Raipur`,
      description: `Vortex Solutions is a premier supplier of Wilo pumps (submersible, openwell, monoblock, slurry, mud, STP & boosters), Havells heat pumps, SFMC (PPR-FR, PPR composite, DWC, HDPE) pipes, Astral (PVC, uPVC, CPVC, SWR) pipes, and Water Softener services in Raipur, Chhattisgarh.`,
      canonicalPath: `/`,
      keywords: SEO_KEYWORD_CLUSTERS.home,
      h1: BUSINESS_CONFIG.tagline,
    };
  }, [currentView, selectedBrandFilter, selectedCategoryFilter]);

  // Apply SEO tags, Canonical URL, OpenGraph, and JSON-LD Structured Data dynamically
  useEffect(() => {
    document.title = activeSeoMeta.title;

    const setOrCreateMeta = (
      attrName: 'name' | 'property',
      attrValue: string,
      content: string
    ) => {
      let meta: HTMLMetaElement | null = document.querySelector(
        `meta[${attrName}="${attrValue}"]`
      );
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setOrCreateMeta('name', 'description', activeSeoMeta.description);
    setOrCreateMeta('name', 'keywords', activeSeoMeta.keywords.join(', '));
    setOrCreateMeta('name', 'author', BUSINESS_CONFIG.businessName);
    setOrCreateMeta('name', 'robots', 'index, follow, max-image-preview:large');
    setOrCreateMeta('name', 'geo.region', 'IN-CT');
    setOrCreateMeta('name', 'geo.placename', 'Raipur, Chhattisgarh');

    // OpenGraph metadata
    setOrCreateMeta('property', 'og:title', activeSeoMeta.title);
    setOrCreateMeta('property', 'og:description', activeSeoMeta.description);
    setOrCreateMeta('property', 'og:type', 'website');
    setOrCreateMeta(
      'property',
      'og:url',
      `${BUSINESS_CONFIG.domainUrl}${activeSeoMeta.canonicalPath}`
    );
    setOrCreateMeta('property', 'og:site_name', BUSINESS_CONFIG.businessName);
    setOrCreateMeta('property', 'og:locale', 'en_IN');

    // Canonical Link
    let canonicalLink: HTMLLinkElement | null = document.querySelector(
      "link[rel='canonical']"
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${BUSINESS_CONFIG.domainUrl}${activeSeoMeta.canonicalPath}`;

    // Favicon
    const resolvedLogo = resolveImageUrl(BUSINESS_CONFIG.logoPrimarySrc);
    const hasCustomUrl =
      resolvedLogo && !resolvedLogo.includes('YOUR_USERNAME');
    let faviconLink: HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = hasCustomUrl ? resolvedLogo : VORTEX_SVG_FAVICON;

    // JSON-LD Structured Data
    const verifiedSameAs = SOCIAL_LINKS_CONFIG.filter(
      (s) => s.isVerified && s.url
    ).map((s) => s.url);

    const structuredDataGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['LocalBusiness', 'IndustrialEquipmentSupplier'],
          '@id': `${BUSINESS_CONFIG.domainUrl}/#organization`,
          name: BUSINESS_CONFIG.businessName,
          alternateName: 'Vortex Solutions Raipur',
          slogan: BUSINESS_CONFIG.tagline,
          url: BUSINESS_CONFIG.domainUrl,
          telephone: BUSINESS_CONFIG.contactPhone,
          email: BUSINESS_CONFIG.contactEmail,
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              'Opposite Amazon Store, Near Disha College, Ramnagar, Kota Rd',
            addressLocality: BUSINESS_CONFIG.location.city,
            addressRegion: BUSINESS_CONFIG.location.state,
            addressCountry: 'IN',
          },
          areaServed: [
            { '@type': 'City', name: 'Raipur' },
            { '@type': 'State', name: 'Chhattisgarh' },
          ],
          openingHours: 'Mo-Sa 10:30-18:30',
          sameAs: verifiedSameAs,
          knowsAbout: [
            'Wilo Submersible, Openwell, Monoblock, Slurry & Mud Pumps',
            'Wilo STP & Pressure Booster Pumps',
            'Havells Domestic & Commercial Heat Pumps',
            'SFMC PPR-FR, PPR Composite, DWC & HDPE Pipes',
            'Astral PVC, uPVC, CPVC & SWR Pipes',
            'Water Softener Systems & Hard Water Treatment Service',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${BUSINESS_CONFIG.domainUrl}/#website`,
          url: BUSINESS_CONFIG.domainUrl,
          name: BUSINESS_CONFIG.businessName,
          publisher: {
            '@id': `${BUSINESS_CONFIG.domainUrl}/#organization`,
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${BUSINESS_CONFIG.domainUrl}${activeSeoMeta.canonicalPath}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: BUSINESS_CONFIG.domainUrl,
            },
            ...(currentView !== 'home'
              ? [
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: activeSeoMeta.h1,
                    item: `${BUSINESS_CONFIG.domainUrl}${activeSeoMeta.canonicalPath}`,
                  },
                ]
              : []),
          ],
        },
        {
          '@type': 'ItemList',
          name: 'Vortex Solutions Pumping, Piping & Water Softener Catalogue',
          itemListElement: PRODUCTS.map((prod, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Product',
              name: prod.name,
              description: prod.description,
              category: prod.category,
              image: resolveImageUrl(prod.imageUrl),
              brand: {
                '@type': 'Brand',
                name: prod.brand,
              },
            },
          })),
        },
      ],
    };

    let ldScript: HTMLScriptElement | null = document.querySelector(
      'script#vortex-json-ld'
    );
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'vortex-json-ld';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(structuredDataGraph);

    // Ensure Tailwind CDN script is loaded for utility classes
    if (!document.getElementById('vortex-tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'vortex-tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, [activeSeoMeta, currentView]);

  const navigateTo = (
    view: 'home' | 'products' | 'solutions' | 'about' | 'projects' | 'contact',
    category = 'All',
    brand = 'All'
  ) => {
    setSelectedCategoryFilter(category);
    setSelectedBrandFilter(brand);
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = (
    message = 'Hello Vortex Solutions, I would like to make an enquiry regarding pumps, piping, heat pumps, or water softener systems.'
  ) => {
    const url = `https://wa.me/${
      BUSINESS_CONFIG.whatsappNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendChatMessage = async (e: any) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newUserMessage = { role: 'user', text: chatInput };
    const updatedMessages = [...chatMessages, newUserMessage];
    setChatMessages(updatedMessages);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const apiKey = '';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const contents = updatedMessages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

      const payload = {
        contents,
        systemInstruction: {
          parts: [
            {
              text: `You are the technical sales assistant for Vortex Solutions, a B2B and commercial supplier of pumps, heat pumps, pipes, fittings, and water softener systems in Raipur, Chhattisgarh, India. Follow strict brand specializations: (1) Wilo supplies all water pumps including Submersible, Openwell, Monoblock, Slurry, Mud, STP & Wastewater, Pressure Booster, Dewatering, Agricultural, Domestic, and Industrial Pumps. (2) Havells supplies only Domestic Heat Pumps and Commercial Heat Pumps. (3) SFMC supplies PPR-FR Fire-Retardant Pipes, Glass-Fiber PPR Composite Pipes, DWC Corrugated Pipes, HDPE Pipes, and uPVC Column Pipes. (4) Astral supplies only PVC, uPVC, CPVC, and SWR Pipes & Plumbing Fittings. (5) Vortex Solutions also provides complete Water Softener and hard-water treatment systems and services. Help users select the right system and encourage them to request a quote or connect on WhatsApp.`,
            },
          ],
        },
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const modelReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        'Please reach out to our technical team on WhatsApp for immediate sizing and quotation support.';

      setChatMessages((prev) => [...prev, { role: 'model', text: modelReply }]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: 'For immediate product sizing and price quotations on Wilo pumps, Havells heat pumps, SFMC/Astral pipes, or Water Softeners in Raipur & Chhattisgarh, please click the WhatsApp button or submit a Project Enquiry!',
        },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const navItems: {
    id: 'home' | 'products' | 'solutions' | 'about' | 'projects' | 'contact';
    label: string;
  }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products Catalogue' },
    { id: 'solutions', label: 'Applications & Solutions' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Project Enquiry' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const resolvedHeroBg = resolveImageUrl(
    BUSINESS_CONFIG.firstPlayCardBackgroundSrc
  );

  return (
    <div className="vortex-app-wrapper min-h-screen bg-[#F5F7F7] font-sans text-[#202729] flex flex-col">
      <style>{`
        :root, html, body, #root {
          color-scheme: light !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          max-width: none !important;
          min-height: 100vh !important;
          display: block !important;
          background-color: #F5F7F7 !important;
          color: #202729 !important;
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
          text-align: left !important;
          box-sizing: border-box !important;
        }
        *, *::before, *::after { box-sizing: border-box; }

        /* Fix overlapping lines on multi-line headings */
        h1, h2, h3, h4 {
          line-height: 1.28 !important;
          letter-spacing: -0.015em;
        }

        /* Enforce pure white background and crisp dark text on all search boxes, inputs, dropdowns & textareas */
        input, select, textarea {
          background-color: #FFFFFF !important;
          color: #0B2545 !important;
          color-scheme: light !important;
        }
        input::placeholder, textarea::placeholder {
          color: #64748B !important;
          opacity: 1 !important;
        }

        .vortex-header {
          background: #FFFFFF;
          border-bottom: 1px solid #E5E7EB;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .vortex-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Hero Card */
        .vortex-first-playcard-hero {
          position: relative;
          background-color: #0B2545;
          background-image:
            linear-gradient(112deg, rgba(7, 33, 66, 0.93) 0%, rgba(11, 37, 69, 0.86) 52%, rgba(17, 140, 136, 0.78) 100%),
            url('${resolvedHeroBg}');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          color: #FFFFFF;
          padding: 5.25rem 0;
          overflow: hidden;
          border-bottom: 3px solid #00CEC8;
        }
        .vortex-first-playcard-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .vortex-first-playcard-inner {
            grid-template-columns: 1.35fr 0.85fr;
          }
        }
        .vortex-quote-feature-card {
          position: relative;
          border-radius: 16px;
          padding: 2.25rem;
          background:
            linear-gradient(145deg, rgba(7, 33, 66, 0.88) 0%, rgba(17, 140, 136, 0.78) 100%),
            url('${resolvedHeroBg}');
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(0, 206, 200, 0.45);
          box-shadow: 0 20px 40px rgba(7, 33, 66, 0.38);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .vortex-quote-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px rgba(0, 206, 200, 0.22);
        }

        /* Standardized Brand Logo Cards */
        .vortex-brand-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .vortex-brand-card {
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFA 100%);
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 1.5rem 1.25rem;
          text-align: center;
          transition: all 0.22s ease;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          min-height: 215px;
        }
        .vortex-brand-card:hover {
          border-color: #118C88;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(17, 140, 136, 0.12);
        }
        .vortex-brand-logo-box {
          width: 100%;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          margin-bottom: 0.85rem;
          background-color: #FFFFFF;
          border-radius: 8px;
          border: 1px solid #F1F5F9;
        }
        .vortex-brand-logo-img {
          display: block;
          width: auto;
          max-width: 145px;
          height: 38px;
          max-height: 42px;
          object-fit: contain;
          object-position: center;
          margin: 0 auto;
        }
        .vortex-brand-wordmark {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .vortex-brand-wordmark-text {
          font-size: 1.65rem;
          font-weight: 900;
          letter-spacing: 0.08em;
        }
        .vortex-brand-wordmark-badge {
          font-size: 0.62rem;
          font-weight: 700;
          color: #118C88;
          letter-spacing: 0.12em;
          margin-top: 4px;
        }
        .vortex-brand-meta {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          justify-content: space-between;
          width: 100%;
        }
        .vortex-brand-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0B2545;
          margin: 0 0 6px 0;
        }
        .vortex-brand-sub {
          font-size: 0.8rem;
          color: #475569;
          line-height: 1.45;
          margin: 0 0 12px 0;
        }
        .vortex-brand-link {
          font-size: 0.8rem;
          font-weight: 700;
          color: #118C88;
          display: inline-flex;
          align-items: center;
        }

        /* Category & Product Playcards */
        .vortex-playcard {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.05);
          transition: all 0.25s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .vortex-playcard:hover {
          transform: translateY(-4px);
          border-color: #00CEC8;
          box-shadow: 0 12px 24px rgba(0, 206, 200, 0.14);
        }
        .vortex-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
          gap: 1.5rem;
        }
        .vortex-grid-products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
          gap: 1.5rem;
        }
        .vortex-product-card {
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.04);
        }
        .vortex-product-card:hover {
          transform: translateY(-4px);
          border-color: #00CEC8;
          box-shadow: 0 14px 28px rgba(11, 37, 69, 0.1);
        }
        .vortex-product-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          background: linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #E2E8F0;
        }
        .vortex-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.35s ease;
        }
        .vortex-product-card:hover .vortex-product-img {
          transform: scale(1.04);
        }
        .vortex-product-fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          text-align: center;
        }
        .vortex-product-badge-row {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          pointer-events: none;
        }
        .vortex-badge-brand {
          background: rgba(11, 37, 69, 0.92);
          color: #00CEC8;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .vortex-badge-category {
          background: rgba(255, 255, 255, 0.94);
          color: #0B2545;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 9px;
          border-radius: 6px;
          border: 1px solid #CBD5E1;
        }

        /* Buttons */
        .vortex-btn-primary {
          background-color: #00CEC8;
          color: #0B2545;
          font-weight: 700;
          padding: 0.8rem 1.75rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .vortex-btn-primary:hover {
          background-color: #118C88;
          color: #FFFFFF;
        }
        .vortex-btn-teal {
          background-color: #118C88;
          color: #FFFFFF;
          font-weight: 600;
          padding: 0.65rem 1.4rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .vortex-btn-teal:hover {
          background-color: #0B2545;
        }

        /* Responsive Navigation */
        .vortex-desktop-nav {
          display: none;
        }
        .vortex-mobile-toggle {
          display: flex;
        }
        @media (min-width: 960px) {
          .vortex-desktop-nav {
            display: flex;
            gap: 1.5rem;
            align-items: center;
          }
          .vortex-mobile-toggle {
            display: none;
          }
        }
      `}</style>

      {/* HEADER & PRIMARY NAVIGATION */}
      <header className="vortex-header">
        <div className="vortex-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '82px',
            }}
          >
            {/* Brand Identity */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => navigateTo('home')}
              role="button"
              tabIndex={0}
              aria-label="Vortex Solutions Home"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') navigateTo('home');
              }}
            >
              <div style={{ marginRight: '12px' }}>
                <VortexImpellerLogo style={{ width: '52px', height: '52px' }} />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    margin: 0,
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#0B2545',
                    lineHeight: 1,
                  }}
                >
                  VORTEX
                </span>
                <span
                  style={{
                    display: 'block',
                    margin: '3px 0 0 0',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#118C88',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  SOLUTIONS
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="vortex-desktop-nav" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: currentView === item.id ? '#118C88' : '#202729',
                    borderBottom:
                      currentView === item.id
                        ? '2px solid #00CEC8'
                        : '2px solid transparent',
                    paddingBottom: '4px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Header Actions & Mobile Menu Button */}
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <button
                onClick={() => navigateTo('projects')}
                className="vortex-btn-teal"
              >
                Get a Quote
              </button>
              <button
                className="vortex-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={isMobileMenuOpen}
                style={{
                  background: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  padding: '8px',
                  cursor: 'pointer',
                  color: '#0B2545',
                }}
              >
                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {isMobileMenuOpen && (
            <nav
              aria-label="Mobile Navigation"
              style={{
                borderTop: '1px solid #E2E8F0',
                padding: '1rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.65rem 0.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    background:
                      currentView === item.id ? '#E6FFFA' : 'transparent',
                    color: currentView === item.id ? '#0B2545' : '#202729',
                    fontWeight: currentView === item.id ? 700 : 600,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* MAIN CONTENT VIEWPORT */}
      <main style={{ flex: '1 0 auto' }}>
        {currentView === 'home' && (
          <HomeView
            navigateTo={navigateTo}
            handleWhatsAppClick={handleWhatsAppClick}
          />
        )}
        {currentView === 'products' && (
          <ProductsView
            handleWhatsAppClick={handleWhatsAppClick}
            initialCategory={selectedCategoryFilter}
            initialBrand={selectedBrandFilter}
            navigateTo={navigateTo}
          />
        )}
        {currentView === 'solutions' && (
          <ApplicationsSolutionsView
            navigateTo={navigateTo}
            handleWhatsAppClick={handleWhatsAppClick}
          />
        )}
        {currentView === 'about' && (
          <AboutCompanyView
            navigateTo={navigateTo}
            handleWhatsAppClick={handleWhatsAppClick}
          />
        )}
        {currentView === 'projects' && (
          <ProjectEnquiryView handleWhatsAppClick={handleWhatsAppClick} />
        )}
        {currentView === 'contact' && (
          <ContactView handleWhatsAppClick={handleWhatsAppClick} />
        )}
      </main>

      {/* FOOTER WITH VERIFIED SOCIAL LINKS & LOCAL SEO SIGNALS */}
      <footer
        style={{
          backgroundColor: '#0B2545',
          color: '#D1D5DB',
          padding: '4rem 0 2.5rem 0',
        }}
      >
        <div
          className="vortex-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '2.25rem',
          }}
        >
          {/* Column 1: Business Identity */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <VortexImpellerLogo style={{ width: '42px', height: '42px' }} />
              <div style={{ marginLeft: '10px' }}>
                <h2
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 800,
                    margin: 0,
                    fontSize: '1.25rem',
                  }}
                >
                  {BUSINESS_CONFIG.businessName}
                </h2>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#00CEC8',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                  }}
                >
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </div>
            <p
              style={{
                lineHeight: 1.6,
                fontSize: '0.88rem',
                color: '#CBD5E1',
                marginBottom: '1.15rem',
              }}
            >
              Premier supplier of Wilo pumping systems (submersible, openwell,
              monoblock, slurry, mud, STP & boosters), Havells heat pumps, SFMC
              (PPR-FR, PPR composite, DWC, HDPE) pipes, Astral (PVC, uPVC, CPVC,
              SWR) pipes, and Water Softener services in Raipur, Chhattisgarh.
            </p>

            {/* Social Media Icons Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexWrap: 'wrap',
              }}
              aria-label="Social Media Links"
            >
              {SOCIAL_LINKS_CONFIG.map((social) => {
                if (social.isVerified && social.url) {
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(0, 206, 200, 0.14)',
                        border: '1px solid rgba(0, 206, 200, 0.4)',
                        color: '#00CEC8',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  );
                }
                return (
                  <button
                    key={social.id}
                    type="button"
                    onClick={() => navigateTo('contact')}
                    aria-label={`${social.platform} profile — Contact us for official handle`}
                    title={`Connect with Vortex Solutions`}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#94A3B8',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <SocialIcon platform={social.platform} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Core Categories */}
          <div>
            <h3
              style={{
                color: '#00CEC8',
                fontWeight: 700,
                marginBottom: '1rem',
                fontSize: '0.98rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Pumping, Piping & Water Tech
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.88rem',
              }}
            >
              {[
                'STP & Wastewater Pumps',
                'Pressure Booster Pumps',
                'Submersible Pumps',
                'Slurry & Mud Pumps',
                'Industrial Pumps',
                'Heat Pumps',
                'Water Softeners & Treatment',
                'PPR & PPR Composite Pipes',
                'HDPE Pipes',
                'DWC Pipes',
                'CPVC, uPVC, PVC & SWR Pipes',
              ].map((catName) => (
                <li key={catName} style={{ marginBottom: '7px' }}>
                  <button
                    onClick={() => navigateTo('products', catName, 'All')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#E5E7EB',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                      fontSize: '0.88rem',
                    }}
                  >
                    {catName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Brands & Navigation */}
          <div>
            <h3
              style={{
                color: '#00CEC8',
                fontWeight: 700,
                marginBottom: '1rem',
                fontSize: '0.98rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Brands & Quick Links
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.25rem 0',
                fontSize: '0.88rem',
              }}
            >
              {BRANDS.map((brand) => (
                <li key={brand} style={{ marginBottom: '7px' }}>
                  <button
                    onClick={() => navigateTo('products', 'All', brand)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#E5E7EB',
                      cursor: 'pointer',
                      padding: 0,
                      fontSize: '0.88rem',
                    }}
                  >
                    {brand} Solutions
                  </button>
                </li>
              ))}
            </ul>

            <h4
              style={{
                color: '#00CEC8',
                fontWeight: 700,
                marginBottom: '0.6rem',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.88rem',
              }}
            >
              <li style={{ marginBottom: '6px' }}>
                <button
                  onClick={() => navigateTo('solutions')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#E5E7EB',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Applications & Solutions
                </button>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <button
                  onClick={() => navigateTo('about')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#E5E7EB',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  About Vortex Solutions
                </button>
              </li>
              <li style={{ marginBottom: '6px' }}>
                <button
                  onClick={() => navigateTo('projects')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#E5E7EB',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Submit BOQ / Project Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Raipur Office & Local SEO */}
          <div>
            <h3
              style={{
                color: '#00CEC8',
                fontWeight: 700,
                marginBottom: '1rem',
                fontSize: '0.98rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Raipur Office
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.88rem',
              }}
            >
              <li
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}
              >
                <MapPinIcon
                  style={{
                    width: '18px',
                    height: '18px',
                    color: '#00CEC8',
                    marginRight: '8px',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                />
                <span>{BUSINESS_CONFIG.location.addressLine}</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}
              >
                <PhoneIcon
                  style={{
                    width: '18px',
                    height: '18px',
                    color: '#00CEC8',
                    marginRight: '8px',
                    flexShrink: 0,
                  }}
                />
                <a
                  href={`tel:${BUSINESS_CONFIG.contactPhone.replace(
                    /\s+/g,
                    ''
                  )}`}
                  style={{ color: '#E5E7EB', textDecoration: 'none' }}
                >
                  {BUSINESS_CONFIG.contactPhone}
                </a>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}
              >
                <MailIcon
                  style={{
                    width: '18px',
                    height: '18px',
                    color: '#00CEC8',
                    marginRight: '8px',
                    flexShrink: 0,
                  }}
                />
                <a
                  href={`mailto:${BUSINESS_CONFIG.contactEmail}`}
                  style={{ color: '#E5E7EB', textDecoration: 'none' }}
                >
                  {BUSINESS_CONFIG.contactEmail}
                </a>
              </li>
            </ul>
            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                fontSize: '0.78rem',
                color: '#CBD5E1',
              }}
            >
              Serving Raipur, Bhilai, Durg, Bilaspur, Korba, Raigarh, and
              industrial projects across Chhattisgarh.
            </div>
          </div>
        </div>

        <div
          className="vortex-container"
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(0, 206, 200, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#94A3B8',
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}{' '}
            (vortexsolution.in). All rights reserved.
          </span>
          <span>Raipur, Chhattisgarh, India</span>
        </div>
      </footer>

      {/* FLOATING WHATSAPP ACTION */}
      <button
        onClick={() => handleWhatsAppClick()}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          padding: '16px',
          borderRadius: '9999px',
          border: 'none',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Chat with Vortex Solutions on WhatsApp"
      >
        <MessageSquareIcon />
      </button>

      {/* FLOATING TECHNICAL AI ASSISTANT */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '24px',
          backgroundColor: '#00CEC8',
          color: '#0B2545',
          padding: '16px',
          borderRadius: '9999px',
          border: 'none',
          boxShadow: '0 10px 25px rgba(0, 206, 200, 0.4)',
          cursor: 'pointer',
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
        }}
        aria-label="Open Vortex Technical AI Assistant"
      >
        {isChatOpen ? <XIcon /> : <BotIcon />}
      </button>

      {isChatOpen && (
        <div
          role="dialog"
          aria-label="Vortex Technical AI Assistant"
          style={{
            position: 'fixed',
            bottom: '165px',
            right: '24px',
            width: '350px',
            maxWidth: 'calc(100vw - 32px)',
            height: '440px',
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            border: '1px solid #E5E7EB',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 50,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundColor: '#0B2545',
              color: '#FFFFFF',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BotIcon
                style={{ width: '20px', height: '20px', color: '#00CEC8' }}
              />
              <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                Vortex Technical AI
              </h3>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              aria-label="Close AI Assistant"
              style={{
                background: 'none',
                border: 'none',
                color: '#9CA3AF',
                cursor: 'pointer',
              }}
            >
              <XIcon style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              backgroundColor: '#F5F7F7',
            }}
          >
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent:
                    msg.role === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    fontSize: '0.875rem',
                    backgroundColor:
                      msg.role === 'user' ? '#00CEC8' : '#FFFFFF',
                    color: msg.role === 'user' ? '#0B2545' : '#202729',
                    fontWeight: msg.role === 'user' ? 600 : 400,
                    border: msg.role === 'user' ? 'none' : '1px solid #E5E7EB',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#118C88',
                  fontWeight: 600,
                }}
              >
                Vortex AI is typing...
              </div>
            )}
          </div>
          <div
            style={{
              padding: '12px',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid #E5E7EB',
            }}
          >
            <form
              onSubmit={handleSendChatMessage}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about Wilo, Havells, SFMC, Astral, Softener..."
                aria-label="Ask a technical question"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  backgroundColor: '#FFFFFF',
                  color: '#0B2545',
                  fontSize: '0.875rem',
                }}
                disabled={isChatLoading}
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={isChatLoading || !chatInput.trim()}
                style={{
                  backgroundColor: '#118C88',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                <SendIcon style={{ width: '16px', height: '16px' }} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 9. HOME VIEW
// ============================================================================

function HomeView({
  navigateTo,
  handleWhatsAppClick,
}: {
  navigateTo: (view: any, category?: string, brand?: string) => void;
  handleWhatsAppClick: (msg?: string) => void;
}) {
  return (
    <div>
      {/* First Play Card / Hero Section */}
      <section
        className="vortex-first-playcard-hero"
        aria-label="Vortex Solutions Hero Showcase"
      >
        <div className="vortex-container vortex-first-playcard-inner">
          {/* Primary Hero Copy */}
          <div>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(0, 206, 200, 0.18)',
                border: '1px solid rgba(0, 206, 200, 0.5)',
                color: '#00CEC8',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Raipur, Chhattisgarh • Industrial & Commercial Water Management
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                maxWidth: '780px',
                color: '#FFFFFF',
              }}
            >
              Engineered Solution for{' '}
              <span style={{ color: '#00CEC8' }}>Everydrop</span>
            </h1>
            <p
              style={{
                fontSize: '1.12rem',
                color: '#E2E8F0',
                marginBottom: '2rem',
                maxWidth: '670px',
                lineHeight: 1.65,
              }}
            >
              Vortex Solutions supplies high-performance <strong>Wilo</strong>{' '}
              pumps (STP, pressure boosters, submersible, openwell, monoblock,
              slurry & mud), <strong>Havells</strong> domestic & commercial heat
              pumps, <strong>SFMC</strong> (PPR-FR, PPR Composite, DWC, HDPE)
              pipes, <strong>Astral</strong> (PVC, uPVC, CPVC, SWR) piping, and{' '}
              <strong>Water Softener</strong> systems across Raipur and
              Chhattisgarh.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => navigateTo('products')}
                className="vortex-btn-primary"
              >
                Explore Product Catalogue
              </button>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    'Hello Vortex Solutions, I would like to discuss a pumping, piping, heat pump, or water softener requirement.'
                  )
                }
                style={{
                  backgroundColor: 'rgba(11, 37, 69, 0.55)',
                  border: '2px solid #00CEC8',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  padding: '0.8rem 1.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Discuss on WhatsApp
              </button>
            </div>
          </div>

          {/* Dedicated First Play Card */}
          <div
            className="vortex-quote-feature-card"
            onClick={() => navigateTo('products')}
            role="button"
            tabIndex={0}
            aria-label="Engineered Solution for Everydrop — Explore Vortex Solutions Catalogue"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigateTo('products');
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  padding: '10px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                <VortexImpellerLogo style={{ width: '48px', height: '48px' }} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#00CEC8',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  VORTEX SOLUTIONS • RAIPUR
                </span>
                <h2
                  style={{
                    margin: '2px 0 0 0',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.28,
                  }}
                >
                  “Engineered Solution for Everydrop”
                </h2>
              </div>
            </div>
            <p
              style={{
                fontSize: '0.92rem',
                color: '#F1F5F9',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              From deep-well extraction, commercial pressure boosting, and
              hard-water softening to industrial process pipelines and STP
              wastewater management—engineered for durability and efficiency.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '1.25rem',
              }}
            >
              {[
                'Wilo Complete Pump Range',
                'Havells Heat Pumps',
                'SFMC PPR-FR, Composite, DWC & HDPE',
                'Astral PVC, uPVC, CPVC & SWR',
                'Water Softener Systems & Service',
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    backgroundColor: 'rgba(11, 37, 69, 0.78)',
                    border: '1px solid rgba(0, 206, 200, 0.45)',
                    color: '#E2E8F0',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.85rem',
                borderTop: '1px solid rgba(255,255,255,0.18)',
                fontSize: '0.84rem',
                fontWeight: 700,
                color: '#00CEC8',
              }}
            >
              <span>
                View All {CATEGORIES.length} Product & Service Categories
              </span>
              <ChevronRightIcon style={{ width: '18px', height: '18px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDIZED BRAND PLAY CARDS */}
      <section
        style={{
          padding: '4rem 0',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
        }}
        aria-labelledby="brands-heading"
      >
        <div className="vortex-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#118C88',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Industry-Leading Manufacturers
            </span>
            <h2
              id="brands-heading"
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#0B2545',
                margin: '0.5rem 0',
                lineHeight: 1.28,
              }}
            >
              Leading Brands We Supply
            </h2>
            <p
              style={{
                color: '#475569',
                maxWidth: '680px',
                margin: '0 auto',
                fontSize: '0.95rem',
                textAlign: 'center',
              }}
            >
              Select any brand card below to filter our catalogue by dedicated
              manufacturer product lines.
            </p>
          </div>

          <div className="vortex-brand-grid">
            {BRANDS.map((brandKey) => (
              <StandardizedBrandCard
                key={brandKey}
                brandKey={brandKey}
                onSelectBrand={(brandName) =>
                  navigateTo('products', 'All', brandName)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDED PRODUCT CATEGORIES PLAY CARDS */}
      <section
        style={{ padding: '4.5rem 0', backgroundColor: '#F5F7F7' }}
        aria-labelledby="categories-heading"
      >
        <div className="vortex-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              gap: '1rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#118C88',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Comprehensive B2B & Project Supply
              </span>
              <h2
                id="categories-heading"
                style={{
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  color: '#0B2545',
                  margin: '0.4rem 0 0 0',
                  lineHeight: 1.28,
                }}
              >
                Pumping, Piping, Water Softener & Electrical Categories
              </h2>
            </div>
            <button
              onClick={() => navigateTo('products')}
              className="vortex-btn-teal"
            >
              Open Full Catalogue ({PRODUCTS.length} Products)
            </button>
          </div>

          <div className="vortex-grid-cards">
            {CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                className="vortex-playcard"
                onClick={() => navigateTo('products', cat.name, 'All')}
                role="button"
                tabIndex={0}
                aria-label={`${cat.name} — ${cat.shortDesc}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ')
                    navigateTo('products', cat.name, 'All');
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        backgroundColor: '#E6FFFA',
                        color: '#0B2545',
                        border: '1px solid #00CEC8',
                        padding: '3px 9px',
                        borderRadius: '9999px',
                      }}
                    >
                      {cat.tag}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: '#64748B',
                      }}
                    >
                      {cat.group}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#0B2545',
                      margin: '0 0 0.5rem 0',
                      lineHeight: 1.3,
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: '#475569',
                      lineHeight: 1.55,
                      margin: '0 0 1.25rem 0',
                    }}
                  >
                    {cat.shortDesc}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #F1F5F9',
                    color: '#118C88',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                  }}
                >
                  <span>Explore {cat.name}</span>
                  <ChevronRightIcon style={{ width: '16px', height: '16px' }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT PLAY CARDS */}
      <section
        style={{
          padding: '4.5rem 0',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
        }}
        aria-labelledby="featured-products-heading"
      >
        <div className="vortex-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              gap: '1rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#118C88',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Engineered Product Playcards
              </span>
              <h2
                id="featured-products-heading"
                style={{
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  color: '#0B2545',
                  margin: '0.4rem 0 0 0',
                  lineHeight: 1.28,
                }}
              >
                Featured Pumps, Piping, Heat Pumps & Water Softeners
              </h2>
            </div>
            <button
              onClick={() => navigateTo('products')}
              className="vortex-btn-teal"
            >
              Filter All Products
            </button>
          </div>

          <div className="vortex-grid-products">
            {PRODUCTS.slice(0, 6).map((product) => (
              <article key={product.id} className="vortex-product-card">
                <div>
                  <ProductCardImage
                    imageUrl={product.imageUrl}
                    imageAlt={product.imageAlt}
                    category={product.category}
                    brand={product.brand}
                  />
                  <div style={{ padding: '1.35rem' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#118C88',
                        backgroundColor: '#F0FDFA',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {product.highlight}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#0B2545',
                        margin: '0 0 0.5rem 0',
                        lineHeight: 1.35,
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: '#475569',
                        lineHeight: 1.55,
                        margin: '0 0 0.75rem 0',
                      }}
                    >
                      {product.description}
                    </p>
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: '#64748B',
                        margin: 0,
                      }}
                    >
                      <strong>Typical Use:</strong> {product.applicationArea}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    padding: '0 1.35rem 1.35rem 1.35rem',
                    display: 'flex',
                    gap: '0.5rem',
                  }}
                >
                  <button
                    onClick={() =>
                      handleWhatsAppClick(
                        `Hello Vortex Solutions, I am interested in ${product.name} (${product.brand}). Please share technical specifications and quotation.`
                      )
                    }
                    className="vortex-btn-teal"
                    style={{ width: '100%', fontSize: '0.85rem' }}
                  >
                    Request Quote on WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS & SOLUTIONS SECTION ON HOMEPAGE */}
      <section
        style={{
          padding: '4.5rem 0',
          backgroundColor: '#F5F7F7',
          borderTop: '1px solid #E2E8F0',
        }}
        aria-labelledby="applications-heading"
      >
        <div className="vortex-container">
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#118C88',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Sectors & Engineering Domains We Serve
            </span>
            <h2
              id="applications-heading"
              style={{
                fontSize: '2.1rem',
                fontWeight: 800,
                color: '#0B2545',
                margin: '0.5rem 0',
                lineHeight: 1.28,
              }}
            >
              Applications, Water Softening & Fluid Management Solutions
            </h2>
            <p
              style={{
                color: '#475569',
                maxWidth: '720px',
                margin: '0 auto',
                fontSize: '0.96rem',
                textAlign: 'center',
              }}
            >
              Tailored Wilo fluid-handling, Havells heat pump hot water systems,
              hard-water softening services, and SFMC & Astral piping
              configurations across Chhattisgarh.
            </p>
          </div>

          <div className="vortex-grid-products">
            {APPLICATION_SOLUTIONS.map((item) => (
              <article key={item.id} className="vortex-product-card">
                <div>
                  <div
                    className="vortex-product-image-container"
                    style={{ height: '190px' }}
                  >
                    <img
                      src={resolveImageUrl(item.imageUrl)}
                      alt={item.imageAlt}
                      className="vortex-product-img"
                      loading="lazy"
                    />
                    <div className="vortex-product-badge-row">
                      <span className="vortex-badge-brand">
                        {item.sectorTag}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '1.35rem' }}>
                    <h3
                      style={{
                        fontSize: '1.12rem',
                        fontWeight: 800,
                        color: '#0B2545',
                        margin: '0 0 0.5rem 0',
                        lineHeight: 1.32,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: '#475569',
                        lineHeight: 1.55,
                        marginBottom: '0.85rem',
                      }}
                    >
                      {item.description}
                    </p>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: '#118C88',
                        backgroundColor: '#F0FDFA',
                        padding: '6px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      Key Equipment: {item.relatedSolution}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: '0 1.35rem 1.35rem 1.35rem',
                    display: 'flex',
                    gap: '0.6rem',
                  }}
                >
                  <button
                    onClick={() =>
                      navigateTo('products', item.targetCategory, 'All')
                    }
                    style={{
                      flex: 1,
                      padding: '0.6rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #118C88',
                      backgroundColor: '#FFFFFF',
                      color: '#118C88',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                    }}
                  >
                    View Products
                  </button>
                  <button
                    onClick={() =>
                      handleWhatsAppClick(
                        `Hello Vortex Solutions, we require technical guidance and a quotation for ${item.title}.`
                      )
                    }
                    className="vortex-btn-teal"
                    style={{
                      flex: 1,
                      fontSize: '0.82rem',
                      padding: '0.6rem 0.75rem',
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO & B2B TRUST BANNER */}
      <section
        style={{
          padding: '4rem 0',
          backgroundColor: '#0B2545',
          color: '#FFFFFF',
        }}
        aria-labelledby="why-vortex-heading"
      >
        <div className="vortex-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  color: '#00CEC8',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Raipur & Chhattisgarh B2B Engineering Partner
              </span>
              <h2
                id="why-vortex-heading"
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  margin: '0.5rem 0 1rem 0',
                  color: '#FFFFFF',
                  lineHeight: 1.28,
                }}
              >
                Why Builders, Industries & Contractors Choose Vortex Solutions
              </h2>
              <p
                style={{
                  color: '#CBD5E1',
                  lineHeight: 1.65,
                  fontSize: '0.95rem',
                  marginBottom: '1.25rem',
                }}
              >
                Vortex Solutions combines application-level hydraulic sizing
                with a comprehensive inventory of Wilo pumps, Havells heat
                pumps, SFMC & Astral piping systems, and turnkey Water Softener
                installations in Raipur, Chhattisgarh.
              </p>
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}
              >
                <button
                  onClick={() => navigateTo('about')}
                  className="vortex-btn-primary"
                >
                  About Vortex Solutions
                </button>
                <button
                  onClick={() => navigateTo('projects')}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #00CEC8',
                    color: '#00CEC8',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Submit Project BOQ
                </button>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                {
                  title: 'Accurate Pump & Pipe Sizing',
                  desc: 'Selection based on duty head, flow rate (LPM/m³h), solid handling, and PN pressure ratings.',
                },
                {
                  title: 'Dedicated Brand Expertise',
                  desc: 'Wilo pumps, Havells heat pumps, SFMC industrial/infrastructure pipes, and Astral plumbing systems.',
                },
                {
                  title: 'Water Softener Service',
                  desc: 'Complete hard-water testing, resin vessel sizing, installation, and MPV commissioning.',
                },
                {
                  title: 'Raipur Local Dispatch & Support',
                  desc: 'Responsive B2B coordination from Ramnagar, Kota Rd, Raipur across Chhattisgarh.',
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(0, 206, 200, 0.25)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                  }}
                >
                  <CheckCircleIcon
                    style={{
                      width: '24px',
                      height: '24px',
                      color: '#00CEC8',
                      marginBottom: '0.6rem',
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      margin: '0 0 0.4rem 0',
                      color: '#FFFFFF',
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: '#CBD5E1',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// 10. PRODUCTS CATALOGUE & DEDICATED CATEGORY/BRAND LANDING VIEW
// ============================================================================

function ProductsView({
  handleWhatsAppClick,
  initialCategory = 'All',
  initialBrand = 'All',
  navigateTo,
}: {
  handleWhatsAppClick: (msg?: string) => void;
  initialCategory: string;
  initialBrand: string;
  navigateTo: (view: any, category?: string, brand?: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || 'All'
  );
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'All');

  useEffect(() => {
    setSelectedCategory(initialCategory || 'All');
    setSelectedBrand(initialBrand || 'All');
  }, [initialCategory, initialBrand]);

  const activeCategoryObj = useMemo(
    () => CATEGORIES.find((c) => c.name === selectedCategory),
    [selectedCategory]
  );

  const activeBrandObj = useMemo(
    () => (selectedBrand !== 'All' ? BRAND_CATALOG[selectedBrand] : undefined),
    [selectedBrand]
  );

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.applicationArea.toLowerCase().includes(q);
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand =
        selectedBrand === 'All' || product.brand === selectedBrand;
      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [searchTerm, selectedCategory, selectedBrand]);

  return (
    <div style={{ padding: '3rem 0', minHeight: '80vh' }}>
      <div className="vortex-container">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            marginBottom: '1rem',
            fontSize: '0.84rem',
            color: '#64748B',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => navigateTo('home')}
            style={{
              background: 'none',
              border: 'none',
              color: '#118C88',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedBrand('All');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#118C88',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Products Catalogue
          </button>
          {selectedBrand !== 'All' && (
            <>
              <span>/</span>
              <span style={{ color: '#0B2545', fontWeight: 700 }}>
                {selectedBrand}
              </span>
            </>
          )}
          {selectedCategory !== 'All' && (
            <>
              <span>/</span>
              <span style={{ color: '#0B2545', fontWeight: 700 }}>
                {selectedCategory}
              </span>
            </>
          )}
        </nav>

        {/* Dynamic Category or Brand Landing Header */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            padding: '2rem',
            border: '1px solid #E2E8F0',
            marginBottom: '2rem',
            boxShadow: '0 4px 12px rgba(11, 37, 69, 0.04)',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#118C88',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {activeBrandObj
              ? `${activeBrandObj.name} Specialized Range`
              : activeCategoryObj
              ? `${activeCategoryObj.group} • ${activeCategoryObj.tag}`
              : 'Vortex Solutions • Raipur, Chhattisgarh'}
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.65rem, 3vw, 2.35rem)',
              fontWeight: 800,
              color: '#0B2545',
              lineHeight: 1.28,
              margin: '0.45rem 0 0.85rem 0',
            }}
          >
            {activeBrandObj && selectedCategory === 'All'
              ? `${activeBrandObj.name} — ${activeBrandObj.specialization}`
              : activeCategoryObj
              ? `${activeCategoryObj.name} in Raipur, Chhattisgarh`
              : 'Complete Pumping, Piping, Heat Pump & Water Softener Catalogue'}
          </h1>
          <p
            style={{
              color: '#475569',
              fontSize: '0.96rem',
              lineHeight: 1.65,
              maxWidth: '880px',
              margin: 0,
            }}
          >
            {activeBrandObj && selectedCategory === 'All'
              ? activeBrandObj.seoDescription
              : activeCategoryObj
              ? activeCategoryObj.seoSummary
              : 'Explore our structured range of Wilo pumps (STP, pressure boosters, borewell/openwell submersibles, monoblocks, slurry & mud pumps), Havells domestic & commercial heat pumps, SFMC (PPR-FR, PPR composite, DWC & HDPE) pipes, Astral (PVC, uPVC, CPVC & SWR) pipes, and Water Softener services.'}
          </p>

          {activeCategoryObj && (
            <div
              style={{
                marginTop: '1.25rem',
                padding: '1rem 1.25rem',
                backgroundColor: '#F0FDFA',
                borderLeft: '4px solid #118C88',
                borderRadius: '6px',
                fontSize: '0.86rem',
                color: '#0B2545',
                lineHeight: 1.55,
              }}
            >
              <strong>Technical Selection Guidance:</strong>{' '}
              {activeCategoryObj.selectionGuidance}
              <div style={{ marginTop: '6px', color: '#475569' }}>
                <strong>Primary Applications:</strong>{' '}
                {activeCategoryObj.applications.join(' • ')}
              </div>
            </div>
          )}
        </div>

        {/* Search & Filter Controls */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            padding: '1.25rem',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            marginBottom: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            alignItems: 'end',
            textAlign: 'left',
          }}
        >
          {/* Keyword Search (Explicit White Background & Dark Navy Text) */}
          <div>
            <label
              htmlFor="catalog-search"
              style={{
                display: 'block',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#0B2545',
                marginBottom: '6px',
              }}
            >
              Search by Product, Application, or Keyword
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="catalog-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g., Wilo slurry, Havells heat pump, SFMC DWC, Astral CPVC, Softener..."
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#FFFFFF',
                  color: '#0B2545',
                  fontSize: '0.88rem',
                }}
              />
              <SearchIcon
                style={{
                  width: '16px',
                  height: '16px',
                  color: '#64748B',
                  position: 'absolute',
                  left: '10px',
                  top: '11px',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label
              htmlFor="category-select"
              style={{
                display: 'block',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#0B2545',
                marginBottom: '6px',
              }}
            >
              Product / Service Category
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.88rem',
                backgroundColor: '#FFFFFF',
                color: '#0B2545',
              }}
            >
              <option value="All">All Categories ({CATEGORIES.length})</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name} ({cat.group})
                </option>
              ))}
            </select>
          </div>

          {/* Brand Dropdown */}
          <div>
            <label
              htmlFor="brand-select"
              style={{
                display: 'block',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#0B2545',
                marginBottom: '6px',
              }}
            >
              Manufacturer Brand
            </label>
            <select
              id="brand-select"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.88rem',
                backgroundColor: '#FFFFFF',
                color: '#0B2545',
              }}
            >
              <option value="All">
                All Brands (Wilo, Havells, SFMC, Astral & Water Tech)
              </option>
              {BRANDS.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
              <option value="Vortex Water Tech">
                Vortex Water Tech (Water Softeners)
              </option>
            </select>
          </div>

          {/* Reset Filters */}
          {(searchTerm ||
            selectedCategory !== 'All' ||
            selectedBrand !== 'All') && (
            <div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedBrand('All');
                }}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#F8FAFC',
                  color: '#0B2545',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Quick Brand Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.75rem',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#475569',
              marginRight: '4px',
            }}
          >
            Quick Filter:
          </span>
          {['All', ...BRANDS, 'Vortex Water Tech'].map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                border:
                  selectedBrand === b
                    ? '1px solid #0B2545'
                    : '1px solid #CBD5E1',
                backgroundColor: selectedBrand === b ? '#0B2545' : '#FFFFFF',
                color: selectedBrand === b ? '#00CEC8' : '#202729',
              }}
            >
              {b === 'All' ? 'All Brands' : b}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div
          style={{
            marginBottom: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.88rem',
            color: '#475569',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span>
            Showing <strong>{filteredProducts.length}</strong> of{' '}
            {PRODUCTS.length} catalog products
          </span>
          <button
            onClick={() => navigateTo('projects')}
            style={{
              background: 'none',
              border: 'none',
              color: '#118C88',
              fontWeight: 700,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Need a custom model or bulk BOQ quote? Click here &rarr;
          </button>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '3.5rem 2rem',
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #E2E8F0',
            }}
          >
            <SettingsIcon
              style={{
                width: '48px',
                height: '48px',
                color: '#94A3B8',
                margin: '0 auto 1rem auto',
              }}
            />
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0B2545',
                marginBottom: '0.5rem',
              }}
            >
              No matching catalog items for that filter combination
            </h2>
            <p
              style={{
                color: '#64748B',
                marginBottom: '1.25rem',
                fontSize: '0.92rem',
                textAlign: 'center',
              }}
            >
              Note our brand specializations: <strong>Wilo</strong> (all pumps),{' '}
              <strong>Havells</strong> (heat pumps), <strong>SFMC</strong>{' '}
              (PPR-FR, PPR composite, DWC, HDPE & column pipes),{' '}
              <strong>Astral</strong> (PVC, uPVC, CPVC & SWR pipes), and{' '}
              <strong>Vortex Water Tech</strong> (Water Softeners). Reset
              filters or enquire on WhatsApp!
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedBrand('All');
                }}
                className="vortex-btn-teal"
              >
                Show All Products
              </button>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    'Hello Vortex Solutions, I am looking for a specific pump, pipe, heat pump, or water softener specification.'
                  )
                }
                className="vortex-btn-primary"
              >
                Enquire on WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <div className="vortex-grid-products">
            {filteredProducts.map((product) => (
              <article key={product.id} className="vortex-product-card">
                <div>
                  <ProductCardImage
                    imageUrl={product.imageUrl}
                    imageAlt={product.imageAlt}
                    category={product.category}
                    brand={product.brand}
                  />
                  <div style={{ padding: '1.35rem' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#118C88',
                        backgroundColor: '#F0FDFA',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {product.highlight}
                    </span>
                    <h2
                      style={{
                        fontSize: '1.08rem',
                        fontWeight: 800,
                        color: '#0B2545',
                        margin: '0 0 0.5rem 0',
                        lineHeight: 1.35,
                      }}
                    >
                      {product.name}
                    </h2>
                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: '#475569',
                        lineHeight: 1.55,
                        margin: '0 0 0.75rem 0',
                      }}
                    >
                      {product.description}
                    </p>
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: '#64748B',
                        margin: 0,
                      }}
                    >
                      <strong>Applications:</strong> {product.applicationArea}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    padding: '0 1.35rem 1.35rem 1.35rem',
                    display: 'flex',
                    gap: '0.5rem',
                  }}
                >
                  <button
                    onClick={() =>
                      handleWhatsAppClick(
                        `Hello Vortex Solutions, I am interested in ${product.name} (${product.brand} - ${product.category}). Please share specifications and price quotation.`
                      )
                    }
                    className="vortex-btn-teal"
                    style={{ width: '100%', fontSize: '0.84rem' }}
                  >
                    Request Quote / Sizing
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// 11. DEDICATED APPLICATIONS & SOLUTIONS VIEW
// ============================================================================

function ApplicationsSolutionsView({
  navigateTo,
  handleWhatsAppClick,
}: {
  navigateTo: (view: any, category?: string, brand?: string) => void;
  handleWhatsAppClick: (msg?: string) => void;
}) {
  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="vortex-container">
        <div
          style={{
            backgroundColor: '#0B2545',
            color: '#FFFFFF',
            borderRadius: '16px',
            padding: '3rem 2rem',
            marginBottom: '3rem',
          }}
        >
          <span
            style={{
              color: '#00CEC8',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Industry & Infrastructure Solutions • Raipur, Chhattisgarh
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              margin: '0.5rem 0 1rem 0',
              color: '#FFFFFF',
              lineHeight: 1.28,
            }}
          >
            Applications, Water Softening & Fluid Management Solutions
          </h1>
          <p
            style={{
              color: '#E2E8F0',
              maxWidth: '780px',
              lineHeight: 1.65,
              fontSize: '1rem',
              margin: 0,
            }}
          >
            Vortex Solutions partners with civil engineers, MEP consultants,
            industrial plant managers, hoteliers, and homeowners to supply
            application-matched Wilo pumps, Havells heat pumps, SFMC & Astral
            piping systems, and turnkey Water Softener services.
          </p>
        </div>

        <div
          className="vortex-grid-products"
          style={{ marginBottom: '3.5rem' }}
        >
          {APPLICATION_SOLUTIONS.map((app) => (
            <article key={app.id} className="vortex-product-card">
              <div>
                <div
                  className="vortex-product-image-container"
                  style={{ height: '210px' }}
                >
                  <img
                    src={resolveImageUrl(app.imageUrl)}
                    alt={app.imageAlt}
                    className="vortex-product-img"
                    loading="lazy"
                  />
                  <div className="vortex-product-badge-row">
                    <span className="vortex-badge-brand">{app.sectorTag}</span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h2
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#0B2545',
                      margin: '0 0 0.6rem 0',
                      lineHeight: 1.32,
                    }}
                  >
                    {app.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                    }}
                  >
                    {app.description}
                  </p>
                  <div
                    style={{
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#F0FDFA',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      color: '#0B2545',
                      fontWeight: 600,
                    }}
                  >
                    <strong>Recommended Systems:</strong> {app.relatedSolution}
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: '0 1.5rem 1.5rem 1.5rem',
                  display: 'flex',
                  gap: '0.75rem',
                }}
              >
                <button
                  onClick={() =>
                    navigateTo('products', app.targetCategory, 'All')
                  }
                  style={{
                    flex: 1,
                    padding: '0.65rem',
                    borderRadius: '8px',
                    border: '1px solid #118C88',
                    backgroundColor: '#FFFFFF',
                    color: '#118C88',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                  }}
                >
                  Browse Equipment
                </button>
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      `Hello Vortex Solutions, I would like to discuss system selection for ${app.title}.`
                    )
                  }
                  className="vortex-btn-teal"
                  style={{ flex: 1, fontSize: '0.84rem' }}
                >
                  Discuss Application
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 12. ABOUT VORTEX SOLUTIONS VIEW
// ============================================================================

function AboutCompanyView({
  navigateTo,
  handleWhatsAppClick,
}: {
  navigateTo: (view: any, category?: string, brand?: string) => void;
  handleWhatsAppClick: (msg?: string) => void;
}) {
  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="vortex-container">
        <article
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '2.5rem',
            boxShadow: '0 4px 16px rgba(11, 37, 69, 0.05)',
            marginBottom: '2.5rem',
          }}
        >
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#118C88',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            About Our Firm • Raipur, Chhattisgarh
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#0B2545',
              margin: '0.5rem 0 1.25rem 0',
              lineHeight: 1.28,
            }}
          >
            Vortex Solutions — Engineered Pumping, Piping, Heat Pump & Water
            Conditioning Systems
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#334155',
              lineHeight: 1.75,
              marginBottom: '1.25rem',
            }}
          >
            <strong>Vortex Solutions</strong> is a specialized fluid-handling,
            pumping, piping, and water-conditioning supply and service firm
            headquartered in <strong>Raipur, Chhattisgarh</strong>. Guided by
            our core engineering philosophy—
            <em>“Engineered Solution for Everydrop”</em>—we help residential
            developers, commercial establishments, industrial plants, and
            agricultural projects source dependable water infrastructure
            equipment.
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: '#334155',
              lineHeight: 1.75,
              marginBottom: '2rem',
            }}
          >
            Instead of offering generic off-the-shelf components, we focus on
            matching your system's exact hydraulic duty parameters, thermal
            demand, water hardness profile, and pipeline pressure ratings with
            proven solutions from{' '}
            <strong>Wilo, Havells, SFMC, and Astral</strong>, alongside our
            dedicated <strong>Water Softener</strong> systems and services.
          </p>

          {/* Technical Consultation Callout */}
          <section
            aria-labelledby="consultation-heading"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #CBD5E1',
              borderLeft: '5px solid #118C88',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '0.75rem',
              }}
            >
              <CheckCircleIcon
                style={{ width: '28px', height: '28px', color: '#118C88' }}
              />
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#118C88',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Application Engineering & B2B Supply
                </span>
                <h2
                  id="consultation-heading"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: '#0B2545',
                    margin: 0,
                    lineHeight: 1.28,
                  }}
                >
                  Authorized Brand Matrix & Water Softener Services
                </h2>
              </div>
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#334155',
                lineHeight: 1.7,
                margin: '0 0 1rem 0',
              }}
            >
              Our technical desk in Raipur coordinates complete B2B project
              quotations, system sizing, and supply across Chhattisgarh—covering{' '}
              <strong>Wilo</strong> pumping systems (submersible, openwell,
              monoblock, slurry, mud, STP, dewatering, and hydro-pneumatic
              boosters), <strong>Havells</strong> domestic & commercial
              air-source heat pumps, <strong>SFMC</strong> high-performance
              piping (PPR-FR, PPR Composite, DWC, HDPE, and column pipes),{' '}
              <strong>Astral</strong> plumbing & drainage pipes (PVC, uPVC,
              CPVC, and SWR), and turnkey <strong>Water Softener</strong>{' '}
              installation services.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    `Hello Vortex Solutions, I would like to connect regarding a pumping, piping, heat pump, or water softener requirement.`
                  )
                }
                className="vortex-btn-teal"
              >
                Connect with Technical Team on WhatsApp
              </button>
              <button
                onClick={() => navigateTo('projects')}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #0B2545',
                  color: '#0B2545',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Request Project BOQ Review
              </button>
            </div>
          </section>

          {/* Core Competencies Grid */}
          <h2
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#0B2545',
              marginBottom: '1rem',
              lineHeight: 1.28,
            }}
          >
            Core Brand & Technical Specializations
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                title: 'Wilo Pumping Systems',
                items: [
                  'Borewell & Openwell Submersible Pumps',
                  'Centrifugal Monoblock & Self-Priming Pumps',
                  'Slurry, Mud & Dewatering Pumps',
                  'STP Sewage & Wastewater Pumps',
                  'Hydro-Pneumatic Pressure Boosters & Industrial Pumps',
                ],
              },
              {
                title: 'SFMC & Astral Piping Systems',
                items: [
                  'SFMC PPR-FR Fire-Retardant Pipes',
                  'SFMC Glass-Fiber PPR Composite Pipes',
                  'SFMC HDPE (PE-80/PE-100) & DWC Corrugated Pipes',
                  'Astral CPVC, uPVC & PVC Plumbing Pipes',
                  'Astral SWR Soil, Waste & Rainwater Drainage Systems',
                ],
              },
              {
                title: 'Havells Heat Pumps & Water Softeners',
                items: [
                  'Havells Domestic Air-Source Heat Pumps',
                  'Havells Commercial Air-Source Heat Pumps',
                  'Automatic & Manual Ion-Exchange Water Softeners',
                  'Multigrade Sand Filters (MGF) & Hard Water Service',
                  'Submersible Flat Cables, Panels & Pressure Tanks',
                ],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#0B2545',
                    marginBottom: '0.75rem',
                  }}
                >
                  {group.title}
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '1.1rem',
                    fontSize: '0.88rem',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  {group.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

// ============================================================================
// 13. PROJECT & BULK ENQUIRY VIEW
// ============================================================================

function ProjectEnquiryView({
  handleWhatsAppClick,
}: {
  handleWhatsAppClick: (msg?: string) => void;
}) {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    city: 'Raipur',
    projectType: 'Commercial Building / Hotel / Hospital',
    details: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <div
      style={{
        padding: '3.5rem 0',
        backgroundColor: '#FFFFFF',
        minHeight: '80vh',
      }}
    >
      <div className="vortex-container" style={{ maxWidth: '880px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <FileTextIcon
            style={{
              width: '48px',
              height: '48px',
              color: '#118C88',
              margin: '0 auto 0.75rem auto',
            }}
          />
          <h1
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0B2545',
              margin: '0 0 0.5rem 0',
              lineHeight: 1.28,
            }}
          >
            Project, Tender & Bulk BOQ Enquiries
          </h1>
          <p
            style={{
              color: '#475569',
              fontSize: '0.96rem',
              maxWidth: '640px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            For builders, civil contractors, MEP consultants, industrial
            procurement teams, and architects across Raipur and Chhattisgarh.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#F8FAFC',
            padding: '2.25rem',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
          }}
        >
          {status === 'submitted' ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <CheckCircleIcon
                style={{
                  width: '56px',
                  height: '56px',
                  color: '#10B981',
                  margin: '0 auto 1rem auto',
                }}
              />
              <h2
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#0B2545',
                  marginBottom: '0.5rem',
                }}
              >
                Project Enquiry Recorded
              </h2>
              <p
                style={{
                  color: '#475569',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                }}
              >
                Thank you, {formData.fullName}. For instant priority response
                from our technical desk in Raipur, you can also forward these
                details directly to our WhatsApp below.
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      `Hello Vortex Solutions, Project Enquiry from ${formData.fullName} (${formData.company}, ${formData.city}). Project Type: ${formData.projectType}. Requirement: ${formData.details}`
                    )
                  }
                  className="vortex-btn-primary"
                >
                  Send Enquiry Directly via WhatsApp
                </button>
                <button
                  onClick={() => setStatus('idle')}
                  className="vortex-btn-teal"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <label
                    htmlFor="proj-name"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '6px',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="proj-name"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="proj-company"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '6px',
                    }}
                  >
                    Company / Organization *
                  </label>
                  <input
                    id="proj-company"
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="proj-phone"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '6px',
                    }}
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="proj-phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="proj-email"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '6px',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="proj-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="proj-city"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '6px',
                    }}
                  >
                    Project City / Site Location
                  </label>
                  <input
                    id="proj-city"
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="proj-type"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '6px',
                    }}
                  >
                    Project Sector
                  </label>
                  <select
                    id="proj-type"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  >
                    <option>Commercial Building / Hotel / Hospital</option>
                    <option>
                      Residential Apartment / Villa / Housing Society
                    </option>
                    <option>
                      Water Softener & Water Treatment Installation
                    </option>
                    <option>Industrial / Steel / Manufacturing Plant</option>
                    <option>STP / Municipal Wastewater / Drainage</option>
                    <option>Agricultural Irrigation / Borewell Scheme</option>
                    <option>Other Turnkey Requirement</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="proj-details"
                  style={{
                    display: 'block',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: '#0B2545',
                    marginBottom: '6px',
                  }}
                >
                  Technical Specifications / BOQ Summary *
                </label>
                <textarea
                  id="proj-details"
                  required
                  rows={5}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder="Describe required Wilo pump models (flow rate, head, HP), Havells heat pump capacity, SFMC pipes (PPR-FR, PPR composite, HDPE, DWC), Astral pipes (PVC, uPVC, CPVC, SWR), or Water Softener capacity..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    backgroundColor: '#FFFFFF',
                    color: '#0B2545',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #E2E8F0',
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  * Required fields for technical review
                </span>
                <button
                  type="submit"
                  className="vortex-btn-teal"
                  style={{ padding: '0.8rem 2rem', fontSize: '0.95rem' }}
                >
                  Submit Project Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 14. CONTACT US VIEW
// ============================================================================

function ContactView({
  handleWhatsAppClick,
}: {
  handleWhatsAppClick: (msg?: string) => void;
}) {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <div
      style={{
        padding: '3.5rem 0',
        backgroundColor: '#FFFFFF',
        minHeight: '80vh',
      }}
    >
      <div className="vortex-container">
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#118C88',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Direct Technical & Sales Desk
          </span>
          <h1
            style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: '#0B2545',
              margin: '0.4rem 0 0.5rem 0',
              lineHeight: 1.28,
            }}
          >
            Contact Vortex Solutions — Raipur, Chhattisgarh
          </h1>
          <p
            style={{
              color: '#475569',
              fontSize: '0.96rem',
              maxWidth: '680px',
              margin: 0,
            }}
          >
            Reach out to our technical sales team for Wilo pump sizing, Havells
            heat pumps, SFMC & Astral pipe specifications, and Water Softener
            services.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Contact Details Card */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div
              style={{
                backgroundColor: '#F8FAFC',
                padding: '1.75rem',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
              }}
            >
              <h2
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#0B2545',
                  margin: '0 0 1rem 0',
                }}
              >
                Raipur Office & Dispatch
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  fontSize: '0.92rem',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <MapPinIcon
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#118C88',
                      marginRight: '10px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <span>{BUSINESS_CONFIG.location.addressLine}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#118C88',
                      marginRight: '10px',
                      flexShrink: 0,
                    }}
                  />
                  <a
                    href={`tel:${BUSINESS_CONFIG.contactPhone.replace(
                      /\s+/g,
                      ''
                    )}`}
                    style={{
                      color: '#0B2545',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    {BUSINESS_CONFIG.contactPhone}
                  </a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <MailIcon
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#118C88',
                      marginRight: '10px',
                      flexShrink: 0,
                    }}
                  />
                  <a
                    href={`mailto:${BUSINESS_CONFIG.contactEmail}`}
                    style={{
                      color: '#0B2545',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    {BUSINESS_CONFIG.contactEmail}
                  </a>
                </li>
              </ul>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #E2E8F0',
                }}
              >
                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      'Hello Vortex Solutions, I would like to speak with your technical team.'
                    )
                  }
                  className="vortex-btn-primary"
                  style={{ width: '100%' }}
                >
                  Chat on WhatsApp Now
                </button>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#F8FAFC',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
              }}
            >
              <h2
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#0B2545',
                  margin: '0 0 0.75rem 0',
                }}
              >
                Business Hours
              </h2>
              <p
                style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '0.9rem',
                  color: '#334155',
                  fontWeight: 600,
                }}
              >
                {BUSINESS_CONFIG.businessHours}
              </p>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#64748B' }}>
                Sunday: Closed (WhatsApp enquiries monitored for urgent
                industrial support)
              </p>
            </div>
          </div>

          {/* Direct Message Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(11, 37, 69, 0.04)',
            }}
          >
            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#0B2545',
                margin: '0 0 1.25rem 0',
              }}
            >
              Send a Direct Enquiry
            </h2>
            {status === 'submitted' ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircleIcon
                  style={{
                    width: '48px',
                    height: '48px',
                    color: '#10B981',
                    margin: '0 auto 1rem auto',
                  }}
                />
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0B2545',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    color: '#475569',
                    marginBottom: '1.25rem',
                    textAlign: 'center',
                  }}
                >
                  Our team in Raipur will respond shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="vortex-btn-teal"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '4px',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '4px',
                    }}
                  >
                    Phone / Mobile Number *
                  </label>
                  <input
                    id="contact-phone"
                    required
                    type="tel"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '4px',
                    }}
                  >
                    Product / Service of Interest *
                  </label>
                  <input
                    id="contact-subject"
                    required
                    type="text"
                    placeholder="e.g., Wilo Submersible/Slurry Pump, Havells Heat Pump, SFMC PPR/DWC, Astral CPVC, Water Softener"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-msg"
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0B2545',
                      marginBottom: '4px',
                    }}
                  >
                    Requirement Details *
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      backgroundColor: '#FFFFFF',
                      color: '#0B2545',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="vortex-btn-teal"
                  style={{ padding: '0.75rem 1.5rem', fontSize: '0.92rem' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
