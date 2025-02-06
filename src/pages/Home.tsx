import React, { useEffect, useState } from 'react';
import { ArrowRight, Activity, Users, BookOpen, Play } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  //  const navigate = useNavigate();

  //   const token = localStorage.getItem("token");
  
  //   useEffect(() => {
  //     if (!token) {
  //       // alert("You need to log in to view the community.");
  //       // window.location.href = "/login";
  //       navigate('/login')
  //       return;
  //     }
  //   }, [token]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const testimonials = [
    {
      name: "Sarah M.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      text: "Fitness Tracker transformed my approach to fitness. I've lost 20 pounds and feel amazing!",
      role: "Member since 2023"
    },
    {
      name: "John D.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      text: "The community support here is incredible. It keeps me motivated every day.",
      role: "Member since 2023"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Transform Your Life with Fitness Tracker</h1>
            <p className="mb-8 text-xl md:text-2xl">Your journey to a healthier lifestyle starts here</p>
            <div className="grid grid-cols-1 gap-8 space-x-4 lg:flex">
              <Link 
                to="/community" 
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Join Our Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-indigo-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Fitness Tracker?</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to achieve your fitness goals</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 transition-transform transform rounded-lg bg-gray-50 hover:scale-105">
              <Activity className="w-12 h-12 mb-4 text-indigo-600" />
              <h3 className="mb-2 text-xl font-semibold">Track Your Progress</h3>
              <p className="text-gray-600">Monitor your nutrition, workouts, and health metrics in one place</p>
            </div>

            <div className="p-6 transition-transform transform rounded-lg bg-gray-50 hover:scale-105">
              <Users className="w-12 h-12 mb-4 text-indigo-600" />
              <h3 className="mb-2 text-xl font-semibold">Join the Community</h3>
              <p className="text-gray-600">Connect with like-minded individuals and share your fitness journey</p>
            </div>

            <div className="p-6 transition-transform transform rounded-lg bg-gray-50 hover:scale-105">
              <BookOpen className="w-12 h-12 mb-4 text-indigo-600" />
              <h3 className="mb-2 text-xl font-semibold">Expert Content</h3>
              <p className="text-gray-600">Access professional advice and educational resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-center">What Our Members Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-indigo-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Stay Updated</h2>
          <p className="mb-8 text-xl text-indigo-100">Get the latest fitness tips and updates delivered to your inbox</p>
          {subscribed ? (
            <div className="inline-block px-6 py-3 text-indigo-600 bg-white rounded-lg">
              Thanks for subscribing! 🎉
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold text-indigo-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-full max-w-3xl p-4 mx-4 bg-white rounded-lg">
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Fitness Tracker Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="px-4 py-2 mt-4 text-white transition-colors bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}