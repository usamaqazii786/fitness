import React from 'react';
import { FileText } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <FileText className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using Fitness Tracker's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Personal, non-commercial use only</li>
                <li>No modification or copying of materials</li>
                <li>No use for unauthorized purposes</li>
                <li>License can be terminated for violations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Account registration required for certain features</li>
                <li>Accurate information must be provided</li>
                <li>Users responsible for account security</li>
                <li>Account sharing is prohibited</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Service Rules</h2>
              <p className="text-gray-700 mb-4">Users agree not to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Violate any laws or regulations</li>
                <li>Harass or harm other users</li>
                <li>Spread malware or viruses</li>
                <li>Attempt to gain unauthorized access</li>
                <li>Interfere with service operation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Subscription fees are billed in advance</li>
                <li>Automatic renewal unless cancelled</li>
                <li>Refunds subject to policy</li>
                <li>Price changes with notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Content</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Users retain ownership of their content</li>
                <li>License granted to Fitness Tracker to use content</li>
                <li>Content must not infringe rights</li>
                <li>Fitness Tracker may remove inappropriate content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                Services provided "as is" without warranties. Users assume risks associated with use. Consult healthcare professionals before starting any fitness program.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Fitness Tracker not liable for indirect, incidental, or consequential damages. Maximum liability limited to fees paid for service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-gray-700">
                Questions about the Terms of Service should be sent to:
                <br />
                Email: legal@Fitness Tracker.com
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