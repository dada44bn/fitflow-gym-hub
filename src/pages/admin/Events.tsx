
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Calendar, Clock, Users, CalendarDays, MapPin, Trash2, Edit, Tag, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AdminEventsPage: React.FC = () => {
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "HIIT Bootcamp",
      description: "High-intensity interval training to boost your metabolism",
      date: "June 15, 2023",
      time: "10:00 AM - 11:00 AM",
      location: "Main Studio",
      instructor: "Sarah Williams",
      capacity: 20,
      enrolled: 14,
      category: "Class",
      featured: true
    },
    {
      id: 2,
      title: "Yoga for Beginners",
      description: "Learn the fundamentals of yoga in a relaxed environment",
      date: "June 16, 2023",
      time: "6:00 PM - 7:00 PM",
      location: "Yoga Studio",
      instructor: "Michael Chen",
      capacity: 15,
      enrolled: 8,
      category: "Class",
      featured: false
    },
    {
      id: 3,
      title: "Nutrition Workshop",
      description: "Learn how to fuel your body for optimal performance",
      date: "June 18, 2023",
      time: "1:00 PM - 2:30 PM",
      location: "Conference Room",
      instructor: "Dr. Emily Williams",
      capacity: 30,
      enrolled: 22,
      category: "Workshop",
      featured: true
    },
    {
      id: 4,
      title: "Summer Fitness Challenge Launch",
      description: "Kick off our 6-week summer fitness challenge",
      date: "June 20, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Main Gym Floor",
      instructor: "Team",
      capacity: 100,
      enrolled: 56,
      category: "Event",
      featured: true
    }
  ];
  
  const pastEvents = [
    {
      id: 5,
      title: "CrossFit Competition",
      description: "Monthly CrossFit competition for members",
      date: "May 28, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "CrossFit Arena",
      instructor: "James Peterson",
      capacity: 40,
      enrolled: 35,
      category: "Competition",
      featured: false
    },
    {
      id: 6,
      title: "Healthy Cooking Demonstration",
      description: "Learn to cook healthy meals with our nutrition expert",
      date: "May 20, 2023",
      time: "3:00 PM - 4:30 PM",
      location: "Conference Room",
      instructor: "Lisa Chen",
      capacity: 25,
      enrolled: 23,
      category: "Workshop",
      featured: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">Manage gym events, classes, and workshops</p>
        </div>
        
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">4</CardTitle>
            <CardDescription>Upcoming Events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>Next: HIIT Bootcamp (Jun 15)</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">100</CardTitle>
            <CardDescription>Current Enrollments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} />
              <span>Across all upcoming events</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">3</CardTitle>
            <CardDescription>Featured Events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tag size={16} />
              <span>Highlighted on the homepage</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Event Management</CardTitle>
              <CardDescription>Organize and schedule gym events</CardDescription>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                Calendar View
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="create">Create Event</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border rounded-md p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium">{event.title}</h3>
                          {event.featured && (
                            <Badge className="bg-amber-500">Featured</Badge>
                          )}
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        <p className="text-muted-foreground mt-1">{event.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="text-sm">Instructor: <span className="font-medium">{event.instructor}</span></div>
                      <div className="text-sm flex items-center gap-2">
                        <Users size={16} className="text-muted-foreground" />
                        <span className="font-medium">{event.enrolled}/{event.capacity}</span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-fitflow-primary rounded-full" 
                            style={{ width: `${(event.enrolled / event.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {Math.round((event.enrolled / event.capacity) * 100)}% full
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <div key={event.id} className="border rounded-md p-4 bg-gray-50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium">{event.title}</h3>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        <p className="text-muted-foreground mt-1">{event.description}</p>
                      </div>
                      <Badge variant="outline" className="bg-gray-100">Completed</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="text-sm">Instructor: <span className="font-medium">{event.instructor}</span></div>
                      <div className="text-sm flex items-center gap-2">
                        <Users size={16} className="text-muted-foreground" />
                        <span className="font-medium">{event.enrolled}/{event.capacity}</span>
                        <span className="text-xs text-muted-foreground">
                          {Math.round((event.enrolled / event.capacity) * 100)}% attended
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="create">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input id="event-title" placeholder="e.g. Yoga for Beginners" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-category">Event Category</Label>
                    <select
                      id="event-category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option>Class</option>
                      <option>Workshop</option>
                      <option>Competition</option>
                      <option>Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-date">Date</Label>
                    <Input id="event-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-time">Time</Label>
                    <div className="flex gap-2">
                      <Input id="event-start-time" type="time" />
                      <span className="flex items-center">to</span>
                      <Input id="event-end-time" type="time" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-location">Location</Label>
                    <Input id="event-location" placeholder="e.g. Main Studio" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-instructor">Instructor</Label>
                    <Input id="event-instructor" placeholder="e.g. Sarah Williams" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-capacity">Capacity</Label>
                    <Input id="event-capacity" type="number" min="1" placeholder="e.g. 20" />
                  </div>
                  <div className="space-y-2 flex items-center">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="featured" className="h-4 w-4 rounded border-gray-300 text-fitflow-primary focus:ring-fitflow-primary" />
                      <Label htmlFor="featured">Featured Event</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-description">Description</Label>
                  <textarea
                    id="event-description"
                    className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe the event..."
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Create Event</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEventsPage;
