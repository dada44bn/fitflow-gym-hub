
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Plus, MoreHorizontal, Download, MailPlus } from 'lucide-react';

const AdminMembersPage: React.FC = () => {
  // Sample members data
  const activeMembers = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "jane@example.com",
      avatar: "/assets/avatars/user-1.jpg",
      joined: "Mar 15, 2023",
      plan: "Premium",
      status: "Active"
    },
    {
      id: 2,
      name: "Robert Fox",
      email: "robert@example.com",
      avatar: "/assets/avatars/user-2.jpg",
      joined: "Jan 10, 2023",
      plan: "Basic",
      status: "Active"
    },
    {
      id: 3,
      name: "Esther Howard",
      email: "esther@example.com",
      avatar: "/assets/avatars/user-3.jpg",
      joined: "Apr 22, 2023",
      plan: "Premium",
      status: "Active"
    },
    {
      id: 4,
      name: "Jenny Wilson",
      email: "jenny@example.com",
      avatar: "/assets/avatars/user-4.jpg",
      joined: "Feb 8, 2023",
      plan: "Annual",
      status: "Active"
    },
    {
      id: 5,
      name: "Brooklyn Simmons",
      email: "brooklyn@example.com",
      avatar: "/assets/avatars/user-5.jpg",
      joined: "May 5, 2023",
      plan: "Basic",
      status: "Active"
    },
  ];
  
  const inactiveMembers = [
    {
      id: 6,
      name: "Leslie Alexander",
      email: "leslie@example.com",
      avatar: "/assets/avatars/user-6.jpg",
      joined: "Nov 10, 2022",
      plan: "Premium",
      status: "Expired",
      expiredDate: "Apr 10, 2023"
    },
    {
      id: 7,
      name: "Guy Hawkins",
      email: "guy@example.com",
      avatar: "/assets/avatars/user-7.jpg",
      joined: "Dec 5, 2022",
      plan: "Basic",
      status: "Cancelled",
      expiredDate: "May 5, 2023"
    },
    {
      id: 8,
      name: "Cameron Williamson",
      email: "cameron@example.com",
      avatar: "/assets/avatars/user-8.jpg",
      joined: "Jan 20, 2022",
      plan: "Annual",
      status: "Expired",
      expiredDate: "Jan 20, 2023"
    }
  ];

  // State for search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Filter members based on search query
  const filteredActiveMembers = activeMembers.filter(
    member => member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
              member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredInactiveMembers = inactiveMembers.filter(
    member => member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
              member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Members</h1>
          <p className="text-muted-foreground">Manage gym members and their subscriptions</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>All Members</CardTitle>
              <CardDescription>View and manage gym memberships</CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search members..." 
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
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">
                Active ({filteredActiveMembers.length})
              </TabsTrigger>
              <TabsTrigger value="inactive">
                Inactive ({filteredInactiveMembers.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="active">
              <div className="rounded-md border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50 border-b">
                        <th className="py-3 px-4 text-left text-sm font-medium">Member</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Joined</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Plan</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Status</th>
                        <th className="py-3 px-4 text-right text-sm font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredActiveMembers.map((member) => (
                        <tr key={member.id} className="bg-white hover:bg-muted/20">
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{member.name}</div>
                                <div className="text-sm text-muted-foreground">{member.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap text-sm">{member.joined}</td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <Badge variant={member.plan === "Premium" ? "default" : "outline"}>
                              {member.plan}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                              {member.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <MailPlus className="h-4 w-4" />
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
                {filteredActiveMembers.length === 0 && (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No members found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="inactive">
              <div className="rounded-md border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50 border-b">
                        <th className="py-3 px-4 text-left text-sm font-medium">Member</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Joined</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Plan</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-medium">Expired</th>
                        <th className="py-3 px-4 text-right text-sm font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredInactiveMembers.map((member) => (
                        <tr key={member.id} className="bg-white hover:bg-muted/20">
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{member.name}</div>
                                <div className="text-sm text-muted-foreground">{member.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap text-sm">{member.joined}</td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <Badge variant="outline">
                              {member.plan}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <Badge variant="outline" className={`
                              ${member.status === 'Expired' 
                                ? 'bg-amber-50 text-amber-600 border-amber-200' 
                                : 'bg-red-50 text-red-600 border-red-200'}
                            `}>
                              {member.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap text-sm">{member.expiredDate}</td>
                          <td className="py-3 px-4 whitespace-nowrap text-right">
                            <Button variant="outline" size="sm">
                              Renew
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredInactiveMembers.length === 0 && (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No inactive members found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMembersPage;
