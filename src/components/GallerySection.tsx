import React, { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Latte art masterpiece',
    category: 'Latte Art'
  },
  {
    src: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Coffee roasting process',
    category: 'Roasting'
  },
  {
    src: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Happy customer enjoying coffee',
    category: 'Customers'
  },
  {
    src: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Roastery interior',
    category: 'Interior'
  },
  {
    src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Perfect espresso shot',
    category: 'Espresso'
  },
  {
    src: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Iced coffee creation',
    category: 'Cold Brew'
  },
  {
    src: 'https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Coffee beans close-up',
    category: 'Beans'
  },
  {
    src: 'https://images.pexels.com/photos/2318095/pexels-photo-2318095.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Barista at work',
    category: 'Barista'
  }
];

const GallerySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-amber-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-100"
              style={{ fontFamily: '"Playfair Display", serif' }}>
            Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Moments captured at Roastera - where every frame tells our story
          </p>
          <div className="flex items-center justify-center text-amber-400">
            <Instagram className="w-6 h-6 mr-2" />
            <span className="text-lg">Follow us @roastera.coffee</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg aspect-square 
                hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-amber-400 rounded-lg opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 
            hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all 
            duration-300 hover:scale-105 hover:shadow-xl">
            View More on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;