import React from 'react';
import { Settings, Zap, Shield, Award } from 'lucide-react';

const Manufacturing: React.FC = () => {
  const processes = [
    {
      step: '01',
      title: 'Raw Material Selection',
      description: 'Premium grade raw materials sourced from certified suppliers worldwide, ensuring consistent quality and performance.',
      icon: Shield,
    },
    {
      step: '02',
      title: 'Precision Melting',
      description: 'State-of-the-art electric arc furnaces achieve optimal temperatures for perfect alloy composition and purity.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Advanced Rolling',
      description: 'Computer-controlled rolling mills shape steel with micrometer precision to exact specifications.',
      icon: Settings,
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Comprehensive testing protocols ensure every product meets international standards and customer requirements.',
      icon: Award,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Advanced 
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent block mt-2">
                Manufacturing
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Where cutting-edge technology meets traditional craftsmanship. Our manufacturing process 
              combines decades of expertise with the latest innovations to create steel products of 
              unparalleled quality and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every step in our manufacturing process is designed to ensure maximum quality, 
              efficiency, and consistency in our steel products.
            </p>
          </div>

          <div className="space-y-16">
            {processes.map((process, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-6">
                    <div className="text-6xl font-bold bg-gradient-to-r from-white/20 to-white/10 bg-clip-text text-transparent">
                      {process.step}
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center">
                      <process.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{process.title}</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">{process.description}</p>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden">
                    <div className="w-full h-80 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                      <process.icon className="w-24 h-24 text-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Cutting-Edge Technology
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Quality Control</h3>
                  <p className="text-gray-300">Machine learning algorithms monitor every stage of production, ensuring consistent quality and identifying potential issues before they occur.</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">Automated Production Lines</h3>
                  <p className="text-gray-300">Robotic systems handle precision tasks with accuracy measured in micrometers, reducing human error and increasing efficiency.</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">Real-Time Monitoring</h3>
                  <p className="text-gray-300">IoT sensors throughout our facility provide continuous feedback on temperature, pressure, and quality metrics.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Modern manufacturing facility"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Quality Certifications</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Our commitment to quality is recognized by leading international standards organizations.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'CE Marking'].map((cert, index) => (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;