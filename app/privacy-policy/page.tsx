import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="outline" className="mb-8 flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">🔒</div>
          </div>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-4">Last Updated: May 15, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to EmoHealth. We are committed to protecting your privacy and handling your data with transparency
              and care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you use our mobile application.
            </p>

            <div className="my-8 py-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🔐</div>
                <p className="text-blue-600 font-medium">Your data is secure with us</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect several types of information for various purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal Information: Name, email address, phone number</li>
              <li>Health Information: Emotional states, physical symptoms, health logs</li>
              <li>Usage Data: How you interact with the app, features used</li>
              <li>Device Information: Device type, operating system, unique device identifiers</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our Service</li>
              <li>To personalize your experience</li>
              <li>To improve our app based on how you use it</li>
              <li>To communicate with you</li>
              <li>To provide customer support</li>
              <li>To monitor usage of our app</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              The security of your data is important to us. We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, disclosure, or destruction. All health data is
              encrypted both in transit and at rest.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information in the
              following situations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>With your explicit consent</li>
              <li>With service providers who assist us in operating our app</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the personal information we have about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information</li>
              <li>Restrict or object to our processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              <a href="mailto:anshujaiswal12300@gmail.com" className="text-blue-500 hover:underline">
                anshujaiswal12300@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919648527769" className="text-blue-500 hover:underline">
                +91 9648527769
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
