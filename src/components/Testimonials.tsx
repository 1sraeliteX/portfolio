'use client';

import { useRef } from 'react';

export default function Testimonials() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "The e-commerce platform they built for our auction business has transformed our operations. The bidding system is smooth and reliable, and we've experienced remarkable sales growth since launch.",
      author: "Ikechukwu Israel",
      role: "CEO, Fairbid",
      avatar: "/wan92.png"
    },
    {
      quote: "Working with this team on our dental practice management system was a game-changer. The system is intuitive for our staff and has significantly improved patient scheduling and record-keeping.",
      author: "Dr. Sarah Williams",
      role: "Founder, Dr. Pink Orthodontics",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The Tap to Earn app they developed has been a huge success. The game mechanics are engaging, and we've seen incredible user retention rates. The team's understanding of blockchain integration was particularly impressive.",
      author: "David Kim",
      role: "Product Lead, Tap to Earn",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      quote: "The waste management app they developed has helped us optimize our collection routes and achieve significant cost savings. The team was professional and delivered beyond our expectations.",
      author: "Emily Rodriguez",
      role: "Director, GreenClean",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "Our crypto investment platform has seen incredible growth since the redesign. The trading interface is clean, responsive, and our users love the new features.",
      author: "James Wilson",
      role: "CTO, DeFiPulseX",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
      quote: "The trading platform they built for us has been instrumental in our success. The analytics dashboard provides valuable insights, and the execution speed is impressive.",
      author: "Robert Johnson",
      role: "CEO, AtlasWealth",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/80 border border-white/30 
                  shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.12)] 
                  transition-all duration-300 transform hover:-translate-y-1
                  backdrop-saturate-150 backdrop-filter backdrop-blur-xl p-6"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.author) + '&background=random';
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 italic mt-10">and more...</p>
        </div>
      </div>
    </div>
  );
}
