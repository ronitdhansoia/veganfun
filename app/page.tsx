import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-cream to-white">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="container mx-auto px-6 z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-earth mb-6">
              Artisan Plant-Based Solutions<br />
              <span className="text-primary">Crafted For You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              VeganFun is an artisan brand crafted as per the requirements of clients with a diverse 
              portfolio of general and premium flavours for HoReCa businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Become a Partner
              </Link>
              <Link href="/products" className="btn-secondary">
                Explore Products
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center text-earth mb-16">
              Why Choose VeganFun for Your HoReCa Business?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Artisan Craftsmanship</h3>
                <p className="text-gray-600">
                  Each product is artisan-crafted to meet your specific requirements with premium ingredients and authentic flavours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Sustainable Impact</h3>
                <p className="text-gray-600">
                  Eco-friendly production, minimal carbon footprint. Help your business meet sustainability goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Diverse Portfolio</h3>
                <p className="text-gray-600">
                  Complete range of general and premium flavours tailored to meet diverse HoReCa client requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center text-earth mb-16">
              Artisan Flavours for HoReCa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Natural Gelatos</h3>
                  <p className="text-gray-600 mb-4">
                    Premium plant-based gelatos in multiple flavors. Perfect for restaurants, cafes, and retail.
                  </p>
                  <Link href="/products#gelatos" className="text-primary font-semibold hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-secondary to-leaf"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Oat Milk</h3>
                  <p className="text-gray-600 mb-4">
                    Creamy, barista-grade oat milk ideal for coffee shops and food service operations.
                  </p>
                  <Link href="/products#oat-milk" className="text-primary font-semibold hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-leaf to-sage"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Soy Milk</h3>
                  <p className="text-gray-600 mb-4">
                    High-protein soy milk perfect for health-focused establishments and retail chains.
                  </p>
                  <Link href="/products#soy-milk" className="text-primary font-semibold hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Join the Plant-Based Revolution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Vegan Fun and offer your customers healthy, sustainable, and delicious plant-based options.
            </p>
            <Link href="/contact" className="bg-white text-primary hover:bg-cream font-semibold py-4 px-8 rounded-lg inline-block transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}