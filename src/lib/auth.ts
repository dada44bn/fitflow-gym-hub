// Mock authentication service - authentication removed for now

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

// For now, automatically set the current user as a user to bypass authentication
let currentUser: User = users[0];

export function getCurrentUser(): User {
  return currentUser;
}

export function login(email: string, password: string): Promise<User> {
  return new Promise((resolve) => {
    // Always succeeds - no real authentication for now
    const user = users.find(u => u.email === email) || users[0];
    currentUser = user;
    resolve(user);
  });
}

export function logout(): void {
  // No-op for now, keep the current user
}

export function isAuthenticated(): boolean {
  return true; // Always authenticated for now
}

export function hasRole(role: string): boolean {
  return true; // Allow access to all roles for now
}
