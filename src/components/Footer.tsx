import React from 'react';
import { Github, Twitter, Linkedin, Mail, InstagramIcon, GlobeIcon } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/syk6n/' },
  { name: 'Website', icon: GlobeIcon, url: 'https://sayans.work/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/sayan-kundu-14bba4272/' },
  { name: 'Email', icon: Mail, url: 'mailto:sayankunduatwork@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Brewed</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences that leave lasting impressions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>sayankunduatwork@gmail.com</li>
              <li>+91 8287156273</li>
              <li>DLF IV - Gurgaon, India</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Brewed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}