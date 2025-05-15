import { Card, CardContent } from "@/components/ui/card"

export default function Problem() {
  return (
    <section id="problem" className="py-16 bg-lavender-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Emotional Health Matters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For chronic disease patients, emotional wellbeing directly impacts physical health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">The Hidden Impact</h3>
              <p className="text-gray-600">
                Studies show that emotional distress can worsen symptoms, increase inflammation, and reduce treatment
                effectiveness for conditions like diabetes and cancer.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">The Overlooked Factor</h3>
              <p className="text-gray-600">
                Despite its importance, emotional health is often neglected in traditional treatment plans, creating a
                gap in holistic care.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl border-0 hover:shadow-lg transition-shadow md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-500">The EmoHealth Solution</h3>
              <p className="text-gray-600">
                EmoHealth bridges this gap by providing tools to track, understand, and manage emotional health
                alongside physical symptoms, creating a more complete picture of your wellbeing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
