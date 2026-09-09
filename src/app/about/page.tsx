import BookingEmbed from '@/components/BookingEmbed';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-sage-600 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  ABOUT US
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Restoring Balance<br />
                  Through<br />
                  <span className="text-sage-500">Integrative Care</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg">
                  Supporting the body as a connected, self-regulating system through a fusion of ancient wisdom and modern somatic practice.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/karen-lau-portrait.png"
                  alt="Portrait of Dr. Karen Lau"
                  width={1023}
                  height={1537}
                  className="w-full max-w-sm h-auto mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Integrative Approach</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Our integrative care approach combines the Alexander Technique, Craniosacral Therapy, Traditional Chinese Medicine and Sound Therapy to support the body as a connected, self-regulating system. Rather than treating isolated symptoms, this approach focuses on improving nervous system balance, movement efficiency, circulation, and overall physiological regulation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Alexander Technique addresses posture and movement habits, reducing unnecessary tension and improving coordination in daily life. Craniosacral Therapy gently calms the nervous system, releases deep-held restrictions, and supports stress recovery. Traditional Chinese Medicine helps restore internal balance, support pain relief, and promote healthy organ and nervous system function. Sound Therapy further enhances relaxation and emotional regulation through soothing vibration and frequency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Together, these therapies work synergistically to reduce stress, improve physical comfort, enhance body awareness, and support long-term well-being. Treatments are individualized and designed to help the body shift out of chronic tension or stress and into a state where healing, resilience, and optimal function can occur naturally.
              </p>
            </div>
          </div>
        </section>

        {/* Four Pillars Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  The Four Pillars of Healing
                </h2>
                <p className="text-gray-600">
                  An interdisciplinary blend of therapies designed for total well-being.
                </p>
              </div>
              <Link href="/services" className="text-sage-600 hover:text-sage-700 font-medium mt-4 md:mt-0 flex items-center gap-1">
                Learn more about services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Alexander Technique */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-sage-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Alexander Technique</h3>
                <p className="text-sm text-gray-600">
                  Addresses posture and movement habits, reducing unnecessary tension and improving coordination in daily life.
                </p>
              </div>

              {/* Craniosacral Therapy */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-sage-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"/>
                    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth={1.5}/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Craniosacral Therapy</h3>
                <p className="text-sm text-gray-600">
                  Gently calms the nervous system, releases deep-held restrictions, and supports stress recovery.
                </p>
              </div>

              {/* TCM & Acupuncture */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-sage-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">TCM & Acupuncture</h3>
                <p className="text-sm text-gray-600">
                  Restores internal balance, supports pain relief, and promotes healthy organ and nervous system function.
                </p>
              </div>

              {/* Sound Therapy */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-sage-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sound Therapy</h3>
                <p className="text-sm text-gray-600">
                  Enhances relaxation and emotional regulation through soothing vibration and frequency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Dr. Lau Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm text-gray-500 tracking-wider">— MEET THE PRACTITIONER</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Dr. Karen Lau
              </h2>
              <p className="text-sage-600 italic">DAc, DMA, Dipl.Ac., L.Ac.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Dr. Karen Lau is a distinguished clinician, scholar, educator, and performing artist specializing in cello, Traditional Chinese Medicine (TCM), integrative health care, and somatic education. She is board certified by the National Certification Board for Acupuncture and Herbal Medicine (NCBAHM) and is a state-licensed acupuncturist with advanced clinical and academic training in both China and the United States.
              </p>

              <p className="mb-6">
                Dr. Lau holds a Doctoral degree in Acupuncture, with a clinical focus encompassing integrative cancer care, nervous system regulation, reproductive health, pain management, and comprehensive wellness. Her advanced training in Chinese herbal medicine was conducted under the mentorship of Professor Yi Pan, a distinguished educator and practitioner of Traditional Chinese Medicine and a professor at Guangzhou University of Chinese Medicine. This specialized training has contributed to her sophisticated understanding of classical herbal theory, clinical formulation, and the integration of traditional therapeutic principles with contemporary health-care approaches.
              </p>

              <p className="mb-6">
                In addition to her expertise in acupuncture and Chinese medicine, Dr. Lau is an internationally certified instructor of the Alexander Technique, a discipline emphasizing functional movement, postural coordination, body awareness, and neuromuscular re-education. She integrates these principles into her clinical and educational practice, developing a multidisciplinary approach that bridges traditional medicine, movement science, somatic awareness, and functional rehabilitation.
              </p>

              <p className="mb-6">
                Dr. Lau also holds a Doctoral degree in Cello Performance, reflecting her extensive scholarly and artistic training, as well as her longstanding commitment to precision, embodied awareness, and excellence in performance. Since 2013, she has taught string-related courses at Frostburg State University, contributing to the university&apos;s music education. Her teaching encompasses her extensive expertise in string performance, pedagogy, musicianship, and the relationship between musical performance and embodied awareness.
              </p>

              <p className="mb-6">
                Her unique interdisciplinary background in medicine, movement education, and music informs a highly integrative clinical and pedagogical philosophy—one that recognizes the dynamic relationships among the nervous system, movement, perception, emotional well-being, and overall health. Her experience as both a clinician and university educator enables her to bring together scientific inquiry, traditional healing systems, somatic awareness, and artistic practice in innovative ways.
              </p>

              <p className="mb-6">
                Through the synthesis of music, TCM, somatic education, and neuromuscular re-education, Dr. Lau brings a distinctive interdisciplinary perspective to contemporary integrative health care and higher education. Her work is grounded in rigorous professional training, scholarly inquiry, artistic excellence, and a commitment to individualized, whole-person care.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">NCBAHM Board Certified</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Licensed Acupuncturist</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Alexander Technique Instructor</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">DMA Cello Performance</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-sage-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Begin Your Journey to Wellness
            </h2>
            <p className="text-sage-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Lau to discuss your needs and discover how our integrative approach can help you thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingEmbed />
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
