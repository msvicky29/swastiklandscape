import React, { useState } from 'react';
import { motion } from 'framer-motion';
import mission from '../assets/indoor.jpeg';
import team from '../assets/team.jpg';
import process from '../assets/process.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                About Green Planet
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Creating Sustainable 
                <span className="block text-green-600">Future Together</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 35 years of experience, we've been transforming spaces into sustainable, beautiful environments that inspire and endure.
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "35+", label: "Years Experience" },
                  { number: "500+", label: "Projects Done" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-green-100 rounded-full blur-3xl opacity-30"></div>
              <img 
                src={mission} 
                alt="About Us" 
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {['mission', 'team', 'process'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/30' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeTab === 'mission' && "Our Mission"}
                  {activeTab === 'team' && "Our Team"}
                  {activeTab === 'process' && "Our Process"}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activeTab === 'mission' && "We strive to transform outdoor spaces into stunning, functional, and sustainable environments that enhance our clients' quality of life."}
                  {activeTab === 'team' && "Our expert team of designers, architects, and landscapers brings years of experience and creativity to every project."}
                  {activeTab === 'process' && "We follow a collaborative approach, working closely with clients from initial concept to final implementation, ensuring every detail is perfect."}
                </p>
                <ul className="space-y-4">
                  {[1,2,3].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {activeTab === 'mission' && [
                        "Sustainable design solutions",
                        "Environmental responsibility",
                        "Client satisfaction focus"
                      ][index]}
                      {activeTab === 'team' && [
                        "Experienced professionals",
                        "Continuous training",
                        "Collaborative approach"
                      ][index]}
                      {activeTab === 'process' && [
                        "Detailed planning",
                        "Regular communication",
                        "Quality assurance"
                      ][index]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl blur-xl opacity-30"></div>
                <img 
                  src={activeTab === 'mission' ? mission : activeTab === 'team' ? team : process}
                  alt={activeTab}
                  className="relative rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project meets our high standards
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {[
              "Initial Consultation and Site Analysis",
              "Design Concept Development",
              "Detailed Planning and Material Selection",
              "Project Implementation",
              "Quality Assurance and Maintenance"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-500">
                  <span className="text-green-600 font-bold">{index + 1}</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step}</h3>
                  <p className="text-gray-600">
                    Professional approach ensuring the highest quality results for your project.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Project?
          </h2>
          <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
