import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Users, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigateHome: () => void;
}

// Local images for Organic Beltline project - ALL 12 IMAGES
const organicBeltlineImages = [
  new URL('../images/logo-organic-beltline/imgi_42_ed9ac1143551981.627c7bfc9b51c.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_43_dd6645143551981.627c7bfc9bcb7.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_44_23c42a143551981.627c7bfc9cd28.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_45_b8e476143551981.627c7bfc9e79e.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_46_b3f42b143551981.627c7bfc9b0c0.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_124_8b80b1143551981.627c7bfc9c2c2.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_126_f3f563143551981.627c7bfc9ffc7.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_128_963580143551981.627c7bfc9de36.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_130_5f7972143551981.627c7bfc9f098.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_132_f74906143551981.627c7bfc9f7b5.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_134_58924e143551981.627c7bfc9ac0a.jpg', import.meta.url).href,
  new URL('../images/logo-organic-beltline/imgi_136_176b7b143551981.627c7bfc9d63d.jpg', import.meta.url).href,
];

// Local images for The qexle rebranding project - ALL 27 IMAGES
const qexleRebrandingImages = [
  new URL('../images/the-qexle-branding/imgi_10_28a1ab137769287.6210f6447ae00.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_11_0c0704137769287.6210f64481ae6.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_12_87b868137769287.6210f6447fded.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_13_93bd4e137769287.6210f6447b635.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_14_c5541a137769287.6210f64484f12.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_15_7e91bd137769287.6210f6447c432.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_16_ebe685137769287.6210f6447ec1c.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_17_765024137769287.6210f64483f83.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_18_cd4485137769287.6210f64485744.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_19_21a411137769287.6210f64483056.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_20_0a96f3137769287.6210f64479eac.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_21_858cb8137769287.6210f64483826.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_22_1fbdc8137769287.6210f6447cb85.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_23_759264137769287.6210f6447db5f.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_24_bf749e137769287.6210f6447bc40.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_25_aec3ab137769287.6210f644795fc.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_26_4b81ad137769287.6210f644847dd.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_27_9cba49137769287.6210f6447e472.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_28_31dbb1137769287.6210f644828bb.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_29_695ecd137769287.6210f6447d3ff.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_30_abb68b137769287.6210f6447a74d.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_31_a09634137769287.6210f64485f5c.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_32_1faf4d137769287.6210f6447f7c9.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_33_d20b05137769287.6210f6447f1d9.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_34_e20e4a137769287.6210f64486665.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_35_fa5a19137769287.6210f64482292.jpg', import.meta.url).href,
  new URL('../images/the-qexle-branding/imgi_36_76e7cf137769287.6210f644805e0.jpg', import.meta.url).href,
];

// Local images for Bistro Coffee Shop project
const bistroCoffeeShopImages = [
  new URL('../images/logo-bistro-coffee-shop/imgi_29_3b8942135068517.61e10c014bc0f.jpg', import.meta.url).href,
  new URL('../images/logo-bistro-coffee-shop/imgi_31_504abc135068517.61e10c014cb8a.jpg', import.meta.url).href,
  new URL('../images/logo-bistro-coffee-shop/imgi_114_8a5c65135068517.61e10c014e6c2.jpg', import.meta.url).href,
  new URL('../images/logo-bistro-coffee-shop/imgi_117_c78179135068517.61e10c014e128.jpg', import.meta.url).href,
  new URL('../images/logo-bistro-coffee-shop/imgi_119_59d557135068517.61e10c014d367.jpg', import.meta.url).href,
  new URL('../images/logo-bistro-coffee-shop/imgi_121_0a7897135068517.61e10c014d93e.jpg', import.meta.url).href,
  new URL('../images/logo-bistro-coffee-shop/imgi_123_d0846a135068517.61e10c014c459.jpg', import.meta.url).href,
];

// Local images for Colombo Kings project
const colomboKingsImages = [
  new URL('../images/logo-concept-colombo-kings/imgi_27_888ef0130936549.618ac232ec5e6.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_101_5b49e8130936549.618ac232ee087.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_103_7da652130936549.618ac232ed54e.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_106_736774130936549.618ac232ecf6f.jpg', import.meta.url).href,
  new URL('../images/logo-concept-colombo-kings/imgi_109_f12e79130936549.618ac232edae3.jpg', import.meta.url).href,
];

const kandyTuskersImages = [
  new URL('../images/logo-concept-kandy-tuskers/imgi_30_ee4330130369959.617ede0e2b955.jpg', import.meta.url).href,
  new URL('../images/logo-concept-kandy-tuskers/imgi_106_4e0064130369959.617ede0e2db05.jpg', import.meta.url).href,
  new URL('../images/logo-concept-kandy-tuskers/imgi_110_389ef9130369959.617ede0e2cd2c.jpg', import.meta.url).href,
  new URL('../images/logo-concept-kandy-tuskers/imgi_113_251543130369959.617ede0e2c7c5.jpg', import.meta.url).href,
  new URL('../images/logo-concept-kandy-tuskers/imgi_116_4837d4130369959.617ede0e2d513.jpg', import.meta.url).href,
  new URL('../images/logo-concept-kandy-tuskers/imgi_118_af2e1c130369959.617ede0e2c259.jpg', import.meta.url).href,
];

// Local images for NOIR Interior Design project - ALL 5 IMAGES
const noirInteriorDesignImages = [
  new URL('../images/logo-noir/imgi_29_471143143551429.627c7892a22b1.jpg', import.meta.url).href,
  new URL('../images/logo-noir/imgi_30_e6405e143551429.627c7892a2808.jpg', import.meta.url).href,
  new URL('../images/logo-noir/imgi_31_e16818143551429.627c7892a1c0c.jpg', import.meta.url).href,
  new URL('../images/logo-noir/imgi_32_e0b78f143551429.627c7892a0d31.jpg', import.meta.url).href,
  new URL('../images/logo-noir/imgi_111_a122cf143551429.627c7892a1546.jpg', import.meta.url).href,
];

// Local images for Kozha Leather Collections project - ALL 11 IMAGES
const kozhaLeatherImages = [
  new URL('../images/logo-kozha-leather/imgi_16_d9e0ed144036805.6285223fef20c.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_17_60e7f6144036805.6285223fedde8.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_35_9d9e81144036805.6285223fecf2c.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_36_12edc4144036805.6285223ff0cd1.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_37_1f6657144036805.6285223fee455.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_38_798756144036805.6285223fed600.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_39_27e0b9144036805.6285223feec01.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_40_693fa7144036805.6285223ff03cf.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_41_604a3e144036805.6285223fefc84.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_42_5e8366144036805.6285223ff13d5.jpg', import.meta.url).href,
  new URL('../images/logo-kozha-leather/imgi_45_54a327144036805.6285223ff1eee.jpg', import.meta.url).href,
];

// Local images for Gyroction project - ALL 12 IMAGES
const gyroctionImages = [
  new URL('../images/logo-gyroction/efe0a7145776937.62a44786baedf.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/01897f145776937.62a44786bd827.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/1b64ce145776937.62a44786ba144.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/2700b8145776937.62a44786bce93.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/271f5a145776937.62a44786b823c.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/307854145776937.62a44786ba6bd.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/629390145776937.62a44786b8bab.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/645ac2145776937.62a44786b98ab.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/771a8a145776937.62a44786b91ad.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/97fec5145776937.62a44786bb599.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/b600db145776937.62a44786bbd4a.jpg', import.meta.url).href,
  new URL('../images/logo-gyroction/d54305145776937.62a44786bc5e3.jpg', import.meta.url).href,
];

// Local images for Nike landing page UI concept - ALL 8 IMAGES
const nikeLandingPageImages = [
  new URL('../images/landing-page-ui-nike/418257146284501.62ad89bede8da.jpg', import.meta.url).href,
  new URL('../images/landing-page-ui-nike/634e8f146284501.62ad89bede331.jpg', import.meta.url).href,
  new URL('../images/landing-page-ui-nike/774495146284501.62ad89bedd651.jpg', import.meta.url).href,
  new URL('../images/landing-page-ui-nike/7b9e16146284501.62ad89bedf47e.jpg', import.meta.url).href,
  new URL('../images/landing-page-ui-nike/cb6646146284501.62ad89bedf94b.jpg', import.meta.url).href,
  new URL('../images/landing-page-ui-nike/cf990d146284501.62ad89bedefb8.jpg', import.meta.url).href,
  new URL('../images/landing-page-ui-nike/fb0aed146284501.62ad89beddd76.jpg', import.meta.url).href,
  new URL('../images/landing-page-ui-nike/fcee58146284501.62ad89bedc891.jpg', import.meta.url).href,
];

// Local images for Wildlife landing page concept - ALL 6 IMAGES
const wildlifeLandingPageImages = [
  new URL('../images/landing-page-wildlife/054fd3146507535.62b1c5409580e.jpg', import.meta.url).href,
  new URL('../images/landing-page-wildlife/1dc3ed146507535.62b1c54095e50.jpg', import.meta.url).href,
  new URL('../images/landing-page-wildlife/5793b6146507535.62b1c54096652.jpg', import.meta.url).href,
  new URL('../images/landing-page-wildlife/ef68f7146507535.62b1c54096b87.jpg', import.meta.url).href,
  new URL('../images/landing-page-wildlife/1a0d28146507535.62b1c54097347.jpg', import.meta.url).href,
  new URL('../images/landing-page-wildlife/bb5eb7146507535.62b1c5409789a.jpg', import.meta.url).href,
];

// Local images for FoodieHut mobile application - ALL 8 IMAGES
const foodieHutImages = [
  new URL('../images/foodiehut-ui-design-and-development/ee7e75210104439.670bb1a9a3865.png', import.meta.url).href,
  new URL('../images/foodiehut-ui-design-and-development/45dce0210104439.670bb1a9a30c9.png', import.meta.url).href,
  new URL('../images/foodiehut-ui-design-and-development/66cd6d210104439.670bb1a9a190e.png', import.meta.url).href,
  new URL('../images/foodiehut-ui-design-and-development/97fec5210104439.670bb1a9a20c6.png', import.meta.url).href,
  new URL('../images/foodiehut-ui-design-and-development/9fed93210104439.670bb1a9a3db5.png', import.meta.url).href,
  new URL('../images/foodiehut-ui-design-and-development/9a8fb6210104439.670bb1a9a4539.png', import.meta.url).href,
  new URL('../images/foodiehut-ui-design-and-development/232675210104439.670bb1a9a28e7.png', import.meta.url).href,
  new URL('../images/foodiehut-ui-design-and-development/b55526210104439.670bb1a9a4c61.png', import.meta.url).href,
];

const projectData: Record<string, any> = {
  'organic-beltline': {
    title: 'Logo Design for Organic Beltline',
    subtitle: 'Organic Brand Identity Design',
    role: 'Graphic Designer • Organic Beltline',
    year: 'Feb 2022',
    duration: 'Brand Identity Project',
    team: 'Solo',
    description: 'Brand identity design for Organic Beltline, focusing on representing the company\'s organic values through visual elements. The project emphasized creating a natural, sustainable visual identity that would resonate with environmentally conscious consumers while maintaining professional appeal and market competitiveness.',
    heroImage: organicBeltlineImages[0],
    behanceLink: 'https://www.behance.net/gallery/143551981/Logo-design-for-Organic-Beltline',
    impact: [
      { metric: '✓', label: 'Created brand identity reflecting organic values' },
      { metric: '✓', label: 'Developed visual elements for brand recognition' },
      { metric: '✓', label: 'Established cohesive brand presence' },
    ],
    responsibilities: [
      'Researched organic industry trends and sustainable design principles',
      'Developed multiple logo concepts emphasizing natural and organic themes',
      'Created comprehensive visual identity system reflecting environmental values',
      'Designed brand applications showcasing organic and sustainable messaging',
      'Established consistent brand guidelines for various marketing materials'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    process: [
      { phase: 'Research & Discovery', description: 'Analyzed organic industry landscape and consumer preferences for sustainable brands.' },
      { phase: 'Concept Development', description: 'Explored visual concepts that authentically represent organic values and natural elements.' },
      { phase: 'Visual Identity Creation', description: 'Developed comprehensive brand system with organic-inspired color palette and typography.' },
      { phase: 'Brand Applications', description: 'Created diverse applications demonstrating brand versatility across various organic product contexts.' },
    ],
    keyFeatures: [
      'Natural color palette reflecting organic and sustainable values',
      'Typography selection balancing organic appeal with professional readability',
      'Visual elements inspired by nature and environmental consciousness',
      'Scalable logo system maintaining organic aesthetic across applications',
      'Cohesive brand identity suitable for organic product marketing'
    ],
    images: organicBeltlineImages,
  },
  'qexle-rebranding': {
    title: 'Rebranding Logo of The qexle',
    subtitle: 'Brand Identity Redesign',
    role: 'Graphic Designer • The qexle',
    year: 'Feb 2022',
    duration: 'Rebranding Project',
    team: 'Solo',
    description: 'A rebranding project for The qexle team, incorporating minimalistic design principles and strategic color choices to enhance brand recognition. The project focused on creating a modern, distinctive identity that would stand out in the competitive digital landscape while maintaining professionalism and approachability.',
    heroImage: qexleRebrandingImages[0],
    behanceLink: 'https://www.behance.net/gallery/137769287/The-qexle-logo-rebranding',
    impact: [
      { metric: '✓', label: 'Incorporated letter Q as significant icon' },
      { metric: '✓', label: 'Used saturated blue color for visual distinction' },
      { metric: '✓', label: 'Applied minimalistic construction for modern appeal' },
      { metric: '✓', label: 'Optimized design for various publication platforms' },
    ],
    responsibilities: [
      'Analyzed existing brand identity and market positioning',
      'Developed minimalistic design concepts emphasizing the letter Q',
      'Selected strategic color palette featuring saturated blue tones',
      'Created comprehensive brand guidelines for various platforms',
      'Designed logo variations for different application contexts'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    process: [
      { phase: 'Brand Analysis', description: 'Evaluated current brand perception and identified opportunities for improvement in the digital marketplace.' },
      { phase: 'Concept Development', description: 'Explored minimalistic approaches focusing on the distinctive Q letterform as a central branding element.' },
      { phase: 'Color Strategy', description: 'Implemented saturated blue palette to create visual distinction and professional appeal.' },
      { phase: 'Platform Optimization', description: 'Adapted the design for optimal performance across various publication and digital platforms.' },
    ],
    keyFeatures: [
      'Minimalistic design approach for contemporary appeal',
      'Strategic use of saturated blue for brand recognition',
      'Q-centric icon design for memorable brand association',
      'Scalable logo system optimized for digital platforms',
      'Professional aesthetic suitable for business applications'
    ],
    images: qexleRebrandingImages,
  },
  'bistro-coffee-shop': {
    title: 'Logo Design for Bistro Coffee Shop',
    subtitle: 'Brand Identity Design',
    role: 'Graphic Designer • Bistro Coffee Shop',
    year: 'Jan 2022',
    duration: 'Brand Identity Project',
    team: 'Solo',
    description: 'Brand identity design for Bistro Coffee Shop in Anuradhapura, creating a logo that captures the welcoming and cozy atmosphere of the establishment. The project focused on developing a distinctive brand identity that reflects the warmth and comfort associated with a local coffee shop experience.',
    heroImage: bistroCoffeeShopImages[0],
    behanceLink: 'https://www.behance.net/gallery/135068517/Logo-Design-for-Bistro-Coffee-shop',
    impact: [
      { metric: '✓', label: 'Created welcoming and cozy brand identity' },
      { metric: '✓', label: 'Developed distinctive logo design' },
      { metric: '✓', label: 'Established brand recognition in local market' },
    ],
    responsibilities: [
      'Researched coffee shop branding trends and local market preferences',
      'Developed multiple logo concepts that reflect the cozy atmosphere',
      'Created comprehensive brand identity including color palette and typography',
      'Designed various logo applications and mockups for real-world usage'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    process: [
      { phase: 'Discovery', description: 'Analyzed the coffee shop industry, target audience, and brand positioning in Anuradhapura market.' },
      { phase: 'Concept Development', description: 'Sketched multiple logo directions focusing on warmth, comfort, and local appeal.' },
      { phase: 'Design Refinement', description: 'Refined selected concepts with attention to typography, iconography, and color harmony.' },
      { phase: 'Brand Applications', description: 'Created comprehensive brand guidelines and mockups showing logo usage across touchpoints.' },
    ],
    keyFeatures: [
      'Warm and inviting color palette reflecting coffee culture',
      'Typography that balances modern appeal with approachable personality',
      'Versatile logo system working across print and digital applications',
      'Scalable design maintaining clarity at various sizes'
    ],
    images: bistroCoffeeShopImages,
  },
  'colombo-kings-logo-concept': {
    title: 'Logo Redesign Concept for Colombo Kings',
    subtitle: 'Branding Concept for LPL Franchise',
    role: 'Graphic Designer • Lanka Premier League, Colombo Kings',
    year: 'Apr 2021',
    duration: 'Concept Project',
    team: 'Solo',
    description: 'A conceptual logo redesign for Colombo Kings, a franchise Twenty20 cricket team based in Colombo, Sri Lanka, competing in the Lanka Premier League. The focus was to create a distinctive team identity while maintaining brand recognition within the sports context.',
    heroImage: colomboKingsImages[0],
    impact: [
      { metric: '✓', label: 'Developed conceptual logo redesign' },
      { metric: '✓', label: 'Created distinctive team identity' },
      { metric: '✓', label: 'Maintained brand recognition in sports context' },
    ],
    responsibilities: [
      'Explored multiple concept directions for the Colombo Kings identity',
      'Crafted a primary mark, supporting lockups, and usage exploration',
      'Prepared presentation-ready mockups for real-world sports applications'
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    process: [
      { phase: 'Discovery', description: 'Researched franchise history, values, and visual references from T20 cricket branding.' },
      { phase: 'Sketch & Concepts', description: 'Developed multiple logo directions balancing modern aggression with heritage.' },
      { phase: 'Refinement', description: 'Selected direction refined with geometry, proportion, and color tuning.' },
      { phase: 'Applications', description: 'Showcased usage across jerseys, merch, and social media graphics.' },
    ],
    keyFeatures: [
      'Bold primary mark with strong presence at small sizes',
      'Versatile lockups for horizontal and stacked formats',
      'Color system aligned with team identity and broadcast needs',
      'Grid-based construction for consistency across applications'
    ],
    images: colomboKingsImages,
  },
  'kandy-tuskers-logo-concept': {
    title: 'Logo Redesign Concept for Kandy Tuskers',
    subtitle: 'Branding Concept for LPL Franchise',
    role: 'Graphic Designer • Lanka Premier League, Kandy Tuskers',
    year: 'Apr–May 2021',
    duration: 'Concept Project',
    team: 'Solo',
    description: 'A conceptual logo redesign for Kandy Tuskers, a Sri Lankan franchise professional Twenty20 cricket team competing in the Lanka Premier League. Focused on creating a distinctive team identity while maintaining brand recognition.',
    heroImage: kandyTuskersImages[0],
    impact: [
      { metric: '✓', label: 'Developed conceptual logo redesign' },
      { metric: '✓', label: 'Created distinctive team identity' },
      { metric: '✓', label: 'Maintained brand recognition in sports context' },
    ],
    responsibilities: [
      'Explored multiple identity directions and motifs',
      'Constructed primary mark and supporting lockups',
      'Built presentation mockups for sports applications'
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    process: [
      { phase: 'Discovery', description: 'Studied LPL branding landscape and Kandy cultural motifs.' },
      { phase: 'Concepts', description: 'Sketched and digitized multiple tusker-inspired marks.' },
      { phase: 'Refinement', description: 'Iterated geometry, spacing, and color tuning.' },
      { phase: 'Applications', description: 'Explored usage in kits, social posts, and merchandise.' },
    ],
    keyFeatures: [
      'Iconic tusker mark with strong silhouette',
      'Flexible horizontal and stacked lockups',
      'Broadcast-safe contrast and color palette',
      'Geometry grid ensuring consistency'
    ],
    images: kandyTuskersImages,
  },
  'noir-interior-design': {
    title: 'Logo Design for NOIR Interior Design Company',
    subtitle: 'Professional Virtual Identity Design',
    role: 'Graphic Designer • NOIR Interior Design Company',
    year: 'Feb 2022',
    duration: 'Brand Identity Project',
    team: 'Solo',
    description: 'Creation of a professional virtual identity for NOIR, an Interior Design Company, through distinctive logo design. The project focused on developing a sophisticated brand identity that reflects the elegance and professionalism of the interior design industry while establishing strong brand recognition in the competitive market.',
    heroImage: noirInteriorDesignImages[0],
    behanceLink: 'https://www.behance.net/gallery/143551429/Logo-design-for-NOIR-Interior-Design-Company',
    impact: [
      { metric: '✓', label: 'Developed professional virtual identity' },
      { metric: '✓', label: 'Created distinctive logo design' },
      { metric: '✓', label: 'Established brand recognition' },
    ],
    responsibilities: [
      'Researched interior design industry branding trends and market positioning',
      'Developed multiple logo concepts emphasizing sophistication and professionalism',
      'Created comprehensive visual identity system for interior design company',
      'Designed brand applications showcasing elegance and modern aesthetic',
      'Established consistent brand guidelines for professional presentation'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    process: [
      { phase: 'Research & Discovery', description: 'Analyzed interior design industry landscape and studied successful brand identities in the sector.' },
      { phase: 'Concept Development', description: 'Explored visual concepts that authentically represent sophistication, elegance, and professional expertise.' },
      { phase: 'Visual Identity Creation', description: 'Developed comprehensive brand system with refined color palette and elegant typography.' },
      { phase: 'Brand Applications', description: 'Created diverse applications demonstrating brand versatility across various interior design contexts.' },
    ],
    keyFeatures: [
      'Sophisticated color palette reflecting elegance and professionalism',
      'Typography selection balancing modern appeal with timeless quality',
      'Visual elements inspired by interior design and architectural principles',
      'Scalable logo system maintaining professional aesthetic across applications',
      'Cohesive brand identity suitable for high-end interior design marketing'
    ],
    images: noirInteriorDesignImages,
  },
  'kozha-leather-collections': {
    title: 'Logo Design for Kozha Leather Collections',
    subtitle: 'Professional Brand Identity for Leather Goods',
    role: 'Graphic Designer • The qexle, Kozha Leather Collections',
    year: 'Mar 2022',
    duration: 'Brand Identity Project',
    team: 'Solo',
    description: 'Development of a professional brand identity for Kozha Leather Collections through strategic logo design, conveying quality and craftsmanship. The project emphasized creating a distinctive visual identity that reflects the premium nature of leather goods while establishing strong brand recognition in the competitive leather accessories market.',
    heroImage: kozhaLeatherImages[0],
    behanceLink: 'https://www.behance.net/gallery/144036805/Logo-Design-For-Kozha-Leather-Collections',
    impact: [
      { metric: '✓', label: 'Created professional brand identity' },
      { metric: '✓', label: 'Designed strategic logo elements' },
      { metric: '✓', label: 'Conveyed quality and craftsmanship through design' },
    ],
    responsibilities: [
      'Researched leather goods industry and premium brand positioning strategies',
      'Developed multiple logo concepts emphasizing quality and craftsmanship',
      'Created comprehensive visual identity system for leather collections brand',
      'Designed brand applications showcasing premium quality and artisanal appeal',
      'Established consistent brand guidelines for luxury product presentation'
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    process: [
      { phase: 'Research & Discovery', description: 'Analyzed leather goods market and studied successful premium brand identities in the luxury accessories sector.' },
      { phase: 'Concept Development', description: 'Explored visual concepts that authentically represent craftsmanship, quality, and timeless elegance.' },
      { phase: 'Visual Identity Creation', description: 'Developed comprehensive brand system with refined color palette emphasizing premium leather aesthetics.' },
      { phase: 'Brand Applications', description: 'Created diverse applications demonstrating brand versatility across various leather product contexts.' },
    ],
    keyFeatures: [
      'Premium color palette reflecting leather craftsmanship and quality',
      'Typography selection balancing traditional craftsmanship with modern appeal',
      'Visual elements inspired by leather textures and artisanal techniques',
      'Scalable logo system maintaining premium aesthetic across applications',
      'Cohesive brand identity suitable for luxury leather goods marketing'
    ],
    images: kozhaLeatherImages,
  },
  'gyroction': {
    title: 'Logo Design for Gyroction',
    subtitle: 'Distinctive Corporate Brand Identity',
    role: 'Graphic Designer • The qexle, Gyroction',
    year: 'Jun 2022',
    duration: 'Brand Identity Project',
    team: 'Solo',
    description: "Brand identity design for Gyroction, creating a distinctive and memorable logo that represents the company's values and services. The focus was on crafting a modern, recognizable mark aligned with Gyroction's mission and positioning.",
    heroImage: gyroctionImages[0],
    behanceLink: 'https://www.behance.net/gallery/145776937/Logo-Design-for-Gyroction',
    impact: [
      { metric: '✓', label: 'Developed distinctive brand identity' },
      { metric: '✓', label: 'Created memorable logo design' },
      { metric: '✓', label: 'Ensured alignment with company values' },
    ],
    responsibilities: [
      'Researched market context and brand positioning requirements',
      'Explored multiple logo directions emphasizing memorability',
      'Established a scalable identity system across touchpoints',
      'Prepared presentation-ready applications and mockups',
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    process: [
      { phase: 'Research & Discovery', description: 'Defined brand attributes and visual benchmarks aligned to company values.' },
      { phase: 'Concept Development', description: 'Iterated on symbol, wordmark, and geometry for distinctiveness and clarity.' },
      { phase: 'Refinement', description: 'Polished proportions, spacing, and color/monochrome variants.' },
      { phase: 'Applications', description: 'Showcased usage across stationery, web, and social collateral.' },
    ],
    keyFeatures: [
      'Memorable symbol and clear wordmark',
      'Modern, scalable identity system',
      'Color and monochrome variants for flexibility',
      'Consistent geometry ensuring clarity at small sizes',
    ],
    images: gyroctionImages,
  },
  'landing-page-ui-nike': {
    title: 'Nike Shoes Landing Page Concept',
    subtitle: 'High-Impact E-commerce Landing UI',
    role: 'UI/UX Designer',
    year: '2022',
    duration: 'Concept Project',
    team: 'Solo',
    description: 'A landing page UI design concept for Nike shoes featuring bold hero visuals, strong typography, and conversion-focused CTAs. The layout emphasizes product storytelling, benefits, and rapid exploration through clear information hierarchy and motion-driven interactions.',
    heroImage: nikeLandingPageImages[0],
    behanceLink: 'https://www.behance.net/gallery/146284501/Landing-Page-Ui-Design',
    impact: [
      { metric: '✓', label: 'Crafted high-conversion landing flow' },
      { metric: '✓', label: 'Showcased bold brand storytelling' },
      { metric: '✓', label: 'Optimized visual hierarchy and CTAs' },
    ],
    responsibilities: [
      'Defined information architecture and content hierarchy',
      'Designed hero, product highlights, benefits, and CTA sections',
      'Established responsive grid and spacing system',
      'Prepared presentation-ready screens and scroll mockups'
    ],
    technologies: ['Figma', 'Prototyping', 'UI Design', 'Responsive Grid'],
    process: [
      { phase: 'Research & Benchmarks', description: 'Analyzed e-commerce landing conventions and Nike brand cues.' },
      { phase: 'Wireframing', description: 'Outlined structure for hero, benefits, product gallery, and CTAs.' },
      { phase: 'Visual Design', description: 'Applied brand-forward visuals, typography scale, and motion principles.' },
      { phase: 'Presentation', description: 'Compiled high-fidelity screens and interaction previews.' },
    ],
    keyFeatures: [
      'Hero with bold product showcase and primary CTA',
      'Benefit-led sections with strong iconography and copy',
      'Modular content blocks for quick A/B testing',
      'Responsive grid for desktop and mobile breakpoints'
    ],
    images: nikeLandingPageImages,
  },
  'landing-page-wildlife': {
    title: 'Endemic Animals in Sri Lanka – Landing Page',
    subtitle: 'Interactive Biodiversity Education Interface',
    role: 'UI/UX Designer • Academic Project',
    year: 'Jun 2024 - Sep 2024',
    duration: '3 months',
    team: 'Solo',
    description: 'An interactive web interface concept showcasing the rich biodiversity of Sri Lanka, focusing on endemic species like the Sri Lankan Leopard. The design blends immersive visuals with informative content to create an engaging learning experience.',
    heroImage: wildlifeLandingPageImages[0],
    behanceLink: 'https://www.behance.net/gallery/146507535/Wildlife-landing-page-design',
    impact: [
      { metric: '✓', label: 'Designed split-layout for balanced text and imagery' },
      { metric: '✓', label: 'Implemented minimal navigation for focus' },
      { metric: '✓', label: 'Highlighted endemic wildlife with rich photography' },
      { metric: '✓', label: 'Added scroll indicators and micro-interactions' },
    ],
    responsibilities: [
      'Defined IA and split-layout system for readability',
      'Crafted typographic hierarchy and color palette inspired by nature',
      'Designed scroll cues and micro-interactions for guidance',
      'Prepared responsive frames for tablet and desktop views'
    ],
    technologies: ['UI/UX Design', 'Figma', 'Wireframing', 'Prototyping', 'Visual Design'],
    process: [
      { phase: 'Research', description: 'Reviewed conservation content and education UI patterns.' },
      { phase: 'Wireframing', description: 'Explored split layouts, card modules, and content blocks.' },
      { phase: 'Visual Design', description: 'Applied photography-led hero and nature-inspired accents.' },
      { phase: 'Prototype', description: 'Defined scroll behavior, micro-interactions, and section transitions.' },
    ],
    keyFeatures: [
      'Split layout combining narrative and visuals',
      'Minimal navigation for distraction-free reading',
      'Photography-forward storytelling for endemic species',
      'Scroll indicators and micro-interactions to guide users'
    ],
    images: wildlifeLandingPageImages,
  },
  foodiehut: {
    title: 'FoodieHut - Android Application',
    subtitle: 'Mobile App for Promotions, Ordering, and Navigation',
    role: 'UI Designer & Backend Developer • Academic Project',
    year: 'Aug 2024 - Sep 2024',
    duration: '2 months',
    team: 'Solo',
    description: 'An Android mobile application connecting food enthusiasts with exclusive promotions from a food store chain, enabling online ordering and branch navigation with live location support.',
    heroImage: foodieHutImages[0],
    behanceLink: 'https://www.behance.net/gallery/210104439/FoodieHut-Mobile-Application-UIUX-Design',
    githubLink: 'https://github.com/SusithD/foodiehut',
    impact: [
      { metric: '✓', label: 'Created modern, intuitive UI for quick ordering' },
      { metric: '✓', label: 'Implemented live location tracking for branches' },
      { metric: '✓', label: 'Added streamlined online ordering flows' },
      { metric: '✓', label: 'Integrated automated email notifications' },
    ],
    responsibilities: [
      'Designed mobile UI in Figma with consistent spacing and components',
      'Built ordering and promotions flows with clear navigation',
      'Added live location support for branch navigation',
      'Implemented automated email notifications for order updates'
    ],
    technologies: ['Android Development', 'UI/UX Design', 'Figma'],
    process: [
      { phase: 'Research', description: 'Studied food app patterns and defined key user journeys.' },
      { phase: 'Wireframes', description: 'Outlined screens for browse, promotions, cart, and branches.' },
      { phase: 'Visual Design', description: 'Created components and visual hierarchy for readability.' },
      { phase: 'Implementation', description: 'Built flows and integrated notifications and location features.' },
    ],
    keyFeatures: [
      'Exclusive promotions and deals',
      'Online ordering with simplified checkout',
      'Branch navigation with live location support',
      'Automated email notifications for order status'
    ],
    images: foodieHutImages,
  },
  coveragex: {
    title: 'CoverageX.com',
    subtitle: 'Enterprise Insurance Platform Redesign',
    role: 'Lead Designer & Frontend Developer',
    year: '2023-2024',
    duration: '6 months',
    team: '4 members',
    description: 'Complete redesign and development of CoverageX.com, transforming the insurance platform experience from ground up.',
    heroImage: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NTc2NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'The existing platform had a fragmented user experience with inconsistent design patterns, making it difficult for users to navigate insurance products and complete their applications. The lack of a unified design system caused development bottlenecks and increased maintenance costs.',
    solution: 'I led a comprehensive redesign initiative, creating a cohesive design system in Figma and implementing it using modern web technologies. The new system improved user flows, reduced cognitive load, and established scalable components for future development.',
    impact: [
      { metric: '40%', label: 'Increase in activation rates' },
      { metric: '60%', label: 'Reduction in support tickets' },
      { metric: '3x', label: 'Faster development cycles' },
      { metric: '95%', label: 'User satisfaction score' }
    ],
    responsibilities: [
      'Led end-to-end design process from research to final implementation',
      'Created comprehensive design system with 50+ reusable components',
      'Developed frontend architecture using Nuxt.js and TypeScript',
      'Implemented responsive layouts with Tailwind CSS',
      'Designed and coded email marketing campaigns via SendGrid',
      'Conducted user testing and iterated based on feedback'
    ],
    technologies: ['Figma', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'SendGrid', 'Vue.js', 'Git'],
    process: [
      {
        phase: 'Research & Discovery',
        description: 'Conducted user interviews, competitive analysis, and stakeholder workshops to understand pain points and define success metrics.'
      },
      {
        phase: 'Design System',
        description: 'Built a comprehensive design system in Figma with tokens, components, and documentation. Established design principles and patterns.'
      },
      {
        phase: 'UI/UX Design',
        description: 'Created high-fidelity mockups and interactive prototypes. Tested with users and refined based on feedback.'
      },
      {
        phase: 'Development',
        description: 'Implemented the design using Nuxt.js, ensuring pixel-perfect accuracy and optimal performance. Built reusable components.'
      },
      {
        phase: 'Testing & Launch',
        description: 'Conducted thorough testing across devices and browsers. Gradually rolled out features and monitored metrics.'
      }
    ],
    keyFeatures: [
      'Streamlined onboarding flow reducing steps by 50%',
      'Interactive product comparison tool',
      'Real-time quote calculator with live updates',
      'Responsive design optimized for mobile and tablet',
      'Accessible components following WCAG 2.1 AA standards',
      'Automated email sequences for user engagement'
    ]
  },
  qexle: {
    title: 'The Qexle',
    subtitle: 'Digital Product Studio',
    role: 'Founder & Lead Developer',
    year: '2022-Present',
    duration: 'Ongoing',
    team: '2-5 members per project',
    description: 'Founded and built a digital product studio focused on creating exceptional web experiences for startups and established businesses.',
    heroImage: 'https://images.unsplash.com/photo-1651563688824-a853587bfb2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk2NTAwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Many businesses struggle to find partners who can handle both design and development with equal expertise. This often results in disconnected experiences where beautiful designs fail in execution, or functional products lack design polish.',
    solution: 'The Qexle bridges the gap between design and engineering by offering end-to-end services. I lead projects from initial strategy through design, development, and deployment, ensuring cohesive experiences that are both beautiful and functional.',
    impact: [
      { metric: '15+', label: 'Projects delivered' },
      { metric: '10+', label: 'Happy clients' },
      { metric: '100%', label: 'On-time delivery rate' },
      { metric: '5★', label: 'Average client rating' }
    ],
    responsibilities: [
      'Lead all design and development initiatives',
      'Manage client relationships and project scoping',
      'Build custom web applications using modern tech stacks',
      'Create brand identities and design systems',
      'Implement CI/CD pipelines and deployment strategies',
      'Mentor junior developers and designers'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Figma', 'Tailwind CSS', 'Vercel'],
    process: [
      {
        phase: 'Discovery',
        description: 'Deep dive into client needs, business goals, and target audience. Define project scope and success criteria.'
      },
      {
        phase: 'Strategy & Planning',
        description: 'Create information architecture, user flows, and technical architecture. Establish project timeline and milestones.'
      },
      {
        phase: 'Design',
        description: 'Develop brand identity, design system, and high-fidelity screens. Create interactive prototypes for validation.'
      },
      {
        phase: 'Development',
        description: 'Build production-ready applications with clean code and best practices. Implement responsive designs and optimize performance.'
      },
      {
        phase: 'Launch & Support',
        description: 'Deploy to production, monitor metrics, and provide ongoing support. Iterate based on user feedback and analytics.'
      }
    ],
    keyFeatures: [
      'Full-service design and development capabilities',
      'Expertise in modern web technologies',
      'Focus on scalable, maintainable codebases',
      'Collaborative approach with transparent communication',
      'Rapid prototyping and iterative development',
      'Post-launch support and optimization'
    ]
  },
  ecommerce: {
    title: 'E-Commerce Platform',
    subtitle: 'Modern Shopping Experience',
    role: 'UI/UX Designer & Developer',
    year: '2023',
    duration: '4 months',
    team: '3 members',
    description: 'Designed and developed a modern e-commerce platform with seamless checkout experience, real-time inventory management, and personalized product recommendations.',
    heroImage: 'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGNhcnR8ZW58MXx8fHwxNzU5NjUwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Traditional e-commerce platforms often suffer from complex checkout flows, poor mobile experiences, and lack of personalization, leading to high cart abandonment rates.',
    solution: 'Created a streamlined platform with one-click checkout, intelligent product recommendations, and a mobile-first responsive design.',
    impact: [
      { metric: '65%', label: 'Reduced cart abandonment' },
      { metric: '2.5x', label: 'Mobile conversions' },
      { metric: '45%', label: 'Faster checkout' },
      { metric: '4.8★', label: 'Customer rating' }
    ],
    responsibilities: [
      'Designed complete user experience',
      'Built responsive frontend with React',
      'Integrated Stripe payments',
      'Real-time inventory management',
      'Created admin dashboard'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    process: [
      { phase: 'Research', description: 'Analyzed competitors and conducted user interviews.' },
      { phase: 'Design', description: 'Created prototypes and tested with users.' },
      { phase: 'Development', description: 'Built scalable APIs and frontend components.' },
      { phase: 'Launch', description: 'Tested across devices and rolled out features.' }
    ],
    keyFeatures: [
      'One-click checkout',
      'AI recommendations',
      'Real-time inventory',
      'Mobile-optimized',
      'Advanced search'
    ]
  },
  fintech: {
    title: 'FinTech Dashboard',
    subtitle: 'Financial Data Visualization',
    role: 'Senior Product Designer',
    year: '2023',
    duration: '5 months',
    team: '5 members',
    description: 'Created an intuitive financial dashboard for tracking investments and managing portfolios with real-time data visualization.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5NTYwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Financial data is complex and overwhelming. Users struggle to make informed investment decisions with traditional tools.',
    solution: 'Designed an elegant dashboard with intuitive visualizations, smart alerts, and personalized recommendations.',
    impact: [
      { metric: '78%', label: 'User engagement' },
      { metric: '3x', label: 'Faster decisions' },
      { metric: '92%', label: 'Satisfaction score' },
      { metric: '50%', label: 'Fewer support tickets' }
    ],
    responsibilities: [
      'Led end-to-end design process',
      'Created comprehensive design system',
      'Designed data visualizations',
      'Conducted usability testing',
      'Collaborated with engineers'
    ],
    technologies: ['Figma', 'React', 'TypeScript', 'D3.js', 'Recharts', 'WebSocket'],
    process: [
      { phase: 'Research', description: 'Studied user behavior and competitor products.' },
      { phase: 'Architecture', description: 'Organized complex data into logical groups.' },
      { phase: 'Design', description: 'Created clean interface with data clarity focus.' },
      { phase: 'Testing', description: 'Multiple rounds of user testing and refinement.' }
    ],
    keyFeatures: [
      'Real-time portfolio tracking',
      'Interactive charts',
      'Custom layouts',
      'Smart alerts',
      'Mobile-responsive'
    ]
  },
  'mobile-app': {
    title: 'Health & Fitness App',
    subtitle: 'Wellness Tracking Mobile Experience',
    role: 'UI/UX Designer',
    year: '2023',
    duration: '3 months',
    team: '2 members',
    description: 'Mobile app design for tracking workouts, nutrition, and wellness goals with gamification.',
    heroImage: 'https://images.unsplash.com/photo-1580983703451-bf6bb44a9917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc1OTU3NjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Most fitness apps are complex and overwhelming, leading to poor retention. Users need motivation and simplicity.',
    solution: 'Designed intuitive mobile experience with gamification, social features, and personalized coaching.',
    impact: [
      { metric: '85%', label: '30-day retention' },
      { metric: '4.7★', label: 'App store rating' },
      { metric: '200K+', label: 'Active users' },
      { metric: '40%', label: 'Daily active users' }
    ],
    responsibilities: [
      'Designed complete mobile experience',
      'Created design system',
      'Designed gamification features',
      'Conducted user testing',
      'Created interactive prototypes'
    ],
    technologies: ['Figma', 'Prototyping', 'iOS Design', 'Android Design', 'User Testing'],
    process: [
      { phase: 'Research', description: 'Interviewed fitness enthusiasts and beginners.' },
      { phase: 'Wireframing', description: 'Established user flows and architecture.' },
      { phase: 'UI Design', description: 'Designed high-fidelity screens with motivation focus.' },
      { phase: 'Prototyping', description: 'Built interactive prototypes for testing.' }
    ],
    keyFeatures: [
      'Personalized workouts',
      'Nutrition tracking',
      'Achievement badges',
      'Social challenges',
      'Progress tracking'
    ]
  },
  'design-system': {
    title: 'Design System',
    subtitle: 'Enterprise Component Library',
    role: 'Design Systems Lead',
    year: '2023',
    duration: '6 months',
    team: '4 members',
    description: 'Comprehensive design system with reusable components, patterns, and guidelines for enterprise products.',
    heroImage: 'https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1OTYxNzM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Multiple teams creating inconsistent interfaces led to fragmented experience and slower development.',
    solution: 'Built comprehensive design system with 100+ components, clear documentation, and governance model.',
    impact: [
      { metric: '70%', label: 'Faster handoff' },
      { metric: '100+', label: 'Components' },
      { metric: '85%', label: 'Team adoption' },
      { metric: '3x', label: 'Dev speed' }
    ],
    responsibilities: [
      'Led system strategy',
      'Created component library',
      'Established design tokens',
      'Wrote documentation',
      'Conducted training'
    ],
    technologies: ['Figma', 'Design Tokens', 'Storybook', 'React', 'TypeScript'],
    process: [
      { phase: 'Audit', description: 'Identified inconsistencies and common patterns.' },
      { phase: 'Foundation', description: 'Established design tokens and variables.' },
      { phase: 'Components', description: 'Designed reusable components with guidelines.' },
      { phase: 'Adoption', description: 'Rolled out with training and support.' }
    ],
    keyFeatures: [
      'Token-based architecture',
      'Accessible components',
      'Dark mode support',
      'Comprehensive docs',
      'Automated versioning'
    ]
  },
  'saas-platform': {
    title: 'SaaS Analytics Platform',
    subtitle: 'AI-Powered Business Intelligence',
    role: 'Product Designer & Developer',
    year: '2023',
    duration: '7 months',
    team: '6 members',
    description: 'Data analytics platform helping businesses make data-driven decisions with AI insights.',
    heroImage: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc1OTYyOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'BI tools are complex and require technical expertise. Non-technical users struggle to derive insights.',
    solution: 'Created intuitive SaaS platform with AI to automatically surface insights and recommend actions.',
    impact: [
      { metric: '500+', label: 'Enterprise customers' },
      { metric: '95%', label: 'Satisfaction' },
      { metric: '$5M', label: 'ARR' },
      { metric: '60%', label: 'Faster insights' }
    ],
    responsibilities: [
      'Led product design',
      'Built frontend architecture',
      'Designed data viz system',
      'Created AI insight engine',
      'Managed roadmap'
    ],
    technologies: ['React', 'TypeScript', 'D3.js', 'Python', 'TensorFlow', 'AWS'],
    process: [
      { phase: 'Research', description: 'Analyzed competitors and interviewed customers.' },
      { phase: 'MVP', description: 'Designed core features and AI insights.' },
      { phase: 'Development', description: 'Built scalable platform with emphasis on performance.' },
      { phase: 'Scale', description: 'Expanded features and optimized for enterprise.' }
    ],
    keyFeatures: [
      'AI-powered insights',
      'Custom dashboards',
      'Predictive analytics',
      'Natural language queries',
      'Real-time processing'
    ]
  },
  'brand-identity': {
    title: 'Brand Identity System',
    subtitle: 'Complete Brand Design',
    role: 'Brand Designer',
    year: '2023',
    duration: '2 months',
    team: '2 members',
    description: 'Complete brand identity including logo, color system, typography, and comprehensive guidelines.',
    heroImage: 'https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1OTU4NTQwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Client needed cohesive brand identity to stand out in crowded market while maintaining professionalism.',
    solution: 'Developed distinctive brand identity with unique visual language and comprehensive guidelines.',
    impact: [
      { metric: '300%', label: 'Brand recognition' },
      { metric: '4.9★', label: 'Client satisfaction' },
      { metric: '100%', label: 'Guideline adoption' },
      { metric: '25+', label: 'Brand applications' }
    ],
    responsibilities: [
      'Led brand strategy',
      'Designed visual identity',
      'Created brand guidelines',
      'Designed marketing collateral',
      'Developed illustration system'
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'Brand Guidelines'],
    process: [
      { phase: 'Discovery', description: 'Brand workshops and competitive analysis.' },
      { phase: 'Exploration', description: 'Created multiple logo concepts and directions.' },
      { phase: 'Refinement', description: 'Refined selected direction and visual elements.' },
      { phase: 'Guidelines', description: 'Created comprehensive brand manual.' }
    ],
    keyFeatures: [
      'Unique logo system',
      'Color palette',
      'Typography pairing',
      'Illustration system',
      '50-page brand manual'
    ]
  }
};

export default function ProjectDetailPage({ projectId, onNavigateHome }: ProjectDetailPageProps) {
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl">Project not found</h1>
          <button
            onClick={onNavigateHome}
            className="bg-[#F4C542] text-black px-6 py-3 rounded-full hover:bg-[#F4C542]/90 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block bg-[#F4C542]/20 text-[#F4C542] px-4 py-2 rounded-full text-sm">
              {project.role}
            </div>
            <h1 className="text-6xl md:text-8xl tracking-tight">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/60">
              {project.subtitle}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Year</span>
                </div>
                <p className="text-xl">{project.year}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Duration</span>
                </div>
                <p className="text-xl">{project.duration}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Team</span>
                </div>
                <p className="text-xl">{project.team}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Role</span>
                </div>
                <p className="text-xl">Lead</p>
              </div>
            </div>

            {/* External Links in Hero Section */}
            {(project.behanceLink || project.githubLink) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8 flex flex-wrap gap-4"
              >
                {project.behanceLink && (
                  <a
                    href={project.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#1877f2] hover:bg-[#1877f2]/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                    View on Behance
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 group border border-white/10"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.012c0 4.424 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.987 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.852.004 1.71.115 2.51.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701 1.028 1.596 1.028 2.688 0 3.842-2.339 4.69-4.566 4.939.36.31.68.92.68 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.48A10.013 10.013 0 0 0 22 12.012C22 6.484 17.523 2 12 2Z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Creative Grid Gallery - Colombo Kings */}
      {project.images && (
        <section className="px-6 py-24 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-5xl">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {project.images.map((src: string, i: number) => {
                  // Create a creative masonry-style layout for better image distribution
                  const layouts = [
                    'col-span-2 md:col-span-2 lg:col-span-3 aspect-[4/3]', // Large featured
                    'col-span-1 md:col-span-1 lg:col-span-2 aspect-square', // Medium square
                    'col-span-1 md:col-span-1 lg:col-span-1 aspect-square', // Small square
                    'col-span-2 md:col-span-2 lg:col-span-2 aspect-[3/2]', // Medium wide
                    'col-span-1 md:col-span-1 lg:col-span-2 aspect-[4/3]', // Medium portrait
                    'col-span-1 md:col-span-1 lg:col-span-2 aspect-square', // Medium square
                    'col-span-2 md:col-span-2 lg:col-span-3 aspect-video', // Wide banner
                  ];
                  const layout = layouts[i % layouts.length];
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 group cursor-pointer ${layout}`}
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <ImageWithFallback 
                        src={src} 
                        alt={`${project.title} design ${i + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium">View Details</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Hero Image */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10"
          >
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Overview</h2>
              <p className="text-xl text-[#1a1a1a]/70 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-[#1a1a1a]/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#F4C542]">The Challenge</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">The Solution</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-12">Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.impact.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="text-5xl md:text-6xl text-[#F4C542]">
                    {item.metric}
                  </div>
                  <p className="text-[#1a1a1a]/60">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl">Process</h2>
            <div className="space-y-6">
              {project.process.map((step: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#F4C542]/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#F4C542] text-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl">{step.phase}</h3>
                      <p className="text-white/60 text-lg">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.keyFeatures.map((feature: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F4C542] mt-2 flex-shrink-0"></div>
                  <p className="text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="px-6 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl">My Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.responsibilities.map((resp: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-[#F4C542] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#F4C542]"></div>
                  </div>
                  <p className="text-lg text-white/70">{resp}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-project" className="px-6 py-24 bg-[#f5f5f0] text-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl">Like what you see?</h2>
            <p className="text-2xl text-[#1a1a1a]/60">
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.behanceLink && (
                <a
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877f2] text-white px-8 py-4 rounded-full hover:bg-[#1877f2]/90 transition-all flex items-center gap-2 justify-center"
                >
                  View on Behance
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              )}
              <button
                onClick={onNavigateHome}
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full hover:bg-[#1a1a1a]/90 transition-all flex items-center gap-2 justify-center"
              >
                View More Projects
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="bg-[#F4C542] text-[#1a1a1a] px-8 py-4 rounded-full hover:bg-[#F4C542]/90 transition-all">
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}