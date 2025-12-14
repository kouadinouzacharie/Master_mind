// Fichier: app/layout.tsx

import React from 'react';
// 1. SUPPRIMÉ : import { Inter } from 'next/font/google';
import Header from './components/Header'; // L'import est correct
import './styles/globals.css';          // L'import est correct

// 2. SUPPRIMÉ : const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zacharie - Take Control',
  description: 'Discipline. Habits. Identity.',
};

const Footer = () => (
  <footer className="bg-gray-900 mt-16 border-t border-gray-700">
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} Zaack. All rights reserved.</p>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* --- MODIFICATION ICI --- */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=block"
          rel="stylesheet"
        />
        {/* --- FIN MODIFICATION --- */}
      </head>
      <body className={`bg-gray-900 text-gray-100 font-sans`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}