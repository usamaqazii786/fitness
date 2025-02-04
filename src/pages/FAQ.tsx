import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with Fitness Tracker?",
      answer: "Getting started is easy! Simply create an account and complete your fitness profile. You'll then have access to all our features including workout tracking, nutrition planning, and community forums."
    },
    {
      question: "What features are included in the free plan?",
      answer: "The free plan includes basic workout tracking, access to our community forums, and selected blog content. Premium features like detailed nutrition tracking and personalized workout plans are available with our subscription plans."
    },
    {
      question: "Can I sync Fitness Tracker with my fitness devices?",
      answer: "Yes! Fitness Tracker integrates with most popular fitness devices and apps including Fitbit, Apple Watch, and Garmin devices. You can manage your connected devices in your account settings."
    },
    {
      question: "How do I track my nutrition?",
      answer: "Our nutrition tracking feature allows you to log meals, track calories, and monitor macronutrients. You can use our extensive food database or create custom entries for your meals."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we have mobile apps available for both iOS and Android devices. You can download them from the respective app stores to access Fitness Tracker on the go."
    },
    {
      question: "How can I cancel my subscription?",
      answer: "You can cancel your subscription at any time through your account settings. If you cancel, you'll continue to have access to premium features until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-center mb-12">Find answers to common questions about Fitness Tracker</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Still have questions?</p>
          <a 
            href="mailto:support@Fitness Tracker.com"
            className="text-indigo-600 font-semibold hover:text-indigo-700"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
}