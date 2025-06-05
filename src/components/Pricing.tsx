
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap, Building, Globe } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Shipper",
      icon: Zap,
      price: "Per Shipment",
      description: "Perfect for businesses needing reliable freight services",
      features: [
        "AI-optimized routing",
        "Real-time tracking",
        "Automated booking",
        "24/7 support",
        "Basic analytics"
      ],
      cta: "Start Shipping",
      popular: false
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "Custom",
      description: "Full logistics platform for large operations",
      features: [
        "Everything in Shipper",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
        "API access",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: true
    },
    {
      name: "Global",
      icon: Globe,
      price: "Partnership",
      description: "For logistics companies wanting to join our network",
      features: [
        "Revenue sharing model",
        "Full platform access",
        "Carrier network integration",
        "Co-branded solutions",
        "International coverage"
      ],
      cta: "Become Partner",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Logistics Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From individual shipments to enterprise logistics, we have the right solution for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'} bg-white`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mt-4">
                    {plan.price}
                  </div>
                  <p className="text-gray-600 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
