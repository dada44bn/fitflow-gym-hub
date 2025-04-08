
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Plus, MoreHorizontal, BarChart, Users, Star, Phone, Mail } from 'lucide-react';

const AdminTrainersPage: React.FC = () => {
  // Sample trainers data
  const trainers = [
    {
      id: 1,
      name: "Michael Johnson",
      email: "michael@fitflow.com",
      phone: "+1 (555) 123-4567",
      avatar: "/assets/avatars/trainer-1.jpg",
      specialties: ["Weight Loss", "Strength Training"],
      clients: 15,
      rating: 4.8,
      status: "Active"
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@fitflow.com",
      phone: "+1 (555) 987-6543",
      avatar: "/assets/avatars/trainer-2.jpg",
      specialties: ["Yoga", "Pilates", "Functional Training"],
      clients: 12,
      rating: 4.9,
      status: "Active"
    },
    {
      id: 3,
      name: "James Taylor",
      email: "james@fitflow.com",
      phone: "+1 (555) 456-7890",
      avatar: "/assets/avatars/trainer-3.jpg",
      specialties: ["Bodybuilding", "Nutrition"],
      clients: 8,
      rating: 4.7,
      status: "Active"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@fitflow.com",
      phone: "+1 (555) 234-5678",
      avatar: "/assets/avatars/trainer-4.jpg",
      specialties: ["HIIT", "Cardio", "Group Training"],
      clients: 20,
      rating: 4.6,
      status: "Active"
    },
    {
      id: 5,
      name: "David Miller",
      email: "david@fitflow.com",
      phone: "+1 (555) 876-5432",
      avatar: "/assets/avatars/trainer-5.jpg",
      specialties: ["Sports Performance", "Rehabilitation"],
      clients: 6,
      rating: 4.8,
      status: "On Leave"
    },
  ];

  // State for search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Filter trainers based on search query
  const filteredTrainers = trainers.filter(
    trainer => trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
               trainer.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
               trainer.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trainers</h1>
          <p className="text-muted-foreground">Manage your fitness professionals</p>
        </div>
        
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Trainer
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">5</CardTitle>
            <CardDescription>Total Trainers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} />
              <span>Managing 61 total clients</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">4.76</CardTitle>
            <CardDescription>Average Rating</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star size={16} className="text-amber-500" />
              <span>Based on client feedback</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">12.2</CardTitle>
            <CardDescription>Avg. Clients per Trainer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart size={16} />
              <span>+2.5% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>All Trainers</CardTitle>
              <CardDescription>Manage your fitness professionals</CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search trainers..." 
                  className="pl-8 w-full sm:w-[200px]" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="py-3 px-4 text-left text-sm font-medium">Trainer</th>
                    <th className="py-3 px-4 text-left text-sm font-medium">Specialties</th>
                    <th className="py-3 px-4 text-left text-sm font-medium">Clients</th>
                    <th className="py-3 px-4 text-left text-sm font-medium">Rating</th>
                    <th className="py-3 px-4 text-left text-sm font-medium">Status</th>
                    <th className="py-3 px-4 text-right text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredTrainers.map((trainer) => (
                    <tr key={trainer.id} className="bg-white hover:bg-muted/20">
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={trainer.avatar} alt={trainer.name} />
                            <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{trainer.name}</div>
                            <div className="text-sm text-muted-foreground">{trainer.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {trainer.specialties.map((specialty, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-sm">
                        {trainer.clients} active clients
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span>{trainer.rating.toFixed(1)}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <Badge variant="outline" className={`
                          ${trainer.status === 'Active' 
                            ? 'bg-green-50 text-green-600 border-green-200' 
                            : 'bg-amber-50 text-amber-600 border-amber-200'}
                        `}>
                          {trainer.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredTrainers.length === 0 && (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">No trainers found matching your search criteria.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTrainersPage;
