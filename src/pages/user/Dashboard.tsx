
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Dumbbell, Target, Trophy, Award, ArrowRight } from 'lucide-react';
import { 
  getUserSubscription, 
  getUserGoals, 
  getUserTrainingPlan,
  getGymEvents,
  Subscription, 
  FitnessGoal, 
  TrainingPlan,
  GymEvent
} from '@/lib/data';
import { getCurrentUser } from '@/lib/auth';

const UserDashboard: React.FC = () => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [goals, setGoals] = useState<FitnessGoal[]>([]);
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | null>(null);
  const [events, setEvents] = useState<GymEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const currentUser = getCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        const [userSubscription, userGoals, userTrainingPlan, gymEvents] = await Promise.all([
          getUserSubscription(currentUser.id),
          getUserGoals(currentUser.id),
          getUserTrainingPlan(currentUser.id),
          getGymEvents()
        ]);
        
        setSubscription(userSubscription);
        setGoals(userGoals);
        setTrainingPlan(userTrainingPlan);
        setEvents(gymEvents.slice(0, 3)); // Just get the first 3 events
        setLoading(false);
      }
    };
    
    fetchData();
  }, [currentUser]);

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {currentUser?.name}</h1>
        <p className="text-muted-foreground">Here's an overview of your fitness journey</p>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Active Subscription */}
        <Card className="col-span-1 hover-scale">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Active Subscription</CardTitle>
            <CardDescription>Your current membership plan</CardDescription>
          </CardHeader>
          <CardContent>
            {subscription ? (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gradient">{subscription.name}</h3>
                  <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-xs">Active</span>
                </div>
                <p className="mt-1 text-lg font-semibold">${subscription.price}<span className="text-sm text-muted-foreground">/{subscription.duration}</span></p>
                <ul className="mt-4 space-y-2">
                  {subscription.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="py-8 text-center">
                <p className="text-muted-foreground mb-4">No active subscription</p>
                <Button className="fitflow-gradient text-white" size="sm">Choose a Plan</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Fitness Goals */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Fitness Goals</CardTitle>
            <CardDescription>Track your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Target size={16} className="mr-2 text-fitflow-primary" />
                      <span>{goal.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} />
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Target size={16} className="mr-2" />
                Set New Goal
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
            <CardDescription>Classes and workshops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="rounded-md bg-fitflow-light p-2 text-fitflow-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock size={14} />{event.date} at {event.time}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="link" size="sm" className="w-full mt-2 text-fitflow-primary">
                View All Events
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Plan */}
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Current Training Plan</CardTitle>
          <CardDescription>Your personalized workout schedule</CardDescription>
        </CardHeader>
        <CardContent>
          {trainingPlan ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl">{trainingPlan.name}</h3>
                  <p className="text-muted-foreground">{trainingPlan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Coach: {trainingPlan.trainerName}</div>
                  <div className="text-sm text-muted-foreground">{trainingPlan.startDate} - {trainingPlan.endDate}</div>
                </div>
              </div>
              <Tabs defaultValue={trainingPlan.sessions[0].day.toLowerCase()}>
                <TabsList className="w-full justify-start overflow-auto mb-4">
                  {trainingPlan.sessions.map((session) => (
                    <TabsTrigger key={session.day} value={session.day.toLowerCase()}>
                      {session.day}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {trainingPlan.sessions.map((session) => (
                  <TabsContent key={session.day} value={session.day.toLowerCase()} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {session.exercises.map((exercise, index) => (
                        <div 
                          key={index} 
                          className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <Dumbbell size={18} className="mr-3 text-fitflow-primary" />
                          <span>{exercise}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          ) : (
            <div className="py-8 text-center">
              <Dumbbell size={48} className="mx-auto text-gray-300 mb-3" />
              <h3 className="font-medium text-lg mb-2">No Training Plan Yet</h3>
              <p className="text-muted-foreground mb-4">Get started with a personalized training plan</p>
              <Button className="fitflow-gradient text-white">
                Find a Trainer
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
