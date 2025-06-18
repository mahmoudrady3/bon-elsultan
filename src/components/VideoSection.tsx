import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Coffee preparation process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content Overlay */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-amber-100"
            style={{ fontFamily: '"Playfair Display", serif' }}>
          From Bean to Cup
        </h2>
        <p className="text-2xl md:text-3xl mb-8 text-amber-200"
           style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          The Roastera Ritual
        </p>
        
        {/* Play Button */}
        <button className="group relative bg-amber-600/20 hover:bg-amber-600/40 border-2 border-amber-400 
          hover:border-amber-300 rounded-full p-6 transition-all duration-300 hover:scale-110">
          <Play className="w-12 h-12 text-amber-400 group-hover:text-amber-300 ml-1" />
          <div className="absolute inset-0 rounded-full border-2 border-amber-400/50 animate-ping"></div>
        </button>
        
        <p className="mt-6 text-amber-200 text-lg">Watch Full Story</p>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;