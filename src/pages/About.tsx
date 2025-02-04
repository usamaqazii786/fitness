import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Fitness Tracker</h1>
          <p className="text-xl">Empowering individuals to achieve their fitness goals since 2024</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-6">
              At Fitness Tracker, we believe that everyone deserves access to the tools and knowledge needed to live a healthy, 
              active lifestyle. Our mission is to make fitness accessible, enjoyable, and sustainable for people of all 
              fitness levels.
            </p>
            <p className="text-gray-600 text-lg">
              We're committed to providing a supportive community, expert guidance, and innovative tools to help you 
              achieve your fitness goals and maintain a healthy lifestyle for years to come.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Team working out"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Michael Chen",
                role: "Head of Fitness",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Emma Williams",
                role: "Nutrition Expert",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">support@Fitness Tracker.com</p>
          </div>
          <div className="text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">123 Fitness Street<br />Health City, FL 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}