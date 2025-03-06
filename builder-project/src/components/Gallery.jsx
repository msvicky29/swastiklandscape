import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import image1 from '../assets/house.jpg'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.jpeg'
import image7 from '../assets/image7.jpeg'
import image8 from '../assets/image8.jpeg'

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const images = [
        { id: 1, src: image1, alt: 'Sustainable House' },
        { id: 2, src: image2, alt: 'Eco-friendly Design' },
        { id: 3, src: image3, alt: 'Green Building' },
        { id: 4, src: image4, alt: 'Energy Efficient Home' },
        { id: 5, src: image5, alt: 'Solar Powered House' },
        { id: 6, src: image6, alt: 'Modern Eco Home' },
        { id: 7, src: image7, alt: 'Sustainable Architecture' },
        { id: 8, src: image8, alt: 'Green Roof Design' },
        { id: 9, src: image1, alt: 'Eco-friendly Interior' },
        { id: 10, src: image1, alt: 'Sustainable House' },
        { id: 11, src: image3, alt: 'Green Building' },
        { id: 12, src: image5, alt: 'Solar Powered House' },
        { id: 13, src: image7, alt: 'Sustainable Architecture' },
        { id: 14, src: image2, alt: 'Eco-friendly Design' },
        { id: 15, src: image4, alt: 'Energy Efficient Home' },
        { id: 16, src: image6, alt: 'Modern Eco Home' },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className='bg-neutral-900 backdrop-blur-sm'>

        <div className="container mx-auto px-4 py-8 ">
            <motion.h1 
                className="text-3xl text-white  font-bold text-center mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Our Gallery
            </motion.h1>
            <motion.p 
                className="text-center text-white mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Explore our collection of sustainable building projects
            </motion.p>
            
            <motion.div 
                ref={ref}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {images.map((image) => (
                    <motion.div
                        key={image.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            onClick={() => openModal(image)}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    >
                        <motion.img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            className="max-w-full max-h-full object-contain"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        </div>
    );
};

export default Gallery;
