
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { 
  Users, 
  CreditCard, 
  DollarSign, 
  TrendingUp,
  UserPlus
} from 'lucide-react';
import { getAdminAnalytics, AnalyticsData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdminAnalytics();
      setAnalyticsData(data);
      setLoading(false);
    };
    
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  // Colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive overview of gym performance</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Members */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Members</p>
                <h3 className="text-2xl font-bold mt-1">{analyticsData?.totalUsers}</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                <Users size={20} />
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600 mt-4">
              <TrendingUp size={14} className="mr-1" />
              <span>+{analyticsData?.newSignups} new this month</span>
            </div>
          </CardContent>
        </Card>

        {/* Active Subscriptions */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Subscriptions</p>
                <h3 className="text-2xl font-bold mt-1">{analyticsData?.activeSubscriptions}</h3>
              </div>
              <div className="p-2 bg-purple-50 rounded-full text-purple-600">
                <CreditCard size={20} />
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600 mt-4">
              <TrendingUp size={14} className="mr-1" />
              <span>+6% from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Revenue */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                <h3 className="text-2xl font-bold mt-1">${analyticsData?.revenue.toFixed(2)}</h3>
              </div>
              <div className="p-2 bg-green-50 rounded-full text-green-600">
                <DollarSign size={20} />
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600 mt-4">
              <TrendingUp size={14} className="mr-1" />
              <span>+5.8% from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* New Sign-ups */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Sign-ups</p>
                <h3 className="text-2xl font-bold mt-1">{analyticsData?.newSignups}</h3>
              </div>
              <div className="p-2 bg-cyan-50 rounded-full text-cyan-600">
                <UserPlus size={20} />
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600 mt-4">
              <TrendingUp size={14} className="mr-1" />
              <span>+12% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Revenue Chart */}
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={analyticsData?.revenueByMonth}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#0EA5E9" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Subscription Plans Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription Distribution</CardTitle>
            <CardDescription>Breakdown by plan type</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analyticsData?.topPlans}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {analyticsData?.topPlans.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip formatter={(value, name) => [value, name]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Trainer Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Trainer Performance</CardTitle>
            <CardDescription>Number of active clients per trainer</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={analyticsData?.trainerMetrics}
                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [value, 'Clients']} />
                <Bar dataKey="clients" fill="#22D3EE" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Management Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Management Tools</CardTitle>
          <CardDescription>Quick access to administrative functions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="members">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="trainers">Trainers</TabsTrigger>
              <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="members" className="py-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Members List</h3>
                <Button>Add New Member</Button>
              </div>
              <div className="text-muted-foreground text-sm">
                Manage member accounts, subscriptions, and access levels.
                View detailed profiles, training history, and payment records.
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline">View All Members</Button>
                <Button variant="outline">Export Data</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="trainers" className="py-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Trainers List</h3>
                <Button>Add New Trainer</Button>
              </div>
              <div className="text-muted-foreground text-sm">
                Manage trainer profiles, specialties, and client assignments.
                Review performance metrics and client feedback.
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline">View All Trainers</Button>
                <Button variant="outline">Trainer Schedule</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="plans" className="py-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Subscription Plans</h3>
                <Button>Create New Plan</Button>
              </div>
              <div className="text-muted-foreground text-sm">
                Manage membership plans, pricing, and features.
                Monitor subscription performance and member adoption.
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline">Edit Plans</Button>
                <Button variant="outline">Pricing Analytics</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="py-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Gym Events</h3>
                <Button>Add New Event</Button>
              </div>
              <div className="text-muted-foreground text-sm">
                Schedule and manage classes, workshops, and competitions.
                Track attendance and member engagement.
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline">Calendar View</Button>
                <Button variant="outline">Event Analytics</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
