import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'Steel Plates',
      description: 'Premium grade steel plates engineered for structural applications, available in various thicknesses and grades.',
      image: 'https://images.pexels.com/photos/159306/gear-machine-mechanical-mechanical-engineering-159306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['High tensile strength', 'Corrosion resistant', 'Custom dimensions', 'Multiple grade options'],
      applications: ['Construction', 'Shipbuilding', 'Industrial machinery', 'Infrastructure'],
    },
    {
      name: 'Fan Plates',
      description: 'Precision-manufactured fan plates designed for optimal airflow and durability in industrial applications.',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Aerodynamic design', 'Heat resistant', 'Balanced construction', 'Long-lasting finish'],
      applications: ['HVAC systems', 'Industrial fans', 'Cooling systems', 'Ventilation equipment'],
    },
    {
      name: 'Window Frames',
      description: 'Architectural steel window frames that combine strength, elegance, and energy efficiency for modern buildings.',
      image: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Weather resistant', 'Thermal efficiency', 'Modern aesthetics', 'Easy installation'],
      applications: ['Residential buildings', 'Commercial properties', 'Industrial facilities', 'Architectural projects'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Premium Steel 
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent block mt-2">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality steel products, engineered to meet 
            the most demanding industrial and architectural requirements.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden group">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-white">{product.name}</h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <span 
                            key={appIndex}
                            className="px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full text-gray-300 text-sm backdrop-blur-sm border border-white/10"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 shadow-2xl hover:shadow-white/20">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-24 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Need Custom Steel Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Our engineering team specializes in creating bespoke steel products tailored to your exact specifications and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-white/20">
              <span>Request Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              View Specifications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;