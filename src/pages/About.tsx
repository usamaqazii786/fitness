import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-16 text-white bg-indigo-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold">About Fitness Tracker</h1>
          <p className="text-xl">Empowering individuals to achieve their fitness goals since 2024</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="mb-6 text-lg text-gray-600">
              At Fitness Tracker, we believe that everyone deserves access to the tools and knowledge needed to live a healthy, 
              active lifestyle. Our mission is to make fitness accessible, enjoyable, and sustainable for people of all 
              fitness levels.
            </p>
            <p className="text-lg text-gray-600">
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
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">Our Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                  className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center">Contact Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="mb-2 text-xl font-semibold">Email</h3>
            <p className="text-gray-600">usamaqazi1234567@gmail.com</p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="mb-2 text-xl font-semibold">Phone</h3>
            <p className="text-gray-600">+92 (315) 379-9709</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
            <h3 className="mb-2 text-xl font-semibold">Location</h3>
            <p className="text-gray-600">House no 187 alfareed street <br />garden west Karachi</p>
          </div>
        </div>
      </div>
    </div>
  );
}