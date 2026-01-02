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
                Kristy Hanley, L.Ac., Dipl.Ac., is board certified by the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM), the national body that validates competency in acupuncture and herbal medicine. As founder and owner of Resilient Health Acupuncture & Wellness (RHA), she also leads a team of board-certified practitioners.
              </p>

              <blockquote className="border-l-4 border-sage-500 pl-6 py-2 my-8 bg-sage-50 rounded-r-lg">
                <p className="text-gray-700 italic">
                  &ldquo;Every practitioner at RHA is board certified,&rdquo; Kristy says. &ldquo;It&apos;s a requirement. We may be the only acupuncture clinic in Maryland where the entire staff is certified. So no matter who you see, they&apos;ve met that national standard.&rdquo;
                </p>
              </blockquote>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Why board certification matters
              </h2>
              <p className="text-gray-700 mb-6">
                Certification signals a deeper commitment to training and professional development. It also reassures patients that the person performing treatment has met a national benchmark for competence, not just state minimums.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Before the board: Kristy&apos;s path
              </h2>
              <p className="text-gray-700 mb-6">
                Acupuncture wasn&apos;t on Kristy&apos;s radar until her mother&apos;s breast cancer diagnosis. Another patient recommended acupuncture for anxiety and sleep, and within a few sessions her mother felt better. Kristy, then a supervisor at Jenny Craig, found a new calling and enrolled at The Atlantic Institute of Oriental Medicine, where faculty emphasized board certification.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                The early 2000s: setting a higher bar
              </h2>
              <p className="text-gray-700 mb-6">
                &ldquo;In 2004, acupuncture felt like the wild, wild West,&rdquo; Kristy says. &ldquo;Across the U.S., there wasn&apos;t much regulation or a clear minimum standard.&rdquo; At her school, things were different. &ldquo;After two years of study, our entire class sat for the NCCAOM national boards. Every single one of us passed.&rdquo; Board certification even preceded licensure and graduation. By the time they finished, they held master&apos;s degrees and national board certifications.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What NCCAOM certification means
              </h2>
              <p className="text-gray-700 mb-4">
                The NCCAOM offers several designations:
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

              <p className="text-gray-700 mb-4">
                These designations are regarded as hallmarks of excellence in acupuncture and Asian medicine. Certification also requires ongoing education:
              </p>
              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Every four years, board-certified practitioners complete 60 professional development credits in core competencies and meet other requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">CPR recertification every four years is also required and is separate from state licensure.</span>
                </li>
              </ul>

              <p className="text-gray-700 mb-6">
                Regulations vary by state. Some, like Pennsylvania, require board certification before licensing. Maryland currently does not, but as of 2026, new Maryland licenses will require NCCAOM certification and a degree from an appropriately accredited school.
              </p>

              <div className="bg-sage-50 border border-sage-200 rounded-xl p-6 my-8">
                <p className="text-gray-700 italic">
                  &ldquo;More than a thousand acupuncturists practice in Maryland,&rdquo; Kristy notes. &ldquo;A check of the NCCAOM site suggests maybe 300 are nationally board certified. That&apos;s important to know.&rdquo;
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Certification versus safety
              </h2>
              <p className="text-gray-700 mb-6">
                &ldquo;Acupuncture isn&apos;t dangerous in and of itself,&rdquo; Kristy says. &ldquo;That&apos;s part of why it&apos;s such a great modality—few contraindications or risks. But wherever you go, you want someone who has shown the highest level of training. That&apos;s what the Dipl.Ac. designation signals—beyond L.Ac. alone.&rdquo;
              </p>

              <p className="text-gray-700 mb-6">
                Degrees are advancing as well. &ldquo;You can earn a doctorate in acupuncture or Oriental medicine,&rdquo; she adds. &ldquo;But that doesn&apos;t automatically mean you&apos;ve taken the national boards.&rdquo; Her advice: look for NCCAOM certification. &ldquo;You might not know where someone went to school or what their doctorate focused on. But when you choose an NCCAOM-certified acupuncturist, you know they&apos;re working at the highest nationally measured level.&rdquo;
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                The bottom line
              </h2>
              <p className="text-gray-700 mb-8">
                Board certification reflects commitment, competency, and continued learning. At Resilient Health Acupuncture & Wellness, you&apos;ll see board-certified acupuncturists who prioritize clinical excellence and patient care.
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
