import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cream to-white py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-display font-bold text-earth mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              VeganFun is an artisan brand crafted as per the requirements of clients with a diverse 
              portfolio of all general and premium flavours, specifically designed for HoReCa businesses.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  To be the preferred artisan brand for HoReCa businesses by providing customized 
                  plant-based solutions that meet specific client requirements.
                </p>
                <p className="text-lg text-gray-600">
                  We craft each product with precision, offering diverse portfolios of general and premium 
                  flavours that help businesses differentiate themselves in the market.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-secondary mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-4">
                  To become the leading artisan brand in the HoReCa industry, known for our ability 
                  to create bespoke plant-based solutions that exceed client expectations.
                </p>
                <p className="text-lg text-gray-600">
                  We envision VeganFun products as the standard choice for hotels, restaurants, and cafes 
                  seeking premium, customizable plant-based offerings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center text-earth mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Every decision we make considers its impact on the environment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on ingredients or production standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Constantly improving our products and developing new solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600">
                  Building lasting relationships with businesses that share our values
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center text-earth mb-6">
              The People Behind Vegan Fun
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our team of food scientists, sustainability experts, and business professionals 
              work together to bring you the best plant-based products in the market.
            </p>
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
              <p className="text-xl mb-4">
                "We started Vegan Fun because we saw a gap in the market for truly delicious 
                plant-based alternatives. Our goal is to make it easy for businesses to offer 
                sustainable options without sacrificing quality or taste."
              </p>
              <p className="font-semibold">- Founders of 1.5 Degree</p>
            </div>
          </div>
        </section>

        {/* Why 1.5 Degree */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-display font-bold text-center text-earth mb-12">
              Why "1.5 Degree"?
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                Our name reflects our commitment to the UN's goal of limiting global warming to 
                1.5 degrees Celsius. Every product we create, every partnership we form, and every 
                decision we make is guided by this mission.
              </p>
              <p className="text-lg text-gray-700">
                By choosing Vegan Fun products, your business becomes part of the solution, 
                contributing to a sustainable future while delighting customers with exceptional 
                plant-based options.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}