
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Route, Cpu, Wrench, BarChart3, Smartphone, Package } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Route,
      title: "AI Fleet Routing & Optimization",
      description: "Automatically plans optimal delivery routes in real-time, considering traffic, weather, and legal limits.",
      color: "text-blue-500"
    },
    {
      icon: Package,
      title: "Smart Contract & Booking System",
      description: "AI negotiates contracts with dynamic pricing. One-click booking, rescheduling, and dispute resolution.",
      color: "text-green-500"
    },
    {
      icon: Wrench,
      title: "Maintenance & Fleet Health",
      description: "IoT monitoring predicts vehicle maintenance needs before breakdowns occur.",
      color: "text-orange-500"
    },
    {
      icon: BarChart3,
      title: "Control Tower Dashboard",
      description: "Full visibility into fleet movement, cargo status, and AI-driven efficiency suggestions.",
      color: "text-purple-500"
    },
    {
      icon: Smartphone,
      title: "AI Driver Assistant",
      description: "Voice-enabled assistant for routing, compliance, safety alerts, and hands-free operation.",
      color: "text-cyan-500"
    },
    {
      icon: Cpu,
      title: "Load Matching AI",
      description: "Match available vehicles to shipments using AI-driven efficiency and cost optimization scores.",
      color: "text-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete AI Logistics Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From booking to delivery, our AI handles every aspect of freight logistics with unprecedented efficiency and intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
