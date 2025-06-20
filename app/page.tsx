import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-leaf/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          {/* Main Content */}
          <div className="container mx-auto px-6 z-10 text-center relative">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Artisan Plant-Based Solutions for HoReCa
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                Premium Gelatos
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent animate-gradient-x">
                Crafted For You
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              VeganFun delivers artisan plant-based gelatos and milk alternatives, 
              precisely crafted for 
              <span className="font-semibold text-primary"> Hotels, Restaurants & Cafes</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/contact"
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8BC34A_0%,#4CAF50_50%,#8BC34A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-base font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-800">
                  Start Partnership
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/products"
                className="group inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm"
              >
                Explore Flavours
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats or Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-neutral-600">Plant-Based</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">Artisan</div>
                <div className="text-neutral-600">Crafted Quality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leaf mb-2">HoReCa</div>
                <div className="text-neutral-600">Focused Solutions</div>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
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
        <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Artisan Flavours for
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                  HoReCa Excellence
                </span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Discover our premium collection of plant-based gelatos and milk alternatives, 
                crafted specifically for professional kitchens and discerning customers.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Natural Gelatos Card */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Natural Gelatos</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Premium plant-based gelatos in multiple flavors. Perfect for restaurants, cafes, and retail.
                </p>
                
                <Link href="/products#gelatos" className="group/link inline-flex items-center text-primary font-semibold">
                  Learn More
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Oat Milk Card */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-leaf rounded-t-3xl"></div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-leaf rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a8.97 8.97 0 008.354-5.646z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Oat Milk</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Creamy, barista-grade oat milk ideal for coffee shops and food service operations.
                </p>
                
                <Link href="/products#oat-milk" className="group/link inline-flex items-center text-secondary font-semibold">
                  Learn More
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Soy Milk Card */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-leaf to-sage rounded-t-3xl"></div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-leaf to-sage rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Soy Milk</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  High-protein soy milk perfect for health-focused establishments and retail chains.
                </p>
                
                <Link href="/products#soy-milk" className="group/link inline-flex items-center text-leaf font-semibold">
                  Learn More
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center h-12 px-8 text-base font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm"
              >
                View Complete Product Range
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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