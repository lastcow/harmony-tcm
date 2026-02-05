import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = {
  title: "What We Treat | Atlas Integrative Clinic",
  description: "Comprehensive Traditional Chinese Medicine treatments for chronic pain, mental health, women's health, sports injuries, and more. Evidence-based holistic care tailored to your needs.",
};

const treatmentCategories = [
  {
    title: "Chronic Pain & Pain Management",
    description: "Evidence-based treatments to reduce inflammation, enhance circulation, and support long-term pain relief and functional recovery.",
    link: "/what-we-treat/chronic-pain",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Cosmetic & Beauty",
    description: "Promote radiant skin health through improved circulation, collagen synthesis, and facial balance while addressing overall wellness.",
    link: "/what-we-treat/cosmetic-beauty",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "General Health",
    description: "Optimize immune, digestive, metabolic, and nervous system function through holistic, individualized preventive care.",
    link: "/what-we-treat/general-health",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Sports Injuries",
    description: "Accelerate recovery and prevent future injuries through treatments that reduce inflammation and enhance neuromuscular coordination.",
    link: "/what-we-treat/sports-injuries",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Mental Health",
    description: "Address anxiety, depression, and stress through holistic care that regulates the nervous system and promotes emotional balance.",
    link: "/what-we-treat/mental-health",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Smoking Cessation & Substance Support",
    description: "Break free from addiction through treatments that reduce cravings, regulate stress response, and strengthen healthy coping mechanisms.",
    link: "/what-we-treat/smoking-cessation",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Men's Health",
    description: "Support hormonal balance, cardiovascular health, and vitality through comprehensive treatments for physical and mental well-being.",
    link: "/what-we-treat/mens-health",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Women's Health",
    description: "Support hormonal balance, menstrual health, and reproductive wellness through personalized care for every stage of life.",
    link: "/what-we-treat/womens-health",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Children's Health",
    description: "Gentle, age-appropriate care for digestive issues, respiratory conditions, sleep disturbances, and healthy development.",
    link: "/what-we-treat/childrens-health",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhatWeTreatPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-sage-50 via-white to-sage-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/80 backdrop-blur-sm rounded-full mb-6">
              <svg className="w-4 h-4 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sage-700 text-sm font-medium tracking-wide">
                COMPREHENSIVE CARE
              </span>
            </div>

            <h1 className="font-serif text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              What We <span className="italic text-sage-600">Treat</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive approach to Traditional Chinese Medicine addresses a wide spectrum of health concerns.
              Through evidence-based techniques and holistic care, we support your journey to optimal wellness.
            </p>
          </div>
        </section>

        {/* Treatment Categories Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.link}
                  className="group bg-white rounded-xl border border-sage-100 hover:border-sage-300 hover:shadow-lg transition-all duration-300 p-6"
                >
                  <div className="w-12 h-12 bg-sage-50 rounded-lg flex items-center justify-center mb-4 text-sage-600 group-hover:bg-sage-100 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-sage-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sage-600 text-sm font-medium">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage-400 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Ready to Begin Your <span className="italic">Healing Journey?</span>
            </h2>

            <p className="text-xl text-sage-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a comprehensive consultation to discuss your specific health concerns and discover
              how our personalized treatments can help you achieve lasting wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct" variant="secondary" size="lg" className="bg-white hover:bg-gray-50 text-sage-900 shadow-xl">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Your Consultation</span>
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-2 border-white/30 hover:bg-white/10 text-white backdrop-blur-sm">
                Contact Us
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sage-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Board Certified Practitioners</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Evidence-Based Treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Personalized Care Plans</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
