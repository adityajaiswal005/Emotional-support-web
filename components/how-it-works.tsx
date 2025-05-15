import { ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Log Your Emotions",
      description: "Record how you feel through text, facial expressions, or voice notes in just seconds a day.",
    },
    {
      number: "02",
      title: "Get Personalized Insights",
      description: "Our AI analyzes your emotional patterns and identifies triggers related to your condition.",
    },
    {
      number: "03",
      title: "Receive Coping Suggestions",
      description: "Get evidence-based techniques and tools tailored to your specific emotional challenges.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple three-step process to better emotional health
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-blue-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
