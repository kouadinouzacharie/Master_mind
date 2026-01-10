// Fichier: app/quotes/page.tsx
'use client';

import React, { useState } from 'react';
import QuoteCard from '../components/QuoteCard';

// --- Mock Data (English) ---
const mockQuotes = [
  { id: 1, text: "Discipline is the bridge between goals and accomplishment. We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
  { id: 2, text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
  { id: 3, text: "He who cannot control his thoughts cannot control his actions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }, // J'ai ajouté un texte long pour tester
  { id: 4, text: "The pain of discipline weighs ounces. The pain of regret weighs tons." },
  { id: 5, text: "Do not confuse movement with progress." },
  { id: 6, text: "The secret to getting ahead is getting started." },
];

export default function QuotesPage() {
  // État pour suivre quelle citation est affichée (index 0 au début)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à la citation suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === mockQuotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour aller à la citation précédente
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? mockQuotes.length - 1 : prevIndex - 1
    );
  };

  const currentQuote = mockQuotes[currentIndex];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-[calc(100vh-160px)] flex flex-col justify-center">
      
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Mental Library
      </h1>

      {/* Container du Carousel */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* BOUTON GAUCHE (Précédent) */}
        <button 
          onClick={handlePrev}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
        >
          {/* Flèche gauche SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* LA CARTE CENTRALE */}
        {/* --- MODIFICATION --- */}
        {/* Hauteur fixe retirée.
          La carte va maintenant grandir verticalement pour s'adapter au contenu.
        */}
        <div className="w-full md:w-[500px]"> 
          <QuoteCard 
            key={currentQuote.id} 
            quoteText={currentQuote.text} 
          />
        </div>

        {/* BOUTON DROITE (Suivant) */}
        <button 
          onClick={handleNext}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
        >
          {/* Flèche droite SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>

      {/* CONTROLES MOBILES (En bas de la carte pour les téléphones) */}
      <div className="flex md:hidden justify-center gap-8 mt-8">
        <button 
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Indicateur de postion (ex: 1 / 6) */}
      <p className="text-center text-gray-500 mt-6 text-sm tracking-widest">
        {currentIndex + 1} / {mockQuotes.length}
      </p>

    </div>
  );
}