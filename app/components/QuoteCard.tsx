'use client'

import React, { useRef, useCallback } from 'react'
import Image from 'next/image'
import { toPng } from 'html-to-image'

interface QuoteCardProps {
  quoteText: string
  authorName?: string
  badgeSrc?: string // chemin de l'image du badge
}

export default function QuoteCard({ 
  quoteText, 
  authorName = 'Zacharie T. KOUADINOU',
  badgeSrc = '/images/controle-des-badges.png' // badge PNG par défaut
}: QuoteCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleDownload = useCallback(() => {
    if (!ref.current) return

    const fontUrl =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=block'

    toPng(ref.current, {
      cacheBust: true,
      filter: node =>
        !(node instanceof HTMLElement && node.classList.contains('download-btn')),
      fontEmbedCSS: `@import url('${fontUrl}');`,
      pixelRatio: 5 // augmente la résolution
    })
      .then(dataUrl => {
        const link = document.createElement('a')
        link.download = `zacharie-mindset-${Date.now()}.png`
        link.href = dataUrl
        link.click()
      })
      .catch(err => {
        console.error('Erreur lors de la génération de l’image', err)
      })
  }, [])

  return (
    <div
      ref={ref}
      className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col relative group"
    >
      {/* Bouton Téléchargement */}
      <button
        onClick={handleDownload}
        className="download-btn absolute top-4 right-4 text-gray-500 hover:text-white hover:bg-gray-700 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        title="Download this thought"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>
      </button>

      {/* En-tête */}
      <div className="flex flex-col items-start mb-6">
        <div className="flex items-center space-x-4">
          {/* Photo de profil */}
          <Image
            src="/images/WhatsApp Image 2025-11-14 at 6.25.28 PM.jpeg"
            alt={authorName}
            className="w-18 h-18 rounded-full border-2 border-gray-700 object-cover"
            width={72}
            height={72}
          />

          {/* Nom + badge + sous-texte */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold text-xl">{authorName}</span>

              {/* Badge PNG */}
              {badgeSrc && (
                <img
                  src={badgeSrc} 
                  alt="Badge de certification"
                  className="w-6 h-6 object-contain"
                />
              )}
            </div>

            {/* Phrase sous le nom */}
            <span className="text-gray-400 text-sm">@Mindset & Growth</span>
          </div>
        </div>
      </div>

      {/* Citation */}
      <div className="flex-grow flex items-center justify-center min-h-[150px]">
        <blockquote className="text-2xl font-medium text-white text-left relative py-4 pl-6">
          {/* Barre rouge parfaitement isolée */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-1.5 bg-red-600 rounded-full"></span>

          {quoteText}
        </blockquote>
      </div>
    </div>
  )
}
