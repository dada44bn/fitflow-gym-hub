
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart2,
  Users,
  Badge,
  Calendar,
  CreditCard,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const AdminSidebar = ({ onLogout }: { onLogout: () => void }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <BarChart2 size={20} /> },
    { name: 'Members', path: '/admin/members', icon: <Users size={20} /> },
    { name: 'Staff & Trainers', path: '/admin/trainers', icon: <Badge size={20} /> },
    { name: 'Activities', path: '/admin/events', icon: <Calendar size={20} /> },
    { name: 'Billing', path: '/admin/subscriptions', icon: <CreditCard size={20} /> },
    { name: 'System Settings', path: '/admin/settings', icon: <Settings size={20} /> },
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
