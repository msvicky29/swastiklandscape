import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import EventPlantPic from '../assets/event-plant.jpeg'
import Irrigation from '../assets/irrigation.jpg'



const ServiceCard = ({ title, image, description, index, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {description}
        </p>
        <div className="flex gap-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <Link to={link} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            Learn More
            <MdArrowForward className="w-5 h-5" />
          </Link>
          <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Service = () => {
  const services = [
    {
      title: "Corporate Plant Rental",
      description: "Transform your workplace with our premium plant rental service. Enhance productivity and wellbeing.",
      image: Irrigation,
      link: '/green-roof'
    },
    {
      title: "Event Plant Display",
      description: "Create stunning temporary displays for events and special occasions.",
      image: EventPlantPic,
      link: '/event-plant'
    },
    {
      title: "Irrigation System",
      description: "Smart irrigation solutions for efficient water management and plant health.",
      image: Irrigation,
      link: '/irrigation'
    },
    {
      title: "Turfing",
      description: "Premium quality turf installation for a perfect lawn all year round.",
      image: EventPlantPic,
      link: '/turfing'
    },
    {
      title: "Grass Cutting",
      description: "Professional lawn maintenance services to keep your green spaces pristine.",
      image: Irrigation,
      link: '/green-roof'
    },
    {
      title: "Integrated Sustainable Landscape",
      description: "Holistic landscape solutions that combine beauty with environmental responsibility.",
      image: EventPlantPic,
      link: '/green-roof'
    },
    {
      title: "Vertical Green Wall",
      description: "Innovative vertical gardening solutions for urban spaces.",
      image: EventPlantPic,
      link: '/green-roof'
    },
    {
      title: "Tree Services",
      description: "Expert tree pruning, cutting, and transplanting services by certified arborists.",
      image: Irrigation,
      link: '/green-roof'
    },
    {
      title: "Arboriculture Consultancy",
      description: "Professional tree care advice and management solutions.",
      image: Irrigation,
      link: '/green-roof'
    },
    {
      title: "Green Roof",
      description: "Sustainable rooftop garden solutions for urban buildings.",
      image: Irrigation,
      link: '/green-roof'
    },
    {
      title: "Design & Build",
      description: "Complete landscape design and construction services.",
      image: EventPlantPic,
      link: '/green-roof'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-green-100/50 via-transparent to-transparent"></div> */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Professional Services
            </h1>
            <div className="w-20 h-1.5 bg-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white mb-8">
              Comprehensive green solutions for every environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Let's create something extraordinary together
            </p>
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
