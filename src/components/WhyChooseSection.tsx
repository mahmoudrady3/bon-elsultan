import React, { useEffect, useRef, useState } from 'react';
import { Coffee, Leaf, Thermometer, Camera } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Locally Roasted Daily',
    description: 'Fresh beans roasted in small batches every morning for optimal flavor and aroma.'
  },
  {
    icon: Leaf,
    title: '100% Natural & Hand-Selected Beans',
    description: 'Carefully sourced from sustainable farms, each bean is hand-picked for quality.'
  },
  {
    icon: Thermometer,
    title: 'Hot & Cold Drinks with a Twist',
    description: 'Innovative brewing techniques that transform traditional recipes into art.'
  },
  {
    icon: Camera,
    title: 'Cinematic Coffee Experience',
    description: 'Every cup is crafted with theatrical precision and visual storytelling.'
  }
];

const WhyChooseSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observer for individual items
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach(ref => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      observer.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-amber-950/10">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-100"
              style={{ fontFamily: '"Playfair Display", serif' }}>
            Why Choose Roastera?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the difference in every carefully crafted cup
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                ref={el => itemRefs.current[index] = el}
                className={`text-center group transition-all duration-700 ${
                  visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-6 rounded-full 
                    group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:blur-2xl 
                    transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-amber-100 group-hover:text-amber-50 
                  transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 
                  transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;