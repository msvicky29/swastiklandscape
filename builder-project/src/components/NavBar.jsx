import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = window.innerWidth < 768;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="fixed w-full top-0 z-50 px-4 py-3">
            <nav className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-lg">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <NavLink to="/" className="flex-shrink-0">
                                <span className="text-2xl font-semibold text-white drop-shadow-md">
                                    Swastik Landscapes
                                </span>
                            </NavLink>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-2">
                                {[
                                    ['Home', '/'],
                                    ['About Us', '/about'],
                                    ['Services', '/services'],
                                    ['Gallery', '/gallery'],
                                    ['Contact', '/contact']
                                ].map(([title, url]) => (
                                    <NavLink
                                        key={title}
                                        to={url}
                                        className={({ isActive }) => `
                                            px-4 py-2 rounded-lg text-sm font-medium
                                            transition-all duration-300
                                            ${isActive 
                                                ? 'bg-white/20 text-white shadow-md' 
                                                : 'text-white/80 hover:bg-white/10 hover:text-white'
                                            }
                                        `}
                                    >
                                        {title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isMenuOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobile && isMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="md:hidden border-t border-white/10"
                        >
                            <div className="px-4 pt-2 pb-3 space-y-1">
                                {[
                                    ['Home', '/'],
                                    ['About Us', '/about'],
                                    ['Services', '/services'],
                                    ['Gallery', '/gallery'],
                                    ['Contact', '/contact']
                                ].map(([title, url]) => (
                                    <NavLink
                                        key={title}
                                        to={url}
                                        className={({ isActive }) => `
                                            block px-4 py-2 rounded-lg text-base font-medium
                                            transition-all duration-300
                                            ${isActive 
                                                ? 'bg-white/20 text-white' 
                                                : 'text-white/80 hover:bg-white/10 hover:text-white'
                                            }
                                        `}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {title}
                                    </NavLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default NavBar;
