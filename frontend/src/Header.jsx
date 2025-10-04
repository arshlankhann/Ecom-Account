import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaHandshake,
  FaImage,
  FaWhatsapp,
  FaMagnifyingGlass,
  FaBars,
  FaXmark
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';

export default function EcommerceServices() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2 text-green-600">
          <MdEmail className="text-base" />
          <span className="text-sm hidden sm:inline">ecomaccount@gmail.com</span>
          <span className="text-xs sm:hidden">Email</span>
        </div>
        <div className="flex gap-3 sm:gap-4 text-green-600">
          <FaFacebookF className="text-sm sm:text-base hover:text-green-700 cursor-pointer" />
          <FaInstagram className="text-sm sm:text-base hover:text-green-700 cursor-pointer" />
          <FaLinkedinIn className="text-sm sm:text-base hover:text-green-700 cursor-pointer" />
          <FaYoutube className="text-sm sm:text-base hover:text-green-700 cursor-pointer" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-black">e</span>
                <span className="text-green-600">Com</span>
                <br />
                <span className="text-black text-lg sm:text-xl">Account</span>
              </div>
              <div className="ml-2 sm:ml-3">
                <svg width="30" height="25" viewBox="0 0 40 30" className="text-green-600 sm:w-10 sm:h-8">
                  <rect x="8" y="8" width="24" height="16" fill="none" stroke="currentColor" strokeWidth="2" rx="2" />
                  <path d="M8 12l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="26" r="2" fill="currentColor" />
                  <circle cx="28" cy="26" r="2" fill="currentColor" />
                  <path d="M4 4h6l4 16h18" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm text-gray-700">
                <span className="hover:text-green-600 cursor-pointer transition-colors">Home</span>
                <div className="relative group">
                  <span className="hover:text-green-600 cursor-pointer flex items-center gap-1 transition-colors">
                    Blog <span className="text-xs">▼</span>
                  </span>
                </div>
                <div className="relative group">
                  <span className="hover:text-green-600 cursor-pointer flex items-center gap-1 transition-colors">
                    Courses <span className="text-xs">▼</span>
                  </span>
                </div>
                <div className="relative group">
                  <span className="hover:text-green-600 font-medium cursor-pointer flex items-center gap-1">
                    Services <span className="text-xs">▼</span>
                  </span>
                </div>
                <div className="relative group">
                  <span className="hover:text-green-600 cursor-pointer flex items-center gap-1 transition-colors">
                    Tools <span className="text-xs">▼</span>
                  </span>
                </div>
                <span className="hover:text-green-600 cursor-pointer transition-colors">About</span>
                <span className="text-green-600 cursor-pointer transition-colors" onClick={() => {
                  const el = document.getElementById('start-selling-now');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}>Contact</span>
              </div>
              <FaMagnifyingGlass className="text-gray-500 hover:text-green-600 cursor-pointer transition-colors" />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <FaMagnifyingGlass className="text-gray-500 hover:text-green-600 cursor-pointer transition-colors" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaXmark className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-2 space-y-2 border-t border-gray-200">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">
                Home
              </a>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md flex items-center justify-between transition-colors">
                Blog
                <span className="text-xs">▼</span>
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md flex items-center justify-between transition-colors">
                Courses
                <span className="text-xs">▼</span>
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md flex items-center justify-between transition-colors">
                Services
                <span className="text-xs">▼</span>
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md flex items-center justify-between transition-colors">
                Tools
                <span className="text-xs">▼</span>
              </button>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-green-600 bg-green-50 rounded-md transition-colors font-medium" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('start-selling-now');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 tracking-wide">
            E-COMMERCE ACCOUNT MANAGEMENT SERVICES
          </h1>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto">
            We manage several marketplaces such as Flipkart, Amazon, Snapdeal, Shopclues, Paytm, Meesho, Glowroad, and more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Service 1 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-white">
                <HiOutlineUserGroup className="text-2xl text-green-500" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
                PERSONALIZED ACCOUNT MANAGER
              </h3>
              <p className="text-gray-600 leading-relaxed">
                👨‍💼 One Point of Contact <br></br>
                📊 Performance Monitoring <br></br>
                🔍 Competitor & Market Analysis <br></br>
                🏆 End-to-End Growth Support

              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-white">
                <FaImage className="text-2xl text-green-500" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
                PRODUCT LISTING MANAGEMENT
              </h3>
              <p className="text-gray-600 leading-relaxed">

                👨‍💼SEO-optimized titles & bullet points<br></br>
                📊Image formatting & editing<br></br>
                📦Correct category selection & competitive pricing<br></br>
                🏆100% compliance with E-commerce guidelines

              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-white">
                <FaMagnifyingGlass className="text-2xl text-green-500" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
                ADVERTISING & PROMOTIONS
              </h3>
              <p className="text-gray-600 leading-relaxed">
                👨‍💼Creating & running ad campaigns<br></br>
                📊Daily/Weekly optimization<br></br>
                📈Report analysis & performance improvement<br></br>

              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-white">
                <FaWhatsapp className="text-2xl text-green-500" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
                WHATSAPP AND EMAIL SUPPORT
              </h3>
              <p className="text-gray-600 leading-relaxed">
                👨‍💼Personal number of account manager<br></br>
                📊24/7 whats app support<br></br>
                📧Email<br></br>
                🆘helpdesk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}