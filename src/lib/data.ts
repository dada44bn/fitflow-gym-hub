
import { User } from './auth';

export interface Subscription {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  mostPopular?: boolean;
}

export interface FitnessGoal {
  id: string;
  name: string;
  targetDate: string;
  progress: number;
  type: 'weight' | 'strength' | 'endurance' | 'flexibility';
}

export interface TrainingPlan {
  id: string;
  name: string;
  description: string;
  trainerId: string;
  trainerName: string;
  startDate: string;
  endDate: string;
  sessions: TrainingSession[];
}

export interface TrainingSession {
  day: string;
  exercises: string[];
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string[];
  rating: number;
  reviews: number;
  bio: string;
  avatar: string;
  clients?: number;
  available?: boolean;
}

export interface GymEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'class' | 'workshop' | 'competition';
  instructor?: string;
  image?: string;
}

export interface ClientProgress {
  userId: string;
  userName: string;
  recentActivity: string;
  completedSessions: number;
  totalSessions: number;
  lastActive: string;
}

export interface AnalyticsData {
  totalUsers: number;
  activeSubscriptions: number;
  revenue: number;
  newSignups: number;
  topPlans: {name: string, count: number}[];
  trainerMetrics: {name: string, clients: number}[];
  revenueByMonth: {month: string, amount: number}[];
}

// Mock Data

export const subscriptions: Subscription[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29.99,
    duration: 'month',
    features: ['Access to gym equipment', 'Locker access', 'Free WiFi']
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 49.99,
    duration: 'month',
    mostPopular: true,
    features: ['Access to gym equipment', 'Locker access', 'Free WiFi', 'Group classes', 'One personal training session/month']
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 79.99,
    duration: 'month',
    features: ['Access to gym equipment', 'Locker access', 'Free WiFi', 'Unlimited group classes', 'Four personal training sessions/month', 'Nutritional guidance']
  }
];

export const fitnessGoals: FitnessGoal[] = [
  {
    id: '1',
    name: 'Lose 10 pounds',
    targetDate: '2023-08-15',
    progress: 70,
    type: 'weight'
  },
  {
    id: '2',
    name: 'Bench Press 200lbs',
    targetDate: '2023-09-30',
    progress: 40,
    type: 'strength'
  },
  {
    id: '3',
    name: 'Run 5K in 25 minutes',
    targetDate: '2023-07-20',
    progress: 85,
    type: 'endurance'
  }
];

export const trainingPlans: TrainingPlan[] = [
  {
    id: '1',
    name: 'Weight Loss Program',
    description: 'A comprehensive program designed to help you lose weight effectively through a combination of cardio and strength training.',
    trainerId: '2',
    trainerName: 'Sarah Trainer',
    startDate: '2023-06-01',
    endDate: '2023-08-31',
    sessions: [
      {
        day: 'Monday',
        exercises: ['Treadmill 30min', 'Squats 3x12', 'Lunges 3x10', 'Planks 3x60s']
      },
      {
        day: 'Wednesday',
        exercises: ['Elliptical 25min', 'Push-ups 3x12', 'Dumbbell rows 3x12', 'Bicycle crunches 3x20']
      },
      {
        day: 'Friday',
        exercises: ['Jump rope 20min', 'Deadlifts 3x10', 'Shoulder press 3x12', 'Russian twists 3x20']
      }
    ]
  }
];

export const trainers: Trainer[] = [
  {
    id: '2',
    name: 'Sarah Trainer',
    specialty: ['Weight Loss', 'HIIT', 'Nutrition'],
    rating: 4.8,
    reviews: 127,
    bio: 'Certified personal trainer with over 10 years of experience specializing in weight loss and high-intensity interval training.',
    avatar: '/assets/avatars/trainer-1.jpg',
    clients: 15,
    available: true
  },
  {
    id: '4',
    name: 'Mike Strong',
    specialty: ['Strength Training', 'Bodybuilding', 'Power Lifting'],
    rating: 4.9,
    reviews: 94,
    bio: 'Former competitive bodybuilder with a passion for helping clients build muscle and increase strength safely and effectively.',
    avatar: '/assets/avatars/trainer-2.jpg',
    clients: 12,
    available: true
  },
  {
    id: '5',
    name: 'Lisa Flex',
    specialty: ['Yoga', 'Pilates', 'Flexibility'],
    rating: 4.7,
    reviews: 86,
    bio: 'Yoga instructor and flexibility expert who helps clients improve mobility, posture, and mindfulness through targeted exercises.',
    avatar: '/assets/avatars/trainer-3.jpg',
    clients: 18,
    available: false
  }
];

export const gymEvents: GymEvent[] = [
  {
    id: '1',
    title: 'Summer Fitness Challenge',
    description: 'Join our 30-day challenge to kick-start your fitness journey with daily workouts and nutrition tips.',
    date: '2023-07-01',
    time: '08:00 AM',
    type: 'competition',
    image: '/assets/images/events/challenge.jpg'
  },
  {
    id: '2',
    title: 'Nutrition Workshop',
    description: 'Learn about proper nutrition for muscle building and fat loss from our expert nutritionists.',
    date: '2023-06-15',
    time: '6:00 PM',
    type: 'workshop',
    instructor: 'Dr. John Nutrition',
    image: '/assets/images/events/nutrition.jpg'
  },
  {
    id: '3',
    title: 'Yoga for Beginners',
    description: 'An introductory class to basic yoga poses and breathing techniques perfect for beginners.',
    date: '2023-06-10',
    time: '5:30 PM',
    type: 'class',
    instructor: 'Lisa Flex',
    image: '/assets/images/events/yoga.jpg'
  }
];

export const clientProgress: ClientProgress[] = [
  {
    userId: '1',
    userName: 'John Doe',
    recentActivity: 'Completed Weight Loss Program Week 3',
    completedSessions: 9,
    totalSessions: 12,
    lastActive: '2023-06-05'
  },
  {
    userId: '6',
    userName: 'Emma Wilson',
    recentActivity: 'Attended HIIT Class',
    completedSessions: 15,
    totalSessions: 24,
    lastActive: '2023-06-06'
  },
  {
    userId: '7',
    userName: 'David Miller',
    recentActivity: 'Missed Strength Training Session',
    completedSessions: 4,
    totalSessions: 12,
    lastActive: '2023-06-01'
  }
];

export const analyticsData: AnalyticsData = {
  totalUsers: 587,
  activeSubscriptions: 432,
  revenue: 19845.50,
  newSignups: 48,
  topPlans: [
    {name: 'Premium', count: 215},
    {name: 'Basic', count: 145},
    {name: 'Ultimate', count: 72}
  ],
  trainerMetrics: [
    {name: 'Sarah Trainer', clients: 15},
    {name: 'Mike Strong', clients: 12},
    {name: 'Lisa Flex', clients: 18}
  ],
  revenueByMonth: [
    {month: 'Jan', amount: 15420},
    {month: 'Feb', amount: 16100},
    {month: 'Mar', amount: 16800},
    {month: 'Apr', amount: 17500},
    {month: 'May', amount: 18750},
    {month: 'Jun', amount: 19845}
  ]
};

// Mock API functions
export async function getUserSubscription(userId: string): Promise<Subscription | null> {
  // In a real app, this would fetch from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(subscriptions.find(s => s.id === 'premium') || null);
    }, 300);
  });
}

export async function getUserGoals(userId: string): Promise<FitnessGoal[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fitnessGoals);
    }, 300);
  });
}

export async function getUserTrainingPlan(userId: string): Promise<TrainingPlan | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(trainingPlans[0]);
    }, 300);
  });
}

export async function getGymEvents(): Promise<GymEvent[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gymEvents);
    }, 300);
  });
}

export async function getAvailableTrainers(): Promise<Trainer[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(trainers);
    }, 300);
  });
}

export async function getTrainerClients(trainerId: string): Promise<ClientProgress[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(clientProgress);
    }, 300);
  });
}

export async function getAdminAnalytics(): Promise<AnalyticsData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(analyticsData);
    }, 300);
  });
}
