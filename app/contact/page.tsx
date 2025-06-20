'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
    interests: [] as string[]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We\'ll be in touch within 24 hours.')
  }

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
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
                Partner With
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                VeganFun
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Partner with VeganFun for artisan plant-based solutions. Let's discuss how our diverse 
              portfolio can meet your HoReCa business requirements.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="relative bg-white rounded-3xl p-10 shadow-sm border border-neutral-200/50">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl"></div>
                
                <h2 className="text-4xl font-display font-bold mb-8">
                  <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                    Get Started
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                    Today
                  </span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    >
                      <option value="">Select business type</option>
                      <option value="restaurant">Restaurant/Cafe</option>
                      <option value="retail">Retail Store</option>
                      <option value="distributor">Distributor</option>
                      <option value="foodservice">Food Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Products of Interest
                    </label>
                    <div className="space-y-3">
                      {['Gelatos', 'Oat Milk', 'Soy Milk', 'Private Label', 'All Products'].map((interest) => (
                        <label key={interest} className="flex items-center group cursor-pointer">
                          <input
                            type="checkbox"
                            className="mr-3 w-4 h-4 text-primary bg-neutral-100 border-neutral-300 rounded focus:ring-primary/20 focus:ring-2"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                          />
                          <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your needs and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8BC34A_0%,#4CAF50_50%,#8BC34A_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-800">
                      Submit Partnership Inquiry
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-12">
                <h2 className="text-4xl font-display font-bold mb-8">
                  <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                    Let's Grow
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-leaf bg-clip-text text-transparent">
                    Together
                  </span>
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Whether you're a boutique hotel, restaurant, or cafe, we craft artisan solutions 
                  tailored to your specific requirements. Our diverse portfolio ensures we have the 
                  perfect flavours for your HoReCa business.
                </p>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 mb-8">
                  <h3 className="text-2xl font-display font-bold mb-6 text-neutral-900">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <span className="text-neutral-600 leading-relaxed">We'll review your inquiry within 24 hours</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span className="text-neutral-600 leading-relaxed">A dedicated account manager will contact you</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-leaf rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span className="text-neutral-600 leading-relaxed">We'll arrange product samples and pricing</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span className="text-neutral-600 leading-relaxed">Begin your journey with VeganFun!</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl p-8 border border-neutral-200/50">
                  <h3 className="text-2xl font-display font-bold mb-6 text-neutral-900">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-neutral-700 font-medium">info@natturz.com</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-neutral-700 font-medium">+91 98189 92652</span>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-12 h-12 bg-leaf rounded-2xl flex items-center justify-center mr-4 mt-1">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-neutral-700 font-medium">
                        <div>M-13 South Ex-2,</div>
                        <div>New Delhi, 110049</div>
                      </div>
                    </div>
                  </div>
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