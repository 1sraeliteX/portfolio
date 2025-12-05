'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Development() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js.",
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      icon: "📱"
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured online stores with payment integration, inventory management, and analytics.",
      icon: "🛒"
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data management.",
      icon: "🔌"
    },
    {
      title: "Database Design",
      description: "Scalable database architecture using SQL and NoSQL solutions.",
      icon: "💾"
    },
    {
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup and deployment on AWS, Azure, and Google Cloud.",
      icon: "☁️"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Development Services
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We build robust, scalable, and high-performance applications tailored to your business needs.
          </p>
          <Link 
            href="/#services"
            className="text-blue-600 hover:text-blue-700 font-medium no-underline"
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your ideas to life with cutting-edge development solutions.
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
