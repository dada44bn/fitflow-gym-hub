
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Check, CreditCard, Users, BarChart3, ArrowUpRight, DollarSign } from 'lucide-react';

const AdminSubscriptionsPage: React.FC = () => {
  // Sample subscription plans data
  const activePlans = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      interval: "month",
      features: [
        "Access to main gym area",
        "Standard equipment usage",
        "Access during regular hours",
        "Online fitness resources"
      ],
      popular: false,
      active: true,
      subscribers: 145,
      revenue: 4348.55
    },
    {
      id: 2,
      name: "Premium",
      price: 49.99,
      interval: "month",
      features: [
        "Access to main gym area",
        "All equipment usage",
        "Group classes included",
        "24/7 gym access",
        "Personal trainer consultation (1x month)"
      ],
      popular: true,
      active: true,
      subscribers: 201,
      revenue: 10047.99
    },
    {
      id: 3,
      name: "Annual Membership",
      price: 399.99,
      interval: "year",
      features: [
        "All Premium features",
        "2 months free compared to monthly",
        "Bring a friend 3x month",
        "Access to premium events"
      ],
      popular: false,
      active: true,
      subscribers: 85,
      revenue: 33999.15
    }
  ];
  
  const archivedPlans = [
    {
      id: 4,
      name: "Summer Special",
      price: 39.99,
      interval: "month",
      features: [
        "3-month minimum commitment",
        "Access to main gym area",
        "Pool and sauna access",
        "2 group classes per week"
      ],
      popular: false,
      active: false,
      subscribers: 0,
      endDate: "Sep 1, 2022"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
          <p className="text-muted-foreground">Manage membership plans and pricing</p>
        </div>
        
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">431</CardTitle>
            <CardDescription>Active Subscriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} />
              <span>+23 from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">$48,395.69</CardTitle>
            <CardDescription>Monthly Revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <ArrowUpRight size={16} />
              <span>+5.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">$112.29</CardTitle>
            <CardDescription>Avg. Revenue per Member</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 size={16} />
              <span>Based on all active subscriptions</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subscription Plans</CardTitle>
          <CardDescription>Manage gym membership options and pricing</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active-plans">
            <TabsList className="mb-6">
              <TabsTrigger value="active-plans">Active Plans</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
              <TabsTrigger value="create-new">Create New Plan</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active-plans">
              <div className="space-y-6">
                {activePlans.map((plan) => (
                  <Card key={plan.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <CardTitle>{plan.name}</CardTitle>
                          {plan.popular && <Badge>Popular</Badge>}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center space-x-2">
                            <Switch id={`active-${plan.id}`} defaultChecked={plan.active} />
                            <Label htmlFor={`active-${plan.id}`}>Active</Label>
                          </div>
                          <Button variant="outline" size="icon">
                            <Edit size={16} />
                          </Button>
                        </div>
                      </div>
                      <CardDescription>
                        <span className="text-lg font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.interval}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex text-sm">
                                <Check size={16} className="mr-2 text-green-500 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium">Current Subscribers</h4>
                              <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold">{plan.subscribers}</span>
                                <span className="text-sm text-muted-foreground">members</span>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium">Monthly Revenue</h4>
                              <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold">${plan.revenue.toLocaleString()}</span>
                                <span className="text-sm text-muted-foreground">/ month</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="archived">
              <div className="space-y-6">
                {archivedPlans.map((plan) => (
                  <Card key={plan.id} className="bg-gray-50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{plan.name}</CardTitle>
                          <CardDescription>
                            <span className="text-lg font-bold">${plan.price}</span>
                            <span className="text-muted-foreground">/{plan.interval}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-gray-100">Archived</Badge>
                          <Button variant="outline" size="sm">
                            Restore
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm mb-2">
                        <span className="text-muted-foreground">End Date:</span> {plan.endDate}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex text-sm">
                              <Check size={16} className="mr-2 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {archivedPlans.length === 0 && (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No archived plans found.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="create-new">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="plan-name">Plan Name</Label>
                    <Input id="plan-name" placeholder="e.g. Premium Membership" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="plan-price">Price</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="plan-price" type="number" step="0.01" min="0" className="pl-8" placeholder="49.99" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan-interval">Billing Interval</Label>
                      <select
                        id="plan-interval"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                        <option value="week">Weekly</option>
                        <option value="day">Daily</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Plan Features</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input placeholder="e.g. Access to main gym area" />
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input placeholder="e.g. Group classes included" />
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input placeholder="e.g. 24/7 gym access" />
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Feature
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="plan-description">Description (Optional)</Label>
                  <textarea
                    id="plan-description"
                    className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Additional information about this plan..."
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="popular" />
                  <Label htmlFor="popular">Mark as Popular</Label>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Create Plan
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSubscriptionsPage;
