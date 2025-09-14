import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92 306 7060074', 'Sales & Support'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@steelcraft.com', 'sales@steelcraft.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Industrial Area', 'Gujranwala, Pakistan'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8AM - 6PM', 'Saturday: 9AM - 4PM'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Get in 
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent block mt-2">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your steel requirements? Our expert team is here to provide 
            personalized solutions and answer any questions about our products and services.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request Quote</option>
                    <option value="products">Product Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-lg hover:from-gray-100 hover:to-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-white/20"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-white/40 mx-auto mb-4" />
                  <p className="text-gray-400">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Global Presence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With facilities and partnerships worldwide, we're positioned to serve your steel needs anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'Headquarters',
                location: 'Gujranwala, Pakistan',
                details: 'Main manufacturing facility and corporate offices',
              },
              {
                city: 'Regional Office',
                location: 'Lahore, Pakistan',
                details: 'Regional sales and customer service center',
              },
              {
                city: 'International',
                location: 'Dubai, UAE',
                details: 'Middle East operations and export hub',
              },
            ].map((office, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{office.city}</h3>
                <p className="text-gray-300 font-medium mb-4">{office.location}</p>
                <p className="text-gray-400 text-sm">{office.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;