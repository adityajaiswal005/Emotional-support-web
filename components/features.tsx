import { SmilePlus, ClipboardList, Lightbulb, Brain } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <SmilePlus className="w-12 h-12 text-blue-500" />,
      title: "Mood Tracking",
      description:
        "Track your emotions through text, facial recognition, or voice input for a complete emotional picture.",
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-purple-500" />,
      title: "Health Logs",
      description: "Record physical symptoms alongside emotional states to identify patterns and correlations.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
      title: "AI Trigger Insights",
      description: "Our AI identifies emotional triggers and patterns you might miss, providing personalized insights.",
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "CBT Coping Tools",
      description:
        "Access evidence-based cognitive behavioral therapy techniques tailored to your specific emotional challenges.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Designed for Your Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tools that empower you to take control of your emotional wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
