import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/hero-01.JPG"
              alt="Harmony TCM - Traditional Chinese Medicine"
              className="w-full h-full object-cover object-center"
            />
            {/* Sage Green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-50/95 via-white/90 to-sage-50/95" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/80 backdrop-blur-sm rounded-full mb-8">
                  <div className="w-2 h-2 bg-sage-500 rounded-full animate-pulse" />
                  <span className="text-sage-700 text-sm font-medium tracking-wide">
                    NOW ACCEPTING NEW PATIENTS
                  </span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
                  Ancient Wisdom.<br />
                  <span className="italic text-sage-600">Modern Healing.</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                  Experience the transformative power of Traditional Chinese Medicine.
                  Personalized acupuncture and holistic therapies designed for your unique path to wellness.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct" variant="primary" size="lg">
                    <span>Schedule Consultation</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                  <Button href="/services" variant="outline" size="lg">
                    Explore Services
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-sage-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Board Certified</div>
                      <div className="text-xs text-gray-500">Licensed Acupuncturist</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">15+ Years</div>
                      <div className="text-xs text-gray-500">Clinical Experience</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">5,000+</div>
                      <div className="text-xs text-gray-500">Patients Treated</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative lg:h-[600px] h-[400px] animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-sage-300 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-90" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sage-500 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-sage-300 rounded-full opacity-20 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-24 lg:py-32 bg-white relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sage-600 text-sm font-medium tracking-widest uppercase">Testimonials</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
                Voices of <span className="italic text-sage-600">Transformation</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from patients who have experienced healing through Traditional Chinese Medicine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  quote: "After years of chronic back pain, Dr. Lau's acupuncture treatments have given me my life back. I can finally enjoy activities with my family again.",
                  author: "Sarah M.",
                  role: "Patient for 2 years",
                  rating: 5
                },
                {
                  quote: "The herbal medicine protocol Dr. Lau created for my digestive issues worked when nothing else did. Her holistic approach truly makes a difference.",
                  author: "Michael T.",
                  role: "Patient for 1 year",
                  rating: 5
                },
                {
                  quote: "I was skeptical at first, but the results speak for themselves. My migraines have reduced by 80% and I feel more balanced overall.",
                  author: "Jennifer L.",
                  role: "Patient for 3 years",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className={`group bg-gradient-to-br from-sage-50 to-white p-8 rounded-2xl border border-sage-100 hover:border-sage-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <blockquote className="relative">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-sage-200" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                    </svg>
                    <p className="text-gray-700 leading-relaxed pl-6 mb-6 relative">
                      {testimonial.quote}
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-4 pt-6 border-t border-sage-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium group"
              >
                <span>Read more patient stories</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section> */}

        {/* Book Appointment CTA Section */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-400 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="font-serif text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Begin Your <span className="italic">Healing Journey</span>
              </h2>
              <p className="text-xl text-sage-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Schedule a comprehensive consultation to discuss your health goals and discover
                how Traditional Chinese Medicine can restore balance and vitality to your life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct" variant="secondary" size="lg" className="bg-white hover:bg-gray-50 text-sage-900 shadow-xl">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Book Your Consultation</span>
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-2 border-white/30 hover:bg-white/10 text-white backdrop-blur-sm">
                  Get in Touch
                </Button>
              </div>

              {/* Additional info */}
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">60-90</div>
                  <div className="text-sm text-sage-100">Minutes consultation</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">✓</div>
                  <div className="text-sm text-sage-100">Most insurance accepted</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">Same</div>
                  <div className="text-sm text-sage-100">Week appointments available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <div>
                <span className="text-sage-600 text-sm font-medium tracking-widest uppercase">Get in Touch</span>
                <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6">
                  We're Here to <span className="italic text-sage-600">Help</span>
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Have questions about our services or want to learn more about Traditional Chinese Medicine?
                  Reach out and we'll be happy to assist you.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-sage-100 group-hover:bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Phone</div>
                      <a href="tel:7174905991" className="text-lg font-semibold text-gray-900 hover:text-sage-600 transition-colors">
                        (717) 490-5991
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-sage-100 group-hover:bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <a href="mailto:info@atlasintegrativeclinic.com" className="text-lg font-semibold text-gray-900 hover:text-sage-600 transition-colors">
                        info@atlasintegrativeclinic.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-sage-100 group-hover:bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="text-lg font-semibold text-gray-900">
                        24 S Broadway<br />
                        Frostburg, MD 21532
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-sage-100 group-hover:bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Office Hours</div>
                      <div className="text-lg font-semibold text-gray-900">
                        Monday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        <span className="text-base">Other days: By appointment only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-sage-100">
                <h3 className="font-serif text-2xl font-light text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-colors outline-none resize-none"
                      placeholder="Tell us about your health goals or any questions you have..."
                    />
                  </div>

                  <Button variant="primary" size="lg" className="w-full">
                    <span>Send Message</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
