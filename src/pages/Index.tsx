
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Users, Calendar, Activity, BarChart, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-primary text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="flex items-center mb-6">
                <Dumbbell className="h-8 w-8 mr-2" />
                <h1 className="text-4xl font-bold">FitFlow</h1>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Manage Your Gym<br />Transform Your Fitness
              </h2>
              <p className="text-lg mb-8">
                The complete management solution for gyms and fitness centers.
                Streamline operations, engage members, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg" className="bg-white text-fitflow-primary hover:bg-gray-100">
                    Login
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Fitness dashboard preview" 
                  className="rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Designed for Every Fitness Role</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides tailored experiences for gym members, trainers, and administrators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4 text-fitflow-primary">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">For Members</h3>
                <p className="text-gray-600 mb-4">
                  Track your fitness journey, book sessions with trainers, and manage your subscription with ease.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Personalized dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Progress tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Trainer selection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4 text-purple-600">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">For Trainers</h3>
                <p className="text-gray-600 mb-4">
                  Manage your clients, create workout plans, and track client progress all in one place.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Client management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Workout planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Performance metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4 text-green-600">
                  <BarChart size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">For Admins</h3>
                <p className="text-gray-600 mb-4">
                  Get comprehensive analytics, manage subscriptions, and oversee all gym operations efficiently.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Business analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Staff management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2" /> Revenue tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your fitness management?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of gyms and fitness centers that are already using FitFlow to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login">
              <Button size="lg" className="bg-white text-fitflow-primary hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Dumbbell className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold">FitFlow</h3>
              </div>
              <p className="text-gray-400 max-w-xs">
                The complete management solution for gyms and fitness centers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 FitFlow. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
