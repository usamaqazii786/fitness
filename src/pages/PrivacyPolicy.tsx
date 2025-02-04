import React from 'react';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Shield className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Fitness Tracker ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Profile information</li>
                <li>Fitness and health data</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Usage Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Device information</li>
                <li>Log data</li>
                <li>Cookies and similar technologies</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Providing and improving our services</li>
                <li>Personalizing your experience</li>
                <li>Processing payments</li>
                <li>Communicating with you</li>
                <li>Analytics and research</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Service providers</li>
                <li>Business partners</li>
                <li>Legal authorities when required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@Fitness Tracker.com
                <br />
                Address: 123 Fitness Street, Health City, FL 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}