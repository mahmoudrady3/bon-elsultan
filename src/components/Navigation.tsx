import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, Globe, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية', href: '#home' },
    { id: 'about', label: 'من نحن', href: '#about' },
    { id: 'products', label: 'أكياس البن', href: '#products' },
    { id: 'drinks', label: 'المشروبات', href: '#drinks' },
    { id: 'locations', label: 'فروعنا', href: '#locations' },
    { id: 'contact', label: 'تواصل معنا', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-lg border-b border-amber-700/30' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-4 rtl:space-x-reverse"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl" style={{ fontFamily: 'Amiri, serif' }}>ب</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-400" style={{ fontFamily: 'Amiri, serif' }}>
                  بن السلطان
                </h1>
                <p className="text-xs text-amber-200" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  من قلب الشرقية
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-amber-400' 
                      : 'text-white hover:text-amber-300'
                  }`}
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
              <motion.button
                className="p-2 text-white hover:text-amber-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="p-2 text-white hover:text-amber-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="p-2 text-white hover:text-amber-400 transition-colors duration-300 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-black text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                style={{ fontFamily: 'Cairo, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب الآن
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
            <motion.div
              className="absolute top-20 left-0 right-0 bg-gradient-to-b from-black to-amber-950/20 border-b border-amber-700/30"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-8">
                <div className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      className="block text-lg font-medium text-white hover:text-amber-400 transition-colors duration-300"
                      style={{ fontFamily: 'Cairo, sans-serif' }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsOpen(false);
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <div className="pt-6 border-t border-amber-700/30">
                    <motion.button
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300"
                      style={{ fontFamily: 'Cairo, sans-serif' }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      اطلب الآن
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;