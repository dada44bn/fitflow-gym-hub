
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, Filter, Plus, Calendar, Clock, User, MessageCircle, Activity } from 'lucide-react';

const TrainerClientsPage: React.FC = () => {
  // Sample clients data
  const activeClients = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      avatar: "/assets/avatars/user-1.jpg",
      plan: "Weight Loss",
      startDate: "Mar 15, 2023",
      nextSession: "June 12, 10:00 AM",
      progress: "On Track",
      progressColor: "green"
    },
    {
      id: 2,
      name: "Michael Johnson",
      email: "michael.j@example.com",
      avatar: "/assets/avatars/user-2.jpg",
      plan: "Muscle Building",
      startDate: "Apr 3, 2023",
      nextSession: "June 14, 5:30 PM",
      progress: "Ahead",
      progressColor: "green"
    },
    {
      id: 3,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      avatar: "/assets/avatars/user-3.jpg",
      plan: "General Fitness",
      startDate: "May 10, 2023",
      nextSession: "June 13, 3:00 PM",
      progress: "Behind",
      progressColor: "amber"
    },
    {
      id: 4,
      name: "Robert Davis",
      email: "robert.d@example.com",
      avatar: "/assets/avatars/user-4.jpg",
      plan: "Strength Training",
      startDate: "Feb 22, 2023",
      nextSession: "June 15, 4:15 PM",
      progress: "On Track",
      progressColor: "green"
    }
  ];
  
  const pastClients = [
    {
      id: 5,
      name: "Emily Brown",
      email: "emily.b@example.com",
      avatar: "/assets/avatars/user-5.jpg",
      plan: "Weight Loss",
      endDate: "May 1, 2023",
      totalSessions: 24,
      result: "Goal Achieved",
      resultColor: "green"
    },
    {
      id: 6,
      name: "Thomas Wilson",
      email: "thomas.w@example.com",
      avatar: "/assets/avatars/user-6.jpg",
      plan: "Muscle Building",
      endDate: "Apr 15, 2023",
      totalSessions: 18,
      result: "Partial Success",
      resultColor: "amber"
    }
  ];
  
  const pendingClients = [
    {
      id: 7,
      name: "Lisa Taylor",
      email: "lisa.t@example.com",
      avatar: "/assets/avatars/user-7.jpg",
      requestedPlan: "Weight Loss",
      requestDate: "June 5, 2023",
      notes: "Looking to lose 20 pounds in 3 months"
    },
    {
      id: 8,
      name: "James Martinez",
      email: "james.m@example.com",
      avatar: "/assets/avatars/user-8.jpg",
      requestedPlan: "Strength Training",
      requestDate: "June 6, 2023",
      notes: "Wants to focus on upper body strength"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">Manage and track your clients' progress</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search clients..." className="pl-8 w-full sm:w-[200px]" />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Client
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Clients ({activeClients.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending Requests ({pendingClients.length})</TabsTrigger>
          <TabsTrigger value="past">Past Clients ({pastClients.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="pt-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Active Clients</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
              <CardDescription>Clients currently on a training plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                {/* Table Header */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-4 bg-muted/50 text-sm font-medium hidden md:grid">
                  <div className="md:col-span-3">Client</div>
                  <div className="md:col-span-2">Plan</div>
                  <div className="md:col-span-2">Start Date</div>
                  <div className="md:col-span-2">Next Session</div>
                  <div className="md:col-span-2">Progress</div>
                  <div className="md:col-span-1"></div>
                </div>
                
                {/* Client Rows */}
                <div className="divide-y">
                  {activeClients.map((client) => (
                    <div key={client.id} className="grid grid-cols-1 gap-2 p-4 md:grid-cols-12 md:gap-0 md:items-center">
                      <div className="md:col-span-3 flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={client.avatar} alt={client.name} />
                          <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-sm text-muted-foreground hidden md:block">{client.email}</div>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <Badge variant="outline">{client.plan}</Badge>
                      </div>
                      <div className="md:col-span-2 text-sm">{client.startDate}</div>
                      <div className="md:col-span-2 text-sm">{client.nextSession}</div>
                      <div className="md:col-span-2">
                        <Badge variant="outline" className={`bg-${client.progressColor}-50 text-${client.progressColor}-600 border-${client.progressColor}-200`}>
                          {client.progress}
                        </Badge>
                      </div>
                      <div className="md:col-span-1 flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Calendar className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="pt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Pending Client Requests</CardTitle>
              <CardDescription>Clients waiting for your approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingClients.map((client) => (
                  <div key={client.id} className="border rounded-md p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={client.avatar} alt={client.name} />
                          <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-sm text-muted-foreground">{client.email}</div>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p>Requested: <span className="font-medium">{client.requestDate}</span></p>
                        <p>Plan: <Badge variant="outline">{client.requestedPlan}</Badge></p>
                      </div>
                    </div>
                    <div className="mt-3 border-t pt-3">
                      <p className="text-sm text-muted-foreground mb-3">Client Note:</p>
                      <p className="text-sm italic">{client.notes}</p>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <Button variant="outline">Decline</Button>
                      <Button>Accept Request</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="past" className="pt-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Past Clients</CardTitle>
              <CardDescription>Completed training plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                {/* Table Header */}
                <div className="grid grid-cols-1 md:grid-cols-12 p-4 bg-muted/50 text-sm font-medium hidden md:grid">
                  <div className="md:col-span-3">Client</div>
                  <div className="md:col-span-2">Plan</div>
                  <div className="md:col-span-2">End Date</div>
                  <div className="md:col-span-2">Total Sessions</div>
                  <div className="md:col-span-2">Result</div>
                  <div className="md:col-span-1"></div>
                </div>
                
                {/* Client Rows */}
                <div className="divide-y">
                  {pastClients.map((client) => (
                    <div key={client.id} className="grid grid-cols-1 gap-2 p-4 md:grid-cols-12 md:gap-0 md:items-center">
                      <div className="md:col-span-3 flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={client.avatar} alt={client.name} />
                          <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-sm text-muted-foreground hidden md:block">{client.email}</div>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <Badge variant="outline">{client.plan}</Badge>
                      </div>
                      <div className="md:col-span-2 text-sm">{client.endDate}</div>
                      <div className="md:col-span-2 text-sm">{client.totalSessions}</div>
                      <div className="md:col-span-2">
                        <Badge variant="outline" className={`bg-${client.resultColor}-50 text-${client.resultColor}-600 border-${client.resultColor}-200`}>
                          {client.result}
                        </Badge>
                      </div>
                      <div className="md:col-span-1 flex justify-end">
                        <Button variant="ghost" size="icon">
                          <Activity className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrainerClientsPage;
