import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Zap, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = window.location.pathname;
  
  const menuItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Works', icon: Briefcase, href: '/works' },
    { name: 'Contact', icon: Zap, href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <nav className={`relative mx-auto px-4 transition-all duration-300 ${isScrolled ? 'max-w-3xl' : 'max-w-5xl'}`}>
        <div className={`relative flex items-center justify-between px-4 py-2.5 rounded-full border border-white/10 transition-all duration-300 ${
          isScrolled ? 'bg-black/80' : 'bg-black/20'
        } backdrop-blur-md`}>
          {/* Logo */}
          <a href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <Logo />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-300
                    ${isActive(item.href)
                      ? 'bg-white text-black' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 right-0 mt-2 transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 py-2 px-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive(item.href)
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}