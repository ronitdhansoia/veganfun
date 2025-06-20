import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-earth text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/veganfunlogo1.png" 
                alt="Vegan Fun Logo" 
                width={100} 
                height={50}
                className="object-contain"
              />
              <span className="text-gray-300">by</span>
              <Image 
                src="/1.5_degree_logo.png.avif" 
                alt="1.5 Degree Logo" 
                width={60} 
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-300">
              Premium plant-based solutions for businesses committed to health and sustainability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">B2B Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wholesale" className="hover:text-primary transition-colors">Wholesale</Link></li>
              <li><Link href="/private-label" className="hover:text-primary transition-colors">Private Label</Link></li>
              <li><Link href="/foodservice" className="hover:text-primary transition-colors">Food Service</Link></li>
              <li><Link href="/retail" className="hover:text-primary transition-colors">Retail Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <svg className="w-4 h-4 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@natturz.com</span>
              </p>
              <p className="flex items-start">
                <svg className="w-4 h-4 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98189 92652</span>
              </p>
              <p className="flex items-start">
                <svg className="w-4 h-4 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>M-13 South Ex-2,<br />New Delhi, 110049</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Vegan Fun by 1.5 Degree. All rights reserved. | Crafted with love for a sustainable future</p>
        </div>
      </div>
    </footer>
  )
}