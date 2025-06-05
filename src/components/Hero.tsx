
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-pulse opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full mr-4">
            <Truck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">FreightMind</h1>
        </div>
        
        <h2 className="text-xl md:text-3xl font-light mb-6 text-blue-100">
          AI-Powered Logistics Platform
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
          The first digital-native freight provider that replaces traditional brokers with end-to-end AI automation. 
          From smart routing to predictive maintenance, we're revolutionizing logistics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            Start Shipping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg">
            View Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Zap className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-300">Real-time optimization and predictive analytics</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Globe className="w-8 h-8 text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Global Ready</h3>
            <p className="text-sm text-gray-300">Cross-border logistics with automated compliance</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Truck className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">End-to-End</h3>
            <p className="text-sm text-gray-300">Complete logistics ecosystem in one platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
