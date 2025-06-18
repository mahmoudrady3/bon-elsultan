import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Navigation, Star, Coffee } from 'lucide-react';

const LocationsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: 'فرع فاقوس - شارع الدروس',
      address: 'شارع الدروس، مدينة فاقوس، محافظة الشرقية',
      phone: '+20 55 123 4567',
      hours: 'يومياً: 7:00 ص - 12:00 م',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      features: ['واي فاي مجاني', 'مواقف سيارات', 'جلسات خارجية', 'تكييف مركزي'],
      city: 'فاقوس',
      country: 'مصر'
    },
    {
      id: 2,
      name: 'فرع فاقوس - المنشية',
      address: 'المنشية بجوار مجمع الشرطة، فاقوس، محافظة الشرقية',
      phone: '+20 55 234 5678',
      hours: 'يومياً: 8:00 ص - 11:00 م',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      features: ['أمان عالي', 'واي فاي مجاني', 'جلسات عائلية', 'منطقة أطفال'],
      city: 'فاقوس',
      country: 'مصر'
    },
    {
      id: 3,
      name: 'فرع ديرب نجم',
      address: 'بجوار موقف الزقازيق، ديرب نجم، محافظة الشرقية',
      phone: '+20 55 345 6789',
      hours: 'يومياً: 7:30 ص - 11:30 م',
      image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      features: ['موقع مميز', 'واي فاي مجاني', 'مواقف سيارات', 'خدمة سريعة'],
      city: 'ديرب نجم',
      country: 'مصر'
    },
    {
      id: 4,
      name: 'فرع الإسماعيلية',
      address: 'دوران رضا بجوار الاستاد، الإسماعيلية',
      phone: '+20 64 456 7890',
      hours: 'يومياً: 6:30 ص - 12:30 ص',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      features: ['إطلالة رياضية', 'واي فاي مجاني', 'مواقف واسعة', 'قاعة مناسبات'],
      city: 'الإسماعيلية',
      country: 'مصر'
    }
  ];

  return (
    <section id="locations" className="py-32 bg-gradient-to-b from-black via-amber-950/5 to-black">
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
                فروعنا
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-amber-100"
              style={{ fontFamily: 'Amiri, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              زوروا فروعنا
              <br />
              <span className="text-amber-400">في الشرقية والإسماعيلية</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              اكتشفوا أقرب فرع إليكم واستمتعوا بتجربة بن السلطان الفريدة في قلب الشرقية
            </motion.p>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Location Cards */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  className={`group cursor-pointer bg-gradient-to-br from-amber-900/20 to-black border rounded-2xl p-6 transition-all duration-300 ${
                    selectedLocation === index 
                      ? 'border-amber-400/50 bg-amber-900/30' 
                      : 'border-amber-700/30 hover:border-amber-500/40'
                  }`}
                  onClick={() => setSelectedLocation(index)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        selectedLocation === index 
                          ? 'bg-gradient-to-br from-amber-600 to-amber-700' 
                          : 'bg-amber-600/20 group-hover:bg-amber-600/30'
                      }`}>
                        <MapPin className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-amber-100" style={{ fontFamily: 'Cairo, sans-serif' }}>
                          {location.name}
                        </h3>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="text-amber-300 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                            {location.rating}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-3" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        {location.address}
                      </p>
                      
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Phone className="w-4 h-4" />
                          <span style={{ fontFamily: 'Cairo, sans-serif' }}>{location.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Clock className="w-4 h-4" />
                          <span style={{ fontFamily: 'Cairo, sans-serif' }}>{location.hours}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="bg-amber-900/30 text-amber-200 px-2 py-1 rounded-full text-xs"
                            style={{ fontFamily: 'Cairo, sans-serif' }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Selected Location Details */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="sticky top-8">
                <motion.div
                  key={selectedLocation}
                  className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-700/30 rounded-3xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <img
                      src={locations[selectedLocation].image}
                      alt={locations[selectedLocation].name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
                      {locations[selectedLocation].city}, {locations[selectedLocation].country}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {locations[selectedLocation].name}
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3 rtl:space-x-reverse">
                        <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300" style={{ fontFamily: 'Cairo, sans-serif' }}>
                          {locations[selectedLocation].address}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        <p className="text-gray-300" style={{ fontFamily: 'Cairo, sans-serif' }}>
                          {locations[selectedLocation].phone}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        <p className="text-gray-300" style={{ fontFamily: 'Cairo, sans-serif' }}>
                          {locations[selectedLocation].hours}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <motion.button
                        className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                        style={{ fontFamily: 'Cairo, sans-serif' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Navigation className="w-5 h-5" />
                        <span>الاتجاهات</span>
                      </motion.button>
                      
                      <motion.button
                        className="flex-1 bg-transparent border-2 border-amber-400 hover:bg-amber-400 hover:text-black text-amber-400 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                        style={{ fontFamily: 'Cairo, sans-serif' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Coffee className="w-5 h-5" />
                        <span>اطلب الآن</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { number: '4', label: 'فروع' },
              { number: '2', label: 'محافظات' },
              { number: '24/7', label: 'خدمة' },
              { number: '100%', label: 'رضا العملاء' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.7 + index * 0.1 }}
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

export default LocationsSection;