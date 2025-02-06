import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-white bg-gray-800">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Fitness Tracker</h3>
            <p className="text-gray-400">Empowering you to achieve your fitness goals and live a healthier life.</p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/nutrition" className="text-gray-400 hover:text-white">Nutrition Tracking</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white">Community</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/usama.qazi.946/?locale=pt_PT" target='_blank' className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link to="https://www.instagram.com/uq5794472/?igsh=OGN6cjc4ZjZ1bmYz" target='_blank' className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Fitness Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}