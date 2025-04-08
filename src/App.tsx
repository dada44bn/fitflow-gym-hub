
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

// New pages
import TrainingPlansPage from "./pages/user/TrainingPlans";
import EventsPage from "./pages/user/Events";
import ProgressPage from "./pages/user/Progress";
import SettingsPage from "./pages/user/Settings";

// Trainer pages
import TrainerClientsPage from "./pages/trainer/Clients";
import TrainerPlansPage from "./pages/trainer/Plans";
import TrainerSchedulePage from "./pages/trainer/Schedule";
import TrainerMessagesPage from "./pages/trainer/Messages";

// Admin pages
import AdminMembersPage from "./pages/admin/Members";
import AdminTrainersPage from "./pages/admin/Trainers";
import AdminEventsPage from "./pages/admin/Events";
import AdminSubscriptionsPage from "./pages/admin/Subscriptions";
import AdminSettingsPage from "./pages/admin/Settings";

const queryClient = new QueryClient();

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
            <Route 
              path="/training-plans" 
              element={
                <MainLayout>
                  <TrainingPlansPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/events" 
              element={
                <MainLayout>
                  <EventsPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/progress" 
              element={
                <MainLayout>
                  <ProgressPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <MainLayout>
                  <SettingsPage />
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
            <Route 
              path="/trainer/clients" 
              element={
                <MainLayout>
                  <TrainerClientsPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/trainer/plans" 
              element={
                <MainLayout>
                  <TrainerPlansPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/trainer/schedule" 
              element={
                <MainLayout>
                  <TrainerSchedulePage />
                </MainLayout>
              } 
            />
            <Route 
              path="/trainer/messages" 
              element={
                <MainLayout>
                  <TrainerMessagesPage />
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
            <Route 
              path="/admin/members" 
              element={
                <MainLayout>
                  <AdminMembersPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/admin/trainers" 
              element={
                <MainLayout>
                  <AdminTrainersPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/admin/events" 
              element={
                <MainLayout>
                  <AdminEventsPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/admin/subscriptions" 
              element={
                <MainLayout>
                  <AdminSubscriptionsPage />
                </MainLayout>
              } 
            />
            <Route 
              path="/admin/settings" 
              element={
                <MainLayout>
                  <AdminSettingsPage />
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
