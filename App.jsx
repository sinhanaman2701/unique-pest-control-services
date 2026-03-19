import React, { useState } from 'react';
import { Phone, MapPin, Mail, Menu, X, Star, CheckCircle, Clock, Shield } from 'lucide-react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐛</span>
              <span className="text-xl font-bold text-gray-800">Unique Pest Control Services</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Pest Control in Bhandup East, Mumbai</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Professional Pest Control services in Bhandup East, Mumbai. Trusted by hundreds of customers.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Free Quote</a>
            <a href="tel:9876543210" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 flex items-center justify-center gap-2">
              <Phone size={20} /> 9876543210
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Us</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">Welcome to Unique Pest Control Services, your trusted Pest Control provider in Bhandup East, Mumbai. We take pride in delivering exceptional service quality.</p>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Service 1', 'Service 2', 'Service 3'].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s}</h3>
                <p className="text-gray-600">Professional service description</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-blue-600" size={20} />
              <span className="text-gray-600">9876543210</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-gray-600">Bhandup East, Mumbai</span>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border rounded-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg" />
              <textarea placeholder="Tell us about your requirements" rows="4" className="w-full px-4 py-3 border rounded-lg"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">Request Callback</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2026 Unique Pest Control Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Website;