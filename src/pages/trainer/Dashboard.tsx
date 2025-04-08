
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  DollarSign,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Clock,
  User,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getTrainerClients, ClientProgress } from "@/lib/data";
import { getCurrentUser } from "@/lib/auth";

const TrainerDashboard: React.FC = () => {
  const [clientsData, setClientsData] = useState<ClientProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const currentUser = getCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        const clients = await getTrainerClients(currentUser.id);
        setClientsData(clients);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  // Mock earnings data - in a real app this would come from the API
  const earningsData = {
    monthly: 2450,
    lastMonth: 2200,
    percentChange: 11.36,
    sessionsCompleted: 32,
    nextPaymentDate: "June 30, 2023",
  };

  // Mock client requests - in a real app this would come from the API
  const clientRequests = [
    {
      id: "1",
      name: "James Wilson",
      plan: "Weight Loss Program",
      date: "Jun 10, 2023",
      avatar: "/assets/avatars/client-1.jpg",
    },
    {
      id: "2",
      name: "Maria Garcia",
      plan: "Strength Training",
      date: "Jun 12, 2023",
      avatar: "/assets/avatars/client-2.jpg",
    },
  ];

  // Mock upcoming sessions - in a real app this would come from the API
  const upcomingSessions = [
    {
      id: "1",
      clientName: "John Doe",
      time: "Today, 2:00 PM",
      duration: "60 min",
      type: "Personal Training",
      avatar: "/assets/avatars/user-1.jpg",
    },
    {
      id: "2",
      clientName: "Emma Wilson",
      time: "Today, 4:00 PM",
      duration: "45 min",
      type: "HIIT Session",
      avatar: "/assets/avatars/client-1.jpg",
    },
    {
      id: "3",
      clientName: "David Miller",
      time: "Tomorrow, 10:00 AM",
      duration: "60 min",
      type: "Personal Training",
      avatar: "/assets/avatars/client-2.jpg",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {currentUser?.name}
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your clients and schedule
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Clients */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Clients
                </p>
                <h3 className="text-2xl font-bold mt-1">{clientsData.length}</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-full text-fitflow-primary">
                <Users size={20} />
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600 mt-4">
              <ArrowUpRight size={14} className="mr-1" />
              <span>+2 this month</span>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Earnings */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Monthly Earnings
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  ${earningsData.monthly}
                </h3>
              </div>
              <div className="p-2 bg-green-50 rounded-full text-green-600">
                <DollarSign size={20} />
              </div>
            </div>
            <div className="flex items-center text-sm text-green-600 mt-4">
              <ArrowUpRight size={14} className="mr-1" />
              <span>+{earningsData.percentChange}% from last month</span>
            </div>
          </CardContent>
        </Card>

        {/* Completed Sessions */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Completed Sessions
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {earningsData.sessionsCompleted}
                </h3>
              </div>
              <div className="p-2 bg-purple-50 rounded-full text-purple-600">
                <CheckCircle2 size={20} />
              </div>
            </div>
            <Progress value={80} className="mt-4 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              80% of monthly target
            </p>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card className="hover-scale">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Upcoming Sessions
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {upcomingSessions.length}
                </h3>
              </div>
              <div className="p-2 bg-orange-50 rounded-full text-orange-600">
                <Calendar size={20} />
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mt-4">
              <Clock size={14} className="mr-1" />
              <span>Next: Today at 2:00 PM</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Client Requests */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle>Client Requests</CardTitle>
            <CardDescription>Approve or decline new training requests</CardDescription>
          </CardHeader>
          <CardContent>
            {clientRequests.length > 0 ? (
              <div className="space-y-4">
                {clientRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-3 border rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={request.avatar} alt={request.name} />
                        <AvatarFallback>
                          {request.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{request.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {request.plan}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Requested: {request.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <XCircle size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-green-500 hover:text-green-600 hover:bg-green-50"
                      >
                        <CheckCircle2 size={18} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <User className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium mb-1">No client requests</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  You'll be notified when new clients request your services
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-3">
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your upcoming training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center gap-4 p-3 border rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <Avatar>
                      <AvatarImage src={session.avatar} alt={session.clientName} />
                      <AvatarFallback>
                        {session.clientName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">
                      {session.clientName}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {session.type} - {session.duration}
                    </p>
                  </div>
                  <div className="text-sm text-right whitespace-nowrap">
                    <p className="font-medium">{session.time}</p>
                    <Button variant="link" size="sm" className="p-0 h-auto text-fitflow-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Calendar size={16} className="mr-2" />
                View Full Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Client Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Client Progress</CardTitle>
          <CardDescription>Review your clients' recent activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 bg-muted/50 font-medium">
              <div className="md:col-span-3">Client</div>
              <div className="md:col-span-4">Recent Activity</div>
              <div className="md:col-span-3">Progress</div>
              <div className="md:col-span-2">Last Active</div>
            </div>
            <div className="divide-y">
              {clientsData.map((client) => (
                <div
                  key={client.userId}
                  className="grid grid-cols-1 gap-2 md:grid-cols-12 md:gap-0 p-4 items-center"
                >
                  <div className="md:col-span-3 flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{client.userName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>{client.userName}</div>
                  </div>
                  <div className="md:col-span-4 text-sm">
                    {client.recentActivity}
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2">
                      <Progress
                        value={(client.completedSessions / client.totalSessions) * 100}
                        className="h-2"
                      />
                      <span className="text-sm whitespace-nowrap">
                        {client.completedSessions}/{client.totalSessions}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-sm text-muted-foreground">
                    {client.lastActive}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainerDashboard;
