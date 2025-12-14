// Fichier: app/components/Header.tsx

'use client'; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// 1. Importer le composant "Image" de Next.js
import Image from 'next/image'; 

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link 
            href="/" 
            className="flex items-center space-x-4 cursor-pointer transition-opacity hover:opacity-80"
          >
            {/* --- MODIFICATION --- */}
            
            {/* 2. Remplacer <img> par <Image> */}
            <Image
              // 3. Le chemin commence par "/" 
              //    Il pointe vers 'public/images/zacharie-profile.png'
              src="/images/WhatsApp Image 2025-11-14 at 6.25.28 PM.jpeg" 
              alt="Profil Zacharie"
              // Le style reste le même, j'ajoute 'object-cover'
              // pour éviter que l'image soit déformée.
              
              // MODIFIÉ : Taille augmentée
              className="w-16 h-16 rounded-full border-2 border-gray-700 object-cover" 
              width={50}  // MODIFIÉ : de 40 à 48
              height={50} // MODIFIÉ : de 40 à 48
            />
            {/* --- FIN MODIFICATION --- */}

            <span className="text-2xl font-bold text-white">
              Zacharie T. KOUADINOU
            </span>
          </Link>

          {/* Lien "Quotes" (inchangé) */}
          <div>
            <Link
              href="/quotes"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${
                  pathname === '/quotes'
                    ? 'text-white bg-gray-700' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }
              `}
            >
              Quotes
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}