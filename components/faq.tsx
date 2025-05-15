"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Is my health data secure and private?",
      answer:
        "Absolutely. EmoHealth uses end-to-end encryption and follows HIPAA guidelines. Your data is never sold or shared with third parties, and you control who has access to your information.",
    },
    {
      question: "Can EmoHealth replace my medical treatment?",
      answer:
        "No, EmoHealth is designed to complement your existing medical care, not replace it. Always follow your healthcare provider's advice and treatment plan. EmoHealth can provide additional insights to share with your care team.",
    },
    {
      question: "How accurate is the emotion recognition?",
      answer:
        "Our emotion recognition technology has been trained on diverse datasets and continues to improve. You can always edit or correct any misidentified emotions, which helps our system learn and become more accurate over time.",
    },
    {
      question: "Is EmoHealth available for all chronic conditions?",
      answer:
        "Yes, EmoHealth is designed to be helpful for people with any chronic condition. While some features may be tailored to specific conditions, the core emotional tracking and management tools are beneficial for all users.",
    },
    {
      question: "Can my healthcare provider access my EmoHealth data?",
      answer:
        "Only if you choose to share it. EmoHealth includes options to generate reports that you can share with your healthcare providers during appointments, but this is entirely under your control.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-lavender-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about EmoHealth</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
