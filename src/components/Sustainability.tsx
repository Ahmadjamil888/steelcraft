import React from 'react';
import { Leaf, Recycle, Globe, Target } from 'lucide-react';

const Sustainability: React.FC = () => {
  const initiatives = [
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Our closed-loop recycling systems ensure 95% of our steel can be recycled indefinitely without quality loss.',
      impact: '500,000 tons recycled annually',
    },
    {
      icon: Leaf,
      title: 'Carbon Neutral Operations',
      description: 'Advanced energy recovery systems and renewable power sources minimize our environmental footprint.',
      impact: '60% reduction in emissions',
    },
    {
      icon: Globe,
      title: 'Sustainable Sourcing',
      description: 'Partnerships with certified suppliers who share our commitment to environmental responsibility.',
      impact: '100% certified suppliers',
    },
    {
      icon: Target,
      title: 'Zero Waste Goal',
      description: 'Innovative processes and waste management systems working towards complete waste elimination.',
      impact: '90% waste diversion achieved',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Building a 
              <span className="bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent block mt-2">
                Sustainable Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our commitment to environmental stewardship drives every aspect of our operations. 
              We're pioneering sustainable steel production methods that protect our planet while 
              delivering exceptional products for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-gradient-to-r from-green-900/20 to-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent mb-2">
                60%
              </div>
              <div className="text-gray-300 font-medium">CO₂ Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-300 font-medium">Recyclable Materials</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent mb-2">
                Zero
              </div>
              <div className="text-gray-300 font-medium">Liquid Waste</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-300 font-medium">Renewable Energy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Green Initiatives</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive programs designed to minimize environmental impact while maximizing operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <initiative.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">{initiative.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{initiative.description}</p>
                    <div className="px-4 py-2 bg-green-500/20 rounded-full inline-block">
                      <span className="text-green-300 font-medium">{initiative.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation in Sustainability */}
      <section className="py-24 bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Green Technology Innovation
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Our research and development team continuously explores new technologies 
                  to reduce environmental impact. From hydrogen-powered furnaces to AI-optimized 
                  energy consumption, we're at the forefront of sustainable manufacturing.
                </p>
                <p>
                  Recent investments in carbon capture technology have positioned us as an 
                  industry leader in clean steel production, setting new standards for 
                  environmental responsibility in heavy industry.
                </p>
                <p>
                  By 2030, we aim to achieve net-zero emissions across all operations while 
                  maintaining the highest quality standards our customers expect.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Green technology in manufacturing"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Our Environmental Commitment
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We pledge to operate as responsible stewards of the environment, 
            ensuring our success contributes to a healthier planet for future generations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-green-900/20 to-white/5 rounded-xl backdrop-blur-sm border border-green-500/20">
              <h3 className="text-lg font-bold text-white mb-3">2025 Goal</h3>
              <p className="text-green-300">Carbon neutral operations</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-900/20 to-white/5 rounded-xl backdrop-blur-sm border border-green-500/20">
              <h3 className="text-lg font-bold text-white mb-3">2027 Goal</h3>
              <p className="text-green-300">100% renewable energy</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-900/20 to-white/5 rounded-xl backdrop-blur-sm border border-green-500/20">
              <h3 className="text-lg font-bold text-white mb-3">2030 Goal</h3>
              <p className="text-green-300">Net-zero emissions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;