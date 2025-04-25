
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getCurrentUser, logout } from '@/lib/auth';
import { UserSidebar } from './UserSidebar';
import { TrainerSidebar } from './TrainerSidebar';
import { AdminSidebar } from './AdminSidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const currentUser = getCurrentUser();
  
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  // Choose sidebar component based on user role
  const SidebarComponent = 
    currentUser?.role === 'trainer' ? TrainerSidebar :
    currentUser?.role === 'admin' ? AdminSidebar :
    UserSidebar;

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
        <SidebarComponent onLogout={handleLogout} />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={showMobileNav} onOpenChange={setShowMobileNav}>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex items-center justify-between h-16 border-b px-4">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-6 w-6 mr-2 text-fitflow-primary" />
              <h1 className="text-xl font-bold text-gradient">FitFlow</h1>
            </Link>
          </div>
          <SidebarComponent onLogout={handleLogout} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowMobileNav(true)}
              >
                <Menu />
              </Button>
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
