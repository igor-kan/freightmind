
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Truck, AlertTriangle, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-Time Control Tower
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your entire logistics operation from a single, AI-powered dashboard
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-600 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Active Deliveries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700">2,847</div>
                <p className="text-xs text-green-600">+12% from yesterday</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-600 flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Fleet Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700">94.2%</div>
                <p className="text-xs text-blue-600">Optimal efficiency</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Revenue Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-700">$1.2M</div>
                <p className="text-xs text-purple-600">+8.7% vs target</p>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-orange-600 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  AI Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-700">3</div>
                <p className="text-xs text-orange-600">Maintenance due</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white text-lg font-semibold mb-4">Live Fleet Tracking</h3>
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm">Interactive map visualization would appear here</p>
                <p className="text-xs mt-2">Real-time vehicle positions, routes, and ETA updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
