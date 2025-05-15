import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
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
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2">
                <Download size={20} />
                Download App
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-500 hover:bg-blue-50 rounded-full px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-800">
              <Image
                src="/placeholder.svg?height=640&width=320"
                alt="EmoHealth App Screenshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
