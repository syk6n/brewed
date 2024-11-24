import React from 'react';
import { Hand, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import StatsGrid from './components/StatsGrid';
import ServiceMarquee from './components/ServiceMarquee';
import PricingSection from './components/PricingSection';
import ComparisonSection from './components/ComparisonSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden cursor-none">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 animate-float">
              <Hand className="w-5 h-5 text-yellow-500 animate-wave" />
              <span className="text-gray-400 text-sm sm:text-base">Brewed Agency Welcome's You!</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight px-4">
              Revitalize Your Digital Impact through{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Boundless Creativity
              </span>
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
              At Brewed Media, we believe in the perfect blend of creativity and strategy, crafting your brand's success with precision and passion.
            </p>
            
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black touch-manipulation"
            >
              <span className="relative z-10 font-medium text-base sm:text-lg whitespace-nowrap">Let's Work Together</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>

          <div className="mt-16 sm:mt-20">
            <ServiceMarquee />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsGrid />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;