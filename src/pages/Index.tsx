
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Dashboard from '@/components/Dashboard';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Dashboard />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
