import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Sustainability() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-leaf/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-sage/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          {/* Main Content */}
          <div className="container mx-auto px-6 z-10 text-center relative">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                Sustainability
              </span>
              <br />
              <span className="bg-gradient-to-r from-leaf via-sage to-secondary bg-clip-text text-transparent">
                First Approach
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              At VeganFun by 1.5 Degree, sustainability isn't just a buzzword—it's the foundation 
              of everything we do. From sourcing to packaging, we're committed to protecting our planet.
            </p>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Our Environmental
                </span>
                <br />
                <span className="bg-gradient-to-r from-leaf via-sage to-secondary bg-clip-text text-transparent">
                  Impact
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>
                <div className="text-5xl font-bold text-primary mb-4">75%</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Less Water Usage</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Compared to traditional dairy production methods
                </p>
              </div>
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-leaf rounded-t-3xl"></div>
                <div className="text-5xl font-bold text-secondary mb-4">90%</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Lower Carbon Footprint</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Through plant-based ingredients and efficient production
                </p>
              </div>
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-leaf to-sage rounded-t-3xl"></div>
                <div className="text-5xl font-bold text-leaf mb-4">100%</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">Renewable Energy</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our facilities run on clean, renewable energy sources
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Our Sustainable
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                  Practices
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative bg-white rounded-3xl p-10 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>

                <h3 className="text-3xl font-display font-bold text-neutral-900 mb-6">Responsible Sourcing</h3>
                <ul className="space-y-4 text-neutral-600">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">Local ingredient sourcing to reduce transportation emissions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">Direct partnerships with sustainable farmers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">No palm oil or environmentally harmful ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">Organic ingredients wherever possible</span>
                  </li>
                </ul>
              </div>
              
              <div className="group relative bg-white rounded-3xl p-10 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-leaf rounded-t-3xl"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-leaf rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-display font-bold text-neutral-900 mb-6">Eco-Friendly Packaging</h3>
                <ul className="space-y-4 text-neutral-600">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">100% recyclable and biodegradable packaging materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">Minimal packaging design to reduce waste</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">Bulk packaging options to minimize material use</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">Reusable container programs for B2B partners</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                  Certifications &
                </span>
                <br />
                <span className="bg-gradient-to-r from-leaf via-secondary to-primary bg-clip-text text-transparent">
                  Standards
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">100% Vegan</h3>
              </div>
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-leaf rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Carbon Neutral</h3>
              </div>
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-leaf to-sage rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">♻️</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Zero Waste</h3>
              </div>
              <div className="group text-center bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-earth to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🏭</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Clean Production</h3>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Sustainability Benefits */}
        <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Help Your Business Meet
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                  Sustainability Goals
                </span>
              </h2>
              <p className="text-xl mb-8 max-w-4xl mx-auto text-neutral-300 leading-relaxed">
                Partner with VeganFun to enhance your sustainability credentials and appeal to 
                environmentally conscious consumers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sustainability Reports</h3>
                <p className="text-neutral-300 leading-relaxed">We provide detailed impact reports to help you track and communicate your environmental contributions.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Marketing Support</h3>
                <p className="text-neutral-300 leading-relaxed">Use our sustainability credentials in your marketing to attract eco-conscious customers.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-leaf rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Carbon Offset Programs</h3>
                <p className="text-neutral-300 leading-relaxed">Join our carbon offset initiatives to make your business carbon neutral.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-sage rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Circular Economy</h3>
                <p className="text-neutral-300 leading-relaxed">Participate in our packaging return programs and waste reduction initiatives.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}