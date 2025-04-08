
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, PaperclipIcon, Send, Phone, Video, MoreVertical, Image as ImageIcon, Smile } from 'lucide-react';

const TrainerMessagesPage: React.FC = () => {
  // Sample conversations
  const conversations = [
    {
      id: 1,
      name: "Jane Cooper",
      avatar: "/assets/avatars/user-1.jpg",
      lastMessage: "Looking forward to our session tomorrow",
      time: "10:32 AM",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "David Wilson",
      avatar: "/assets/avatars/user-2.jpg",
      lastMessage: "Thanks for the updated workout plan",
      time: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Sarah Miller",
      avatar: "/assets/avatars/user-3.jpg",
      lastMessage: "I need to reschedule our Friday session",
      time: "Yesterday",
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: "Robert Johnson",
      avatar: "/assets/avatars/user-4.jpg",
      lastMessage: "Can you send me some nutrition tips?",
      time: "Monday",
      unread: 0,
      online: false
    }
  ];

  // Sample messages for the selected conversation
  const messages = [
    {
      id: 1,
      sender: "client",
      content: "Hi Coach! How are you doing today?",
      time: "10:15 AM"
    },
    {
      id: 2,
      sender: "trainer",
      content: "I'm doing great! Just finished a session with another client. Are you ready for tomorrow?",
      time: "10:18 AM"
    },
    {
      id: 3,
      sender: "client",
      content: "Absolutely! Really looking forward to it. I've been keeping up with the exercises you recommended.",
      time: "10:22 AM"
    },
    {
      id: 4,
      sender: "trainer",
      content: "That's excellent to hear! Make sure you're staying hydrated and getting enough sleep before our session.",
      time: "10:25 AM"
    },
    {
      id: 5,
      sender: "client",
      content: "Will do! I've also been following the nutrition plan you gave me last week.",
      time: "10:28 AM"
    },
    {
      id: 6,
      sender: "client",
      content: "Looking forward to our session tomorrow",
      time: "10:32 AM"
    }
  ];

  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="flex h-full overflow-hidden rounded-lg border">
        {/* Conversations Sidebar */}
        <div className="w-full sm:w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold mb-4">Messages</h1>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search conversations..." className="pl-8" />
            </div>
          </div>
          
          <div className="flex-1 overflow-auto">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id} 
                className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 border-b ${
                  conversation.id === 1 ? 'bg-blue-50' : ''
                }`}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{conversation.name}</h3>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{conversation.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                </div>
                {conversation.unread > 0 && (
                  <div className="h-5 w-5 rounded-full bg-fitflow-primary text-white text-xs flex items-center justify-center flex-shrink-0">
                    {conversation.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="hidden sm:flex flex-1 flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={conversations[0].avatar} />
                <AvatarFallback>{conversations[0].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{conversations[0].name}</h3>
                <p className="text-xs text-green-600">{conversations[0].online ? 'Online' : 'Offline'}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'trainer' ? 'justify-end' : ''}`}
              >
                <div 
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.sender === 'trainer' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p>{message.content}</p>
                  <p className={`text-xs ${
                    message.sender === 'trainer' ? 'text-blue-100' : 'text-gray-500'
                  } mt-1 text-right`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message Input */}
          <div className="p-3 border-t">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Smile className="h-5 w-5 text-gray-500" />
              </Button>
              <Input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" 
              />
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <PaperclipIcon className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                  <ImageIcon className="h-5 w-5 text-gray-500" />
                </Button>
                <Button size="icon" className="rounded-full h-8 w-8">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Empty State for Mobile */}
        <div className="flex-1 items-center justify-center hidden">
          <div className="text-center p-8">
            <h3 className="font-medium mb-2">Select a conversation</h3>
            <p className="text-sm text-muted-foreground">Choose a contact from the list to start messaging</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerMessagesPage;
