import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const projects = [
  {
    title: 'CryptoVerse Web3',
    description: 'A decentralized platform empowering users with secure, transparent crypto solutions. Seamlessly explore DeFi, NFTs, and blockchain technology with ultimate control over your digital assets.',
    image: 'https://cdn.dribbble.com/userupload/16429289/file/original-d4cab2b8e55cff9f4973e0a630dfc4cb.png?resize=752x&vertical=center',
    tags: ['React', 'Web3.js', 'Solidity', 'TailwindCSS'],
    liveUrl: '/projects/cryptoverse/',
    githubUrl: '#'
  },
  {
    title: 'Artistry',
    description: 'An innovative digital art platform that connects artists and collectors through immersive experiences. Discover unique artworks and engage with a vibrant creative community.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7445cf211296157.67208dd63f0a9.png',
    tags: ['React', 'Three.js', 'GSAP', 'TailwindCSS'],
    liveUrl: '/projects/artistry/',
    githubUrl: '#'
  },
  {
    title: 'Wanderlust Travel',
    description: 'A modern travel landing page showcasing breathtaking destinations and curated travel experiences. Features immersive visuals and seamless booking integration.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/aaed3f210891927.67191488c6720.png',
    tags: ['React', 'Framer Motion', 'TailwindCSS', 'Next.js'],
    liveUrl: '/projects/wanderlust/',
    githubUrl: '#'
  },
  {
    title: 'Social Media App',
    description: 'A feature-rich social media application with real-time messaging, post sharing, and user engagement analytics.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600',
    tags: ['React Native', 'Firebase', 'Redux', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export default function Works() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden cursor-none">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      <CustomCursor />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Featured{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Explore our portfolio of successful projects that showcase our expertise in creating innovative digital solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-black/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 inline-block"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}