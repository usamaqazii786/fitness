import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-center">Frequently Asked Questions</h1>
        <p className="mb-12 text-center text-gray-600">Find answers to common questions about Fitness Tracker</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
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
          <Link
            to="mailto:support@Fitness Tracker.com"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
}