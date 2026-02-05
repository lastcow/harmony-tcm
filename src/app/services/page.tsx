'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { useState } from 'react';

const services = [
  { id: 'alexander', name: 'Alexander Technique' },
  { id: 'craniosacral', name: 'Craniosacral Therapy' },
  { id: 'tcm', name: 'Traditional Chinese Medicine' },
  { id: 'sound', name: 'Sound Therapy' },
];

const tcmServices = [
  {
    name: 'Acupuncture',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="2" strokeWidth={2}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v10"/>
      </svg>
    ),
    description: 'Acupuncture uses fine, sterile needles placed at specific points on the body to support pain relief, improve circulation, regulate the nervous system, and promote the body\'s natural healing processes.',
  },
  {
    name: 'Auricular Therapy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
    description: 'Auricular therapy focuses on the ear as a microsystem of the body. By stimulating specific points using needles, seeds, magnets, or pressure, it promotes healing, reduces pain, and supports stress relief, addiction recovery, and sleep improvement.',
  },
  {
    name: 'Herbal Medicine',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    description: 'Chinese herbal medicine uses carefully selected plant-based formulas to support internal balance, strengthen body systems, and address the root causes of health concerns. Formulas are customized to each individual\'s needs.',
  },
  {
    name: 'Cupping',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeWidth={2}/>
        <circle cx="12" cy="12" r="4" strokeWidth={2}/>
      </svg>
    ),
    description: 'Cupping therapy uses suction cups on the skin to improve blood flow, release muscle tension, and support detoxification. It is commonly used for pain, stiffness, and respiratory support.',
  },
  {
    name: 'Gua Sha',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/>
      </svg>
    ),
    description: 'Gua Sha involves gentle scraping of the skin to stimulate circulation, reduce muscle tightness, and support the body\'s inflammatory and healing responses. It is often used for pain, tension, and mobility.',
  },
  {
    name: 'Moxibustion',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
      </svg>
    ),
    description: 'Moxibustion uses the warmth of burning mugwort (moxa) near specific acupuncture points to improve circulation, strengthen energy, and support immune and digestive function.',
  },
  {
    name: 'Tui Na',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
      </svg>
    ),
    description: 'Tui Na is a therapeutic form of Chinese medical massage that combines manual techniques, acupressure, and movement to relieve pain, improve mobility, and restore balance in the body.',
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('alexander');
  const [showAllTcm, setShowAllTcm] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-[400px] flex items-center justify-center bg-sage-200">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Clinical Service</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Integrative therapies designed to support your body, mind, and overall well-being.
            </p>
          </div>
        </section>

        {/* Treatment Menu Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                    Service Menu
                  </h3>
                  <nav className="space-y-1">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                          activeService === service.id
                            ? 'bg-sage-50 text-sage-700 border-l-4 border-sage-500'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {service.name}
                      </button>
                    ))}
                  </nav>

                  {/* Guidance Box */}
                  <div className="mt-8 p-4 border border-sage-200 rounded-lg bg-sage-50">
                    <h4 className="font-semibold text-gray-900 mb-2">Need Guidance?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Not sure which therapy is right for you? Book a free 15-min discovery call.
                    </p>
                    <Button href="/contact" variant="secondary" className="w-full text-sm">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                {/* Alexander Technique Section */}
                <div id="alexander" className="mb-16">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">1. Alexander Technique</h3>
                      </div>
                      <p className="text-gray-600">
                        The Alexander Technique is a neuromuscular re-education method that improves postural control and movement efficiency through increased proprioceptive awareness. It has been shown to reduce musculoskeletal strain, improve coordination, and enhance motor control by modifying habitual movement patterns.
                      </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                      <img src="/images/service-alexander.png" alt="Alexander Technique" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                {/* Craniosacral Therapy Section */}
                <div id="craniosacral" className="mb-16">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
                      <img src="/images/service-craniosacral.png" alt="Craniosacral Therapy" className="w-full h-auto" />
                    </div>
                    <div className="order-1 lg:order-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">2. Craniosacral Therapy</h3>
                      </div>
                      <p className="text-gray-600">
                        Craniosacral Therapy is a gentle manual therapy that focuses on the craniosacral system, including the membranes and cerebrospinal fluid dynamics. It aims to reduce fascial and neural restrictions, support parasympathetic activation, and improve nervous system resilience and stress regulation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TCM Section */}
                <div id="tcm" className="mb-16">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">3. Traditional Chinese Medicine (TCM)</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Traditional Chinese Medicine is a comprehensive medical system that emphasizes functional regulation and systemic balance. Acupuncture, herbal medicine, and related therapies — such as cupping, gua sha, moxibustion, tui na — modulate neuroendocrine, immune, and circulatory functions by stimulating specific anatomical points, supporting homeostasis, pain modulation, and autonomic nervous system regulation.
                    </p>
                    <div className="rounded-2xl overflow-hidden">
                      <img src="/images/service-tcm.png" alt="Traditional Chinese Medicine" className="w-full h-auto" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(showAllTcm ? tcmServices : tcmServices.filter(s => s.name !== 'Tui Na')).map((service) => (
                      <div key={service.name} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-sage-50 rounded-lg flex items-center justify-center mb-4 text-sage-600">
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setShowAllTcm(!showAllTcm)}
                      className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
                    >
                      {showAllTcm ? 'Show Less' : 'Show More'}
                      <svg className={`w-4 h-4 transition-transform ${showAllTcm ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Sound Therapy Section */}
                <div id="sound" className="mb-16">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">4. Sound Therapy</h3>
                      </div>
                      <p className="text-gray-600">
                        Sound Therapy uses acoustic vibration and frequency to influence physiological and neurological states. Research suggests sound stimulation can modulate brainwave activity, vagal tone, and autonomic balance, promoting relaxation, stress reduction, and emotional regulation.
                      </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                      <img src="/images/service-sound.png" alt="Sound Therapy" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Begin Your Journey to Wellness
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you are seeking relief from pain, stress reduction, or a holistic approach to health, our practitioners are here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct" variant="primary">
                Book an Appointment
              </Button>
              <Button href="/fee" variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
