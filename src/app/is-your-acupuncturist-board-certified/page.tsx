import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BoardCertifiedPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-sage-50 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href="/services#acupuncture"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                Acupuncture
              </Link>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Is Your Acupuncturist Board Certified?
            </h1>
            <div className="flex items-center gap-4 text-gray-500">
              <time dateTime="2024-12-23">Dec 23, 2024</time>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span className="text-sage-600 font-medium">Acupuncture</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Dr. Karen Lau, DMA, Dipl.Ac., L.Ac., is board certified by the National Certification Board for Acupuncture and Herbal Medicine (NCBAHM), the national certifying organization responsible for assessing and validating professional competence in the practice of acupuncture and herbal medicine.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Why board certification matters
              </h2>
              <p className="text-gray-700 mb-6">
                Board certification signifies advanced training and a sustained commitment to professional development within a given discipline. It assures that practitioners have met rigorous national standards of knowledge, skill, and clinical competence, exceeding minimum state licensure requirements and promoting higher quality and consistency of care.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What NCBAHM certification means
              </h2>
              <p className="text-gray-700 mb-4">
                The NCBAHM offers several designations:
              </p>
              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Diplomate of Acupuncture (Dipl.Ac.)</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Diplomate of Chinese Herbology (Dipl.C.H.)</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Diplomate of Oriental Medicine (Dipl.O.M.)</strong>, which combines both tracks</span>
                </li>
              </ul>

              <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 my-8">
                <p className="text-gray-700 italic">
                  &ldquo;Maryland is home to over one thousand practicing acupuncturists,&rdquo; Dr. Lau explains. &ldquo;However, a review of the NCBAHM database indicates that only approximately 300 hold national board certification, a distinction that warrants careful consideration.&rdquo;
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Certification versus safety
              </h2>
              <p className="text-gray-700 mb-6">
                &ldquo;Acupuncture is generally regarded as a low-risk therapeutic intervention,&rdquo; Dr. Lau notes. &ldquo;One of its strengths lies in its limited contraindications and relatively minimal risk profile. Nonetheless, patients should seek practitioners who have demonstrated the highest standards of education and clinical training. The Dipl.Ac. credential indicates attainment of advanced national certification beyond state licensure alone.&rdquo;
              </p>

              <p className="text-gray-700 mb-8">
                She further explains that academic credentials within the field are also evolving. &ldquo;Doctoral degrees in acupuncture or Oriental medicine are now available,&rdquo; Dr. Lau states. &ldquo;However, possession of a doctorate does not necessarily indicate completion of national board examinations.&rdquo; Accordingly, she recommends prioritizing NCBAHM certification. &ldquo;While patients may be unfamiliar with the specifics of a practitioner&apos;s educational background or doctoral specialization, selection of an NCBAHM-certified acupuncturist ensures that the practitioner meets the highest nationally standardized measures of competence.&rdquo;
              </p>

              <div className="bg-gray-900 text-white rounded-xl p-8 mt-12">
                <p className="text-lg mb-4">
                  Questions about credentials or treatment? Contact our team to learn more or schedule a visit.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
