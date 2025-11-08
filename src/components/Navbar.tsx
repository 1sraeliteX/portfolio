'use client';
import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="fixed w-full bg-white text-black shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold no-underline hover:no-underline focus:no-underline">
              TEKDOCTOR 🩺
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-black hover:text-gray-700 no-underline hover:no-underline focus:no-underline">
              About
            </Link>
            <button 
              onClick={openModal}
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-black hover:text-gray-700 no-underline hover:no-underline focus:no-underline">
              About
            </Link>
            <button 
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-black rounded-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
      <ContactModal isOpen={isModalOpen} onCloseAction={closeModal} />
    </nav>
  );
}
