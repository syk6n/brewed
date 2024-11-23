import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@brewed.design',
    href: 'mailto:contact@brewed.design'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Design Street, Creative City, DC 12345',
    href: 'https://maps.google.com'
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-l from-pink-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Create Something{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Get in touch and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-4 p-4 rounded-xl bg-black/20 border border-white/10 transition-all duration-300 hover:bg-black/30 hover:border-purple-500/50"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-white" />
                </span>
                <div>
                  <h3 className="font-medium text-gray-300 mb-1">{item.label}</h3>
                  <p className="text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}