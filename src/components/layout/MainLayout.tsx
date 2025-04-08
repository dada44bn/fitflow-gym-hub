
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  Calendar, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  User,
  Dumbbell,
  LineChart,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { getCurrentUser, logout } from '@/lib/auth';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const currentUser = getCurrentUser();
  
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const userNav = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
    { name: 'Training Plans', path: '/training-plans', icon: <Activity size={20} /> },
    { name: 'Trainers', path: '/trainers', icon: <Users size={20} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  const trainerNav = [
    { name: 'Dashboard', path: '/trainer/dashboard', icon: <Home size={20} /> },
    { name: 'Clients', path: '/trainer/clients', icon: <Users size={20} /> },
    { name: 'Create Plans', path: '/trainer/plans', icon: <Activity size={20} /> },
    { name: 'Schedule', path: '/trainer/schedule', icon: <Calendar size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  const adminNav = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LineChart size={20} /> },
    { name: 'Members', path: '/admin/members', icon: <User size={20} /> },
    { name: 'Trainers', path: '/admin/trainers', icon: <Dumbbell size={20} /> },
    { name: 'Events', path: '/admin/events', icon: <Calendar size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];
  
  // Choose navigation based on user role
  const navigation = 
    currentUser?.role === 'trainer' ? trainerNav : 
    currentUser?.role === 'admin' ? adminNav : 
    userNav;

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-64 md:bg-white md:border-r">
        <div className="flex items-center justify-center h-16 border-b">
          <Link to="/" className="flex items-center">
            <Dumbbell className="h-6 w-6 mr-2 text-fitflow-primary" />
            <h1 className="text-xl font-bold text-gradient">FitFlow</h1>
          </Link>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-fitflow-light text-fitflow-primary"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 mt-6 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex items-center justify-between h-16 border-b px-4">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-6 w-6 mr-2 text-fitflow-primary" />
              <h1 className="text-xl font-bold text-gradient">FitFlow</h1>
            </Link>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-fitflow-light text-fitflow-primary"
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 mt-6 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              Logout
            </button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center md:hidden">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <h1 className="text-xl font-bold ml-2 text-gradient">FitFlow</h1>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-4">
                <span className="mr-3 text-sm font-medium hidden md:block">
                  {currentUser?.name}
                </span>
                <Avatar>
                  <AvatarImage src={currentUser?.avatar} alt={currentUser?.name} />
                  <AvatarFallback>
                    {currentUser?.name.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
