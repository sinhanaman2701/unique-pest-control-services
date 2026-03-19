import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, CheckCircle, Clock, Shield } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icon = "🐛";
  const type = "Pest Control";
  const name = "Unique Pest Control Services";

  const services = [
    { title: "Service 1", desc: "Professional service description here" },
    { title: "Service 2", desc: "Professional service description here" },
    { title: "Service 3", desc: "Professional service description here" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{icon}</span>
              <span className="text-xl font-bold text-gray-800">{name}</span>
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
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#about" className="block px-4 py-3 text-gray-600">About</a>
            <a href="#services" className="block px-4 py-3 text-gray-600">Services</a>
            <a href="#contact" className="block px-4 py-3 text-gray-600">Contact</a>
          </div>
        )}
      </nav>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Best {type} in Mumbai</h1>
          <p className="text-xl mb-8 opacity-90">Professional {type.toLowerCase()} services. Trusted by hundreds of customers.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Free Quote</a>
            <a href="tel:9876543210" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 flex items-center justify-center gap-2">
              <Phone size={20} /> 9876543210
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Us</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">Welcome to {name}, your trusted {type.toLowerCase()} provider in Mumbai. We take pride in delivering exceptional service quality.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
            <div><div className="text-3xl font-bold text-blue-600">500+</div><div className="text-gray-600">Happy Clients</div></div>
            <div><div className="text-3xl font-bold text-blue-600">10+</div><div className="text-gray-600">Years Experience</div></div>
            <div><div className="text-3xl font-bold text-blue-600">98%</div><div className="text-gray-600">Satisfaction</div></div>
            <div><div className="text-3xl font-bold text-blue-600">24/7</div><div className="text-gray-600">Support</div></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><Shield className="mx-auto mb-2" size={32} /><h3 className="font-semibold">Licensed</h3></div>
            <div><Clock className="mx-auto mb-2" size={32} /><h3 className="font-semibold">Quick Response</h3></div>
            <div><CheckCircle className="mx-auto mb-2" size={32} /><h3 className="font-semibold">Top Rated</h3></div>
            <div><CheckCircle className="mx-auto mb-2" size={32} /><h3 className="font-semibold">Guaranteed</h3></div>
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
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-gray-600">Mumbai, Maharashtra</span>
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
        <p>© 2026 {name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;