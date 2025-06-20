'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/veganfunlogo1.png" 
              alt="Vegan Fun Logo" 
              width={120} 
              height={60}
              className="object-contain"
            />
            <span className="text-gray-600 text-lg">by</span>
            <Image 
              src="/1.5_degree_logo.png.avif" 
              alt="1.5 Degree Logo" 
              width={80} 
              height={40}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/sustainability" className="text-gray-700 hover:text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/sustainability" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="/contact" className="block py-2 text-primary font-semibold">
              Partner With Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}