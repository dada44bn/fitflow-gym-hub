
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dumbbell, Download, Clock, Calendar, Star } from 'lucide-react';

const TrainingPlansPage: React.FC = () => {
  // Sample training plans data
  const beginnerPlans = [
    {
      id: 1,
      title: "Weight Loss Basics",
      description: "Perfect for beginners looking to shed some pounds",
      duration: "4 weeks",
      difficulty: "Easy",
      sessions: 3,
      rating: 4.8,
      popularity: "High"
    },
    {
      id: 2,
      title: "Strength Foundations",
      description: "Build your strength from the ground up",
      duration: "6 weeks",
      difficulty: "Easy",
      sessions: 3,
      rating: 4.6,
      popularity: "Medium"
    }
  ];
  
  const intermediatePlans = [
    {
      id: 3,
      title: "Muscle Builder",
      description: "Sculpt your physique with this comprehensive plan",
      duration: "8 weeks",
      difficulty: "Medium",
      sessions: 4,
      rating: 4.9,
      popularity: "Very High"
    },
    {
      id: 4,
      title: "Cardio Challenge",
      description: "Boost your endurance and cardiovascular health",
      duration: "6 weeks",
      difficulty: "Medium",
      sessions: 5,
      rating: 4.5,
      popularity: "High"
    }
  ];
  
  const advancedPlans = [
    {
      id: 5,
      title: "Elite Performance",
      description: "Take your fitness to the next level",
      duration: "12 weeks",
      difficulty: "Hard",
      sessions: 5,
      rating: 4.9,
      popularity: "Medium"
    },
    {
      id: 6,
      title: "Power & Strength",
      description: "Advanced program for serious strength gains",
      duration: "10 weeks",
      difficulty: "Hard",
      sessions: 6,
      rating: 4.7,
      popularity: "High"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Training Plans</h1>
        <p className="text-muted-foreground">Browse our professionally designed training programs</p>
      </div>

      <Tabs defaultValue="beginner">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="beginner" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {beginnerPlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-fitflow-primary" />
                    {plan.title}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.sessions} sessions/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>{plan.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Popularity:</span>
                      <span>{plan.popularity}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Learn More</Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Get Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="intermediate" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {intermediatePlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-fitflow-primary" />
                    {plan.title}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.sessions} sessions/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>{plan.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Popularity:</span>
                      <span>{plan.popularity}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Learn More</Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Get Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {advancedPlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-fitflow-primary" />
                    {plan.title}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{plan.sessions} sessions/week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span>{plan.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Popularity:</span>
                      <span>{plan.popularity}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Learn More</Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Get Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrainingPlansPage;
