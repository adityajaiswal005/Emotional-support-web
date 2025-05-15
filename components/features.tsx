import { SmilePlus, ClipboardList, Lightbulb, Brain } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <SmilePlus className="w-12 h-12 text-blue-500" />,
      title: "Mood Tracking",
      description:
        "Track your emotions through text, facial recognition, or voice input for a complete emotional picture.",
      emoji: "😊",
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-purple-500" />,
      title: "Health Logs",
      description: "Record physical symptoms alongside emotional states to identify patterns and correlations.",
      emoji: "📋",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
      title: "AI Insights",
      description: "Our AI identifies emotional triggers and patterns you might miss, providing personalized insights.",
      emoji: "💡",
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "CBT Tools",
      description:
        "Access evidence-based cognitive behavioral therapy techniques tailored to your specific emotional challenges.",
      emoji: "🧠",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

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
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-4xl">
                  {feature.emoji}
                </div>
              </div>
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
