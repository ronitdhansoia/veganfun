import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Sustainability() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-leaf to-sage text-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-display font-bold mb-6">Sustainability First</h1>
            <p className="text-xl max-w-3xl">
              At Vegan Fun by 1.5 Degree, sustainability isn't just a buzzword—it's the foundation 
              of everything we do. From sourcing to packaging, we're committed to protecting our planet.
            </p>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center text-earth mb-16">
              Our Environmental Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-cream rounded-lg p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4">75%</div>
                <h3 className="text-xl font-semibold mb-2">Less Water Usage</h3>
                <p className="text-gray-600">
                  Compared to traditional dairy production
                </p>
              </div>
              <div className="bg-cream rounded-lg p-8 text-center">
                <div className="text-5xl font-bold text-secondary mb-4">90%</div>
                <h3 className="text-xl font-semibold mb-2">Lower Carbon Footprint</h3>
                <p className="text-gray-600">
                  Through plant-based ingredients and efficient production
                </p>
              </div>
              <div className="bg-cream rounded-lg p-8 text-center">
                <div className="text-5xl font-bold text-leaf mb-4">100%</div>
                <h3 className="text-xl font-semibold mb-2">Renewable Energy</h3>
                <p className="text-gray-600">
                  Our facilities run on clean, renewable energy sources
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-earth mb-12">
              Our Sustainable Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">Responsible Sourcing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Local ingredient sourcing to reduce transportation emissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Direct partnerships with sustainable farmers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>No palm oil or environmentally harmful ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Organic ingredients wherever possible</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-4">Eco-Friendly Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>100% recyclable and biodegradable packaging materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Minimal packaging design to reduce waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Bulk packaging options to minimize material use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Reusable container programs for B2B partners</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center text-earth mb-12">
              Certifications & Standards
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="font-semibold">100% Vegan</h3>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="font-semibold">Carbon Neutral</h3>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-leaf/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">♻️</span>
                </div>
                <h3 className="font-semibold">Zero Waste</h3>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-earth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏭</span>
                </div>
                <h3 className="font-semibold">Clean Production</h3>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Sustainability Benefits */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              Help Your Business Meet Sustainability Goals
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8 text-center">
                Partner with Vegan Fun to enhance your sustainability credentials and appeal to 
                environmentally conscious consumers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Sustainability Reports</h3>
                  <p>We provide detailed impact reports to help you track and communicate your environmental contributions.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Marketing Support</h3>
                  <p>Use our sustainability credentials in your marketing to attract eco-conscious customers.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Carbon Offset Programs</h3>
                  <p>Join our carbon offset initiatives to make your business carbon neutral.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Circular Economy</h3>
                  <p>Participate in our packaging return programs and waste reduction initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}