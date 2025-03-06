import React, { useState, useEffect } from 'react'
import Img from '../assets/img1.jpg'
import Land from '../assets/img2.jpg'
import Water from '../assets/img3.jpg'
import Hard from '../assets/img3.jpg'
import Indoor from '../assets/img4.jpg'
import Vertical from '../assets/img5.jpg'
import Roof from '../assets/greenroof.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdEco, MdGroups, MdStarRate, MdDesignServices, MdTimer, MdSecurity } from 'react-icons/md'
import { MdArrowForward } from 'react-icons/md'
import Aurora from './Aurora';


const Info = () => {
 
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

   

  return (
    <div className="relative">
      {/* Aurora Background Container */}
      <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={["#134e4a", "#065f46", "#047857"]}  
          blend={0.3}
          amplitude={1.2}
          speed={0.3}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <span className="text-white font-semibold text-lg">Welcome to Swastik Landscapes</span>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Creating Sustainable 
                  <span className="text-green-400 block">Landscapes</span>
                </h1>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Transform your outdoor spaces into stunning, sustainable environments that enhance both beauty and functionality.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
                    Get Started
                  </button>
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl opacity-30"></div>
                <img 
                  src={Img} 
                  alt="Hero" 
                  className="relative rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
{/* <section className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm"> */}
<section className="py-20 bg-neutral-900 backdrop-blur-sm">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-green-400 font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
      <h2 className="text-3xl font-bold text-white mt-3 mb-4">Why Choose Swastik Landscape?</h2>
      <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
      <p className="text-gray-300">We combine innovation with sustainability to create spaces that inspire.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Sustainable Design",
          description: "Creating eco-friendly spaces that reduce environmental impact while maintaining aesthetic beauty.",
          icon: MdEco,
          bgColor: "bg-green-900/30",
          iconColor: "text-green-400"
        },
        {
          title: "Expert Team",
          description: "Our professional designers bring years of industry experience to every project.",
          icon: MdGroups,
          bgColor: "bg-blue-900/30",
          iconColor: "text-blue-400"
        },
        {
          title: "Quality Materials",
          description: "Using only the highest grade sustainable materials for lasting results.",
          icon: MdStarRate,
          bgColor: "bg-yellow-900/30",
          iconColor: "text-yellow-400"
        },
        {
          title: "Innovative Solutions",
          description: "Implementing cutting-edge landscape design techniques and technologies.",
          icon: MdDesignServices,
          bgColor: "bg-purple-900/30",
          iconColor: "text-purple-400"
        },
        {
          title: "Timely Delivery",
          description: "Committed to completing projects on schedule without compromising quality.",
          icon: MdTimer,
          bgColor: "bg-red-900/30",
          iconColor: "text-red-400"
        },
        {
          title: "Guaranteed Results",
          description: "We stand behind our work with comprehensive service guarantees.",
          icon: MdSecurity,
          bgColor: "bg-indigo-900/30",
          iconColor: "text-indigo-400"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <div className={`${feature.bgColor} ${feature.iconColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <feature.icon className="w-7 h-7" />
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
            {feature.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed">
            {feature.description}
          </p>
          
          <div className="mt-6 flex items-center text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium">Learn More</span>
            <MdArrowForward className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-white">Comprehensive landscaping solutions for every need</p>
        </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Green Roof", image: Roof },
                  { title: "Landscaping", image: Land },
                  { title: "Waterscaping", image: Water },
                  { title: "Indoor Gardens", image: Indoor },
                  { title: "Vertical Gardens", image: Vertical },
                  { title: "Hardscaping", image: Hard }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="aspect-[4/3]">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                  </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Professional {service.title.toLowerCase()} solutions tailored to your needs
                          </p>
                        </div>
                  </motion.div>
                ))}
              </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { number: "100+", label: "Projects Completed" },
                { number: "13+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                // { number: "50+", label: "Expert Team" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </motion.div>
              ))}
                              </div>
                            </div>
        </section>

        {/* Testimonials Section */}
<section className="py-20 bg-neutral-900 backdrop-blur-sm">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-green-400 font-medium text-sm tracking-wider uppercase">Testimonials</span>
      <h2 className="text-3xl font-bold text-white mt-3 mb-4">What Our Clients Say</h2>
      <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
      <p className="text-gray-300">Hear from those who've experienced our services</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "John Doe",
          role: "Homeowner",
          text: "The team at Swastik Landscape transformed our backyard into a stunning oasis. Highly recommended!"
        },
        {
          name: "Jane Smith",
          role: "Business Owner",
          text: "Professional, creative, and sustainable solutions for our commercial space."
        },
        {
          name: "Mike Johnson",
          role: "Property Manager",
          text: "Excellent service and maintenance. Our gardens have never looked better."
        }
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-green-400 text-4xl">"</div>
            <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
              <svg 
                className="w-4 h-4 text-green-400" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {testimonial.text}
          </p>
          
          <div className="flex items-center border-t border-white/10 pt-6">
            <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 font-semibold">
              {testimonial.name.charAt(0)}
            </div>
            <div className="ml-4">
              <div className="font-semibold text-white group-hover:text-green-400 transition-colors">
                {testimonial.name}
              </div>
              <div className="text-gray-400 text-sm">
                {testimonial.role}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
              <p className="text-white mb-8">Let's create something beautiful together</p>
              <button className="px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-600 transition-all">
                Contact Us Today
                        </button>
                      </div>
                    </div>
        </section>
      </div>
    </div>
  );
};

function HammerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
            <path d="m18 15 4-4" />
            <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
        </svg>
    )
}

function PaletteIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
    )
}

function WrenchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    )
    
}

export default Info
