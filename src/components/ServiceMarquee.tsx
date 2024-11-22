import React from 'react';

const services = [
  'Visual Interaction',
  'Product Design',
  'Custom Development',
  'Graphic Design',
  'UI Design',
  'UX Design',
  'Webflow Development',
];

export default function ServiceMarquee() {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap py-6">
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className="mx-2 sm:mx-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/20 backdrop-blur-sm text-gray-400 border border-white/10 inline-block text-sm sm:text-base transition-colors duration-300 hover:bg-black/40 hover:text-white"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}