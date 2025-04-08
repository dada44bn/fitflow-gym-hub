
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Award, Target, Check, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProgressPage: React.FC = () => {
  // Sample data for charts
  const weightData = [
    { month: 'Jan', weight: 180 },
    { month: 'Feb', weight: 178 },
    { month: 'Mar', weight: 175 },
    { month: 'Apr', weight: 173 },
    { month: 'May', weight: 170 },
    { month: 'Jun', weight: 168 },
  ];
  
  const workoutData = [
    { week: 'Week 1', sessions: 3 },
    { week: 'Week 2', sessions: 4 },
    { week: 'Week 3', sessions: 2 },
    { week: 'Week 4', sessions: 5 },
    { week: 'Week 5', sessions: 4 },
    { week: 'Week 6', sessions: 6 },
  ];
  
  // Sample achievements data
  const achievements = [
    { id: 1, name: "First Week Complete", description: "Completed your first week of training", completed: true },
    { id: 2, name: "10 Workouts", description: "Completed 10 workouts", completed: true },
    { id: 3, name: "Lost 5 pounds", description: "Reached your first weight milestone", completed: true },
    { id: 4, name: "Consistency King", description: "Worked out 3+ times per week for a month", completed: false },
    { id: 5, name: "Strength Milestone", description: "Increased strength by 20%", completed: false },
  ];
  
  // Sample goals data
  const goals = [
    { id: 1, name: "Weight Goal", target: "Lose 15 pounds", current: "12 pounds lost", progress: 80 },
    { id: 2, name: "Strength Goal", target: "Bench press 200 lbs", current: "180 lbs", progress: 90 },
    { id: 3, name: "Endurance Goal", target: "Run 5K in under 25 minutes", current: "Current best: 27 minutes", progress: 60 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Progress</h1>
        <p className="text-muted-foreground">Track your fitness journey and achievements</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stats">Detailed Stats</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-fitflow-primary" />
                  Weight Progress
                </CardTitle>
                <CardDescription>Your weight change over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" stroke="#0ea5e9" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-fitflow-primary" />
                  Workout Frequency
                </CardTitle>
                <CardDescription>Number of sessions per week</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={workoutData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="sessions" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Goals Progress</CardTitle>
              <CardDescription>Track your current fitness goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {goals.map((goal) => (
                  <div key={goal.id}>
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{goal.name}</h4>
                        <p className="text-sm text-muted-foreground">{goal.target}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{goal.current}</p>
                        <p className="text-sm font-medium">{goal.progress}%</p>
                      </div>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="stats" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Statistics</CardTitle>
              <CardDescription>Comprehensive view of your fitness metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <p className="text-muted-foreground">Detailed statistics section coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-amber-500" />
                Achievements
              </CardTitle>
              <CardDescription>Milestones and badges you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-4 border rounded-md flex items-center justify-between ${
                      achievement.completed ? 'bg-green-50 border-green-100' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`rounded-full p-1 ${achievement.completed ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                        {achievement.completed ? <Check size={16} /> : <ChevronRight size={16} />}
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.name}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                    {achievement.completed && (
                      <span className="text-sm font-medium text-green-600">Completed</span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressPage;
