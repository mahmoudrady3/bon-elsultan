import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import DrinksSection from './components/DrinksSection';
import ExperienceSection from './components/ExperienceSection';
import CraftSection from './components/CraftSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationsSection from './components/LocationsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div 
      className="bg-black text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DrinksSection />
      <ExperienceSection />
      <CraftSection />
      <TestimonialsSection />
      <LocationsSection />
      <NewsletterSection />
      <Footer />
    </motion.div>
  );
}

export default App;