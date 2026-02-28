import Link from "next/link";
import ScreenshotCarousel from "./screenshot-carousel";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Livvy
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#screenshots"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Screenshots
          </a>
          <a
            href="#download"
            className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-bg-soft to-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Your Recovery Companion
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
          Recovery made
          <br />
          <span className="text-primary">compassionate</span> and{" "}
          <span className="text-accent">personal</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Livvy is your AI-powered companion that walks with you on your
          recovery journey. Track your progress, journal your thoughts, build
          healthy habits, and grow together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Download for iOS
          </a>
          <a
            href="#features"
            className="text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/5 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "💬",
      title: "AI Companion Chat",
      description:
        "Talk to Livvy anytime. A compassionate AI companion powered by Apple Foundation Models that listens, supports, and grows with you. Requires iOS 26 or later.",
    },
    {
      icon: "📊",
      title: "Sobriety Tracking",
      description:
        "Track your sobriety milestones with beautiful visual progress. Celebrate every day, every week, every month of your journey.",
    },
    {
      icon: "📓",
      title: "Guided Journaling",
      description:
        "Express your thoughts and feelings through guided journal prompts. Reflect on your progress and process your emotions.",
    },
    {
      icon: "🧠",
      title: "CBT Tools",
      description:
        "Evidence-based Cognitive Behavioral Therapy exercises to help you identify and reframe negative thought patterns.",
    },
    {
      icon: "🗺️",
      title: "Recovery Journey Map",
      description:
        "Follow your personalized recovery path with step-by-step milestones. See how far you've come and where you're heading.",
    },
    {
      icon: "🏆",
      title: "Gamified Progress",
      description:
        "Unlock skills, earn achievements, and watch Livvy evolve as you progress. Recovery can be rewarding and engaging.",
    },
    {
      icon: "✅",
      title: "Daily Check-ins",
      description:
        "Start each day with a quick check-in. Monitor your mood, cravings, and well-being to stay mindful and on track.",
    },
    {
      icon: "📱",
      title: "Home Screen Widget",
      description:
        "Keep your progress visible with an iOS home screen widget. A daily reminder of your strength and commitment.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Everything you need for your recovery
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Livvy combines proven therapeutic techniques with modern technology
            to provide comprehensive support for your recovery journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-bg-soft hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-24 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            See Livvy in action
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Beautiful, intuitive design that makes your recovery journey feel
            natural and engaging.
          </p>
        </div>
        <ScreenshotCarousel />
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          Start your journey today
        </h2>
        <p className="text-lg text-text-secondary max-w-xl mx-auto mb-10">
          Download Livvy for free and take the first step toward a healthier,
          happier you. Your companion is waiting.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          <svg
            className="w-8 h-8 mr-3"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-80">Download on the</div>
            <div className="text-xl font-semibold -mt-1">App Store</div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-bold text-white">Livvy</span>
            <p className="text-sm mt-1">Your Compassionate Recovery Companion</p>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <a
              href="mailto:suke.hatano01@gmail.com"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Livvy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
