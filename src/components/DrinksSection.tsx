import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Snowflake, Heart, Sun, Star, ShoppingCart, Plus, Minus, Clock } from 'lucide-react';

const DrinksSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState('hot');
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'hot', label: 'المشروبات الساخنة', icon: Coffee },
    { id: 'cold', label: 'المشروبات الباردة', icon: Snowflake },
    { id: 'specialty', label: 'التخصصات المميزة', icon: Heart },
    { id: 'traditional', label: 'المشروبات التقليدية', icon: Sun }
  ];

  const drinks = {
    hot: [
      {
        id: 1,
        name: 'قهوة عربية سلطانية',
        description: 'مزيج فاخر من أجود أنواع البن العربي مع الهيل والزعفران الأصلي',
        price: '15 جنيه',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9,
        bestseller: true,
        prepTime: '5 دقائق',
        sizes: ['صغير', 'متوسط', 'كبير'],
        prices: ['12 جنيه', '15 جنيه', '18 جنيه']
      },
      {
        id: 2,
        name: 'إسبريسو السلطان',
        description: 'إسبريسو مركز بنكهة غنية وقوام مخملي من أفضل حبوب الأرابيكا',
        price: '12 جنيه',
        image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8,
        prepTime: '3 دقائق',
        sizes: ['مفرد', 'مزدوج'],
        prices: ['12 جنيه', '18 جنيه']
      },
      {
        id: 3,
        name: 'كابتشينو بالحليب المبخر',
        description: 'كابتشينو كريمي مع رغوة حليب مثالية ولمسة من القرفة',
        price: '18 جنيه',
        image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7,
        prepTime: '4 دقائق',
        sizes: ['متوسط', 'كبير'],
        prices: ['18 جنيه', '22 جنيه']
      },
      {
        id: 4,
        name: 'لاتيه بالفانيليا',
        description: 'مزيج رائع من الإسبريسو والحليب المبخر مع نكهة الفانيليا الطبيعية',
        price: '20 جنيه',
        image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.6,
        prepTime: '4 دقائق',
        sizes: ['متوسط', 'كبير'],
        prices: ['20 جنيه', '25 جنيه']
      },
      {
        id: 5,
        name: 'موكا بالشوكولاتة',
        description: 'مزيج فاخر من الإسبريسو والشوكولاتة الساخنة مع الكريمة المخفوقة',
        price: '25 جنيه',
        image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8,
        prepTime: '5 دقائق',
        sizes: ['متوسط', 'كبير'],
        prices: ['25 جنيه', '30 جنيه']
      },
      {
        id: 6,
        name: 'قهوة تركية أصيلة',
        description: 'قهوة تركية محضرة على الطريقة التقليدية مع الهيل',
        price: '14 جنيه',
        image: 'https://images.pexels.com/photos/2318095/pexels-photo-2318095.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.5,
        traditional: true,
        prepTime: '8 دقائق',
        sizes: ['فنجان واحد'],
        prices: ['14 جنيه']
      }
    ],
    cold: [
      {
        id: 7,
        name: 'فرابيه السلطان المثلج',
        description: 'مشروب مثلج منعش بنكهة القهوة الغنية مع الكريمة المخفوقة',
        price: '22 جنيه',
        image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9,
        bestseller: true,
        prepTime: '3 دقائق',
        sizes: ['متوسط', 'كبير', 'عائلي'],
        prices: ['22 جنيه', '28 جنيه', '35 جنيه']
      },
      {
        id: 8,
        name: 'كولد برو بالتمر',
        description: 'قهوة باردة مخمرة ببطء مع شراب التمر الطبيعي المصري',
        price: '25 جنيه',
        image: 'https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8,
        prepTime: '2 دقيقة',
        sizes: ['متوسط', 'كبير'],
        prices: ['25 جنيه', '30 جنيه']
      },
      {
        id: 9,
        name: 'آيس لاتيه بالكراميل',
        description: 'لاتيه مثلج مع شراب الكراميل الذهبي وكريمة مخفوقة',
        price: '24 جنيه',
        image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7,
        prepTime: '3 دقائق',
        sizes: ['متوسط', 'كبير', 'عائلي'],
        prices: ['24 جنيه', '29 جنيه', '36 جنيه']
      },
      {
        id: 10,
        name: 'فرابتشينو بالشوكولاتة',
        description: 'مشروب مثلج بالشوكولاتة والقهوة مع الكريمة والثلج المجروش',
        price: '26 جنيه',
        image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.6,
        prepTime: '4 دقائق',
        sizes: ['متوسط', 'كبير'],
        prices: ['26 جنيه', '32 جنيه']
      },
      {
        id: 11,
        name: 'عصير قهوة بارد',
        description: 'قهوة باردة منعشة مع الحليب والثلج، مثالية للصيف',
        price: '20 جنيه',
        image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.4,
        prepTime: '2 دقيقة',
        sizes: ['متوسط', 'كبير'],
        prices: ['20 جنيه', '25 جنيه']
      }
    ],
    specialty: [
      {
        id: 12,
        name: 'قهوة الأمراء الذهبية',
        description: 'تجربة ملكية فريدة مع أندر أنواع البن في العالم مع الذهب الصالح للأكل',
        price: '150 جنيه',
        image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 5.0,
        premium: true,
        prepTime: '10 دقائق',
        sizes: ['حجم واحد فقط'],
        prices: ['150 جنيه']
      },
      {
        id: 13,
        name: 'موكا بالشوكولاتة البلجيكية',
        description: 'مزيج فاخر من الإسبريسو والشوكولاتة البلجيكية الأصلية',
        price: '35 جنيه',
        image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8,
        prepTime: '6 دقائق',
        sizes: ['متوسط', 'كبير'],
        prices: ['35 جنيه', '42 جنيه']
      },
      {
        id: 14,
        name: 'قهوة بالزعفران والورد',
        description: 'مزيج شرقي فاخر من القهوة العربية مع الزعفران وماء الورد',
        price: '45 جنيه',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9,
        prepTime: '7 دقائق',
        sizes: ['متوسط', 'كبير'],
        prices: ['45 جنيه', '55 جنيه']
      }
    ],
    traditional: [
      {
        id: 15,
        name: 'قهوة بلدي شرقاوية',
        description: 'قهوة تقليدية على الطريقة الشرقاوية الأصيلة مع الهيل والمستكة',
        price: '10 جنيه',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9,
        traditional: true,
        prepTime: '6 دقائق',
        sizes: ['فنجان صغير', 'فنجان كبير'],
        prices: ['10 جنيه', '15 جنيه']
      },
      {
        id: 16,
        name: 'شاي كشري بالنعناع',
        description: 'شاي أحمر ثقيل مع النعناع الطازج على الطريقة المصرية الأصيلة',
        price: '8 جنيه',
        image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.6,
        prepTime: '4 دقائق',
        sizes: ['استكان', 'كوب كبير'],
        prices: ['8 جنيه', '12 جنيه']
      },
      {
        id: 17,
        name: 'شاي بالحليب والسكر',
        description: 'شاي أحمر مع الحليب المغلي والسكر على الطريقة المصرية',
        price: '9 جنيه',
        image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.5,
        prepTime: '5 دقائق',
        sizes: ['استكان', 'كوب كبير'],
        prices: ['9 جنيه', '13 جنيه']
      },
      {
        id: 18,
        name: 'سحلب بالمكسرات',
        description: 'مشروب شتوي دافئ بالسحلب والحليب مع المكسرات والقرفة',
        price: '16 جنيه',
        image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7,
        prepTime: '6 دقائق',
        sizes: ['متوسط', 'كبير'],
        prices: ['16 جنيه', '20 جنيه']
      }
    ]
  };

  const updateQuantity = (drinkId, change) => {
    setQuantities(prev => ({
      ...prev,
      [drinkId]: Math.max(0, (prev[drinkId] || 0) + change)
    }));
  };

  const addToCart = (drink) => {
    const quantity = quantities[drink.id] || 1;
    setCart(prev => [...prev, { ...drink, quantity }]);
    console.log(`تم إضافة ${quantity} من ${drink.name} إلى السلة`);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <section id="drinks" className="py-32 bg-gradient-to-b from-black via-amber-950/10 to-black">
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
                قائمة المشروبات
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-amber-100"
              style={{ fontFamily: 'Amiri, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              مشروبات بن السلطان
              <br />
              <span className="text-amber-400">من قلب الشرقية</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              تشكيلة واسعة ومميزة من أفخر المشروبات الساخنة والباردة، محضرة بحب وعناية من أجود أنواع البن
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  className={`relative flex items-center space-x-3 rtl:space-x-reverse px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white'
                      : 'bg-amber-900/20 text-amber-200 hover:bg-amber-800/30'
                  }`}
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Drinks Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {drinks[activeCategory]?.map((drink, index) => (
                <motion.div
                  key={drink.id}
                  className="group bg-gradient-to-br from-amber-900/20 to-black border border-amber-700/30 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                      {drink.bestseller && (
                        <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-2 py-1 rounded-full text-xs font-bold">
                          الأكثر طلباً
                        </span>
                      )}
                      {drink.premium && (
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          فاخر
                        </span>
                      )}
                      {drink.traditional && (
                        <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          تقليدي
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-amber-400 px-2 py-1 rounded-full text-sm font-bold">
                      {drink.price}
                    </div>

                    {/* Prep Time */}
                    <div className="absolute bottom-3 left-3 bg-amber-600/80 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1 rtl:space-x-reverse">
                      <Clock className="w-3 h-3" />
                      <span>{drink.prepTime}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {/* Rating */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < Math.floor(drink.rating) 
                                ? 'text-amber-400 fill-current' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-amber-300 text-xs" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        {drink.rating}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-amber-100 mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {drink.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-3 text-xs leading-relaxed" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {drink.description}
                    </p>

                    {/* Sizes and Prices */}
                    <div className="mb-3">
                      <h4 className="text-amber-200 text-xs font-semibold mb-1" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        الأحجام والأسعار:
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {drink.sizes.map((size, i) => (
                          <div key={i} className="bg-amber-900/30 text-center p-1 rounded text-xs">
                            <div className="text-amber-200 font-bold">{size}</div>
                            <div className="text-amber-400">{drink.prices[i]}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-amber-200 text-xs font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>
                        الكمية:
                      </span>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <button
                          onClick={() => updateQuantity(drink.id, -1)}
                          className="bg-amber-600/20 hover:bg-amber-600/40 text-amber-400 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-amber-100 font-bold min-w-[1.5rem] text-center text-sm">
                          {quantities[drink.id] || 1}
                        </span>
                        <button
                          onClick={() => updateQuantity(drink.id, 1)}
                          className="bg-amber-600/20 hover:bg-amber-600/40 text-amber-400 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(drink)}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span style={{ fontFamily: 'Cairo, sans-serif' }}>أضف للطلب</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Cart Summary */}
          {getTotalItems() > 0 && (
            <motion.div
              className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-full shadow-2xl z-50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <ShoppingCart className="w-6 h-6" />
                <span className="font-bold">{getTotalItems()}</span>
                <span className="text-sm">عنصر في السلة</span>
              </div>
            </motion.div>
          )}

          {/* Order Summary */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-700/30 rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
                اطلب الآن
              </h3>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>
                التوصيل متاح في جميع أنحاء محافظة الشرقية
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>رسوم التوصيل:</span>
                  <span className="text-amber-400">10 جنيه</span>
                </div>
                <div className="flex justify-between">
                  <span>الحد الأدنى للطلب:</span>
                  <span className="text-amber-400">30 جنيه</span>
                </div>
                <div className="flex justify-between">
                  <span>وقت التحضير:</span>
                  <span className="text-amber-400">15-20 دقيقة</span>
                </div>
                <div className="flex justify-between">
                  <span>ساعات العمل:</span>
                  <span className="text-amber-400">7 ص - 12 م</span>
                </div>
              </div>
              <motion.button
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                style={{ fontFamily: 'Cairo, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                اتصل للطلب: 01234567890
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;