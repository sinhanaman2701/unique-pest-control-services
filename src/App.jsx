import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, CheckCircle, Clock, Star, ArrowRight, Wrench, Users, Award } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🐛</span>
              <div>
                <span className="text-xl font-bold text-gray-900">Unique Pest Control</span>
                <p className="text-xs text-gray-500">Pest Control</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700">Get Quote</a>
            </div>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        {isMenuOpen && <div className="md:hidden bg-white border-t"><div className="px-4 py-3 space-y-3"><a href="#about" className="block py-2">About</a><a href="#services" className="block py-2">Services</a><a href="#contact" className="block py-2 text-blue-600 font-bold">Get Quote</a></div></div>}
      </nav>

      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Pest Control in Bhandup East Mumbai</h1>
          <p className="text-xl md:text-2xl mb-8">Trusted by 1,800+ customers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 flex items-center justify-center gap-2">Get Free Quote <ArrowRight size={20} /></a>
            <a href="tel:9988776655" className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 flex items-center justify-center gap-2"><Phone size={20} /> 9988776655</a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center"><div className="text-4xl font-bold">10+</div><div className="text-blue-200">Years</div></div>
            <div className="text-center"><div className="text-4xl font-bold">1,800+</div><div className="text-blue-200">Clients</div></div>
            <div className="text-center"><div className="text-4xl font-bold">98%</div><div className="text-blue-200">Satisfaction</div></div>
            <div className="text-center"><div className="text-4xl font-bold">24/7</div><div className="text-blue-200">Available</div></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Unique Pest Control</h2>
          <p className="text-gray-600 text-lg mb-4">Welcome to Unique Pest Control, your trusted pest control provider in Bhandup East Mumbai. With over 10 years of experience serving thousands of satisfied customers.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center"><Users className="mx-auto text-blue-600 mb-3" size={32} /><div className="text-3xl font-bold">1,800+</div><div className="text-gray-600">Clients</div></div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center"><Award className="mx-auto text-blue-600 mb-3" size={32} /><div className="text-3xl font-bold">10+</div><div className="text-gray-600">Years</div></div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center"><Star className="mx-auto text-blue-600 mb-3" size={32} /><div className="text-3xl font-bold">4.9</div><div className="text-gray-600">Rating</div></div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center"><CheckCircle className="mx-auto text-blue-600 mb-3" size={32} /><div className="text-3xl font-bold">100%</div><div className="text-gray-600">Satisfaction</div></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition border border-gray-100"><div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5"><Wrench className="text-blue-600" size={28} /></div><h3 className="text-xl font-bold mb-3">Residential</h3><p className="text-gray-600">Professional residential services.</p></div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition border border-gray-100"><div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5"><Wrench className="text-blue-600" size={28} /></div><h3 className="text-xl font-bold mb-3">Commercial</h3><p className="text-gray-600">Professional commercial services.</p></div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition border border-gray-100"><div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5"><Wrench className="text-blue-600" size={28} /></div><h3 className="text-xl font-bold mb-3">Termite Control</h3><p className="text-gray-600">Professional termite control services.</p></div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition border border-gray-100"><div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5"><Wrench className="text-blue-600" size={28} /></div><h3 className="text-xl font-bold mb-3">Bed Bug Treatment</h3><p className="text-gray-600">Professional bed bug treatment services.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition"><CheckCircle className="mx-auto mb-4" size={40} /><h3 className="text-lg font-bold">ISO Certified</h3></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition"><CheckCircle className="mx-auto mb-4" size={40} /><h3 className="text-lg font-bold">Trained Technicians</h3></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition"><CheckCircle className="mx-auto mb-4" size={40} /><h3 className="text-lg font-bold">Customized</h3></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition"><CheckCircle className="mx-auto mb-4" size={40} /><h3 className="text-lg font-bold">Support</h3></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-8">Contact us for a free consultation.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4"><div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center"><Phone className="text-blue-600" size={24} /></div><div><div className="text-gray-500 text-sm">Call Us</div><div className="text-xl font-bold">9988776655</div></div></div>
                <div className="flex items-center gap-4"><div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center"><MapPin className="text-blue-600" size={24} /></div><div><div className="text-gray-500 text-sm">Location</div><div className="text-xl font-bold">Bhandup East Mumbai</div></div></div>
                <div className="flex items-center gap-4"><div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center"><Clock className="text-blue-600" size={24} /></div><div><div className="text-gray-500 text-sm">Hours</div><div className="text-xl font-bold">24/7 Emergency</div></div></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Request Callback</h3>
              <form className="space-y-5">
                <div><label className="block text-gray-700 font-medium mb-2">Your Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Enter your name" /></div>
                <div><label className="block text-gray-700 font-medium mb-2">Phone Number</label><input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Enter phone number" /></div>
                <div><label className="block text-gray-700 font-medium mb-2">Message</label><textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Tell us about your requirements"></textarea></div>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700">Request Callback</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4"><span className="text-3xl">🐛</span><span className="text-xl font-bold">Unique Pest Control</span></div>
          <p className="text-gray-400">Your trusted pest control provider in Bhandup East Mumbai</p>
          <p className="mt-8 text-gray-400">© 2026 Unique Pest Control. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;