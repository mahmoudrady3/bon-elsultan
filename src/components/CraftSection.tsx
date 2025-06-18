import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Thermometer, Clock, Award, Leaf, Users, Globe } from 'lucide-react';

const CraftSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const craftSteps = [
    {
      icon: Globe,
      title: 'الاختيار والانتقاء',
      description: 'نختار أفضل حبوب القهوة من مزارع مختارة حول العالم',
      details: ['مزارع معتمدة عالمياً', 'فحص دقيق للجودة', 'تجارة عادلة']
    },
    {
      icon: Thermometer,
      title: 'التحميص الحرفي',
      description: 'تحميص دقيق بدرجات حرارة محسوبة للحصول على النكهة المثالية',
      details: ['تحكم دقيق بالحرارة', 'مراقبة مستمرة', 'خبرة 25 عاماً']
    },
    {
      icon: Clock,
      title: 'التوقيت المثالي',
      description: 'كل دفعة تحميص تتم في التوقيت الأمثل لضمان الطعم الأصيل',
      details: ['توقيت محسوب', 'فحص مستمر', 'جودة ثابتة']
    },
    {
      icon: Award,
      title: 'الجودة المضمونة',
      description: 'فحص نهائي وتعبئة فورية للحفاظ على النضارة والجودة',
      details: ['فحص نهائي شامل', 'تعبئة محكمة', 'ضمان الجودة']
    }
  ];

  const achievements = [
    { number: '25+', label: 'سنة خبرة', icon: Clock },
    { number: '15', label: 'جائزة دولية', icon: Award },
    { number: '100+', label: 'نوع قهوة', icon: Leaf },
    { number: '50+', label: 'خبير تحميص', icon: Users }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-amber-950/5 to-black">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-block bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-amber-400 font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
                حرفية التحميص
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-amber-100"
              style={{ fontFamily: 'Amiri, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              فن صناعة القهوة
              <br />
              <span className="text-amber-400">بأيدي خبيرة</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              رحلة دقيقة من الحبة الخام إلى كوب القهوة المثالي، بخبرة تمتد لأكثر من ربع قرن
            </motion.p>
          </motion.div>

          {/* Craft Process */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Process Steps */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {craftSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className="group flex items-start space-x-6 rtl:space-x-reverse"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-amber-100 group-hover:text-amber-50 transition-colors duration-300" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, i) => (
                          <span 
                            key={i}
                            className="bg-amber-900/30 text-amber-200 px-3 py-1 rounded-full text-sm"
                            style={{ fontFamily: 'Cairo, sans-serif' }}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="relative">
                <motion.img
                  src="https://images.pexels.com/photos/2318095/pexels-photo-2318095.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Coffee roasting process"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-3xl"></div>
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-8 -right-8 bg-gradient-to-br from-amber-900/90 to-black/90 backdrop-blur-lg border border-amber-700/50 rounded-2xl p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      180°C
                    </div>
                    <div className="text-amber-200 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      درجة التحميص المثالية
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 bg-gradient-to-br from-amber-900/90 to-black/90 backdrop-blur-lg border border-amber-700/50 rounded-2xl p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.7 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      12 دقيقة
                    </div>
                    <div className="text-amber-200 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      وقت التحميص الأمثل
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 2 + index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-amber-600/20 to-amber-700/20 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-6 group-hover:border-amber-400/50 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {achievement.number}
                    </div>
                    <div className="text-gray-300 font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;