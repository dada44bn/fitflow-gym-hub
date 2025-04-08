
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, CalendarCheck, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const EventsPage: React.FC = () => {
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "HIIT Bootcamp",
      description: "High-intensity interval training to boost your metabolism",
      date: "June 15, 2023",
      time: "10:00 AM",
      duration: "45 min",
      location: "Main Studio",
      instructor: "Sarah Johnson",
      capacity: 20,
      enrolled: 14,
      category: "Fitness Class"
    },
    {
      id: 2,
      title: "Yoga for Beginners",
      description: "Learn the fundamentals of yoga in a relaxed environment",
      date: "June 16, 2023",
      time: "6:00 PM",
      duration: "60 min",
      location: "Yoga Studio",
      instructor: "Michael Chen",
      capacity: 15,
      enrolled: 8,
      category: "Yoga"
    },
    {
      id: 3,
      title: "Nutrition Workshop",
      description: "Learn how to fuel your body for optimal performance",
      date: "June 18, 2023",
      time: "1:00 PM",
      duration: "90 min",
      location: "Conference Room",
      instructor: "Dr. Emily Williams",
      capacity: 30,
      enrolled: 22,
      category: "Workshop"
    }
  ];
  
  const popularEvents = [
    {
      id: 4,
      title: "CrossFit Challenge",
      description: "Test your limits with our monthly CrossFit challenge",
      date: "June 20, 2023",
      time: "5:00 PM",
      duration: "75 min",
      location: "CrossFit Arena",
      instructor: "James Peterson",
      capacity: 25,
      enrolled: 23,
      category: "Challenge"
    },
    {
      id: 5,
      title: "Zumba Party",
      description: "Dance your way to fitness with Latin-inspired moves",
      date: "June 17, 2023",
      time: "7:00 PM",
      duration: "60 min",
      location: "Main Studio",
      instructor: "Sofia Rodriguez",
      capacity: 30,
      enrolled: 28,
      category: "Dance"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events & Classes</h1>
          <p className="text-muted-foreground">Discover upcoming events and classes</p>
        </div>
        <Button className="flex items-center gap-2">
          <Filter size={16} />
          Filter Events
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>Monthly overview of events</CardDescription>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center border rounded-md bg-gray-50">
            <p className="text-muted-foreground">Calendar view placeholder</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline">
              <CalendarCheck className="mr-2 h-4 w-4" />
              View Full Calendar
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Enrollments</CardTitle>
            <CardDescription>Events you've signed up for</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-md">
                <div className="font-medium">Yoga for Beginners</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar size={14} className="mr-1" />
                  June 16, 6:00 PM
                </div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="font-medium">Nutrition Workshop</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar size={14} className="mr-1" />
                  June 18, 1:00 PM
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="popular">Popular Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant="outline">{event.category}</Badge>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.time} ({event.duration})</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.enrolled}/{event.capacity} enrolled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant="outline">{event.category}</Badge>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.time} ({event.duration})</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={16} className="mr-2 text-muted-foreground" />
                      <span>{event.enrolled}/{event.capacity} enrolled</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsPage;
