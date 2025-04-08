
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Star, Filter } from 'lucide-react';
import { getAvailableTrainers, Trainer } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

const TrainersPage: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const fetchTrainers = async () => {
      const data = await getAvailableTrainers();
      setTrainers(data);
      setLoading(false);
    };

    fetchTrainers();
  }, []);

  const filteredTrainers = trainers.filter(trainer => 
    trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainer.specialty.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleRequestTrainer = (trainer: Trainer) => {
    toast({
      title: "Request Sent!",
      description: `Your training request has been sent to ${trainer.name}.`,
    });
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Find a Trainer</h1>
        <p className="text-muted-foreground">Browse our expert trainers and find the perfect match for your fitness goals</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name or specialty..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="w-full md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filter Options
        </Button>
      </div>

      {/* Trainer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrainers.length > 0 ? (
          filteredTrainers.map((trainer) => (
            <Card key={trainer.id} className="overflow-hidden hover-scale">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] bg-gradient-secondary" />
              </CardHeader>
              <div className="px-6 -mt-14">
                <Avatar className="border-4 border-white h-28 w-28">
                  <AvatarImage src={trainer.avatar} alt={trainer.name} />
                  <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="pt-4">
                <CardTitle>{trainer.name}</CardTitle>
                <div className="flex items-center mt-1 mb-2">
                  <div className="flex items-center text-yellow-500">
                    <Star className="fill-current h-4 w-4" />
                    <span className="ml-1 text-sm font-medium">{trainer.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-muted-foreground">{trainer.reviews} reviews</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {trainer.specialty.map((spec) => (
                    <Badge key={spec} variant="outline" className="bg-fitflow-light text-fitflow-primary">
                      {spec}
                    </Badge>
                  ))}
                </div>
                <CardDescription className="line-clamp-3">
                  {trainer.bio}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm">
                  {trainer.available ? (
                    <span className="text-green-600 font-medium">Available for new clients</span>
                  ) : (
                    <span className="text-orange-600 font-medium">Currently full</span>
                  )}
                </p>
                <Button 
                  variant="outline"
                  onClick={() => handleRequestTrainer(trainer)}
                  disabled={!trainer.available}
                >
                  Request
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-muted-foreground">No trainers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainersPage;
