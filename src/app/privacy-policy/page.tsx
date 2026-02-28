import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Livvy",
  description: "Privacy Policy for the Livvy iOS application.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: February 28, 2026
          </p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to Livvy (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed
                to protecting your privacy and personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our mobile application
                Livvy (the &quot;App&quot;).
              </p>
              <p className="mt-3">
                Please read this Privacy Policy carefully. By using the App, you
                agree to the collection and use of information in accordance
                with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">
                2.1 Information You Provide
              </h3>
              <p>When you use Livvy, you may provide us with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Journal entries and personal reflections you write within the
                  App
                </li>
                <li>Daily check-in data including mood and wellness information</li>
                <li>Sobriety tracking data and recovery milestones</li>
                <li>
                  CBT (Cognitive Behavioral Therapy) exercise responses and logs
                </li>
                <li>Chat messages with the AI companion</li>
                <li>Settings and preferences you configure</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">
                2.2 Automatically Collected Information
              </h3>
              <p>We may automatically collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Device type and operating system version</li>
                <li>App usage patterns and feature interaction data</li>
                <li>Crash reports and performance data</li>
                <li>Anonymous usage statistics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide, maintain, and improve the App&apos;s features</li>
                <li>
                  Personalize your recovery journey and AI companion experience
                </li>
                <li>Track your sobriety milestones and progress</li>
                <li>Generate insights from your journal entries and check-ins</li>
                <li>Improve our AI companion&apos;s responses and support quality</li>
                <li>Send you notifications related to your recovery goals</li>
                <li>Identify and fix technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                4. Data Storage and Security
              </h2>
              <p>
                Your personal data, including journal entries, chat messages,
                and recovery tracking data, is primarily stored locally on your
                device. We implement appropriate technical and organizational
                security measures to protect your information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="mt-3">
                While we strive to use commercially acceptable means to protect
                your personal information, no method of electronic storage or
                transmission over the Internet is 100% secure. We cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                5. Third-Party Services
              </h2>
              <p>
                The App may use third-party services that may collect
                information used to identify you. These services have their own
                privacy policies and we recommend reviewing them:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Apple App Store (for distribution and payments)</li>
                <li>
                  AI/Language Model providers (for powering the companion chat
                  feature)
                </li>
              </ul>
              <p className="mt-3">
                When interacting with the AI companion, your chat messages may
                be processed by third-party AI service providers. We minimize
                the personal information sent to these services and do not share
                your identity with them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                6. Data Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>With your explicit consent</li>
                <li>
                  To comply with legal obligations or respond to lawful requests
                </li>
                <li>
                  To protect our rights, privacy, safety, or property, and that
                  of our users
                </li>
                <li>
                  In connection with a merger, acquisition, or sale of assets
                  (with prior notice)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                7. Your Rights and Choices
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access and review the personal data we hold about you</li>
                <li>Request deletion of your data</li>
                <li>Export your journal entries and recovery data</li>
                <li>Opt out of non-essential data collection</li>
                <li>Disable notifications at any time through your device settings</li>
              </ul>
              <p className="mt-3">
                You can delete all your data at any time by deleting the App
                from your device. For data stored on our servers, please contact
                us to request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Livvy is not intended for use by children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If we discover that a child under 13 has provided us
                with personal information, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
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
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
