
// Mock authentication service - to be replaced with real auth later

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'trainer' | 'admin';
  avatar?: string;
}

// Mock user data
const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    avatar: '/assets/avatars/user-1.jpg'
  },
  {
    id: '2',
    name: 'Sarah Trainer',
    email: 'sarah@example.com',
    role: 'trainer',
    avatar: '/assets/avatars/trainer-1.jpg'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    avatar: '/assets/avatars/admin-1.jpg'
  }
];

// Mock current user - in a real app, this would come from authentication state
let currentUser: User | null = null;

export function getCurrentUser(): User | null {
  return currentUser;
}

export function login(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      const user = users.find(u => u.email === email);
      
      if (user) {
        currentUser = user;
        resolve(user);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
}

export function logout(): void {
  currentUser = null;
}

export function isAuthenticated(): boolean {
  return currentUser !== null;
}

export function hasRole(role: string): boolean {
  return currentUser?.role === role;
}
