'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '../src/lib/utils'

const NavigationMenu = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
  ]

  return (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-md hover:bg-neutral-50"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

const ShimmerButton = ({ children, className, ...props }: any) => {
  return (
    <button
      className={cn(
        "inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
  ]

  if (!isOpen) return null

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-4">
          <Link
            href="/contact"
            className="block w-full text-center bg-gradient-to-r from-neutral-900 to-neutral-700 text-white px-4 py-2 rounded-md font-medium"
            onClick={onClose}
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200/20">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Image 
                  src="/veganfunlogo1.png" 
                  alt="Vegan Fun Logo" 
                  width={85} 
                  height={42}
                  className="object-contain"
                />
              </div>
              <span className="text-neutral-400 text-sm font-light">by</span>
              <div className="relative">
                <Image 
                  src="/1.5_degree_logo.png.avif" 
                  alt="1.5 Degree Logo" 
                  width={55} 
                  height={28}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Centered Navigation */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <NavigationMenu />
            </div>

            {/* Right CTA Button */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8BC34A_0%,#4CAF50_50%,#8BC34A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Partner With Us
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out",
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out top-3",
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out",
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>
    </div>
  )
}