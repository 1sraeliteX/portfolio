'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Consulting() {
  const services = [
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology stack selection and architecture decisions.",
      icon: "💡"
    },
    {
      title: "Digital Transformation",
      description: "Strategic planning and execution of digital transformation initiatives.",
      icon: "🚀"
    },
    {
      title: "Product Strategy",
      description: "Product roadmap development and go-to-market strategy planning.",
      icon: "📈"
    },
    {
      title: "Technical Audits",
      description: "Comprehensive code reviews and infrastructure assessments.",
      icon: "🔍"
    },
    {
      title: "Process Optimization",
      description: "Streamline workflows and improve development processes for efficiency.",
      icon: "⚙️"
    },
    {
      title: "Team Training",
      description: "Upskill your team with workshops and training on modern technologies.",
      icon: "👥"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Consulting Services
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We provide expert consulting to help you make informed decisions and achieve your business goals.
          </p>
          <Link 
            href="/#services"
            className="text-green-600 hover:text-green-700 font-medium no-underline"
          >
            ← Back to Services
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our consulting services can help accelerate your success.
          </p>
          <Link 
            href="/"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors no-underline"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
