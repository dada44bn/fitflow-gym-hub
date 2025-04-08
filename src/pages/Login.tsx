
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Dumbbell } from 'lucide-react';
import { login } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Auto-login effect - authentication removed for now
  useEffect(() => {
    // Automatically redirect to dashboard after a short delay
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const user = await login(email, password);
      toast({
        title: 'Login successful',
        description: `Welcome back, ${user.name}!`,
      });
      
      navigate('/dashboard');
    } catch (error) {
      // This won't be reached with current auth implementation
      toast({
        title: 'Login successful anyway',
        description: 'Authentication is disabled for now.',
      });
      navigate('/dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <Dumbbell className="h-8 w-8 text-white" />
            <h1 className="text-3xl font-bold text-white ml-2">FitFlow</h1>
          </div>
          <p className="text-white mt-2">Manage your fitness journey with ease</p>
        </div>
        
        <Card className="shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Authentication is disabled for now. Click Sign In to continue.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="text-sm text-gray-500 mt-2">
                <p>Authentication is currently disabled</p>
                <p>You will be automatically redirected to the dashboard</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full fitflow-gradient hover:opacity-90 transition-opacity"
              >
                Sign In
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
