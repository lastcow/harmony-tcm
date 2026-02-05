import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Fee | Harmony TCM",
  description: "Transparent pricing for Alexander Technique, Craniosacral Therapy, Traditional Chinese Medicine, and Sound Therapy services. New patient visits, follow-up sessions, prepayment discount plans, and insurance information.",
};

export default function FeePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
              alt="Fee background"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-900/80 via-sage-800/70 to-sage-900/80" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Fee
            </h1>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Alexander Technique */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl font-semibold text-gray-900 mb-8 pb-4 border-b-2 border-sage-200">
                Alexander Technique
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-4 border-b border-sage-100">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    New Patient Visit
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$125</p>
                    <p className="text-sm text-gray-500 mt-1">60 minutes</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    Follow-up Session
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$100</p>
                    <p className="text-sm text-gray-500 mt-1">45 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Craniosacral Therapy */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl font-semibold text-gray-900 mb-8 pb-4 border-b-2 border-sage-200">
                Craniosacral Therapy
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-4 border-b border-sage-100">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    New Patient Visit
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$145</p>
                    <p className="text-sm text-gray-500 mt-1">90 minutes</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    Follow-up Session
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$125</p>
                    <p className="text-sm text-gray-500 mt-1">60 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Traditional Chinese Medicine */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl font-semibold text-gray-900 mb-8 pb-4 border-b-2 border-sage-200">
                Traditional Chinese Medicine
              </h2>

              {/* New Patient Visit */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 pb-4 border-b border-sage-100">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    New Patient Visit
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$165</p>
                    <p className="text-sm text-gray-500 mt-1">approx. 90 minutes</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    During your initial visit, you will complete the required intake paperwork and an informed consent form. Following check-in, a comprehensive discussion of your health history and treatment goals will take place. Based on this information, an individualized treatment plan will be developed, and your personalized acupuncture session will begin. After the treatment, any questions you may have will be addressed, further recommendations will be provided as appropriate, and assistance with scheduling follow-up visits will be offered to support continuity of care and your ongoing wellness.
                  </p>
                </div>
              </div>

              {/* Follow-up Session */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 pb-4 border-b border-sage-100">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    Follow-up Session <span className="text-lg text-gray-600">(Existing Patient)</span>
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$125</p>
                    <p className="text-sm text-gray-500 mt-1">approx. 1 hour</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Follow-up sessions are designed to monitor progress, adjust treatment plans, and support long-term results. By assessing changes in symptoms, function, and overall well-being, we ensure your care remains effective and personalized. These sessions also provide guidance on lifestyle, self-care, and preventive strategies to maintain optimal health.
                  </p>
                </div>
              </div>
            </div>

            {/* Sound Therapy */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl font-semibold text-gray-900 mb-8 pb-4 border-b-2 border-sage-200">
                Sound Therapy
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-4 border-b border-sage-100">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    New Patient Visit
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$125</p>
                    <p className="text-sm text-gray-500 mt-1">60 minutes</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                    Follow-up Session
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-sage-600">$100</p>
                    <p className="text-sm text-gray-500 mt-1">45 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-payment Discount Plans */}
            <div className="mb-16">
              <h2 className="font-serif text-4xl font-semibold text-gray-900 mb-8 pb-4 border-b-2 border-sage-200">
                Pre-payment Discount Plans
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-sage-50 border-2 border-sage-200 rounded-xl p-8 text-center hover:border-sage-400 transition-colors">
                  <p className="text-sage-700 font-medium text-lg mb-2">5 visits</p>
                  <p className="text-4xl font-bold text-gray-900">$575</p>
                </div>
                <div className="bg-sage-50 border-2 border-sage-200 rounded-xl p-8 text-center hover:border-sage-400 transition-colors">
                  <p className="text-sage-700 font-medium text-lg mb-2">10 visits</p>
                  <p className="text-4xl font-bold text-gray-900">$1,000</p>
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 rounded-2xl p-8 lg:p-12 text-white">
              <h2 className="font-serif text-3xl font-semibold mb-6">
                Insurance
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-sage-50 leading-relaxed mb-6">
                  Our practice accepts insurance coverage exclusively for Traditional Chinese Medicine (TCM) treatment. To ensure you have accurate information regarding your benefits, we offer a pre-visit insurance verification service. Please click the link below and complete the online form. Once your insurance benefits for TCM treatment have been verified, we will contact you promptly with the details.
                </p>
                <a
                  href="https://portal.holbie.com/form/GT5/DCW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-sage-900 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Verify Insurance Benefits</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-sage-50 via-white to-sage-50 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Ready to Begin Your <span className="italic text-sage-600">Healing Journey?</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule your comprehensive consultation to discuss your specific health concerns and discover
              how our personalized treatments can help you achieve lasting wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct"
                className="inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-8 py-3.5 rounded-lg font-medium transition-colors shadow-lg text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Your Consultation</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-sage-600 hover:bg-sage-50 text-sage-700 px-8 py-3.5 rounded-lg font-medium transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
