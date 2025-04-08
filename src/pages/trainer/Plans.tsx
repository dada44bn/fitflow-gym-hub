
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Dumbbell, Copy, Edit, Trash2, Save, Image, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TrainerPlansPage: React.FC = () => {
  // Sample training plans data
  const myPlans = [
    {
      id: 1,
      title: "Weight Loss Accelerator",
      type: "Weight Loss",
      weeks: 8,
      sessionsPerWeek: 4,
      clients: 7,
      createdAt: "Apr 15, 2023",
      category: "premium"
    },
    {
      id: 2,
      title: "Strength Builder Pro",
      type: "Strength Training",
      weeks: 12,
      sessionsPerWeek: 5,
      clients: 4,
      createdAt: "Mar 22, 2023",
      category: "standard"
    },
    {
      id: 3,
      title: "HIIT Cardio Blast",
      type: "Cardio",
      weeks: 6,
      sessionsPerWeek: 3,
      clients: 5,
      createdAt: "May 5, 2023",
      category: "premium"
    },
    {
      id: 4,
      title: "Beginner Fitness Starter",
      type: "General Fitness",
      weeks: 4,
      sessionsPerWeek: 3,
      clients: 9,
      createdAt: "May 30, 2023",
      category: "standard"
    }
  ];
  
  const templates = [
    {
      id: 101,
      title: "12-Week Body Transformation",
      type: "Weight Loss",
      difficulty: "Intermediate",
      category: "Featured"
    },
    {
      id: 102,
      title: "Strength Foundation",
      type: "Strength Training",
      difficulty: "Beginner",
      category: "Popular"
    },
    {
      id: 103,
      title: "Advanced Bodybuilding",
      type: "Muscle Building",
      difficulty: "Advanced",
      category: "Featured"
    },
    {
      id: 104,
      title: "Core and Mobility",
      type: "Flexibility",
      difficulty: "All Levels",
      category: "New"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Training Plans</h1>
          <p className="text-muted-foreground">Create and manage your training programs</p>
        </div>
        
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Plan
        </Button>
      </div>

      <Tabs defaultValue="my-plans">
        <TabsList>
          <TabsTrigger value="my-plans">My Plans</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="create-new">Create New Plan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-plans" className="pt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myPlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center">
                      <Dumbbell className="mr-2 h-5 w-5 text-fitflow-primary" />
                      {plan.title}
                    </CardTitle>
                    <Badge variant={plan.category === "premium" ? "default" : "outline"}>
                      {plan.category}
                    </Badge>
                  </div>
                  <CardDescription>
                    {plan.type} • {plan.weeks} weeks • {plan.sessionsPerWeek} sessions/week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">Active clients:</span>
                      <span className="font-medium">{plan.clients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Created:</span>
                      <span>{plan.createdAt}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button>Assign to Client</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="templates" className="pt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle>{template.title}</CardTitle>
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <CardDescription>
                    {template.type} • {template.difficulty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 rounded-md bg-muted flex items-center justify-center">
                    <Image className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Preview</Button>
                  <Button>Use Template</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="create-new" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Training Plan</CardTitle>
              <CardDescription>Design a customized workout program</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="plan-title">Plan Title</Label>
                  <Input id="plan-title" placeholder="e.g. 8-Week Weight Loss Program" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plan-type">Plan Type</Label>
                  <select
                    id="plan-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Weight Loss</option>
                    <option>Strength Training</option>
                    <option>Muscle Building</option>
                    <option>Cardio</option>
                    <option>Flexibility</option>
                    <option>General Fitness</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plan-duration">Duration (Weeks)</Label>
                  <Input id="plan-duration" type="number" min="1" placeholder="8" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sessions-per-week">Sessions Per Week</Label>
                  <Input id="sessions-per-week" type="number" min="1" max="7" placeholder="3" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <select
                    id="difficulty"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>All Levels</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>Standard</option>
                    <option>Premium</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Describe your training plan..."
                />
              </div>
              <div className="space-y-3">
                <Label>Workout Structure</Label>
                <p className="text-sm text-muted-foreground">Define your workout schedule and exercises</p>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Week 1</h3>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-3 w-3" />
                      Add Session
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Session 1: Upper Body</h4>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-red-500">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm space-y-1">
                        <div>• Bench Press: 3 sets x 10 reps</div>
                        <div>• Pull-ups: 3 sets x 8 reps</div>
                        <div>• Shoulder Press: 3 sets x 12 reps</div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3 border-dashed flex items-center justify-center h-16">
                      <Button variant="ghost" className="text-muted-foreground">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Another Session
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Week
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save as Draft
              </Button>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Create Plan
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrainerPlansPage;
