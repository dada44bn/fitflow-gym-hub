
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  ClipboardList,
  Users,
  Calendar,
  Activity,
  CreditCard,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const UserSidebar = ({ onLogout }: { onLogout: () => void }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Training Plans', path: '/training-plans', icon: <ClipboardList size={20} /> },
    { name: 'Trainers', path: '/trainers', icon: <Users size={20} /> },
    { name: 'Events', path: '/events', icon: <Calendar size={20} /> },
    { name: 'My Progress', path: '/progress', icon: <Activity size={20} /> },
    { name: 'Subscriptions', path: '/subscriptions', icon: <CreditCard size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
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
        onClick={onLogout}
        className="w-full flex items-center px-3 py-2 mt-6 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
      >
        <LogOut size={20} className="mr-3" />
        Logout
      </button>
    </nav>
  );
};
