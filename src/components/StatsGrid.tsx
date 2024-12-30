import React from 'react';
import { Users, Briefcase, Clock, Zap } from 'lucide-react';

const stats = [
  {
    label: 'Projects Delivered',
    value: '60+',
    icon: Briefcase,
    description: 'Successful projects completed',
  },
  {
    label: 'Satisfied Clients',
    value: '70+',
    icon: Users,
    description: 'Happy clients worldwide',
  },
  {
    label: 'Years Experience',
    value: '12+',
    icon: Clock,
    description: 'Industry expertise',
  },
  {
    label: 'Quickest Turnaround',
    value: '7 Days',
    icon: Zap,
    description: 'Fast project delivery',
  },
];

export default function StatsGrid() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center p-6 sm:p-8 bg-black/40 rounded-2xl backdrop-blur-sm hover:bg-black/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <stat.icon className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              
              <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-white">{stat.value}</h3>
              
              <p className="mt-2 text-gray-400 text-center font-medium">{stat.label}</p>
              
              <p className="mt-1 text-sm text-gray-500 text-center">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}