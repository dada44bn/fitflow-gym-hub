
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

// No auth protection for now
const App = () => {
  const currentUser = getCurrentUser();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/login" element={<Login />} />
            
            {/* User Routes */}
            <Route 
              path="/dashboard" 
              element={
                <MainLayout>
                  <UserDashboard />
                </MainLayout>
              } 
            />
            <Route 
              path="/trainers" 
              element={
                <MainLayout>
                  <TrainersPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/subscriptions" 
              element={
                <MainLayout>
                  <SubscriptionsPage />
                </MainLayout>
              } 
            />
            
            {/* Trainer Routes */}
            <Route 
              path="/trainer/dashboard" 
              element={
                <MainLayout>
                  <TrainerDashboard />
                </MainLayout>
              } 
            />
            
            {/* Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <MainLayout>
                  <AdminDashboard />
                </MainLayout>
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
