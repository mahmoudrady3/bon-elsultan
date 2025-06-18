import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Package, Star, ShoppingCart, Plus, Minus, Weight } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantities, setQuantities] = useState({});

  const coffeeProducts = [
    {
      id: 1,
      name: 'بن السلطان الذهبي',
      description: 'مزيج فاخر من أجود أنواع البن العربي المحمص بعناية فائقة',
      price: '180 جنيه/كيلو',
      image: 'https://images.pexels.com/photos/2318095/pexels-photo-2318095.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      bestseller: true,
      roastLevel: 'تحميص متوسط',
      origin: 'يمني - إثيوبي',
      weights: ['250 جرام', '500 جرام', '1 كيلو'],
      prices: ['50 جنيه', '95 جنيه', '180 جنيه'],
      features: ['100% أرابيكا', 'محمص طازج', 'معبأ بعناية']
    },
    {
      id: 2,
      name: 'بن السلطان الملكي',
      description: 'خليط ملكي من أندر أنواع البن العالمي للذواقة الحقيقيين',
      price: '350 جنيه/كيلو',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      premium: true,
      roastLevel: 'تحميص غامق',
      origin: 'جامايكا الأزرق - كونا هاواي',
      weights: ['250 جرام', '500 جرام', '1 كيلو'],
      prices: ['95 جنيه', '180 جنيه', '350 جنيه'],
      features: ['بن نادر', 'جودة استثنائية', 'تحميص حرفي']
    },
    {
      id: 3,
      name: 'بن السلطان التقليدي',
      description: 'بن محمص على الطريقة التقليدية الشرقاوية الأصيلة',
      price: '120 جنيه/كيلو',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      traditional: true,
      roastLevel: 'تحميص خفيف',
      origin: 'مصري - سوداني',
      weights: ['250 جرام', '500 جرام', '1 كيلو'],
      prices: ['35 جنيه', '65 جنيه', '120 جنيه'],
      features: ['طريقة تقليدية', 'نكهة أصيلة', 'سعر مناسب']
    },
    {
      id: 4,
      name: 'بن السلطان بالهيل',
      description: 'مزيج مميز من البن العربي الفاخر مع الهيل الأخضر الطبيعي',
      price: '200 جنيه/كيلو',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      roastLevel: 'تحميص متوسط',
      origin: 'يمني مع هيل أخضر',
      weights: ['250 جرام', '500 جرام', '1 كيلو'],
      prices: ['55 جنيه', '105 جنيه', '200 جنيه'],
      features: ['مع هيل طبيعي', 'نكهة مميزة', 'رائحة عطرة']
    },
    {
      id: 5,
      name: 'بن السلطان الفرنسي',
      description: 'تحميص فرنسي غامق للحصول على نكهة قوية ومركزة',
      price: '160 جنيه/كيلو',
      image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      roastLevel: 'تحميص فرنسي غامق',
      origin: 'برازيلي - كولومبي',
      weights: ['250 جرام', '500 جرام', '1 كيلو'],
      prices: ['45 جنيه', '85 جنيه', '160 جنيه'],
      features: ['تحميص غامق', 'نكهة قوية', 'مثالي للإسبريسو']
    },
    {
      id: 6,
      name: 'بن السلطان التركي',
      description: 'بن مطحون ناعم على الطريقة التركية الأصيلة',
      price: '140 جنيه/كيلو',
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      roastLevel: 'تحميص متوسط',
      origin: 'تركي أصلي',
      weights: ['250 جرام', '500 جرام', '1 كيلو'],
      prices: ['40 جنيه', '75 جنيه', '140 جنيه'],
      features: ['طحن ناعم', 'طريقة تركية', 'نكهة كلاسيكية']
    }
  ];

  const updateQuantity = (productId, change) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    console.log(`تم إضافة ${quantity} كيس من ${product.name} إلى السلة`);
    // هنا يتم إضافة المنتج للسلة
  };

  return (
    <section id="products" className="py-32 bg-gradient-to-b from-black via-amber-950/10 to-black">
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
                أكياس البن الفاخرة
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-amber-100"
              style={{ fontFamily: 'Amiri, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              أكياس بن السلطان
              <br />
              <span className="text-amber-400">للبيت والمكتب</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              تشكيلة مختارة من أجود أنواع البن المحمص طازجاً، معبأة بعناية للحفاظ على النكهة والجودة
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {coffeeProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group bg-gradient-to-br from-amber-900/20 to-black border border-amber-700/30 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.bestseller && (
                      <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                        الأكثر مبيعاً
                      </span>
                    )}
                    {product.premium && (
                      <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        فاخر
                      </span>
                    )}
                    {product.traditional && (
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        تقليدي
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full text-sm font-bold">
                    {product.price}
                  </div>

                  {/* Package Icon */}
                  <div className="absolute bottom-4 right-4 bg-amber-600/80 p-2 rounded-full">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-amber-400 fill-current' 
                              : 'text-gray-600'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-amber-300 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-amber-100 mb-3" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {product.description}
                  </p>

                  {/* Product Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200">درجة التحميص:</span>
                      <span className="text-gray-300">{product.roastLevel}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200">المنشأ:</span>
                      <span className="text-gray-300">{product.origin}</span>
                    </div>
                  </div>

                  {/* Weight Options */}
                  <div className="mb-4">
                    <h4 className="text-amber-200 text-sm font-semibold mb-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      الأوزان والأسعار:
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {product.weights.map((weight, i) => (
                        <div key={i} className="bg-amber-900/30 text-center p-2 rounded-lg">
                          <div className="text-amber-200 text-xs font-bold">{weight}</div>
                          <div className="text-amber-400 text-xs">{product.prices[i]}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
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

                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-200 text-sm font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      الكمية:
                    </span>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="bg-amber-600/20 hover:bg-amber-600/40 text-amber-400 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-amber-100 font-bold min-w-[2rem] text-center">
                        {quantities[product.id] || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="bg-amber-600/20 hover:bg-amber-600/40 text-amber-400 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span style={{ fontFamily: 'Cairo, sans-serif' }}>أضف للسلة</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Order Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-700/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-amber-100 mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>
                معلومات الطلب والتوصيل
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-amber-200">التوصيل داخل الشرقية:</span>
                    <span className="text-amber-400">15 جنيه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-200">التوصيل خارج الشرقية:</span>
                    <span className="text-amber-400">25 جنيه</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-200">الحد الأدنى للطلب:</span>
                    <span className="text-amber-400">100 جنيه</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-amber-200">ضمان النضارة:</span>
                    <span className="text-amber-400">30 يوم</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-200">التحميص:</span>
                    <span className="text-amber-400">طازج يومياً</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-200">التعبئة:</span>
                    <span className="text-amber-400">محكمة الإغلاق</span>
                  </div>
                </div>
              </div>
              <motion.button
                className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                style={{ fontFamily: 'Cairo, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                اطلب أكياس البن الآن: 01234567890
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;