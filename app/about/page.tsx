import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
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
                Our Story of
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                Artisan Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              VeganFun is an artisan brand crafted for clients seeking premium 
              plant-based solutions, specifically designed for HoReCa businesses.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="group relative bg-white rounded-3xl p-10 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">Our Mission</h2>
                <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                  To be the preferred artisan brand for HoReCa businesses by providing customized 
                  plant-based solutions that meet specific client requirements.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We craft each product with precision, offering diverse portfolios of general and premium 
                  flavours that help businesses differentiate themselves in the market.
                </p>
              </div>

              <div className="group relative bg-white rounded-3xl p-10 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-leaf rounded-t-3xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-leaf rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>

                <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">Our Vision</h2>
                <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                  To become the leading artisan brand in the HoReCa industry, known for our ability 
                  to create bespoke plant-based solutions that exceed client expectations.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We envision VeganFun products as the standard choice for hotels, restaurants, and cafes 
                  seeking premium, customizable plant-based offerings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Our Core
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Sustainability</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Every decision we make considers its impact on the environment
                </p>
              </div>

              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Quality</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We never compromise on ingredients or production standards
                </p>
              </div>

              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-leaf to-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Innovation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Constantly improving our products and developing new solutions
                </p>
              </div>

              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-earth to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Partnership</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Building lasting relationships with businesses that share our values
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <svg className="w-16 h-16 text-primary mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-2xl md:text-3xl font-display mb-8 leading-relaxed">
                "We started VeganFun because we saw a gap in the market for truly delicious 
                plant-based alternatives. Our goal is to make it easy for businesses to offer 
                sustainable options without sacrificing quality or taste."
              </blockquote>
              <cite className="text-lg font-semibold text-primary">- Founders of 1.5 Degree</cite>
            </div>
          </div>
        </section>

        {/* Why 1.5 Degree */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Why "1.5 Degree"?
                </span>
              </h2>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-10 border border-primary/20">
                <p className="text-xl text-neutral-700 mb-6 leading-relaxed">
                  Our name reflects our commitment to the UN's goal of limiting global warming to 
                  1.5 degrees Celsius. Every product we create, every partnership we form, and every 
                  decision we make is guided by this mission.
                </p>
                <p className="text-xl text-neutral-700 leading-relaxed">
                  By choosing VeganFun products, your business becomes part of the solution, 
                  contributing to a sustainable future while delighting customers with exceptional 
                  plant-based options.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}