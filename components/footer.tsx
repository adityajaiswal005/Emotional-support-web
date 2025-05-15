"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 flex items-center">
              <div className="w-8 h-8 mr-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EmoHealth
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering chronic disease patients to manage their emotional wellbeing.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">App</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-600 hover:text-blue-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-600 hover:text-blue-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium mb-2 w-full text-center">
                App Store
              </button>
              <button className="bg-lavender-100 text-purple-600 px-4 py-2 rounded-lg font-medium w-full text-center">
                Google Play
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a
                  href="mailto:anshujaiswal12300@gmail.com"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  anshujaiswal12300@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <a href="tel:+919648527769" className="text-gray-600 hover:text-blue-500 transition-colors">
                  +91 9648527769
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-4">Download</h3>
              <div className="flex space-x-2">
                <button
                  className="border border-gray-200 hover:bg-gray-100 rounded-lg h-12 px-4 flex items-center"
                  onClick={() => (window.location.href = "mailto:anshujaiswal12300@gmail.com")}
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,2H8.5L3,7.5v9L8.5,22h9l5.5-5.5v-9L17.5,2z M12,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S15.9,19,12,19z M12,7c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,7,12,7z" />
                  </svg>
                  App Store
                </button>
                <button
                  className="border border-gray-200 hover:bg-gray-100 rounded-lg h-12 px-4 flex items-center"
                  onClick={() => (window.location.href = "mailto:anshujaiswal12300@gmail.com")}
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.9,12c0-1.7,1-3.2,2.5-4L2.9,3.8C1.1,5.3,0,7.5,0,10c0,2.5,1.1,4.7,2.9,6.2l3.6-4.2C4.9,15.2,3.9,13.7,3.9,12z M21.1,10c0-2.5-1.1-4.7-2.9-6.2l-3.6,4.2c1.5,0.8,2.5,2.3,2.5,4s-1,3.2-2.5,4l3.6,4.2C20,14.7,21.1,12.5,21.1,10z M12,16.1c-2.3,0-4.1-1.8-4.1-4.1S9.7,7.9,12,7.9s4.1,1.8,4.1,4.1S14.3,16.1,12,16.1z" />
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EmoHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
