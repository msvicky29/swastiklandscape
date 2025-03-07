// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
// import Img1 from '../assets/img1.jpg';
// import Img2 from '../assets/img2.jpg';
// import Img3 from '../assets/img3.jpg';
// import Img4 from '../assets/img4.jpg';
// import Img5 from '../assets/img5.jpg';
// import '../styles/hero.css';

// const Home = () => {
//   const [isHovered, setIsHovered] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const slides = [
//     { 
//       image: Img1, 
//       title: "Welcome to Green Building",
//       subtitle: "Building Dreams, Preserving Nature",
//       cta: "Explore Our Projects",
//       stats: [
//         { number: "50+", label: "Projects" },
//         { number: "30K+", label: "Trees Saved" },
//         { number: "100%", label: "Sustainable" }
//       ],
//       color: "#10B981"
//     },
//     // ... add color property to other slides similarly
//   ];

//   return (
//     <div className="hero-container relative w-full h-screen overflow-hidden">
//       {/* Dynamic Background */}
//       <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black transition-colors duration-700"
//            style={{ backgroundColor: slides[activeIndex]?.color }}>
//         <div className="absolute inset-0 opacity-20">
//           <div className="particles-container">
//             {[...Array(20)].map((_, i) => (
//               <div key={i} className="particle" />
//             ))}
//           </div>
//         </div>
//       </div>

//       {slides.length > 0 ? (
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay, EffectFade]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           effect="fade"
//           loop={true}
//           className="w-full h-full"
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index} className="relative">
//               {/* Geometric Patterns */}
//               <div className="absolute inset-0">
//                 <div className="geometric-pattern"></div>
//               </div>

//               {/* Main Image with Parallax Effect */}
//               <div className="relative h-full overflow-hidden">
//                 <img 
//                   src={slide.image} 
//                   alt={`Slide ${index + 1}`} 
//                   className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
//                   style={{
//                     transform: `scale(1.1) translateY(${activeIndex === index ? '-2%' : '0'})`
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
//               </div>

//               {/* Content Section */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//                 <div className="container mx-auto px-4">
//                   {/* Animated Line */}
//                   <div className="animated-line mb-8"></div>

//                   {/* Main Content */}
//                   <div className="max-w-5xl mx-auto text-center space-y-8">
//                     <div className="space-y-6">
//                       {/* Title with Split Effect */}
//                       <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wider split-text-animation">
//                         {slide.title.split('').map((char, i) => (
//                           <span key={i} className="inline-block hover:text-green-400 transition-colors duration-300">
//                             {char}
//                           </span>
//                         ))}
//                       </h1>

//                       {/* Animated Subtitle */}
//                       <p className="text-gray-200 text-xl md:text-2xl font-light animate-subtitle relative overflow-hidden">
//                         <span className="block transform hover:scale-105 transition-transform duration-300">
//                           {slide.subtitle}
//                         </span>
//                       </p>
//                     </div>

//                     {/* Stats with Hover Effect */}
//                     <div className="grid grid-cols-3 gap-8 my-12">
//                       {slide.stats?.map((stat, i) => (
//                         <div 
//                           key={i}
//                           className="stat-card group"
//                           style={{ animationDelay: `${i * 0.2}s` }}
//                         >
//                           <div className="transform group-hover:scale-110 transition-all duration-300">
//                             <div className="text-green-400 text-4xl md:text-5xl font-bold mb-2">
//                               {stat.number}
//                             </div>
//                             <div className="text-gray-300 text-sm uppercase tracking-wider">
//                               {stat.label}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Enhanced CTA Button */}
//                     <div className="flex justify-center gap-4">
//                       <button 
//                         className="cta-button group"
//                         onMouseEnter={() => setIsHovered(index)}
//                         onMouseLeave={() => setIsHovered(null)}
//                       >
//                         <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//                           {slide.cta}
//                         </span>
//                         <div className={`button-background ${isHovered === index ? 'active' : ''}`}></div>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Bottom Decorative Elements */}
//                   <div className="absolute bottom-12 left-0 right-0">
//                     <div className="flex justify-center items-center gap-4">
//                       <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
//                       <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
//                       <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p className="text-center text-xl p-4">No slides available</p>
//       )}
//     </div>
//   );
// };

// export default Home;


import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home