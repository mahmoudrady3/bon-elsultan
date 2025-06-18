import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-amber-950/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-100"
              style={{ fontFamily: '"Playfair Display", serif' }}>
            Visit Us — Feel the Aroma
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Come experience the Roastera difference in person
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">Location</h3>
                  <p className="text-gray-300">123 Coffee Street<br />Cairo, Egypt</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">Phone</h3>
                  <p className="text-gray-300">+20 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">Email</h3>
                  <p className="text-gray-300">hello@roastera.coffee</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-amber-100 mb-6">Let's Connect ☕</h3>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 
                  hover:to-purple-500 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <Instagram className="w-6 h-6 text-white" />
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 
                  hover:to-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <Facebook className="w-6 h-6 text-white" />
                </button>
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 
                  hover:to-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <MessageCircle className="w-6 h-6 text-white" />
                </button>
                <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 
                  hover:to-amber-600 p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <Mail className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-amber-900/20 to-black 
              border border-amber-700/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-amber-100 mb-6">Send us a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-amber-200 mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-amber-700/50 rounded-lg px-4 py-3 
                      text-white focus:outline-none focus:border-amber-500 transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-amber-200 mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-amber-700/50 rounded-lg px-4 py-3 
                      text-white focus:outline-none focus:border-amber-500 transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-amber-200 mb-2 font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-black/50 border border-amber-700/50 rounded-lg px-4 py-3 
                      text-white focus:outline-none focus:border-amber-500 transition-colors duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 
                    hover:to-amber-600 text-white py-3 px-6 rounded-lg font-semibold transition-all 
                    duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;