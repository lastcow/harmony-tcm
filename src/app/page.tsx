import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-green-600 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  HOLISTIC WELLNESS CENTER
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Restore Your<br />
                  <span className="text-green-500">Natural Balance</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Experience the fusion of Traditional Chinese Medicine and modern somatic practices. We guide you on a path to wellness, harmonizing body, mind, and spirit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/book" variant="primary">
                    Book a Consultation
                  </Button>
                  <Button href="/services" variant="secondary">
                    Explore Services
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800')] bg-cover bg-center" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">15+ Years</p>
                      <p className="text-sm text-gray-500">of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <svg className="w-12 h-12 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <blockquote className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
              &ldquo;We believe in more than just needles.&rdquo;
            </blockquote>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our holistic path to wellness combines traditional healing arts with modern therapeutic techniques to restore your natural rhythm. We don&apos;t just treat symptoms; we cultivate the soil of your health so that vitality can take root.
            </p>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm text-gray-500 uppercase tracking-wider">Our Offerings</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                The Four Pillars of Healing
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                An interdisciplinary blend of therapies designed for total well-being.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Alexander Technique */}
              <Link href="/services#alexander" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Alexander Technique</h3>
                <p className="text-sm text-gray-600">
                  Re-educating the body to release harmful tension and restore natural ease of movement.
                </p>
              </Link>

              {/* Craniosacral Therapy */}
              <Link href="/services#craniosacral" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"/>
                    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth={1.5}/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Craniosacral Therapy</h3>
                <p className="text-sm text-gray-600">
                  Gentle, profound touch to release tension deep in the central nervous system.
                </p>
              </Link>

              {/* TCM & Acupuncture */}
              <Link href="/services#tcm" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">TCM & Acupuncture</h3>
                <p className="text-sm text-gray-600">
                  Ancient needle therapy and herbal medicine to balance the flow of Qi energy.
                </p>
              </Link>

              {/* Sound Therapy */}
              <Link href="/services#sound" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sound Therapy</h3>
                <p className="text-sm text-gray-600">
                  Using sonic resonance and vibrational frequency for deep cellular healing.
                </p>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-1">
                View all services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600')] bg-cover bg-center" />
              </div>
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Featured Service</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-4">Traditional Chinese Medicine</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive medical system used for over 2,000 years to diagnose, treat, and prevent illness. Our TCM services include acupuncture, herbal medicine, cupping, and more.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Acupuncture</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Herbal Medicine</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Cupping</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Moxibustion</span>
                </div>
                <Button href="/services#tcm" variant="primary">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Popular Treatment</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-4">Alexander Technique</h3>
                <p className="text-gray-600 mb-6">
                  An educational method teaching you how to change faulty postural habits, improving mobility, posture, and performance while providing relief from chronic stiffness and stress.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Improve posture and spinal alignment
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Reduce back pain and neck tension
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Enhance breathing and vocal projection
                  </li>
                </ul>
                <Button href="/services#alexander" variant="primary">
                  Learn More
                </Button>
              </div>
              <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Practitioner Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=600')] bg-cover bg-center" />
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="font-semibold text-gray-900">Dr. Karen Lau</p>
                  <p className="text-sm text-gray-600">Founder & Lead Practitioner</p>
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500 tracking-wider">— MEET THE HEALER</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Bridging the Gap Between Art & Medicine
                </h2>
                <p className="text-green-600 italic mb-6">L.Ac., Dipl. O.M., M.AmSAT</p>
                <p className="text-gray-600 mb-6">
                  Dr. Karen Lau brings a uniquely interdisciplinary background to her practice. Starting her journey as a professional cellist, she discovered the profound connection between physical resonance, posture, and health.
                </p>
                <p className="text-gray-600 italic mb-6">
                  &ldquo;Whether I am holding a bow or a needle, the intention is the same: to listen to the body&apos;s subtle rhythms and guide it back to a state of harmony.&rdquo;
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Doctor of Acupuncture</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Cert. Alexander Technique</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Professional Cellist</span>
                </div>
                <Button href="/about" variant="secondary">
                  Read Full Bio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-8xl font-bold text-gray-100 tracking-widest writing-vertical hidden lg:block">
            HARMONY
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-8xl font-bold text-gray-100 tracking-widest writing-vertical hidden lg:block">
            BALANCE
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="text-green-500 text-6xl mb-6">&ldquo;</div>
            <blockquote className="text-2xl lg:text-3xl font-serif italic text-gray-900 mb-4">
              &ldquo;When the mind is at peace,<br />the body follows.&rdquo;
            </blockquote>
            <cite className="text-gray-500 not-italic">— CHINESE PROVERB</cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Begin Your Journey to Wellness
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Lau to discuss your needs and discover how our integrative approach can help you thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" variant="secondary">
                Book Appointment
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
