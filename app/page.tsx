// Fichier: app/page.tsx

import React from 'react';
import Link from 'next/link'; // Important: use Next.js Link

/**
 * Home Page (Route: /)
 * This is a Server Component by default, which is good for performance.
 */
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-160px)] px-4">
      
      {/* 1. The strong phrase (your H1) */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Take back control.
      </h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-10">
        One thought at a time.
      </p>
      
      {/* 2. The button (Call-to-Action) */}
      <Link 
        href="/quotes"
        className="bg-white text-gray-900 px-10 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg cursor-pointer"
      >
        View Quotes
      </Link>
      
      {/* 3. The motto at the bottom */}
      <p className="mt-24 text-gray-500 text-lg tracking-widest uppercase">
        Discipline. Habits. Identity.
      </p>

    </main>
  );
}