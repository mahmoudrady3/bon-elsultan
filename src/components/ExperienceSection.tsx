import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Volume2, Camera, Sparkles } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Coffee preparation process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
      
      {/* Content Overlay */}
      <div ref={ref} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="inline-block bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-8">
            <span className="text-amber-400 font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
              تجربة سينمائية
            </span>
          </div>
        </motion.div>

        <motion.h2 
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-amber-100 leading-tight"
          style={{ fontFamily: 'Amiri, serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          من الحبة
          <br />
          <span className="text-amber-400">إلى الكوب</span>
        </motion.h2>

        <motion.p 
          className="text-2xl md:text-3xl mb-12 text-amber-200 font-light"
          style={{ fontFamily: 'Cairo, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          رحلة بن السلطان السحرية
        </motion.p>
        
        {/* Play Button */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.button 
            className="group relative bg-gradient-to-r from-amber-600/30 to-amber-700/30 hover:from-amber-600/50 hover:to-amber-700/50 backdrop-blur-sm border-2 border-amber-400 hover:border-amber-300 rounded-full p-8 transition-all duration-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-16 h-16 text-amber-400 group-hover:text-amber-300 ml-2" />
            
            {/* Animated Rings */}
            <motion.div
              className="absolute inset-0 border-2 border-amber-400/50 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-amber-400/30 rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.button>
        </motion.div>

        <motion.p 
          className="text-amber-200 text-xl mb-12"
          style={{ fontFamily: 'Cairo, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          شاهد القصة الكاملة
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            { icon: Camera, label: 'تصوير سينمائي' },
            { icon: Volume2, label: 'صوت عالي الجودة' },
            { icon: Sparkles, label: 'مؤثرات بصرية' }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.label}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.7 + index * 0.2 }}
              >
                <div className="bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 p-4 rounded-2xl mb-3 group-hover:bg-amber-600/30 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-amber-400" />
                </div>
                <span className="text-amber-200 text-sm font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {feature.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>تابع الاستكشاف</span>
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-amber-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;