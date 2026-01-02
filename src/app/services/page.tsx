'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { useState } from 'react';

const services = [
  { id: 'tcm', name: 'Traditional Chinese Medicine' },
  { id: 'alexander', name: 'Alexander Technique' },
  { id: 'craniosacral', name: 'Craniosacral Therapy' },
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
    description: 'Fine sterile needles are inserted at specific points to stimulate energy flow and promote natural healing.',
  },
  {
    name: 'Herbal Medicine',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    description: 'Custom formulations of natural plant, mineral, and animal products tailored to your specific constitution.',
  },
  {
    name: 'Cupping',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" strokeWidth={2}/>
        <circle cx="12" cy="12" r="4" strokeWidth={2}/>
      </svg>
    ),
    description: 'Glass or plastic cups create suction on the skin to relieve muscle tension, improve circulation, and clear toxins.',
  },
  {
    name: 'Gua Sha',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"/>
      </svg>
    ),
    description: 'A smooth-edged tool is used to gently scrape the skin, promoting blood flow and healing in soft tissue.',
  },
  {
    name: 'Moxibustion',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
      </svg>
    ),
    description: 'Burning dried mugwort (moxa) near the skin to warm and invigorate the flow of Qi.',
  },
  {
    name: 'Tui Na',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>
      </svg>
    ),
    description: 'A therapeutic form of Chinese massage utilizing rhythmic compression along energy channels.',
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('tcm');

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Restoring Harmony</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto px-4">
              Ancient wisdom meets modern care. Explore our holistic treatments designed to align your body, mind, and spirit.
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
                <span className="text-sm text-gray-500 uppercase tracking-wider">Our Offerings</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Treatment Menu
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl">
                  Our practice is rooted in the belief that the body has an innate ability to heal itself. We offer a curated selection of traditional and holistic therapies to support your journey.
                </p>

                {/* TCM Section */}
                <div id="tcm" className="mb-16">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Traditional Chinese Medicine</h3>
                      <p className="text-sm text-gray-500">Restoring balance through ancient wisdom</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Traditional Chinese Medicine (TCM) is a comprehensive medical system that has been used to diagnose, treat, and prevent illness for over 2,000 years. It is based on a belief in yin and yang—defined as opposing but complementary energies—and the flow of Qi (vital energy) throughout the body.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tcmServices.map((service) => (
                      <div key={service.name} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-sage-50 rounded-lg flex items-center justify-center mb-4 text-sage-600">
                          {service.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

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
                        <h3 className="text-xl font-bold text-gray-900">Alexander Technique</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        The Alexander Technique is an educational method used worldwide for well over 100 years. It teaches you how to change faulty postural habits, improving mobility, posture, and performance, and providing relief from chronic stiffness and stress.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          Improve posture and spinal alignment
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          Reduce back pain and neck tension
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          Enhance breathing and vocal projection
                        </li>
                      </ul>
                      <a href="#" className="text-sage-600 hover:text-sage-700 font-medium flex items-center gap-1">
                        Learn more about Alexander Technique
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600')] bg-cover bg-center" />
                    </div>
                  </div>
                </div>

                {/* Craniosacral Therapy Section */}
                <div id="craniosacral" className="mb-16">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600')] bg-cover bg-center" />
                    </div>
                    <div className="order-1 lg:order-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-sage-600" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Craniosacral Therapy</h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        A gentle, hands-on method of evaluating and enhancing the functioning of a physiological body system called the craniosacral system. By using a soft touch, practitioners release restrictions in the craniosacral system to improve the functioning of the central nervous system.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-gray-900 mb-2">Best for:</p>
                        <p className="text-sm text-gray-600">
                          Migraines, Chronic Fatigue, Stress Disorders, PTSD, and TMJ.
                        </p>
                      </div>
                    </div>
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
                        <h3 className="text-xl font-bold text-gray-900">Sound Therapy</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Sound healing uses aspects of music to improve physical and emotional health and well-being. The therapy involves listening to music, singing along to music, moving to the beat of the music, meditating, or playing an instrument.
                      </p>
                      <p className="text-gray-600">
                        We utilize Tibetan singing bowls, tuning forks, and gongs to create vibrational frequencies that help the body return to a state of harmonic balance.
                      </p>
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600')] bg-cover bg-center" />
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
              <Button href="/book" variant="primary">
                Book an Appointment
              </Button>
              <Button href="/pricing" variant="outline">
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
