import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = {
  title: "What We Treat | Harmony TCM",
  description: "Comprehensive Traditional Chinese Medicine treatments for chronic pain, mental health, women's health, sports injuries, and more. Evidence-based holistic care tailored to your needs.",
};

export default function WhatWeTreatPage() {
  const treatmentCategories = [
    {
      title: "Chronic Pain & Pain Management",
      description: "Evidence-based treatments to reduce inflammation, enhance circulation, and support long-term pain relief and functional recovery.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      link: "/what-we-treat/chronic-pain"
    },
    {
      title: "Cosmetic & Beauty",
      description: "Promote radiant skin health through improved circulation, collagen synthesis, and facial balance while addressing overall wellness.",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
      link: "/what-we-treat/cosmetic-beauty"
    },
    {
      title: "General Health",
      description: "Optimize immune, digestive, metabolic, and nervous system function through holistic, individualized preventive care.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      link: "/what-we-treat/general-health"
    },
    {
      title: "Sports Injuries",
      description: "Accelerate recovery and prevent future injuries through treatments that reduce inflammation and enhance neuromuscular coordination.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      link: "/what-we-treat/sports-injuries"
    },
    {
      title: "Mental Health",
      description: "Address anxiety, depression, and stress through holistic care that regulates the nervous system and promotes emotional balance.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
      link: "/what-we-treat/mental-health"
    },
    {
      title: "Smoking Cessation & Substance Support",
      description: "Break free from addiction through treatments that reduce cravings, regulate stress response, and strengthen healthy coping mechanisms.",
      image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&q=80",
      link: "/what-we-treat/smoking-cessation"
    },
    {
      title: "Men's Health",
      description: "Support hormonal balance, cardiovascular health, and vitality through comprehensive treatments for physical and mental well-being.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
      link: "/what-we-treat/mens-health"
    },
    {
      title: "Women's Health",
      description: "Support hormonal balance, menstrual health, and reproductive wellness through personalized care for every stage of life.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      link: "/what-we-treat/womens-health"
    },
    {
      title: "Children's Health",
      description: "Gentle, age-appropriate care for digestive issues, respiratory conditions, sleep disturbances, and healthy development.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      link: "/what-we-treat/childrens-health"
    }
  ];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-sage-50 via-white to-sage-50">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBtLTI4IDBoNTZ6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] bg-repeat" />

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {treatmentCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`group bg-white rounded-2xl border border-sage-100 hover:border-sage-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up stagger-${(index % 4) + 1} overflow-hidden`}
                >
                  {/* Background Image */}
                  <div className="h-48 relative overflow-hidden bg-sage-100">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    {/* Title */}
                    <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4 group-hover:text-sage-700 transition-colors">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Learn More Button */}
                    <Link
                      href={category.link}
                      className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium text-sm group/link"
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 overflow-hidden">
          {/* Decorative background elements */}
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

            {/* Additional info */}
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
