import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BackgroundGradient } from '../src/components/ui/background-gradient'

export default function Products() {
  const products = {
    gelatos: [
      { name: 'Oreo Gelato', description: 'Rich chocolate base with authentic Oreo cookie pieces for the perfect indulgent experience' },
      { name: 'Paan Gelato', description: 'Traditional Indian paan flavor with aromatic spices and refreshing mint notes' }
    ],
    milks: [
      { 
        type: 'Oat Milk',
        variants: ['Original', 'Barista Edition', 'Unsweetened', 'Vanilla'],
        features: ['Creamy texture', 'Froths perfectly', 'Neutral taste', 'High fiber']
      },
      {
        type: 'Soy Milk',
        variants: ['Original', 'Light', 'Protein Plus', 'Vanilla'],
        features: ['High protein', 'Complete amino acids', 'Smooth consistency', 'Versatile use']
      }
    ]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          {/* Main Content */}
          <div className="container mx-auto px-6 z-10 text-center relative">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                Artisan Flavours for
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                HoReCa Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              VeganFun offers artisan-crafted gelatos and milk alternatives, 
              precisely designed for Hotels, Restaurants, and Cafes.
            </p>
          </div>
        </section>

        {/* Gelatos Section */}
        <section id="gelatos" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Signature Gelato
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                  Collection
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Our artisan gelato range features unique flavors, each carefully crafted 
                for HoReCa clients seeking exceptional plant-based desserts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              {products.gelatos.map((gelato, index) => (
                <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{gelato.name}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{gelato.description}</p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">100% Natural</span>
                    <span className="text-primary font-semibold">Premium Quality</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-center">B2B Gelato Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Bulk packaging options (2L, 5L, 10L)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Custom flavor development available</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Extended shelf life with natural preservation</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>White label options for retail partners</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Competitive wholesale pricing</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Marketing support and POS materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plant Milks Section */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Plant-Based Milk
                </span>
                <br />
                <span className="bg-gradient-to-r from-secondary via-leaf to-sage bg-clip-text text-transparent">
                  Alternatives
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Premium milk alternatives designed for professional kitchens and coffee shops.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {products.milks.map((milk, index) => (
                <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-leaf rounded-t-3xl"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-leaf rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a8.97 8.97 0 008.354-5.646z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">{milk.type}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3 text-neutral-800">Available Variants:</h4>
                    <div className="flex flex-wrap gap-2">
                      {milk.variants.map((variant, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-neutral-800">Key Features:</h4>
                    <div className="space-y-2">
                      {milk.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm border border-neutral-200/50">
              <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Packaging & Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-neutral-900">Food Service</h4>
                  <p className="text-neutral-600">1L cartons, 10L bag-in-box systems for high-volume operations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-leaf rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-neutral-900">Retail</h4>
                  <p className="text-neutral-600">500ml and 1L consumer packs with your branding</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-leaf to-sage rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-neutral-900">Industrial</h4>
                  <p className="text-neutral-600">Bulk tanker deliveries for manufacturing partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Elevate Your Menu?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-neutral-300">
              Contact our B2B team for samples, pricing, and customization options. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8BC34A_0%,#4CAF50_50%,#8BC34A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-800">
                  Request Samples
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm"
              >
                Download B2B Catalog
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}