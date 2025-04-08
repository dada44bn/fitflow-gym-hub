
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays, Clock, Plus, ChevronLeft, ChevronRight, User, Video, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TrainerSchedulePage: React.FC = () => {
  // Sample schedule data
  const todaySessions = [
    {
      id: 1,
      time: "9:00 AM - 10:00 AM",
      clientName: "John Smith",
      clientAvatar: "/assets/avatars/user-1.jpg",
      type: "Personal Training",
      location: "Main Gym Floor",
      status: "Confirmed",
    },
    {
      id: 2,
      time: "11:30 AM - 12:30 PM",
      clientName: "Emily Johnson",
      clientAvatar: "/assets/avatars/user-2.jpg",
      type: "Weight Training",
      location: "Strength Zone",
      status: "Confirmed",
    },
    {
      id: 3,
      time: "2:00 PM - 3:00 PM",
      clientName: "Michael Brown",
      clientAvatar: "/assets/avatars/user-3.jpg",
      type: "HIIT Session",
      location: "Studio B",
      status: "Pending",
    },
    {
      id: 4,
      time: "5:30 PM - 6:30 PM",
      clientName: "Sarah Wilson",
      clientAvatar: "/assets/avatars/user-4.jpg",
      type: "Personal Training",
      location: "Online (Zoom)",
      status: "Confirmed",
    }
  ];
  
  const weekSessions = [
    {
      id: 5,
      day: "Monday",
      date: "June 12",
      sessions: 4
    },
    {
      id: 6,
      day: "Tuesday",
      date: "June 13",
      sessions: 3
    },
    {
      id: 7,
      day: "Wednesday",
      date: "June 14",
      sessions: 5
    },
    {
      id: 8,
      day: "Thursday",
      date: "June 15",
      sessions: 2
    },
    {
      id: 9,
      day: "Friday",
      date: "June 16",
      sessions: 3
    },
    {
      id: 10,
      day: "Saturday",
      date: "June 17",
      sessions: 1
    },
    {
      id: 11,
      day: "Sunday",
      date: "June 18",
      sessions: 0
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
          <p className="text-muted-foreground">Manage your training sessions</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline">
            Available Hours
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Session
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Calendar View</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-sm font-medium">June 2023</div>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardDescription>Your monthly schedule overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] border rounded-md overflow-hidden">
              <div className="grid grid-cols-7 text-sm font-medium bg-muted/50 border-b">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-3 text-center">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 grid-rows-5 h-full">
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 3; // Start from previous month
                  const isCurrentMonth = day > 0 && day <= 30;
                  const isToday = day === 10; // Let's say today is the 10th
                  
                  return (
                    <div 
                      key={i} 
                      className={`border p-1 h-24 ${
                        isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400'
                      } ${isToday ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex justify-between">
                        <span className={`text-sm ${isToday ? 'font-bold text-blue-600' : ''}`}>
                          {isCurrentMonth ? day : day <= 0 ? 31 + day : day - 30}
                        </span>
                        {isCurrentMonth && Math.random() > 0.7 && (
                          <Badge variant="secondary" className="text-xs">
                            {Math.floor(Math.random() * 5) + 1}
                          </Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <CalendarDays className="mr-2 h-5 w-5 text-fitflow-primary" />
              This Week
            </CardTitle>
            <CardDescription>Your upcoming sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {weekSessions.map((day) => (
                <div key={day.id} className="flex items-center justify-between border-b last:border-0 py-2">
                  <div>
                    <div className="font-medium">{day.day}</div>
                    <div className="text-xs text-muted-foreground">{day.date}</div>
                  </div>
                  {day.sessions > 0 ? (
                    <Badge variant="secondary">
                      {day.sessions} {day.sessions === 1 ? 'session' : 'sessions'}
                    </Badge>
                  ) : (
                    <span className="text-xs text-muted-foreground">No sessions</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-fitflow-primary" />
              Today's Schedule
            </CardTitle>
            <div className="text-sm font-medium">June 10, 2023</div>
          </div>
          <CardDescription>Your training sessions for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todaySessions.map((session) => (
              <div 
                key={session.id} 
                className={`border rounded-md p-4 ${
                  session.status === 'Pending' ? 'bg-amber-50 border-amber-100' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={session.clientAvatar} alt={session.clientName} />
                      <AvatarFallback>{session.clientName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{session.clientName}</span>
                        {session.status === 'Pending' && (
                          <Badge variant="outline" className="ml-2 text-xs bg-amber-50 border-amber-200 text-amber-600">
                            {session.status}
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{session.type}</div>
                    </div>
                  </div>
                  <div className="text-sm flex flex-col sm:items-end">
                    <div className="font-medium">{session.time}</div>
                    <div className="flex items-center text-muted-foreground">
                      {session.location.includes('Online') ? (
                        <Video className="h-3 w-3 mr-1" />
                      ) : (
                        <MapPin className="h-3 w-3 mr-1" />
                      )}
                      {session.location}
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <User className="mr-1 h-4 w-4" />
                    Client Details
                  </Button>
                  <Button size="sm">Start Session</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainerSchedulePage;
