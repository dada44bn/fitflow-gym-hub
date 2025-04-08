
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { subscriptions } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

const SubscriptionsPage: React.FC = () => {
  const { toast } = useToast();

  const handleSubscribe = (planId: string, planName: string) => {
    toast({
      title: "Subscription Activated!",
      description: `You've successfully subscribed to the ${planName} plan.`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Membership Plans</h1>
        <p className="text-muted-foreground">Choose the plan that best fits your fitness journey</p>
      </div>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptions.map((subscription) => (
          <Card 
            key={subscription.id} 
            className={`flex flex-col hover-scale ${
              subscription.mostPopular 
                ? 'border-fitflow-primary shadow-lg shadow-blue-100' 
                : ''
            }`}
          >
            {subscription.mostPopular && (
              <div className="bg-fitflow-primary text-white text-center py-1.5 text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{subscription.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">${subscription.price}</span>
                <span className="text-muted-foreground ml-1">/{subscription.duration}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${
                  subscription.mostPopular 
                    ? 'fitflow-gradient hover:opacity-90 transition-opacity' 
                    : ''
                }`}
                variant={subscription.mostPopular ? "default" : "outline"}
                onClick={() => handleSubscribe(subscription.id, subscription.name)}
              >
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* FAQs */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Common questions about our membership plans</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium text-lg mb-2">Can I cancel anytime?</h4>
            <p className="text-muted-foreground">
              Yes, you can cancel your subscription at any time. We offer a pro-rated refund for unused time on your subscription.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-2">Are there any joining fees?</h4>
            <p className="text-muted-foreground">
              No, we don't charge any additional joining fees or hidden charges. The price you see is the price you pay.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-2">Can I freeze my membership?</h4>
            <p className="text-muted-foreground">
              Yes, you can freeze your membership for up to 3 months in a year for valid reasons such as illness, injury, or extended travel.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-2">Can I upgrade my plan?</h4>
            <p className="text-muted-foreground">
              Absolutely! You can upgrade your plan at any time, and we'll simply charge you the difference pro-rated for the remaining time on your subscription.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionsPage;
