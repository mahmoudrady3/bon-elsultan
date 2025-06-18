import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Award, Star, Coffee } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'بن السلطان',
      subtitle: 'أفخر أنواع القهوة العربية الأصيلة',
      description: 'تجربة قهوة استثنائية تجمع بين التراث العربي والحداثة العالمية'
    },
    {
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'حرفية التحميص',
      subtitle: 'محمصة بعناية فائقة',
      description: 'نحمص حبوب القهوة بأحدث التقنيات مع الحفاظ على الطرق التقليدية'
    },
    {
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'تجربة فريدة',
      subtitle: 'في كل رشفة حكاية',
      description: 'اكتشف عالماً من النكهات الأصيلة في أجواء عربية معاصرة'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      ))}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Awards Badge */}
            <motion.div
              className="flex items-center space-x-4 rtl:space-x-reverse mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-amber-400 ml-2" />
                <span className="text-amber-200 text-sm font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  أفضل قهوة عربية 2024
                </span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
                <span className="text-amber-200 text-sm mr-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  4.9/5
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
              style={{ 
                fontFamily: 'Amiri, serif',
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF8C00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl mb-6 text-amber-100 font-light"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 rtl:space-x-reverse"
                style={{ fontFamily: 'Cairo, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Coffee className="w-6 h-6" />
                <span>اطلب الآن</span>
              </motion.button>

              <motion.button
                className="group bg-transparent border-2 border-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 rtl:space-x-reverse"
                style={{ fontFamily: 'Cairo, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6" />
                <span>شاهد قصتنا</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              {[
                { number: '25+', label: 'سنة خبرة' },
                { number: '100+', label: 'نوع قهوة' },
                { number: '50+', label: 'فرع' },
                { number: '1M+', label: 'عميل سعيد' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-amber-400 w-8' : 'bg-white/30'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 text-amber-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;