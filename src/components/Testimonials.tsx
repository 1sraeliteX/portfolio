'use client';

import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  

  const testimonials = [
    {
      quote: "Outstanding work! The team has exceeded our expectations with their innovative solutions and attention to detail.",
      author: "John Smith",
      role: "CEO, Example Inc.",
      avatar: "/avatars/john-smith.jpg"
    },
    {
      quote: "Quick implementation and professional advice. Their team delivered beyond our requirements!",
      author: "Jane Doe",
      role: "Marketing Director, Test Corp",
      avatar: "/avatars/jane-doe.jpg"
    },
    {
      quote: "The quality of work and communication was exceptional. Will definitely work with them again.",
      author: "Michael Johnson",
      role: "CTO, Tech Innovations",
      avatar: "/avatars/michael-johnson.jpg"
    },
    {
      quote: "Transformed our online presence completely. The results speak for themselves!",
      author: "Sarah Williams",
      role: "Founder, Creative Solutions",
      avatar: "/avatars/sarah-williams.jpg"
    },
    {
      quote: "Professional, creative, and delivered on time. Highly recommended for any web project.",
      author: "David Kim",
      role: "Product Manager, NextGen Apps",
      avatar: "/avatars/david-kim.jpg"
    }
  ];

  return (
    <section className="pt-20 pb-[42px] bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative pb-10">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              gap: '1.5rem',
              scrollPadding: '0 1rem',
              padding: '0 1rem',
              cursor: 'grab'
            }}
            onMouseDown={(e) => {
              const container = e.currentTarget;
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;
              
              const mouseMove = (e: MouseEvent) => {
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };
              
              const mouseUp = () => {
                document.removeEventListener('mousemove', mouseMove);
                document.removeEventListener('mouseup', mouseUp);
                container.style.cursor = 'grab';
              };
              
              container.style.cursor = 'grabbing';
              document.addEventListener('mousemove', mouseMove);
              document.addEventListener('mouseup', mouseUp);
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="snap-start w-[300px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col mb-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-400 mr-4">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      testimonial.author.charAt(0)
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 break-words overflow-hidden text-ellipsis flex-grow">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
