'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Fairbid E-commerce",
      description: "Online Auction Platform",
      image: "/fairbid.png",
      previewUrl: "#",
      tags: ["Website", "E-commerce"]
    },
    {
      title: "Dr. Pink Orthodontics",
      description: "Dental Practice Management System",
      image: "/drpink.png",
      previewUrl: "https://www.drpinkortho.com",
      tags: ["Website", "Healthcare"]
    },
    {
      title: "GreenClean",
      description: "Waste management App",
      image: "/greenclean.png",
      previewUrl: "#",
      tags: ["App", "Eco"]
    },
    {
      title: "Tap to Earn App",
      description: "Earn Rewards by Tapping",
      image: "/tapper2.png",
      previewUrl: "https://bitcoin-tapper.vercel.app",
      tags: ["App", "Web3"]
    },
    {
      title: "DefiPulsex",
      description: "Crypto Investment Trading Platform",
      image: "/defipulse.png",
      previewUrl: "https://www.defipulsex.org",
      tags: ["App", "Web3", "Trading"]
    },
    {
      title: "AtlasWealth",
      description: "Crypto Trading Platform",
      subText: "Advanced trading tools and analytics for crypto investors",
      image: "/atlas.png",
      previewUrl: "https://www.atlaswealthltd.org",
      tags: ["App", "Web3", "Trading", "Finance"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Featured Projects</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover a selection of our most successful projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/50 border border-white/30 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.2)] 
                transition-all duration-300 transform hover:-translate-y-1 ${!showAll && index >= 3 ? 'hidden' : 'block'}
                backdrop-saturate-150 backdrop-filter backdrop-blur-xl`}
            >
              <div className="relative aspect-w-16 aspect-h-9 bg-gray-100/30 backdrop-blur-sm w-full h-64 rounded-t-lg overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x256?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a 
                    href={project.previewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 no-underline"
                  >
                    Preview
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                <p className="text-black mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => {
                    // Define color variants based on tag content
                    const getTagStyle = (tag: string) => {
                      const tagLower = tag.toLowerCase();
                      if (tagLower === 'app') return 'bg-blue-100 text-blue-800 border-blue-200';
                      if (tagLower === 'website') return 'bg-purple-100 text-purple-800 border-purple-200';
                      if (tagLower === 'web3') return 'bg-emerald-100 text-emerald-800 border-emerald-200';
                      if (tagLower === 'finance') return 'bg-green-100 text-green-800 border-green-200';
                      if (tagLower === 'e-commerce') return 'bg-amber-100 text-amber-800 border-amber-200';
                      if (tagLower === 'productivity') return 'bg-indigo-100 text-indigo-800 border-indigo-200';
                      if (tagLower === 'health') return 'bg-pink-100 text-pink-800 border-pink-200';
                      if (tagLower === 'ui/ux') return 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200';
                      return 'bg-gray-100 text-gray-800 border-gray-200';
                    };
                    
                    return (
                      <span 
                        key={tagIndex}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-block border-2 border-black px-8 py-3 rounded-full font-medium text-black hover:bg-gray-50 transition-colors"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
}
