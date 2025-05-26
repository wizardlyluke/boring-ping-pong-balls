'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 retro-bg opacity-10"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-purple-400 rounded-full blur-sm opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-4 h-4 bg-blue-400 rounded-full blur-sm opacity-50"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-400 rounded-full blur-sm opacity-40"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-gray-100 glitch"
            data-text="BoringBalls™"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              textShadow: '0 0 10px rgba(255, 16, 240, 0.3)',
            }}
          >
            BoringBalls™
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-blue-300 mb-8 font-mono"
          >
            <span className="text-green-400">{'>'}</span> The Most Mundane Ping
            Pong Balls <span className="text-orange-400">in the Galaxy</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience peak mediocrity with our regulation-standard,
            aggressively ordinary ping pong balls. Each sphere is meticulously
            crafted to be as unremarkable as possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-300 font-bold text-lg rounded-lg hover:bg-purple-900 hover:text-purple-100 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: '0 0 10px rgba(147, 51, 234, 0.3)',
              }}
            >
              SHOP BORING BALLS
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-300 font-bold text-lg rounded-lg hover:bg-blue-900 hover:text-blue-100 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
              }}
            >
              WITNESS THE MUNDANE
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated ping pong ball */}
        <motion.div
          className="absolute bottom-20 right-20 w-14 h-14 bg-gray-200 rounded-full opacity-60"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
          }}
        >
          <div className="absolute inset-2 border-2 border-gray-400 rounded-full opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
