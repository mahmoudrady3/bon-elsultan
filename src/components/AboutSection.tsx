import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Leaf, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const features = [
    {
      icon: Crown,
      title: 'تراث عريق',
      description: 'أكثر من 25 عاماً من الخبرة في صناعة القهوة العربية الأصيلة'
    },
    {
      icon: Leaf,
      title: 'جودة طبيعية',
      description: 'حبوب قهوة مختارة بعناية من أفضل المزارع العالمية'
    },
    {
      icon: Award,
      title: 'معايير عالمية',
      description: 'حاصلون على شهادات الجودة العالمية والمعايير البيئية'
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'خبراء تحميص وباريستا مدربون على أعلى المستويات'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black via-amber-950/5 to-black">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-block bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-amber-400 font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
                من نحن
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 text-amber-100 leading-tight"
              style={{ fontFamily: 'Amiri, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              رحلة عبر التاريخ
              <br />
              <span className="text-amber-400">والحداثة</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p>
                في <span className="text-amber-400 font-semibold">بن السلطان</span>، نؤمن بأن القهوة ليست مجرد مشروب، 
                بل هي تجربة حضارية تجمع بين عراقة التراث العربي وروعة الابتكار المعاصر.
              </p>
              
              <p>
                منذ تأسيسنا، نسعى لتقديم أفخر أنواع القهوة المحمصة بعناية فائقة، 
                مع الحفاظ على الطقوس العربية الأصيلة في تحضير وتقديم القهوة.
              </p>
              
              <p className="text-amber-200 italic font-medium text-xl">
                "في كل كوب قصة... وفي كل رشفة ذكرى"
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-4 rounded-2xl mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <motion.img
                src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Coffee roastery interior"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-3xl"></div>
              
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-amber-900/90 to-black/90 backdrop-blur-lg border border-amber-700/50 rounded-2xl p-6 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-amber-100 font-bold" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      جودة مضمونة
                    </h4>
                    <p className="text-amber-300 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      ISO 9001:2015
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  معتمدون من أفضل المؤسسات العالمية لضمان الجودة والتميز
                </p>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;