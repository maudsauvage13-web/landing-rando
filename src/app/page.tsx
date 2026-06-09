"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- CUSTOM INLINE SVG ICONS ---
function MountainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function CustomMountainLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="50,15 15,85 85,85" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="miter" />
      <polygon points="50,15 35,85 65,85" fill="none" stroke="currentColor" strokeWidth="4" />
      <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="3" strokeDasharray="4 4" />
    </svg>
  );
}

function TrainIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="16" height="16" x="4" y="2" rx="2" />
      <path d="M4 14h16" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M12 17v4" />
      <path d="m8 21 4-4 4 4" />
    </svg>
  );
}

function CompassIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowLeftIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6Z" />
    </svg>
  );
}

function SparklesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function XIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function HeartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// --- DESTINATIONS DATA FOR INTERACTIVE SLIDER ---
interface Destination {
  id: string;
  name: string;
  station: string;
  duration: string;
  line: string;
  weather: string;
  weatherIcon: string;
  pricing: string;
  isNavigo: boolean;
  distance: string;
  elevation: string;
  description: string;
  highlight: string;
}

interface HeroRouteStep {
  type: "walk" | "train" | "hike" | "return";
  desc: string;
  duration: string;
  detail?: string;
}

interface HeroRoute {
  name: string;
  tag: string;
  rating: string;
  trainTime: string;
  distance: string;
  stationStart: string;
  stationEnd: string;
  lineName: string;
  lineColor: string;
  glowColor: string;
  svgLinePath: string;
  svgHikePath: string;
  forestArea: { cx: number; cy: number; r: number };
  steps: HeroRouteStep[];
}

const HERO_ROUTES: Record<"fontainebleau" | "chevreuse", HeroRoute> = {
  fontainebleau: {
    name: "Forêt de Fontainebleau",
    tag: "Massifs & Forêts",
    rating: "4.9",
    trainTime: "38 min",
    distance: "14.2 km",
    stationStart: "Paris Gare de Lyon",
    stationEnd: "Fontainebleau-Avon",
    lineName: "Transilien Ligne R",
    lineColor: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
    glowColor: "#10b981",
    svgLinePath: "M 100,120 C 180,140 280,210 400,320",
    svgHikePath: "M 400,320 C 420,300 445,310 450,335 C 455,360 430,380 415,360 C 405,345 395,335 400,320",
    forestArea: { cx: 420, cy: 340, r: 50 },
    steps: [
      {
        type: "walk",
        desc: "Rendez-vous à Paris Gare de Lyon",
        duration: "5 min",
        detail: "Accès facile en Métro (Lignes 1, 14) et RER (A, D)."
      },
      {
        type: "train",
        desc: "Prendre le Transilien Ligne R direct",
        duration: "38 min (Gare de Lyon ➡️ Fontainebleau-Avon)",
        detail: "Prochain départ dans 12 min (Voie N). Entièrement inclus dans le pass Navigo. Trains toutes les 30 min."
      },
      {
        type: "hike",
        desc: "Randonnée : Les Gorges de l'Apremont",
        duration: "14.2 km loop (~3h45) - Balisage Bleu",
        detail: "Départ immédiat depuis le quai. Traversée de platières rocheuses, de chaos de grès et de pinèdes sablonneuses."
      },
      {
        type: "return",
        desc: "Retour garanti pour le dîner",
        duration: "Ligne R vers Paris toutes les 30 min",
        detail: "Dernier train à 22:45. Pas de retard ni de stress logistique."
      }
    ]
  },
  chevreuse: {
    name: "Vallée de la Chevreuse",
    tag: "Falaises & Vallées",
    rating: "4.8",
    trainTime: "45 min",
    distance: "15.8 km",
    stationStart: "Paris Châtelet les Halles",
    stationEnd: "Saint-Rémy-lès-Chevreuse",
    lineName: "RER B",
    lineColor: "text-sky-400 bg-sky-950/40 border-sky-500/30",
    glowColor: "#0ea5e9",
    svgLinePath: "M 80,110 C 85,160 110,230 140,310",
    svgHikePath: "M 140,310 C 120,330 105,350 120,375 C 135,400 165,390 170,360 C 175,330 155,320 140,310",
    forestArea: { cx: 140, cy: 350, r: 45 },
    steps: [
      {
        type: "walk",
        desc: "Rendez-vous à Paris Châtelet les Halles",
        duration: "Direct",
        detail: "Accès direct via lignes de métro 1, 4, 7, 11, 14 et RER A, D."
      },
      {
        type: "train",
        desc: "Prendre le RER B Sud",
        duration: "45 min (Châtelet ➡️ Saint-Rémy-lès-Chevreuse)",
        detail: "Prendre les trains terminus Saint-Rémy (B4). Fréquence : toutes les 15 min. Compris dans le pass Navigo."
      },
      {
        type: "hike",
        desc: "Randonnée : Sentier des Maréchaux & Châteaux",
        duration: "15.8 km loop (~4h15) - Balisage Rouge/Jaune",
        detail: "Connexion directe gare. Longe le canal de l'Yvette, traverse la forêt et grimpe jusqu'au Château de la Madeleine."
      },
      {
        type: "return",
        desc: "Retour simple & régulier",
        duration: "RER B vers Paris toutes les 15 min",
        detail: "Terminus direct à sens inverse. Trains réguliers jusqu'à 0h30 pour un retour en toute sérénité."
      }
    ]
  }
};

const DESTINATIONS: Destination[] = [
  {
    id: "meudon",
    name: "Forêt de Meudon",
    station: "Gare de Bellevue",
    duration: "14 min de train (Montparnasse)",
    line: "Transilien Ligne N",
    weather: "Beau temps frais",
    weatherIcon: "⛅",
    pricing: "Inclus dans le pass Navigo",
    isNavigo: true,
    distance: "9.5 km",
    elevation: "+180m",
    description: "Une évasion immédiate aux portes de Paris. Parcourez les sentiers forestiers autour des étangs de Meudon sans perdre de temps dans les transports.",
    highlight: "Idéal pour une envie de vert soudaine en matinée.",
  },
  {
    id: "fontainebleau",
    name: "Forêt de Fontainebleau",
    station: "Gare de Fontainebleau-Avon",
    duration: "38 min de train (Gare de Lyon)",
    line: "Transilien Ligne R",
    weather: "Grand Soleil",
    weatherIcon: "☀️",
    pricing: "Inclus dans le pass Navigo",
    isNavigo: true,
    distance: "14.2 km",
    elevation: "+260m",
    description: "Le paradis des rochers de grès et des pins sylvestres. Un tracé sinueux et spectaculaire qui vous fera oublier l'Île-de-France en moins de 40 minutes.",
    highlight: "Notre recommandation pour ce samedi.",
  },
  {
    id: "franchise",
    name: "Gorges de la Franchise",
    station: "Gare de Sens",
    duration: "1h15 de train (Gare de Lyon)",
    line: "TER Bourgogne",
    weather: "Ciel Voilé / Doux",
    weatherIcon: "🌤️",
    pricing: "Billet TER dès 15€",
    isNavigo: false,
    distance: "18.7 km",
    elevation: "+410m",
    description: "Une rando sportive aux confins de la Bourgogne. Traversez des vallons calcaires encaissés et des forêts sauvages de hêtres. Un dépaysement total.",
    highlight: "Pour les amateurs de grands espaces et de silence.",
  },
];

// --- CAROUSEL TOURS DATA ---
interface Tour {
  id: string;
  name: string;
  img: string;
  startPrice: string;
  station: string;
  duration: string;
  distance: string;
}

const TOURS: Tour[] = [
  {
    id: "t1",
    name: "Rochers de Fontainebleau",
    img: "/journey_mountain.png",
    startPrice: "Gratuit",
    station: "Gare de Lyon",
    duration: "38 min",
    distance: "14.2 km",
  },
  {
    id: "t2",
    name: "Vallée de la Chevreuse",
    img: "/journey_river.png",
    startPrice: "Gratuit",
    station: "RER B - Saint-Rémy",
    duration: "45 min",
    distance: "15.8 km",
  },
  {
    id: "t3",
    name: "Gorges du Jura Sauvage",
    img: "/forest_lake.png",
    startPrice: "15€",
    station: "Gare de Lyon (TER)",
    duration: "1h15",
    distance: "18.7 km",
  },
];

export default function Home() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Concept modal state
  const [conceptModalOpen, setConceptModalOpen] = useState(false);

  // Interactive Hero States
  const [heroState, setHeroState] = useState<'search' | 'loading' | 'map'>('search');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDest, setSelectedDest] = useState<'fontainebleau' | 'chevreuse'>('fontainebleau');
  const [loadingStep, setLoadingStep] = useState(0);

  const handleSearchSubmit = (destKey?: 'fontainebleau' | 'chevreuse') => {
    let targetDest: 'fontainebleau' | 'chevreuse' = 'fontainebleau';
    
    if (destKey) {
      targetDest = destKey;
    } else {
      const query = searchQuery.toLowerCase().trim();
      if (query.includes('chev') || query.includes('saint') || query.includes('remy')) {
        targetDest = 'chevreuse';
      } else {
        targetDest = 'fontainebleau'; // Default
      }
    }
    
    setSelectedDest(targetDest);
    setHeroState('loading');
    setLoadingStep(0);
  };

  useEffect(() => {
    if (heroState !== 'loading') return;

    const timer = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < 2) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setHeroState('map');
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(timer);
  }, [heroState]);

  // Interactive slider state: 0 = 30 min, 1 = 1 hour, 2 = 2 hours
  const [sliderVal, setSliderVal] = useState<number>(1);
  const activeDest = DESTINATIONS[sliderVal];

  // Carousel Active index state for "Fresh Journeys"
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Lead capture form state
  const [contactInput, setContactInput] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!contactInput || contactInput.trim() === "") {
      setFormError("Veuillez saisir votre e-mail ou numéro de téléphone.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

    const isValidEmail = emailRegex.test(contactInput.trim());
    const isValidPhone = phoneRegex.test(contactInput.trim());

    if (!isValidEmail && !isValidPhone) {
      setFormError("Format invalide. Utilisez un e-mail ou un numéro de téléphone français.");
      return;
    }

    setFormSubmitted(true);
    setContactInput("");
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev === 0 ? TOURS.length - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev === TOURS.length - 1 ? 0 : prev + 1));
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const renderSVGMap = (isMini: boolean) => {
    const route = HERO_ROUTES[selectedDest];
    const isFontainebleau = selectedDest === 'fontainebleau';
    
    return (
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 500 400" 
        className={`w-full h-full transition-opacity duration-500 ${isMini ? 'opacity-30' : 'opacity-95'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dot-grid-map" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.08)" />
          </pattern>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Background Grid */}
        <rect width="100%" height="100%" fill="url(#dot-grid-map)" />

        {/* Nature Areas / Forests */}
        {/* Fontainebleau Forest (South-East) */}
        <circle 
          cx={400} 
          cy={320} 
          r={65} 
          fill="rgba(16,185,129,0.05)" 
          stroke="rgba(16,185,129,0.18)" 
          strokeWidth="1" 
          strokeDasharray="4,4" 
        />
        <text 
          x={400} 
          y={375} 
          className="text-[9px] font-bold fill-emerald-500/50 tracking-widest text-center" 
          textAnchor="middle"
        >
          PNR GÂTINAIS
        </text>

        {/* Chevreuse Forest (South-West) */}
        <circle 
          cx={140} 
          cy={310} 
          r={55} 
          fill="rgba(16,185,129,0.05)" 
          stroke="rgba(16,185,129,0.18)" 
          strokeWidth="1" 
          strokeDasharray="4,4" 
        />
        <text 
          x={140} 
          y={355} 
          className="text-[9px] font-bold fill-emerald-500/50 tracking-widest text-center" 
          textAnchor="middle"
        >
          PNR CHEVREUSE
        </text>

        {/* Paris Agglomeration Limit */}
        <circle 
          cx={90} 
          cy={115} 
          r={40} 
          fill="rgba(255,255,255,0.02)" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1" 
          strokeDasharray="3,3" 
        />
        <text 
          x={90} 
          y={85} 
          className="text-[8px] font-bold fill-neutral-500 tracking-wider text-center" 
          textAnchor="middle"
        >
          PARIS INTRA-MUROS
        </text>

        {/* Fictional Landmarks */}
        <g transform="translate(180, 180)" opacity="0.3">
          <circle r="2" fill="#fff" />
          <text y="-6" className="text-[7px] fill-neutral-400" textAnchor="middle">Versailles</text>
        </g>
        <g transform="translate(300, 240)" opacity="0.3">
          <circle r="2" fill="#fff" />
          <text y="-6" className="text-[7px] fill-neutral-400" textAnchor="middle">Melun</text>
        </g>

        {/* ---- INACTIVE LINE NETWORK ---- */}
        {/* Draw Fontainebleau Ligne R lightly if Chevreuse is active */}
        {!isFontainebleau && (
          <path 
            d="M 100,120 C 180,140 280,210 400,320" 
            fill="none" 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        )}
        {/* Draw Chevreuse RER B lightly if Fontainebleau is active */}
        {isFontainebleau && (
          <path 
            d="M 80,110 C 85,160 110,230 140,310" 
            fill="none" 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        )}

        {/* ---- ACTIVE LINE NETWORK ---- */}
        {/* Underlay glow */}
        <path 
          d={route.svgLinePath} 
          fill="none" 
          stroke={route.glowColor} 
          strokeWidth="8" 
          opacity="0.12" 
          strokeLinecap="round"
          filter="url(#glow)"
        />
        
        {/* Dashed rail path */}
        <path 
          d={route.svgLinePath} 
          fill="none" 
          stroke={route.glowColor} 
          strokeWidth="2.5" 
          strokeLinecap="round"
          strokeDasharray="6,4"
          className="animate-path-flow"
        />

        {/* ---- HIKING LOOP PATH ---- */}
        {/* Underlay glow */}
        <path 
          d={route.svgHikePath} 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="4" 
          opacity="0.15" 
          strokeLinecap="round"
        />
        {/* Dotted path */}
        <path 
          d={route.svgHikePath} 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          strokeDasharray="3,3"
        />

        {/* ---- PINS & LABELS ---- */}
        {/* Paris Station */}
        <g transform={`translate(${isFontainebleau ? 100 : 80}, ${isFontainebleau ? 120 : 110})`}>
          <circle r="4" fill="#fff" stroke="#171717" strokeWidth="1.5" className="shadow-md" />
          <text y="-10" className="text-[9px] font-bold fill-neutral-200 tracking-wide" textAnchor="middle">
            {isFontainebleau ? 'Paris Gare de Lyon' : 'Paris Châtelet'}
          </text>
        </g>

        {/* Destination Station Terminus */}
        <g transform={`translate(${isFontainebleau ? 400 : 140}, ${isFontainebleau ? 320 : 310})`}>
          <circle r="10" fill={route.glowColor} opacity="0.2" className="animate-ping" />
          <circle r="5" fill="#f59e0b" stroke="#171717" strokeWidth="1.5" className="shadow-md" />
          <text y="-10" className="text-[9px] font-bold fill-neutral-200 tracking-wide" textAnchor="middle">
            {isFontainebleau ? 'Gare de Fontainebleau' : 'Saint-Rémy-lès-Chevreuse'}
          </text>
        </g>

        {/* Hike Route Point Indicator */}
        <g transform={`translate(${isFontainebleau ? 440 : 130}, ${isFontainebleau ? 350 : 360})`}>
          <circle r="3" fill="#f59e0b" />
          <text x="6" y="3" className="text-[8px] font-semibold fill-amber-400/80 tracking-wide">
            Début Sentier
          </text>
        </g>

        {/* ---- ANIMATED TRAIN ---- */}
        <g style={{
          offsetPath: `path('${route.svgLinePath}')`,
          animation: 'moveTrain 6s linear infinite'
        }}>
          <circle r="10" fill={route.glowColor} className="animate-ping" opacity="0.3" />
          <circle r="5" fill={route.glowColor} stroke="#fff" strokeWidth="1.5" />
        </g>
        
        <style>{`
          @keyframes moveTrain {
            0% { offset-distance: 0%; }
            100% { offset-distance: 100%; }
          }
          @keyframes drawPath {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
          .animate-path-flow {
            stroke-dasharray: 8, 6;
            animation: drawPath 12s linear infinite;
          }
        `}</style>
      </svg>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-primary-900 selection:text-white">
      {/* 1. HEADER / NAVIGATION */}
      <div className="sticky top-0 z-50 w-full pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <header className="pointer-events-auto w-full bg-neutral-950/55 backdrop-blur-md border border-white/10 rounded-full shadow-lg transition-all duration-300">
            <div className="px-6 md:px-8 h-16 flex items-center justify-between">
              {/* Logo Brand */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <CustomMountainLogo className="w-7 h-7 text-white group-hover:scale-105 transition-transform duration-200" />
                <span className="font-black text-xl tracking-widest text-white uppercase">Névé</span>
              </button>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center gap-6">

                <button
                  onClick={() => scrollToId("tours")}
                  className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Itinéraires
                </button>
                <button
                  onClick={() => scrollToId("destinations")}
                  className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Explorer
                </button>
                <button
                  onClick={() => scrollToId("safety")}
                  className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Garanties
                </button>
                <button
                  onClick={() => scrollToId("instagram")}
                  className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Communauté
                </button>
              </nav>

              {/* Right CTA */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={() => scrollToId("footer-cta")}
                  className="px-5 py-2 bg-white hover:bg-neutral-200 text-neutral-950 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                >
                  Lancer l'app
                </button>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white focus:outline-none cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Panel */}
            {mobileMenuOpen && (
              <div className="pointer-events-auto md:hidden absolute top-20 left-6 right-6 bg-neutral-950/95 backdrop-blur-xl border border-white/10 px-6 py-8 flex flex-col gap-6 animate-fade-in shadow-2xl rounded-[24px] text-white">

                <button
                  onClick={() => scrollToId("tours")}
                  className="text-left text-sm font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
                >
                  Itinéraires
                </button>
                <button
                  onClick={() => scrollToId("destinations")}
                  className="text-left text-sm font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
                >
                  Explorer
                </button>
                <button
                  onClick={() => scrollToId("safety")}
                  className="text-left text-sm font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
                >
                  Garanties
                </button>
                <button
                  onClick={() => scrollToId("instagram")}
                  className="text-left text-sm font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
                >
                  Communauté
                </button>
                <hr className="border-white/10" />
                <button
                  onClick={() => scrollToId("footer-cta")}
                  className="w-full text-center py-4 bg-primary-900 hover:bg-primary-950 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
                >
                  Lancer l'app
                </button>
              </div>
            )}
          </header>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className={`relative overflow-hidden transition-colors duration-1000 ${heroState === 'map' ? 'bg-[#0a0a0a]' : 'bg-neutral-50'} min-h-screen lg:min-h-[92vh] flex items-center -mt-20 pt-32 pb-24 md:py-32`}>
        {/* Background image covering full height (Only visible in search & loading states, faded out/blurred in map state) */}
        <div className={`absolute inset-0 z-0 transition-all duration-1000 ${heroState === 'map' ? 'opacity-10 scale-105 blur-sm' : 'opacity-100 scale-100'}`}>
          <Image 
            src="/neve_hero_right.png" 
            alt="Randonneuse sur un sentier en montagne" 
            fill 
            priority
            className="object-cover object-[65%_center]"
            sizes="100vw"
          />
          {/* Light gradient overlay to make text highly legible on the light sky background while maintaining a light aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-50/85 via-neutral-50/35 to-transparent z-1"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-50 z-1"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Wording & CTA or Trajectory Details */}
            <div className={`transition-all duration-700 ${heroState === 'map' ? 'lg:col-span-4' : 'lg:col-span-7'} flex flex-col justify-center text-left`}>
              
              {heroState !== 'map' ? (
                <div className="animate-fade-in space-y-8">
                  {/* Top Tagline */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary-50/90 backdrop-blur-md text-primary-900 text-[10px] font-bold tracking-widest uppercase rounded-full border border-primary-200/50 w-fit">
                    <SparklesIcon className="w-3.5 h-3.5 text-primary-600" />
                    Micro-aventure ferroviaire
                  </div>

                  {/* Main Slogan */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[60px] font-black tracking-tight text-neutral-950 leading-[1.05] uppercase">
                    Quittez Paris <br />
                    sur un coup de tête. <br />
                    <span className="text-primary-600">Rentrez pour le dîner.</span> <br />
                    Sans stress.
                  </h1>

                  {/* Reassuring Subtitle */}
                  <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-lg">
                    Névé planifie votre rando en fonction du prochain train. Zéro voiture, zéro calcul, 100% d'évasion en direct sur votre écran.
                  </p>

                  {/* Conditional Search / Loading Card */}
                  {heroState === 'search' ? (
                    <div className="relative w-full max-w-[420px] bg-neutral-950/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl flex flex-col gap-5 text-white animate-scale-up">
                      {/* Search Bar Input */}
                      <form 
                        onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }}
                        className="relative flex items-center bg-neutral-900 border border-white/5 rounded-full px-4.5 py-3.5 shadow-inner"
                      >
                        <svg className="w-4 h-4 text-neutral-400 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input 
                          type="text" 
                          placeholder="Où voulez-vous randonner ?" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="text-xs text-white placeholder-neutral-500 font-medium flex-1 bg-transparent border-none outline-none focus:ring-0 p-0"
                        />
                        <button 
                          type="submit"
                          className="w-7 h-7 rounded-full bg-primary-400 hover:bg-primary-500 flex items-center justify-center text-neutral-950 font-bold text-sm cursor-pointer transition-colors"
                          aria-label="Rechercher"
                        >
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </button>
                      </form>

                      {/* Suggestions Header */}
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        <span>Recherches fréquentes</span>
                        <span className="text-primary-400 hover:underline cursor-pointer" onClick={() => handleSearchSubmit()}>Voir tout</span>
                      </div>

                      {/* Suggestions List */}
                      <div className="space-y-3">
                        {/* Option 1: Fontainebleau */}
                        <div 
                          onClick={() => handleSearchSubmit('fontainebleau')}
                          className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/12 transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.99]"
                        >
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                            <Image src="/journey_mountain.png" alt="Fontainebleau" fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-white truncate">Forêt de Fontainebleau</h4>
                            <p className="text-[10px] text-neutral-400 mt-1 truncate">38 min de train (Gare de Lyon) • 14.2 km</p>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] font-bold text-primary-400 flex items-center gap-0.5 justify-end">
                              <span>★</span>
                              <span>4.9</span>
                            </div>
                            <span className="inline-block mt-1 text-[8px] bg-white/10 text-white font-bold uppercase px-1.5 py-0.5 rounded">Navigo</span>
                          </div>
                        </div>

                        {/* Option 2: Chevreuse */}
                        <div 
                          onClick={() => handleSearchSubmit('chevreuse')}
                          className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/12 transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.99]"
                        >
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                            <Image src="/journey_river.png" alt="Vallée de la Chevreuse" fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-white truncate">Vallée de la Chevreuse</h4>
                            <p className="text-[10px] text-neutral-400 mt-1 truncate">45 min de RER (Gare du Nord) • 15.8 km</p>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] font-bold text-primary-400 flex items-center gap-0.5 justify-end">
                              <span>★</span>
                              <span>4.8</span>
                            </div>
                            <span className="inline-block mt-1 text-[8px] bg-white/10 text-white font-bold uppercase px-1.5 py-0.5 rounded">Navigo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Loading State
                    <div className="relative w-full max-w-[420px] bg-neutral-950/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl flex flex-col gap-6 text-white mt-8 items-center justify-center py-12 animate-scale-up">
                      <div className="w-12 h-12 rounded-full border-4 border-neutral-800 border-t-primary-400 animate-spin"></div>
                      <div className="text-center space-y-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary-400">Recherche d'itinéraire...</p>
                        <p className="text-sm font-semibold text-white transition-all duration-300">
                          {loadingStep === 0 && "Calcul de l'itinéraire optimal sans voiture..."}
                          {loadingStep === 1 && "Vérification des prochains départs SNCF..."}
                          {loadingStep === 2 && "Génération de la trace de randonnée..."}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Social Proof */}
                  <div className="pt-8 border-t border-neutral-200/50 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-lg">
                    <div className="flex -space-x-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                        <Image src="/journey_mountain.png" alt="Utilisateur Névé" fill className="object-cover" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                        <Image src="/journey_river.png" alt="Utilisateur Névé" fill className="object-cover" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                        <Image src="/tent_forest.png" alt="Utilisateur Névé" fill className="object-cover" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                        <Image src="/forest_green.png" alt="Utilisateur Névé" fill className="object-cover" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-neutral-600">
                        +
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-neutral-900">
                        Déjà +500 samedis sauvés de la routine parisienne.
                      </p>
                      <p className="text-[10px] text-neutral-500 mt-0.5">
                        Aucun retard de train manqué grâce aux alertes en direct.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Map Trajectory Details Card (Liquid Glass / Frosted Effect)
                <div className="animate-scale-up relative w-full bg-neutral-950/65 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl flex flex-col gap-5 text-white">
                  
                  {/* Close / Back button */}
                  <button 
                    onClick={() => setHeroState('search')}
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer w-fit"
                  >
                    <ArrowLeftIcon className="w-3.5 h-3.5" />
                    <span>Nouvelle recherche</span>
                  </button>

                  {/* Header info */}
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Trajet optimal trouvé</span>
                      </span>
                      <h2 className="text-xl font-black uppercase tracking-tight text-white leading-tight">
                        {HERO_ROUTES[selectedDest].name}
                      </h2>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-amber-400 flex items-center gap-0.5 justify-end">
                        <span>★</span>
                        <span>{HERO_ROUTES[selectedDest].rating}</span>
                      </div>
                      <span className="text-[9px] text-neutral-400 block mt-0.5">Note Rando</span>
                    </div>
                  </div>

                  {/* Journey Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center">
                    <div>
                      <p className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider">Transport</p>
                      <p className="text-xs font-bold text-white mt-0.5">{HERO_ROUTES[selectedDest].trainTime}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider">Randonnée</p>
                      <p className="text-xs font-bold text-white mt-0.5">{HERO_ROUTES[selectedDest].distance}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider">Tarif</p>
                      <p className="text-xs font-bold text-emerald-400 mt-0.5">Navigo</p>
                    </div>
                  </div>

                  {/* Itinerary Timeline */}
                  <div className="space-y-4 my-2 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
                    {HERO_ROUTES[selectedDest].steps.map((step, idx) => (
                      <div key={idx} className="flex gap-3 text-left">
                        {/* Timeline Connector Line and Bullet */}
                        <div className="flex flex-col items-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            step.type === 'walk' ? 'bg-neutral-800 text-neutral-400' :
                            step.type === 'train' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/20' :
                            step.type === 'hike' ? 'bg-amber-950/80 text-amber-400 border border-amber-500/20' :
                            'bg-primary-950/80 text-primary-400 border border-primary-500/20'
                          }`}>
                            {step.type === 'walk' && "🚶"}
                            {step.type === 'train' && "🚇"}
                            {step.type === 'hike' && "🥾"}
                            {step.type === 'return' && "🔄"}
                          </div>
                          {idx < HERO_ROUTES[selectedDest].steps.length - 1 && (
                            <div className="w-0.5 h-10 bg-white/10 my-1"></div>
                          )}
                        </div>
                        {/* Step content */}
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="flex justify-between items-start gap-1">
                            <h4 className="text-xs font-bold text-white leading-snug">{step.desc}</h4>
                            <span className="text-[9px] font-bold text-neutral-400 flex-shrink-0 bg-white/5 px-1.5 py-0.5 rounded">
                              {step.duration}
                            </span>
                          </div>
                          {step.detail && (
                            <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed font-light">{step.detail}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Importer CTA */}
                  <button 
                    onClick={() => scrollToId("footer-cta")}
                    className="w-full py-3 bg-primary-900 hover:bg-primary-950 text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-primary-950/30 text-center cursor-pointer mt-2"
                  >
                    Importer la trace GPX
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Smartphone Mockup or SVG Map View */}
            <div className={`transition-all duration-700 ${heroState === 'map' ? 'lg:col-span-8 w-full' : 'lg:col-span-5'} flex justify-center items-center mt-8 lg:mt-0`}>
              {heroState !== 'map' ? (
                // Smartphone Mockup showing a miniature preview of the map
                <div className="relative w-full max-w-[320px] h-[550px] bg-neutral-950 rounded-[44px] border-[10px] border-neutral-900 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-1.5 select-none animate-scale-up z-10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-900 rounded-b-xl z-20"></div>
                  
                  {/* Miniature SVG Map in background */}
                  <div className="absolute inset-0 z-0 bg-neutral-950 opacity-40">
                    {renderSVGMap(true)}
                  </div>
                  
                  {/* Phone UI Overlay */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-between py-8 px-5 text-white text-center">
                    <div className="space-y-3 mt-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary-950/60 border border-primary-500/20 flex items-center justify-center text-primary-400 mx-auto">
                        <CustomMountainLogo className="w-8 h-8 text-primary-400" />
                      </div>
                      <h3 className="font-black text-sm uppercase tracking-widest text-white mt-2">Névé App</h3>
                      <p className="text-[10px] text-neutral-400 max-w-[190px] mx-auto leading-relaxed font-light">
                        Planificateur de micro-aventures sans voiture au départ de Paris.
                      </p>
                    </div>
                    
                    <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-4 backdrop-blur-md text-left mx-1 shadow-lg">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>DÉMO INTERACTIVE</span>
                      </div>
                      <p className="text-[10px] text-neutral-300 leading-normal font-light">
                        Cliquez sur une destination à gauche pour lancer le calcul d'itinéraire en direct sur la carte.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Large Immersive Interactive Vector SVG Map
                <div className="relative w-full bg-neutral-950/65 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl h-[420px] sm:h-[480px] lg:h-[550px] overflow-hidden flex items-center justify-center select-none animate-scale-up">
                  {renderSVGMap(false)}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* [NEW SECTION] 2.1 FRESH JOURNEYS CENTERED GRID SECTION (Inspired by Hidden Gems) */}
      <section id="tours" className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-primary-900">
              Inspirez-vous
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
              Explorez les pépites cachées d'Île-de-France
            </h2>
            <button 
              onClick={() => scrollToId("destinations")}
              className="inline-flex items-center justify-center bg-primary-900 hover:bg-primary-950 text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 mt-4 shadow-sm cursor-pointer"
            >
              Explorez les tracés
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Mountain Escapes */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image 
                src="/journey_mountain.png" 
                alt="Forêts et rochers de Fontainebleau" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 280px"
              />
              {/* Bottom dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              
              {/* Card content at the bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg uppercase tracking-wide">Massifs & Forêts</h3>
                <p className="text-neutral-300 text-xs leading-relaxed font-light">
                  Respirez le grand air des pinèdes. Parcourez des sentiers de grès sauvages au cœur de Fontainebleau.
                </p>
              </div>
            </div>

            {/* Card 2: Valleys & Rivers */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image 
                src="/journey_river.png" 
                alt="Vallée de la Chevreuse" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21V3m0 18a9 9 0 0 0 0-18m0 0V3m0 0a9 9 0 0 1 0 18M3 12h18" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg uppercase tracking-wide">Vallées Sauvages</h3>
                <p className="text-neutral-300 text-xs leading-relaxed font-light">
                  Longez des ruisseaux sinueux et traversez des prairies fleuries au creux du Vexin Français.
                </p>
              </div>
            </div>

            {/* Card 3: Cliffs & Peaks */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image 
                src="/forest_lake.png" 
                alt="Crêtes et panoramas sauvages" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg uppercase tracking-wide">Falaises & Crêtes</h3>
                <p className="text-neutral-300 text-xs leading-relaxed font-light">
                  Prenez de la hauteur. Admirez des panoramas exceptionnels depuis les rochers de grès.
                </p>
              </div>
            </div>

            {/* Card 4: Seasonal / Bivouac */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image 
                src="/tent_forest.png" 
                alt="Saisons et bivouacs" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-7xl) 280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m0-12.728.707.707m11.314 11.314-.707.707M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg uppercase tracking-wide">Refuges & Saisons</h3>
                <p className="text-neutral-300 text-xs leading-relaxed font-light">
                  Profitez des couleurs changeantes de l'automne ou de la brume matinale sur les étangs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* [NEW SECTION] 3.1 SAFETY & COMFORT FLOATING CARDS (Inspired by Image 3) */}
      <section id="safety" className="py-24 md:py-36 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              SÉCURITÉ & FIABILITÉ
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mt-3">
              Votre confort et votre sécurité sont notre priorité.
            </h2>
            <p className="text-neutral-500 mt-4 text-sm md:text-base">
              Randonnez en toute décontraction. Nos guides et algorithmes veillent sur chaque étape pour éliminer tous les risques de logistique.
            </p>
          </div>

          {/* Staggered Floating Layout (Desktop absolute overlap & Mobile grid) */}
          
          {/* 1. Desktop version */}
          <div className="relative max-w-6xl mx-auto min-h-[760px] hidden lg:block">
            {/* Central Main Rounded Image (Tent looking out to forest) - Enlarged */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[580px] rounded-[48px] overflow-hidden shadow-2xl border border-neutral-200 z-10">
              <Image 
                src="/tent_forest.png" 
                alt="Vue de montagne depuis la tente" 
                fill 
                className="object-cover"
                sizes="440px"
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 to-transparent"></div>
            </div>

            {/* Card 1: Safety (Far Left, Medium-High) */}
            <div className="absolute left-[calc(50%-490px)] top-[38%] -translate-y-1/2 z-20 w-[290px] bg-primary-900 text-white py-9.5 px-7.5 rounded-[32px] shadow-2xl border border-primary-950/30 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary-900 mb-6 shadow-md border border-neutral-100/30">
                <ShieldIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-wider">Sécurité</h3>
              <p className="text-xs text-neutral-300 mt-3.5 leading-relaxed">
                Nous appliquons des normes de sécurité rigoureuses pour chaque tracé. L'itinéraire est doublement vérifié et mis à jour.
              </p>
            </div>

            {/* Card 2: Memorable (Center-Left, Top Overlap) */}
            <div className="absolute left-[calc(50%-230px)] top-[2%] z-20 w-[290px] bg-primary-900 text-white py-9.5 px-7.5 rounded-[32px] shadow-2xl border border-primary-950/30 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary-900 mb-6 shadow-md border border-neutral-100/30">
                <HeartIcon className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-wider">Mémorable</h3>
              <p className="text-xs text-neutral-300 mt-3.5 leading-relaxed">
                Grâce à nos itinéraires exclusifs, nous garantisons à chaque randonneur un parcours riche en émotions et en dépaysement.
              </p>
            </div>

            {/* Card 3: Experience (Center-Right, Bottom Overlap) */}
            <div className="absolute right-[calc(50%-230px)] bottom-[2%] z-20 w-[290px] bg-primary-900 text-white py-9.5 px-7.5 rounded-[32px] shadow-2xl border border-primary-950/30 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary-900 font-bold text-base mb-6 shadow-md border border-neutral-100/30">
                8+
              </div>
              <h3 className="font-bold text-base uppercase tracking-wider">Expérience</h3>
              <p className="text-xs text-neutral-300 mt-3.5 leading-relaxed">
                Plus de 8 ans d'organisation de sorties outdoor et d'analyse de données de transports en commun franciliens.
              </p>
            </div>

            {/* Card 4: Best Service (Far Right, Medium-Low) */}
            <div className="absolute right-[calc(50%-490px)] top-[62%] -translate-y-1/2 z-20 w-[290px] bg-primary-900 text-white py-9.5 px-7.5 rounded-[32px] shadow-2xl border border-primary-950/30 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary-900 mb-6 shadow-md border border-neutral-100/30">
                <CompassIcon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-wider">Meilleur Service</h3>
              <p className="text-xs text-neutral-300 mt-3.5 leading-relaxed">
                Une assistance réactive en direct, des conseils d'allure et des tracés adaptés au niveau de chaque participant.
              </p>
            </div>
          </div>

          {/* 2. Responsive version for Mobile & Tablet */}
          <div className="lg:hidden flex flex-col md:grid md:grid-cols-2 gap-8 items-center max-w-2xl mx-auto">
            {/* Mobile Central Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-[380px] rounded-[36px] overflow-hidden shadow-xl border border-neutral-200 md:col-span-2 mx-auto mb-4">
              <Image 
                src="/tent_forest.png" 
                alt="Vue de montagne depuis la tente" 
                fill 
                className="object-cover"
                sizes="(max-w-7xl) 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent"></div>
            </div>

            {/* Mobile Card 1 */}
            <div className="bg-primary-900 text-white p-6.5 rounded-[24px] border border-primary-950/30 flex flex-col items-center text-center shadow-lg w-full">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-900 mb-4 shadow-sm">
                <ShieldIcon className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-wide">Sécurité</h3>
              <p className="text-[11px] text-neutral-300 mt-2 leading-relaxed">
                Nous appliquons des normes de sécurité rigoureuses pour chaque tracé. L'itinéraire est doublement vérifié et mis à jour.
              </p>
            </div>

            {/* Mobile Card 2 */}
            <div className="bg-primary-900 text-white p-6.5 rounded-[24px] border border-primary-950/30 flex flex-col items-center text-center shadow-lg w-full">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-900 mb-4 shadow-sm">
                <HeartIcon className="w-5.5 h-5.5 text-rose-500" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-wide">Mémorable</h3>
              <p className="text-[11px] text-neutral-300 mt-2 leading-relaxed">
                Grâce à nos itinéraires exclusifs, nous garantisons à chaque randonneur un parcours riche en émotions et en dépaysement.
              </p>
            </div>

            {/* Mobile Card 3 */}
            <div className="bg-primary-900 text-white p-6.5 rounded-[24px] border border-primary-950/30 flex flex-col items-center text-center shadow-lg w-full">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-900 font-bold text-xs mb-4 shadow-sm">
                8+
              </div>
              <h3 className="font-bold text-base uppercase tracking-wide">Expérience</h3>
              <p className="text-[11px] text-neutral-300 mt-2 leading-relaxed">
                Plus de 8 ans d'organisation de sorties outdoor et d'analyse de données de transports en commun franciliens.
              </p>
            </div>

            {/* Mobile Card 4 */}
            <div className="bg-primary-900 text-white p-6.5 rounded-[24px] border border-primary-950/30 flex flex-col items-center text-center shadow-lg w-full">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-900 mb-4 shadow-sm">
                <CompassIcon className="w-5.5 h-5.5 text-primary-600" />
              </div>
              <h3 className="font-bold text-base uppercase tracking-wide">Meilleur Service</h3>
              <p className="text-[11px] text-neutral-300 mt-2 leading-relaxed">
                Une assistance réactive en direct, des conseils d'allure et des tracés adaptés au niveau de chaque participant.
              </p>
          </div>
        </div>
      </div>
    </section>

      {/* 4. INTERACTIVE SIMULATOR SECTION */}
      <section id="destinations" className="bg-neutral-100/50 py-24 md:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Simulateur V1</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mt-3">
              Où partez-vous ce samedi ?
            </h2>
            <p className="text-neutral-600 mt-4 text-sm md:text-base">
              Ajustez vos critères pour avoir un aperçu des parcours connectés en direct. Zéro logistique à planifier.
            </p>
          </div>

          {/* Interactive controls */}
          <div className="max-w-4xl mx-auto bg-white border border-neutral-200 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 border-b border-neutral-150">
              
              {/* Origin fixed control */}
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">
                  Gare de départ
                </label>
                <div className="w-full flex items-center justify-between border border-neutral-200 bg-neutral-50 px-5 py-4 rounded-xl cursor-not-allowed">
                  <span className="font-bold text-sm text-neutral-800 uppercase tracking-wider">Au départ de : Paris</span>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">Fixe (V1)</span>
                </div>
                <p className="text-[11px] text-neutral-500 mt-2">
                  D'autres gares de départ (Lyon, Lille, Marseille) seront disponibles prochainement.
                </p>
              </div>

              {/* Slider for travel time */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="duration-slider" className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    Temps de train toléré
                  </label>
                  <span className="text-[10px] font-bold text-white bg-primary-900 px-2.5 py-1 uppercase tracking-wider rounded-md">
                    {sliderVal === 0 ? "Moins de 30 min" : sliderVal === 1 ? "Moins d'1 heure" : "Moins de 2 heures"}
                  </span>
                </div>
                
                {/* Custom Styled Slider */}
                <div className="py-2">
                  <input
                    type="range"
                    id="duration-slider"
                    min="0"
                    max="2"
                    step="1"
                    value={sliderVal}
                    onChange={(e) => setSliderVal(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 appearance-none cursor-pointer rounded-lg accent-primary-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900"
                    aria-label="Sélectionner le temps d'accès en train"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-3">
                    <span className={sliderVal === 0 ? "text-neutral-900 font-black" : ""}>30 min</span>
                    <span className={sliderVal === 1 ? "text-neutral-900 font-black" : ""}>1h00</span>
                    <span className={sliderVal === 2 ? "text-neutral-900 font-black" : ""}>2h00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Vignette Destination */}
            <div className="mt-8 pt-4">
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
                Micro-aventure recommandée
              </div>

              <div key={activeDest.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in">
                {/* Destination Visual Abstract */}
                <div className="lg:col-span-5 relative min-h-[240px] bg-neutral-900 flex flex-col justify-between p-6 overflow-hidden rounded-2xl border border-neutral-800">
                  <Image 
                    src={sliderVal === 0 ? "/journey_river.png" : sliderVal === 1 ? "/journey_mountain.png" : "/forest_lake.png"} 
                    alt={activeDest.name}
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                    sizes="(max-w-7xl) 320px"
                  />
                  
                  {/* Glowing organic indicator for weather/logistics */}
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 text-white rounded-full border border-neutral-700/50">
                      {activeDest.line}
                    </span>
                    <span className="text-2xl" role="img" aria-label="météo">
                      {activeDest.weatherIcon}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">
                      {activeDest.station}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-1">
                      {activeDest.name}
                    </h3>
                  </div>
                </div>

                {/* Destination description & logistics */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-200">
                        <TrainIcon className="w-3.5 h-3.5" />
                        {activeDest.duration}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${
                        activeDest.isNavigo 
                          ? "text-primary-600 bg-primary-50 border-primary-200" 
                          : "text-amber-600 bg-amber-50 border-amber-250"
                      }`}>
                        🎫 {activeDest.pricing}
                      </span>
                    </div>

                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                      {activeDest.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-3 border-y border-neutral-200/60 text-xs">
                      <div>
                        <span className="block text-neutral-400 font-semibold uppercase tracking-wider text-[10px]">Distance de marche</span>
                        <span className="font-bold text-neutral-900 text-sm mt-0.5 block">{activeDest.distance}</span>
                      </div>
                      <div>
                        <span className="block text-neutral-400 font-semibold uppercase tracking-wider text-[10px]">Dénivelé positif</span>
                        <span className="font-bold text-neutral-900 text-sm mt-0.5 block">{activeDest.elevation}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs font-semibold text-primary-600 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                      <span>{activeDest.highlight}</span>
                    </div>
                    <button
                      onClick={() => scrollToId("footer-cta")}
                      className="text-center bg-primary-900 hover:bg-primary-950 text-white font-bold text-xs tracking-widest uppercase py-4 px-6 rounded-full transition-all duration-300"
                    >
                      Obtenir l'itinéraire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="temoignages" className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block text-center">
              Preuve terrain
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mt-3 mb-16 text-neutral-900">
              Ils ont lâché le volant
            </h2>

            {/* Testimonial block */}
            <div className="relative bg-white border border-neutral-200 p-8 md:p-16 rounded-3xl shadow-lg">
              <div className="absolute top-4 left-6 text-8xl font-serif text-neutral-150 select-none pointer-events-none">
                “
              </div>

              <blockquote className="relative z-10">
                <p className="text-lg md:text-2xl font-light leading-relaxed text-neutral-700 italic">
                  "Je prenais des captures d'écran de mes horaires à chaque fois pour ne pas me perdre. Avec Névé, j'ai juste profité de ma rando à Fontainebleau sans regarder ma montre une seule fois."
                </p>
                
                <footer className="mt-8 pt-6 border-t border-neutral-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary-900 flex items-center justify-center font-bold text-white text-sm">
                      R
                    </div>
                    <div>
                      <div className="font-bold text-sm text-neutral-900">Rémi</div>
                      <div className="text-xs text-neutral-400">23 ans — Randonneur urbain (Paris 11e)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1.5 text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
                      🌲 Itinéraire fait : Fontainebleau
                    </span>
                    <span>Samedis sauvés : 6</span>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Differentiated metric social proof */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
              <div className="bg-white border border-neutral-200/60 p-6 rounded-2xl">
                <div className="text-3xl md:text-4xl font-black text-neutral-900 uppercase">98%</div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold mt-1">Des trains attrapés à l'heure</p>
              </div>
              <div className="bg-white border border-neutral-200/60 p-6 rounded-2xl">
                <div className="text-3xl md:text-4xl font-black text-neutral-900 uppercase">0</div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold mt-1">Besoin de voiture de location</p>
              </div>
              <div className="bg-white border border-neutral-200/60 p-6 rounded-2xl">
                <div className="text-3xl md:text-4xl font-black text-neutral-900 uppercase">1 clic</div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold mt-1">Pour lancer la micro-aventure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW SECTION] 5.1 INSTAGRAM COMMUNITY FEED (Inspired by Image 1) */}
      <section id="instagram" className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[1.1]">
                Rejoignez-nous sur <br />
                instagram
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <p className="text-neutral-600 text-xs md:text-sm leading-relaxed max-w-sm">
                Restez au plus près de nos aventures ! Suivez-nous sur les réseaux pour les dernières nouvelles de nos tracés, des récits de randos et des moments insolites de chaque week-end.
              </p>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-950 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                <span>Instagram</span>
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Instagram Images 4-column feed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image 
                src="/journey_mountain.png" 
                alt="Randonneurs sur la crête" 
                fill 
                className="object-cover"
                sizes="(max-w-7xl) 280px"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image 
                src="/journey_river.png" 
                alt="Val sauvage aux fleurs" 
                fill 
                className="object-cover"
                sizes="(max-w-7xl) 280px"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image 
                src="/tent_forest.png" 
                alt="Cozy camping sous la tente" 
                fill 
                className="object-cover"
                sizes="(max-w-7xl) 280px"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image 
                src="/forest_lake.png" 
                alt="Lac et forêt brumeuse" 
                fill 
                className="object-cover"
                sizes="(max-w-7xl) 280px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER & CLOSING CTA BANNER (Redesigned like Image 4) */}
      <section id="footer-cta" className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Rounded Image Banner (Teal pine forest lake) */}
          <div className="relative w-full min-h-[480px] md:min-h-[580px] rounded-[40px] overflow-hidden flex flex-col justify-center items-center px-6 py-16 text-center shadow-2xl border border-neutral-200">
            {/* Background image */}
            <Image 
              src="/forest_green.png" 
              alt="Forêt de pins verdoyante et ensoleillée" 
              fill 
              className="object-cover"
              sizes="(max-w-7xl) 1200px"
            />
            {/* Rich forest green overlay, lighter and highlighting the forest hues */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-neutral-900/30 to-neutral-950/80"></div>

            {/* Content overlay */}
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-400">Passez à l'action</span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-6 leading-none">
                Prêt à explorer ? <br />
                Bloquez votre samedi.
              </h2>
              <p className="text-neutral-300 text-sm md:text-base mb-12 max-w-lg mx-auto font-light leading-relaxed">
                Inscrivez-vous pour recevoir jeudi à 18h la micro-aventure idéale de la semaine, configurée selon la météo et les horaires SNCF en direct.
              </p>

              {/* Form container */}
              <div className="max-w-md mx-auto">
                {!formSubmitted ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                      <input
                        type="text"
                        placeholder="Votre e-mail ou téléphone"
                        value={contactInput}
                        onChange={(e) => setContactInput(e.target.value)}
                        className="flex-1 bg-neutral-950/50 backdrop-blur-md border border-neutral-700 text-white placeholder-neutral-500 font-medium px-5 py-4 rounded-full focus:outline-none focus:border-white text-sm focus:ring-1 focus:ring-white"
                        aria-label="Adresse e-mail ou numéro de téléphone pour inscription"
                      />
                      <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-400 text-white font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-full border border-primary-500 transition-all duration-300 active:scale-95 whitespace-nowrap shadow-md cursor-pointer"
                      >
                        M'inscrire pour samedi
                      </button>
                    </div>

                    {formError && (
                      <p className="text-left text-xs font-semibold text-rose-400 flex items-center gap-1.5 mt-2 justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                        {formError}
                      </p>
                    )}
                  </form>
                ) : (
                  <div className="bg-neutral-950/80 backdrop-blur-md border border-primary-800/80 p-6 rounded-3xl text-center space-y-3 animate-scale-up">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center mx-auto">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white">Vous êtes inscrit !</h3>
                    <p className="text-xs text-neutral-400">
                      Merci ! Vous recevrez la sélection météo & train ce jeudi à 18h00. Soyez prêt pour l'évasion 🌲.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-[10px] text-neutral-500 underline font-semibold uppercase tracking-wider hover:text-neutral-300"
                    >
                      S'inscrire avec un autre contact
                    </button>
                  </div>
                )}
              </div>

              <p className="text-[11px] text-neutral-400 mt-6 font-medium">
                Zéro spam. Désinscription en un clic. Vos données restent sécurisées.
              </p>
            </div>
          </div>

          {/* Footer content */}
          <footer className="mt-16 pt-12 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <CustomMountainLogo className="w-6 h-6 text-primary-900" />
              <span className="text-sm font-bold uppercase tracking-wider text-neutral-900">NÉVÉ</span>
            </div>
            
            <p className="text-xs text-neutral-500 order-last md:order-none">
              &copy; {new Date().getFullYear()} Névé Randonnées. Tous droits réservés.
            </p>

            <div className="flex gap-6 text-xs text-neutral-500 font-semibold">
              <a href="#" className="hover:text-primary-900 transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-primary-900 transition-colors">Mentions légales</a>
            </div>
          </footer>
        </div>
      </section>

      {/* --- CONCEPT EXPLAINER MODAL (40s Video simulated placeholder) --- */}
      {conceptModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm p-4">
          <div className="bg-neutral-900 border border-neutral-800 text-white w-full max-w-xl p-6 md:p-8 rounded-3xl relative shadow-2xl">
            <button
              onClick={() => setConceptModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              aria-label="Fermer"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Le concept Névé</span>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mt-1">
                Comment ça marche ?
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white shrink-0">1</div>
                <div>
                  <strong className="text-white font-semibold block">Vous choisissez votre rayon de temps</strong>
                  Vous ajustez le curseur selon votre temps de trajet maximum toléré en train.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white shrink-0">2</div>
                <div>
                  <strong className="text-white font-semibold block">Névé croise la météo et la SNCF</strong>
                  Notre algorithme élimine les zones pluvieuses et sélectionne les randonnées dont la gare d'arrivée a un train retour optimal dans l'après-midi.
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white shrink-0">3</div>
                <div>
                  <strong className="text-white font-semibold block">Vous marchez avec l'esprit serein</strong>
                  Sur le terrain, l'application vous géolocalise et vous alerte si vous perdez le rythme pour attraper le train choisi. Pas d'horaires à mémoriser.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setConceptModalOpen(false)}
                className="bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs tracking-widest uppercase py-3.5 px-6 rounded-full"
              >
                Compris, fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
