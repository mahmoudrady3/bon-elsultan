import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Gift, Bell, Star, Coffee, Crown } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: 'عروض حصرية',
      description: 'احصل على خصومات تصل إلى 30% على منتجاتنا المميزة'
    },
    {
      icon: Bell,
      title: 'أحدث الأخبار',
      description: 'كن أول من يعرف عن منتجاتنا الجديدة وفروعنا القادمة'
    },
    {
      icon: Star,
      title: 'نقاط مكافآت',
      description: 'اجمع نقاط مع كل عملية شراء واستبدلها بمشروبات مجانية'
    },
    {
      icon: Crown,
      title: 'عضوية VIP',
      description: 'انضم لبرنامج العضوية المميزة واحصل على امتيازات خاصة'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-amber-950/10 to-black">
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
                انضم إلى عائلة بن السلطان
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-amber-100"
              style={{ fontFamily: 'Amiri, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              ابق على تواصل معنا
              <br />
              <span className="text-amber-400">واحصل على المزايا</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              اشترك في نشرتنا الإخبارية واحصل على عروض حصرية ونقاط مكافآت مع كل عملية شراء
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Benefits */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
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
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-700/30 rounded-3xl p-8 md:p-12">
                {!isSubscribed ? (
                  <>
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        اشترك الآن
                      </h3>
                      <p className="text-gray-300" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        وابدأ رحلتك مع بن السلطان
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-amber-200 mb-3 font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-black/50 border border-amber-700/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors duration-300 text-lg"
                          placeholder="أدخل بريدك الإلكتروني"
                          required
                          style={{ fontFamily: 'Cairo, sans-serif' }}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 rtl:space-x-reverse"
                        style={{ fontFamily: 'Cairo, sans-serif' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Coffee className="w-6 h-6" />
                        <span>انضم إلى عائلة بن السلطان</span>
                      </motion.button>
                    </form>

                    <div className="mt-8 text-center">
                      <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        بالاشتراك، أنت توافق على 
                        <span className="text-amber-400 hover:text-amber-300 cursor-pointer"> شروط الخدمة </span>
                        و
                        <span className="text-amber-400 hover:text-amber-300 cursor-pointer"> سياسة الخصوصية</span>
                      </p>
                    </div>
                  </>
                ) : (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        ✓
                      </motion.div>
                    </div>
                    <h3 className="text-3xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      مرحباً بك في العائلة!
                    </h3>
                    <p className="text-gray-300 mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      تم تسجيلك بنجاح. ستصلك أحدث العروض والأخبار قريباً
                    </p>
                    <div className="bg-amber-600/20 border border-amber-400/30 rounded-xl p-4">
                      <p className="text-amber-200 font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        🎁 مكافأة الترحيب: خصم 20% على طلبك الأول
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-amber-600/10 to-transparent rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <p className="text-gray-400 mb-8" style={{ fontFamily: 'Cairo, sans-serif' }}>
              انضم إلى أكثر من 100,000 عميل سعيد
            </p>
            <div className="flex justify-center items-center space-x-8 rtl:space-x-reverse">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
                >
                  <Star className="w-6 h-6 text-amber-400 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;