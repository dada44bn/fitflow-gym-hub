
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { getCurrentUser } from "./lib/auth";

// Pages
import Login from "./pages/Login";
import UserDashboard from "./pages/user/Dashboard";
import TrainerDashboard from "./pages/trainer/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import TrainersPage from "./pages/user/Trainers";
import SubscriptionsPage from "./pages/user/Subscriptions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Auth guard for protected routes
const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole?: string }) => {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  if (requiredRole && currentUser.role !== requiredRole) {
    // Redirect to appropriate dashboard based on role
    if (currentUser.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    }
    if (currentUser.role === 'trainer') {
      return <Navigate to="/trainer/dashboard" />;
    }
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};

// Route configuration based on user role
const App = () => {
  const currentUser = getCurrentUser();
  
  // Determine the initial route based on authentication status and role
  const getInitialRoute = () => {
    if (!currentUser) return "/login";
    
    switch (currentUser.role) {
      case 'admin':
        return "/admin/dashboard";
      case 'trainer':
        return "/trainer/dashboard";
      default:
        return "/dashboard";
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={getInitialRoute()} replace />} />
            <Route path="/login" element={<Login />} />
            
            {/* User Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requiredRole="user">
                  <MainLayout>
                    <UserDashboard />
                  </MainLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/trainers" 
              element={
                <ProtectedRoute requiredRole="user">
                  <MainLayout>
                    <TrainersPage />
                  </MainLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/subscriptions" 
              element={
                <ProtectedRoute requiredRole="user">
                  <MainLayout>
                    <SubscriptionsPage />
                  </MainLayout>
                </ProtectedRoute>
              } 
            />
            
            {/* Trainer Routes */}
            <Route 
              path="/trainer/dashboard" 
              element={
                <ProtectedRoute requiredRole="trainer">
                  <MainLayout>
                    <TrainerDashboard />
                  </MainLayout>
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <MainLayout>
                    <AdminDashboard />
                  </MainLayout>
                </ProtectedRoute>
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
