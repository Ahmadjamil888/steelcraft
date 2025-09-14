import React from 'react';
import { Users, Factory, Trophy, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Crafting Tomorrow's 
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent block mt-2">
                Steel Legacy
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over three decades, SteelCraft has been at the forefront of steel innovation, 
              combining traditional craftsmanship with cutting-edge technology to deliver 
              exceptional products that shape the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'Years Experience' },
              { number: '500K+', label: 'Tons Produced' },
              { number: '50+', label: 'Countries Served' },
              { number: '99.8%', label: 'Quality Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded in 1993, SteelCraft began as a vision to revolutionize steel manufacturing 
                  through precision engineering and unwavering commitment to quality. What started 
                  as a small operation has grown into a global leader in premium steel solutions.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, 
                  and an relentless pursuit of excellence. Today, we serve industries ranging from 
                  construction and manufacturing to aerospace and automotive, each demanding the 
                  highest standards of quality and reliability.
                </p>
                <p>
                  Every piece of steel that leaves our facility represents decades of expertise, 
                  cutting-edge technology, and a commitment to building a stronger, more sustainable future.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Steel manufacturing facility"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision, every process, and every product we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Excellence',
                description: 'Pursuing perfection in every aspect of our operations and products.',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working closely with clients to deliver tailored steel solutions.',
              },
              {
                icon: Factory,
                title: 'Innovation',
                description: 'Continuously advancing our processes and technologies.',
              },
              {
                icon: Zap,
                title: 'Efficiency',
                description: 'Optimizing operations while maintaining the highest quality standards.',
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;