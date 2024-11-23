import React, { useState } from 'react';
import { Mail, Phone, User, Send, CheckCircle } from 'lucide-react';

const serviceOptions = [
  'Digital Ads',
  'Web Development',
  'Brand Design',
  'Marketing',
  'Full Service',
  'Custom Project'
];

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formState.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formState.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with your Google Forms submission URL
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeA6rCrFzHplakqv1GGMh1P8C3jXz587vseJaE-jPTzHO5WQQ/viewform?usp=sf_link';
      
      const formData = new FormData();
      // Map form fields to Google Form field entries
      // Update these entry.X values with your Google Form field IDs
      formData.append('entry.2005620554', formState.name);
      formData.append('entry.1045781291', formState.email);
      formData.append('entry.1065046570', formState.phone);
      formData.append('entry.1166974658', formState.service);
      formData.append('entry.839337160', formState.message);
      
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-gray-400 max-w-md">
          Your message has been received. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
              placeholder="Your name"
            />
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
              placeholder="your@email.com"
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone Input */}
        <div className="relative">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
            Phone
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
              placeholder="+1 (555) 000-0000"
            />
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Service Selection */}
        <div className="relative">
          <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
            Service
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formState.service}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.service ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none`}
            >
              <option value="">Select a service</option>
              {serviceOptions.map(option => (
                <option key={option} value={option} className="bg-[#0a0a0a]">
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
        </div>
      </div>

      {/* Message Input */}
      <div className="relative">
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={6}
          className={`w-full bg-black/20 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </form>
  );
}