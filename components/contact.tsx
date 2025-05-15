"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have questions or need support? We're here to help.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-md rounded-2xl border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+919648527769" className="text-gray-600 hover:text-blue-500 transition-colors">
                        +91 9648527769
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:anshujaiswal12300@gmail.com"
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                      >
                        anshujaiswal12300@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 py-6 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="text-6xl">📱</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
                  <p className="text-gray-600 mb-4">
                    Have a specific question? Reach out directly and we'll get back to you as soon as possible.
                  </p>
                  <div className="py-6 mb-6 bg-lavender-50 rounded-lg flex items-center justify-center">
                    <div className="text-6xl">💬</div>
                  </div>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full flex items-center justify-center gap-2"
                    onClick={() => (window.location.href = "mailto:anshujaiswal12300@gmail.com")}
                  >
                    <MessageSquare size={18} />
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
