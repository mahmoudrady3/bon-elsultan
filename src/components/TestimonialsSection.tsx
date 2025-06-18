import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد السعيد',
      title: 'رجل أعمال',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'بن السلطان ليس مجرد قهوة، إنه تجربة حقيقية تأخذك في رحلة عبر النكهات الأصيلة. كل كوب يحكي قصة من التراث والجودة.',
      location: 'الرياض، السعودية'
    },
    {
      id: 2,
      name: 'فاطمة العلي',
      title: 'مهندسة معمارية',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'أجواء المقهى رائعة والقهوة العربية بالهيل لا تُضاهى. أصبح مكاني المفضل للاجتماعات المهمة والاستمتاع بوقت هادئ.',
      location: 'دبي، الإمارات'
    },
    {
      id: 3,
      name: 'خالد بن عبدالله',
      title: 'طبيب',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'جودة استثنائية وخدمة راقية. الإسبريسو هنا يذكرني بأفضل المقاهي الأوروبية، لكن بلمسة عربية أصيلة مميزة.',
      location: 'الكويت، الكويت'
    },
    {
      id: 4,
      name: 'مريم الزهراني',
      title: 'مصممة جرافيك',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'المكان يلهمني في عملي، والقهوة المثلجة بالتمر إبداع حقيقي. فريق العمل محترف ومتفهم لاحتياجات العملاء.',
      location: 'جدة، السعودية'
    },
    {
      id: 5,
      name: 'عمر التميمي',
      title: 'كاتب ومؤلف',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'هنا أكتب أفضل أعمالي. الهدوء والأجواء الدافئة مع رائحة القهوة المحمصة طازجاً تخلق بيئة إبداعية مثالية.',
      location: 'الدوحة، قطر'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
                آراء عملائنا
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-amber-100"
              style={{ fontFamily: 'Amiri, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              قصص نجاح
              <br />
              <span className="text-amber-400">وتجارب مميزة</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              اكتشف ما يقوله عملاؤنا الكرام عن تجربتهم مع بن السلطان
            </motion.p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-700/30 rounded-3xl p-8 md:p-12 text-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Quote className="w-16 h-16 text-amber-400 mx-auto opacity-50" />
                </motion.div>

                {/* Rating */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current mx-1" />
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                {/* Customer Info */}
                <motion.div
                  className="flex items-center justify-center space-x-4 rtl:space-x-reverse"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div className="text-right rtl:text-left">
                    <h4 className="text-amber-100 font-bold text-lg" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-amber-300 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4 rtl:space-x-reverse">
              <motion.button
                className="bg-amber-600/20 hover:bg-amber-600/40 border border-amber-400/30 hover:border-amber-400/50 p-3 rounded-full transition-all duration-300"
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-amber-400" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex space-x-2 rtl:space-x-reverse mx-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-amber-400 w-8' 
                        : 'bg-amber-400/30 hover:bg-amber-400/50'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <motion.button
                className="bg-amber-600/20 hover:bg-amber-600/40 border border-amber-400/30 hover:border-amber-400/50 p-3 rounded-full transition-all duration-300"
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-amber-400" />
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { number: '98%', label: 'رضا العملاء' },
              { number: '1M+', label: 'عميل سعيد' },
              { number: '4.9/5', label: 'تقييم العملاء' },
              { number: '24/7', label: 'خدمة العملاء' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;