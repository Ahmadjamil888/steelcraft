import React from 'react';
import { ArrowRight, Shield, Award, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                FORGED IN
              </span>
              <span className="block bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mt-2">
                EXCELLENCE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium steel solutions crafted with precision engineering and uncompromising quality standards for the modern world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-white/20">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three decades of innovation in steel manufacturing, delivering unmatched quality and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Unmatched Durability',
                description: 'Our steel products are engineered to withstand the most demanding environments and applications.',
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'ISO certified manufacturing processes ensure every product meets the highest industry standards.',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Serving clients worldwide with reliable supply chains and consistent product excellence.',
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Partner with industry leaders and experience the difference that premium steel solutions make.
          </p>
          <button className="group px-12 py-4 bg-gradient-to-r from-white via-gray-100 to-white text-black font-bold rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;