import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Coffee,
  Crown,
  Award,
  Leaf
} from 'lucide-react';

const Footer: React.FC = () => {
  const current_year = new Date().getFullYear();

  const footerSections = [
    {
      title: 'روابط سريعة',
      links: [
        { name: 'الرئيسية', href: '#home' },
        { name: 'من نحن', href: '#about' },
        { name: 'المشروبات', href: '#drinks' },
        { name: 'فروعنا', href: '#locations' },
        { name: 'تواصل معنا', href: '#contact' }
      ]
    },
    {
      title: 'منتجاتنا',
      links: [
        { name: 'القهوة العربية', href: '#' },
        { name: 'الإسبريسو', href: '#' },
        { name: 'المشروبات الباردة', href: '#' },
        { name: 'الشاي والمشروبات', href: '#' },
        { name: 'الحلويات', href: '#' }
      ]
    },
    {
      title: 'خدماتنا',
      links: [
        { name: 'التوصيل المنزلي', href: '#' },
        { name: 'الطلبات المسبقة', href: '#' },
        { name: 'المناسبات الخاصة', href: '#' },
        { name: 'برنامج الولاء', href: '#' },
        { name: 'خدمة العملاء', href: '#' }
      ]
    },
    {
      title: 'معلومات قانونية',
      links: [
        { name: 'سياسة الخصوصية', href: '#' },
        { name: 'شروط الخدمة', href: '#' },
        { name: 'سياسة الإرجاع', href: '#' },
        { name: 'سياسة ملفات تعريف الارتباط', href: '#' },
        { name: 'الأسئلة الشائعة', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'from-pink-600 to-purple-600' },
    { icon: Facebook, href: '#', color: 'from-blue-600 to-blue-700' },
    { icon: Twitter, href: '#', color: 'from-sky-500 to-blue-600' },
    { icon: Youtube, href: '#', color: 'from-red-600 to-red-700' }
  ];

  const achievements = [
    { icon: Award, text: 'أفضل قهوة في الشرقية 2024' },
    { icon: Crown, text: 'علامة تجارية محلية مميزة' },
    { icon: Leaf, text: 'منتجات طبيعية 100%' },
    { icon: Coffee, text: 'خبرة محلية 15+ سنة' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-amber-950/20 border-t border-amber-700/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-2xl" style={{ fontFamily: 'Amiri, serif' }}>ب</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-amber-400" style={{ fontFamily: 'Amiri, serif' }}>
                    بن السلطان
                  </h3>
                  <p className="text-amber-200 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    من قلب الشرقية
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>
                أفخر أنواع القهوة والمشروبات في محافظة الشرقية، تجربة أصيلة تجمع بين التراث المصري والجودة العالية.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span style={{ fontFamily: 'Cairo, sans-serif' }}>+20 55 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span style={{ fontFamily: 'Cairo, sans-serif' }}>info@beansultan-sharqia.com</span>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse text-gray-300">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <span style={{ fontFamily: 'Cairo, sans-serif' }}>
                    شارع الجمهورية، الزقازيق<br />
                    محافظة الشرقية، مصر
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-amber-100 mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 block"
                      style={{ fontFamily: 'Cairo, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          className="mt-16 pt-8 border-t border-amber-700/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-amber-100 mb-6 text-center" style={{ fontFamily: 'Cairo, sans-serif' }}>
            إنجازاتنا وشهاداتنا
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.text}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-amber-600/20 p-4 rounded-2xl mb-3 group-hover:bg-amber-600/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-amber-400" />
                  </div>
                  <span className="text-gray-300 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {achievement.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-amber-100 mb-6" style={{ fontFamily: 'Cairo, sans-serif' }}>
            تابعونا على وسائل التواصل
          </h4>
          <div className="flex justify-center space-x-6 rtl:space-x-reverse">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`bg-gradient-to-r ${social.color} p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-center md:text-right"
              style={{ fontFamily: 'Cairo, sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © {current_year} بن السلطان - الشرقية. جميع الحقوق محفوظة. صُنع بحب وشغف ☕
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-6 rtl:space-x-reverse"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 text-sm font-medium" style={{ fontFamily: 'Cairo, sans-serif' }}>
                فخر الشرقية المصرية
              </span>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  مدعوم بالقهوة المصرية
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;