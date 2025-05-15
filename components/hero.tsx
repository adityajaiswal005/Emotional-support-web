"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Manage Your Emotional Health Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              EmoHealth helps chronic disease patients monitor, understand, and improve their emotional wellbeing for
              better health outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2"
                onClick={() => (window.location.href = "mailto:anshujaiswal12300@gmail.com")}
              >
                <Download size={20} />
                Download App
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-500 hover:bg-blue-50 rounded-full px-8 py-6 text-lg"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-blue-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">E</span>
                  </div>
                  <p className="text-blue-500 font-medium">EmoHealth App</p>
                  <p className="text-gray-500 text-sm mt-2">App Screenshot</p>
                </div>
              </div>
            </div>

            {/* Floating elements around the phone */}
            <div className="absolute -top-10 -left-10 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center shadow-md">
              <div className="text-blue-500 font-bold text-xl">😊</div>
            </div>
            <div className="absolute top-20 -right-6 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
              <div className="text-purple-500 font-bold text-xl">🧠</div>
            </div>
            <div className="absolute bottom-10 -left-8 bg-blue-50 rounded-full w-24 h-24 flex items-center justify-center shadow-md">
              <div className="text-blue-500 font-bold text-xl">💙</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
