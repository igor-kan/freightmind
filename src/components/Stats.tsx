
import React from 'react';

const Stats = () => {
  const stats = [
    { number: "99.8%", label: "On-Time Delivery", description: "AI-optimized routing" },
    { number: "45%", label: "Cost Reduction", description: "vs Traditional Brokers" },
    { number: "24/7", label: "AI Monitoring", description: "Continuous Optimization" },
    { number: "50+", label: "Countries", description: "Global Coverage" }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Delivering Results Across the Globe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-driven platform consistently outperforms traditional logistics providers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
