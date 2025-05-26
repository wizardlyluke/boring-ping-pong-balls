'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  boringLevel: number;
  features: string[];
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Ultra-Boring White Ball',
    price: 2.99,
    description: 'The epitome of ping pong ball normalcy. So unremarkable, it hurts.',
    boringLevel: 5,
    features: ['100% Regulation Standard', 'Aggressively Round', 'Painfully White'],
    inStock: true,
  },
  {
    id: 2,
    name: 'Moderately Dull Orange Ball',
    price: 3.49,
    description: 'For when white is too exciting. Orange, but not the fun kind.',
    boringLevel: 4,
    features: ['Slightly Less Boring', 'Tournament Legal', 'Disappointingly Orange'],
    inStock: true,
  },
  {
    id: 3,
    name: 'Mundane Multi-Pack',
    price: 12.99,
    description: 'Six balls of pure mediocrity. Buy in bulk to maximize your boredom.',
    boringLevel: 5,
    features: ['6-Pack Value', 'Mixed Boredom Levels', 'Bulk Disappointment'],
    inStock: false,
  },
  {
    id: 4,
    name: 'Premium Boring Ball™',
    price: 9.99,
    description: 'The Rolls-Royce of tedium. Handcrafted to be aggressively unremarkable.',
    boringLevel: 5,
    features: ['Hand-Crafted Mediocrity', '40mm Regulation', 'Premium Blandness'],
    inStock: true,
  },
  {
    id: 5,
    name: 'Vintage Monotony Ball',
    price: 15.99,
    description: 'Classic boredom from the 1980s. Synthwave meets ping pong.',
    boringLevel: 3,
    features: ['Retro Boring', 'Synthwave Certified', 'Nostalgically Dull'],
    inStock: true,
  },
  {
    id: 6,
    name: 'Quantum Boring Ball',
    price: 29.99,
    description: 'Exists in a superposition of boring and extremely boring.',
    boringLevel: 5,
    features: ['Quantum Entangled', 'Schrödinger Approved', 'Impossibly Mundane'],
    inStock: true,
  },
];

const ProductGrid: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const renderStars = (level: number): React.ReactElement[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < level ? 'text-purple-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-300 mb-6" style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.3)' }}>
            <span className="glitch" data-text="BORING COLLECTION">
              BORING COLLECTION
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our meticulously curated selection of profoundly ordinary ping pong balls.
            Each one guaranteed to lower your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              style={{
                boxShadow: hoveredProduct === product.id 
                  ? '0 0 20px rgba(147, 51, 234, 0.2)' 
                  : '0 0 5px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Product Image Placeholder */}
              <div className="relative mb-6">
                <motion.div
                  className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gray-300 rounded-full shadow-lg"
                    animate={{
                      rotate: hoveredProduct === product.id ? 180 : 0,
                      scale: hoveredProduct === product.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  >
                    <div className="absolute inset-2 border border-gray-500 rounded-full opacity-60"></div>
                  </motion.div>
                  
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-red-900/30 flex items-center justify-center">
                      <span className="text-red-400 font-bold text-lg transform -rotate-12">
                        OUT OF STOCK
                      </span>
                    </div>
                  )}
                </motion.div>
                
                {hoveredProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <Zap className="w-6 h-6 text-orange-400" />
                  </motion.div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-purple-300">{product.name}</h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Boring Level:</span>
                  <div className="flex space-x-1">{renderStars(product.boringLevel)}</div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-2xl font-bold text-blue-300">
                    ${product.price}
                  </span>
                  
                  <motion.button
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center space-x-2 ${
                      product.inStock
                        ? 'bg-purple-600 text-white hover:bg-purple-500'
                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                    whileHover={product.inStock ? { scale: 1.02 } : {}}
                    whileTap={product.inStock ? { scale: 0.98 } : {}}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{product.inStock ? 'ADD TO CART' : 'SOLD OUT'}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-300 font-bold text-lg rounded-lg hover:bg-blue-900 hover:text-blue-100 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }}
          >
            VIEW ALL BORING PRODUCTS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid; 