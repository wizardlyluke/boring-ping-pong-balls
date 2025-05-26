import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductGrid />
      <Footer />
    </main>
  );
}
