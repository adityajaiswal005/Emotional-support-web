import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Since using EmoHealth, I've noticed how my anxiety directly affects my blood sugar levels. The coping tools have helped me manage stress and improve my diabetes control.",
      name: "Sarah J.",
      role: "Type 1 Diabetes Patient",
      initials: "SJ",
    },
    {
      quote:
        "During cancer treatment, my emotional health was overlooked. EmoHealth gave me a way to track my feelings and get support when I needed it most.",
      name: "Michael T.",
      role: "Cancer Survivor",
      initials: "MT",
    },
    {
      quote:
        "The AI insights helped me identify emotional triggers I never noticed before. It's made a real difference in how I manage my chronic pain.",
      name: "Elena R.",
      role: "Fibromyalgia Patient",
      initials: "ER",
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-lavender-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people managing chronic conditions with EmoHealth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md rounded-2xl border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 mr-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
