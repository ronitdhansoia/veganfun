import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BackgroundGradient } from '@/src/components/ui/background-gradient'

export default function Products() {
  const products = {
    gelatos: [
      { name: 'Vanilla Bean Dream', description: 'Classic vanilla with real vanilla bean specks' },
      { name: 'Chocolate Bliss', description: 'Rich, decadent chocolate made with premium cocoa' },
      { name: 'Mango Passion', description: 'Tropical mango with a hint of passion fruit' },
      { name: 'Pistachio Delight', description: 'Creamy pistachio with real nut pieces' },
      { name: 'Strawberry Fields', description: 'Fresh strawberry with berry swirls' },
      { name: 'Coffee Crunch', description: 'Bold espresso with coffee bean bits' }
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
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-display font-bold mb-6">Artisan Flavours for HoReCa</h1>
            <p className="text-xl max-w-3xl">
              VeganFun offers a diverse portfolio of general and premium flavours, each artisan-crafted 
              as per the specific requirements of Hotels, Restaurants, and Cafes.
            </p>
          </div>
        </section>

        {/* Gelatos Section */}
        <section id="gelatos" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-earth mb-4">Artisan Gelato Collection</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl">
              Our signature gelato range features both general and premium flavours, each artisan-crafted 
              to meet the diverse requirements of HoReCa clients seeking exceptional plant-based desserts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.gelatos.map((gelato, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] bg-white dark:bg-zinc-900">
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-earth mb-3">{gelato.name}</h3>
                    <p className="text-gray-600 mb-4">{gelato.description}</p>
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm text-gray-500">100% Natural</span>
                      <span className="text-primary font-semibold">Premium</span>
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">B2B Gelato Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Bulk packaging options (2L, 5L, 10L)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Custom flavor development available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Extended shelf life with natural preservation</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>White label options for retail partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Competitive wholesale pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Marketing support and POS materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plant Milks Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-earth mb-12">Plant-Based Milks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.milks.map((milk, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] bg-white dark:bg-zinc-900">
                  <div id={milk.type.toLowerCase().replace(' ', '-')} className="p-8">
                    <h3 className="text-3xl font-semibold text-earth mb-4">{milk.type}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-2">Available Variants:</h4>
                      <div className="flex flex-wrap gap-2">
                        {milk.variants.map((variant, i) => (
                          <span key={i} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                            {variant}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {milk.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-earth mb-6">Packaging & Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Food Service</h4>
                  <p className="text-gray-600">1L cartons, 10L bag-in-box systems for high-volume operations</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Retail</h4>
                  <p className="text-gray-600">500ml and 1L consumer packs with your branding</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industrial</h4>
                  <p className="text-gray-600">Bulk tanker deliveries for manufacturing partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-earth text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Add Plant-Based Excellence to Your Menu?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our B2B team for samples, pricing, and customization options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-primary hover:bg-secondary text-white font-semibold py-4 px-8 rounded-lg inline-block transition-all duration-300">
                Request Samples
              </Link>
              <Link href="/contact" className="bg-white text-earth hover:bg-cream font-semibold py-4 px-8 rounded-lg inline-block transition-all duration-300">
                Download B2B Catalog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}