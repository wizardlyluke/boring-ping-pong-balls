'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-700 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3
              className="text-2xl font-bold text-purple-300"
              style={{ textShadow: '0 0 8px rgba(147, 51, 234, 0.3)' }}
            >
              BoringBalls™
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Revolutionizing ping pong through aggressive normalcy since 2024.
              Making table tennis boring, one ball at a time.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#a855f7' }}
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#60a5fa' }}
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#4ade80' }}
                className="text-gray-500 hover:text-green-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Boring Collection',
                'Mediocrity Guide',
                'Blandness Guarantee',
                'Tedium Support',
                'Mundane FAQ',
              ].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-blue-300">Boring Support</h4>
            <ul className="space-y-2">
              {[
                'Return Policy',
                'Shipping Info',
                'Size Guide',
                'Care Instructions',
                'Warranty',
              ].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-blue-300">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-500 text-sm">
                  boring@boringballs.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-500 text-sm">1-800-BORING-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-500 text-sm">
                  123 Mundane St
                  <br />
                  Tedium City, TC 12345
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Terms of Boredom
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Cookie Policy
              </motion.a>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm">
                © 2024 BoringBalls™. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Making ping pong boring since the beginning of time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Retro decoration */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>
    </footer>
  );
};

export default Footer;
