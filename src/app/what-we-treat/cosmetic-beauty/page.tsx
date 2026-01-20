import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = {
  title: "Cosmetic & Beauty Acupuncture | Harmony TCM",
  description: "Natural facial rejuvenation and beauty enhancement through cosmetic acupuncture. Non-invasive treatments for skin health, anti-aging, and radiant complexion.",
};

export default function CosmeticBeautyPage() {
  const conditions = [
    "Fine lines and wrinkles",
    "Skin tone and texture",
    "Facial elasticity",
    "Dark circles and puffiness",
    "Acne and scarring",
    "Age spots and hyperpigmentation",
    "Facial muscle tone",
    "Overall skin rejuvenation"
  ];

  const benefits = [
    {
      title: "Natural Anti-Aging",
      description: "Stimulate collagen production and improve skin elasticity without invasive procedures",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Improved Circulation",
      description: "Enhanced blood flow brings nutrients and oxygen to facial tissues",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "Holistic Wellness",
      description: "Beauty from within by addressing overall health and balance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Radiant Complexion",
      description: "Achieve a natural glow and healthy skin appearance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Breadcrumbs */}
        <section className="bg-sage-50 py-4 border-b border-sage-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-sage-600 transition-colors">Home</Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
              <Link href="/what-we-treat" className="text-gray-600 hover:text-sage-600 transition-colors">What We Treat</Link>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
              <span className="text-sage-700 font-medium">Cosmetic & Beauty</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-sage-50 via-white to-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Cosmetic & <span className="italic text-sage-600">Beauty Acupuncture</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover natural facial rejuvenation through cosmetic acupuncture—a non-invasive approach
              to enhance your natural beauty, improve skin health, and promote radiant vitality.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                  Natural Facial <span className="italic text-sage-600">Rejuvenation</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Cosmetic acupuncture offers a holistic alternative to invasive cosmetic procedures,
                    working with your body's natural healing processes to enhance beauty from within.
                    Our treatments stimulate collagen production and improve facial muscle tone.
                  </p>
                  <p>
                    By targeting specific facial points and meridians, we increase blood circulation,
                    promote lymphatic drainage, and encourage cellular renewal. This comprehensive approach
                    addresses not just surface-level concerns but the underlying vitality that creates lasting beauty.
                  </p>
                  <p>
                    Each session is customized to your unique skin type and aesthetic goals, incorporating
                    full-body acupuncture to support overall wellness and enhance the radiance that comes
                    from optimal health.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200">
                  <img
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
                    alt="Cosmetic acupuncture treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                Conditions We <span className="italic text-sage-600">Treat</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our cosmetic treatments address a wide range of skin and beauty concerns
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conditions.map((condition) => (
                <div key={condition} className="bg-white rounded-xl p-4 border border-sage-100 hover:border-sage-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sage-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                Our <span className="italic text-sage-600">Approach</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive beauty protocol that enhances your natural radiance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-sage-50 to-white p-8 rounded-2xl border border-sage-100">
                <div className="w-12 h-12 bg-sage-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  Skin Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed evaluation of skin condition, concerns, and aesthetic goals to create your personalized beauty plan.
                </p>
              </div>

              <div className="bg-gradient-to-br from-sage-50 to-white p-8 rounded-2xl border border-sage-100">
                <div className="w-12 h-12 bg-sage-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  Facial Acupuncture
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic needle placement to stimulate collagen, improve tone, and enhance facial contours naturally.
                </p>
              </div>

              <div className="bg-gradient-to-br from-sage-50 to-white p-8 rounded-2xl border border-sage-100">
                <div className="w-12 h-12 bg-sage-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  Holistic Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Full-body treatments that support overall health, hormonal balance, and the inner vitality that radiates beauty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                Treatment <span className="italic text-sage-600">Benefits</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-xl border border-sage-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4 text-sage-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-400 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Enhance Your Natural <span className="italic">Beauty?</span>
            </h2>
            <p className="text-xl text-sage-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation to discover how cosmetic acupuncture can help you achieve radiant, youthful skin naturally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct" variant="secondary" size="lg" className="bg-white hover:bg-gray-50 text-sage-900 shadow-xl">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Consultation</span>
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-2 border-white/30 hover:bg-white/10 text-white backdrop-blur-sm">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="py-8 bg-white border-t border-sage-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/what-we-treat" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium group">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
              <span>Back to What We Treat</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
