import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use - Livvy",
  description: "Terms of Use for the Livvy iOS application.",
};

export default function TermsOfUse() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Livvy
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6">
        <article className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-4xl font-bold text-text-primary mb-2">
            Terms of Use
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: February 28, 2026
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using the Livvy mobile
                application (the &quot;App&quot;), you agree to be bound by these Terms of
                Use (&quot;Terms&quot;). If you do not agree to these Terms, please do not
                use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                2. Description of Service
              </h2>
              <p>
                Livvy is a wellness and recovery support application that
                provides:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>An AI-powered companion for emotional support and conversation</li>
                <li>Sobriety and recovery tracking tools</li>
                <li>Guided journaling features</li>
                <li>Cognitive Behavioral Therapy (CBT) exercises</li>
                <li>Daily check-in functionality</li>
                <li>Gamified progress and milestone tracking</li>
                <li>iOS home screen widgets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                3. Medical Disclaimer
              </h2>
              <p>
                <strong className="text-text-primary">
                  IMPORTANT: Livvy is NOT a substitute for professional medical
                  advice, diagnosis, or treatment.
                </strong>
              </p>
              <p className="mt-3">
                The App is designed to be a supportive tool and should not be
                used as a replacement for professional healthcare, therapy, or
                counseling. The AI companion is not a licensed therapist,
                counselor, or medical professional.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>
                  Always seek the advice of a qualified health provider with any
                  questions regarding a medical condition or treatment.
                </li>
                <li>
                  Never disregard professional medical advice or delay seeking
                  it because of something you read or experienced in the App.
                </li>
                <li>
                  If you are experiencing a medical emergency or crisis, please
                  call your local emergency services immediately.
                </li>
                <li>
                  The CBT exercises provided are for educational and
                  self-help purposes and do not constitute clinical therapy.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                4. User Responsibilities
              </h2>
              <p>By using the App, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the App only for its intended purposes</li>
                <li>
                  Provide accurate information when interacting with the App
                </li>
                <li>
                  Not use the App for any unlawful or prohibited purpose
                </li>
                <li>
                  Not attempt to reverse engineer, decompile, or disassemble the
                  App
                </li>
                <li>
                  Not interfere with or disrupt the App&apos;s functionality
                </li>
                <li>
                  Be at least 13 years of age to use the App
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                5. AI Companion
              </h2>
              <p>
                The AI companion feature in Livvy is powered by Apple
                Foundation Models, which run on-device. You acknowledge and
                agree that:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  The AI companion requires <strong className="text-text-primary">iOS 26 or later</strong>.
                  On earlier iOS versions, Livvy provides pre-built supportive
                  responses instead of AI-generated conversations
                </li>
                <li>
                  The AI companion&apos;s responses are generated by machine
                  learning algorithms and may not always be accurate, complete,
                  or appropriate
                </li>
                <li>
                  The AI companion is not capable of providing professional
                  medical, psychological, or legal advice
                </li>
                <li>
                  You should not rely solely on the AI companion for making
                  important decisions about your health or recovery
                </li>
                <li>
                  Conversations with the AI companion are processed on-device
                  via Apple Foundation Models and are not sent to external
                  servers
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                6. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of the App, including
                but not limited to text, graphics, logos, icons, images, audio
                clips, and software, are the exclusive property of Livvy and are
                protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="mt-3">
                You retain ownership of the content you create within the App
                (journal entries, check-in data, etc.), but you grant us a
                limited license to process this content as needed to provide the
                App&apos;s services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Livvy and its
                developers shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Loss of data or content</li>
                <li>
                  Any harm resulting from reliance on the App&apos;s content or AI
                  companion responses
                </li>
                <li>
                  Interruption or unavailability of the App
                </li>
                <li>
                  Any actions taken based on information provided by the App
                </li>
              </ul>
              <p className="mt-3">
                The App is provided &quot;as is&quot; and &quot;as available&quot; without
                warranties of any kind, either express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                8. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to the
                App at any time, without prior notice or liability, for any
                reason, including breach of these Terms. You may stop using the
                App at any time by deleting it from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will
                provide notice of significant changes by updating the &quot;Last
                updated&quot; date at the top of these Terms. Your continued use of
                the App after any changes constitutes your acceptance of the new
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Japan, without regard to its conflict of law
                provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Use, please
                contact us at:
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">Email:</strong>{" "}
                <a
                  href="mailto:suke.hatano01@gmail.com"
                  className="text-primary hover:text-primary-dark"
                >
                  suke.hatano01@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Livvy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
