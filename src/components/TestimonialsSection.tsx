import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at TechVision',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    quote: 'Brewed transformed our digital presence completely. Their attention to detail and innovative approach helped us achieve a 200% increase in user engagement.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder of DesignLab',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    quote: 'The team at Brewed doesn\'t just deliver projects; they deliver experiences. Their creative vision and technical expertise are unmatched in the industry.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Director at Innovate',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    quote: 'Working with Brewed was a game-changer for our brand. They took our vision and elevated it beyond our expectations. The results speak for themselves.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-l from-pink-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:bg-black/50 hover:border-purple-500/50 hover:transform hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-500/20 transition-all duration-300 group-hover:text-purple-500/40" />

              {/* Client Image and Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-500/20 transition-all duration-300 group-hover:ring-purple-500/40">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <Quote className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="flex-grow mb-6">
                <p className="text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-purple-500 text-purple-500 transition-colors duration-300 group-hover:fill-purple-400 group-hover:text-purple-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}