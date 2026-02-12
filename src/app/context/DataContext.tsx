import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Connection {
  id: string;
  name: string;
  university: string;
  profileImage: string;
  domain: string[];
  skills: string[];
  compatibility: number;
  isConnected: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  skillsRequired: string[];
  members: number;
  maxMembers: number;
  status: 'Active' | 'Completed' | 'Recruiting';
  visibility: 'Public' | 'University Only' | 'Private';
  owner?: string;
}

export interface Event {
  id: string;
  title: string;
  organizer: string;
  description: string;
  image?: string;
  date: string;
  location: string;
  skillsRequired: string[];
  registeredCount: number;
  maxParticipants: number;
  registrationDeadline: string;
  isRegistered: boolean;
}

export interface TravelRoute {
  id: string;
  startLocation: string;
  destination: string;
  date: string;
  time: string;
  transport: 'Car' | 'Train' | 'Bus' | 'Carpool';
  seatsAvailable: number;
  maxSeats: number;
  creatorName: string;
  creatorImage: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderImage: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantImage: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
}

export interface Notification {
  id: string;
  type: 'connection' | 'message' | 'event' | 'project';
  title: string;
  description: string;
  timestamp: Date;
  isRead: boolean;
}

interface DataContextType {
  connections: Connection[];
  projects: Project[];
  events: Event[];
  travelRoutes: TravelRoute[];
  conversations: Conversation[];
  messages: Message[];
  notifications: Notification[];
  pendingRequests: Connection[];
  addProject: (project: Omit<Project, 'id'>) => void;
  addEvent: (event: Omit<Event, 'id'>) => void;
  addTravelRoute: (route: Omit<TravelRoute, 'id'>) => void;
  toggleConnection: (userId: string) => void;
  registerForEvent: (eventId: string) => void;
  sendMessage: (conversationId: string, content: string) => void;
  markNotificationAsRead: (notificationId: string) => void;
  acceptConnectionRequest: (userId: string) => void;
  rejectConnectionRequest: (userId: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [connections, setConnections] = useState<Connection[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      university: 'MIT',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      domain: ['AI', 'Machine Learning'],
      skills: ['Python', 'TensorFlow', 'PyTorch'],
      compatibility: 95,
      isConnected: true,
    },
    {
      id: '2',
      name: 'Michael Torres',
      university: 'Stanford University',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      domain: ['Web Development', 'UI/UX'],
      skills: ['React', 'Figma', 'TypeScript'],
      compatibility: 88,
      isConnected: true,
    },
    {
      id: '3',
      name: 'Priya Sharma',
      university: 'UC Berkeley',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      domain: ['Data Science', 'Analytics'],
      skills: ['R', 'SQL', 'Tableau'],
      compatibility: 92,
      isConnected: false,
    },
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'AI-Powered Study Assistant',
      description: 'Building an intelligent study companion using GPT-4 and machine learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      skillsRequired: ['Python', 'Machine Learning', 'React'],
      members: 3,
      maxMembers: 5,
      status: 'Recruiting',
      visibility: 'Public',
      owner: 'Sarah Chen',
    },
    {
      id: '2',
      title: 'Campus Event Platform',
      description: 'A modern platform for discovering and managing university events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      skillsRequired: ['React', 'Node.js', 'MongoDB'],
      members: 4,
      maxMembers: 6,
      status: 'Active',
      visibility: 'University Only',
      owner: 'Michael Torres',
    },
    {
      id: '3',
      title: 'Climate Data Visualization',
      description: 'Interactive dashboard for analyzing climate change data',
      image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800',
      skillsRequired: ['Python', 'D3.js', 'Data Science'],
      members: 2,
      maxMembers: 4,
      status: 'Active',
      visibility: 'Public',
      owner: 'Priya Sharma',
    },
  ]);

  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Tech Startup Pitch Night',
      organizer: 'Entrepreneurship Club',
      description: 'Showcase your startup ideas to investors and fellow students',
      image: 'https://images.unsplash.com/photo-1559223607-93f0f46e1f6b?w=800',
      date: '2026-03-15',
      location: 'Innovation Hub, Building A',
      skillsRequired: ['Entrepreneurship', 'Pitching', 'Business'],
      registeredCount: 45,
      maxParticipants: 100,
      registrationDeadline: '2026-03-10',
      isRegistered: false,
    },
    {
      id: '2',
      title: 'AI & Machine Learning Workshop',
      organizer: 'Computer Science Department',
      description: 'Hands-on workshop covering latest AI techniques and frameworks',
      image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800',
      date: '2026-02-20',
      location: 'CS Building, Room 301',
      skillsRequired: ['Python', 'Machine Learning'],
      registeredCount: 78,
      maxParticipants: 80,
      registrationDeadline: '2026-02-18',
      isRegistered: true,
    },
    {
      id: '3',
      title: 'Global Hackathon 2026',
      organizer: 'Tech Society',
      description: '48-hour hackathon with participants from around the world',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      date: '2026-04-05',
      location: 'Student Center',
      skillsRequired: ['Programming', 'Teamwork', 'Innovation'],
      registeredCount: 120,
      maxParticipants: 200,
      registrationDeadline: '2026-03-30',
      isRegistered: false,
    },
  ]);

  const [travelRoutes, setTravelRoutes] = useState<TravelRoute[]>([
    {
      id: '1',
      startLocation: 'Stanford Campus',
      destination: 'San Francisco Airport',
      date: '2026-02-15',
      time: '14:00',
      transport: 'Car',
      seatsAvailable: 2,
      maxSeats: 4,
      creatorName: 'Sarah Chen',
      creatorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      id: '2',
      startLocation: 'MIT',
      destination: 'Boston Tech Conference',
      date: '2026-02-18',
      time: '08:30',
      transport: 'Bus',
      seatsAvailable: 15,
      maxSeats: 20,
      creatorName: 'Michael Torres',
      creatorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
  ]);

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      participantId: '1',
      participantName: 'Sarah Chen',
      participantImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      lastMessage: 'Thanks for collaborating on the AI project!',
      lastMessageTime: new Date('2026-02-12T10:30:00'),
      unreadCount: 2,
    },
    {
      id: '2',
      participantId: '2',
      participantName: 'Michael Torres',
      participantImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      lastMessage: 'Are you attending the hackathon?',
      lastMessageTime: new Date('2026-02-11T15:20:00'),
      unreadCount: 0,
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      conversationId: '1',
      senderId: '1',
      senderName: 'Sarah Chen',
      senderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      content: 'Hey! I saw your profile and would love to collaborate.',
      timestamp: new Date('2026-02-12T10:15:00'),
      isRead: true,
    },
    {
      id: '2',
      conversationId: '1',
      senderId: 'me',
      senderName: 'You',
      senderImage: '',
      content: 'That sounds great! What project did you have in mind?',
      timestamp: new Date('2026-02-12T10:20:00'),
      isRead: true,
    },
    {
      id: '3',
      conversationId: '1',
      senderId: '1',
      senderName: 'Sarah Chen',
      senderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      content: 'Thanks for collaborating on the AI project!',
      timestamp: new Date('2026-02-12T10:30:00'),
      isRead: false,
    },
  ]);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'connection',
      title: 'New Connection Request',
      description: 'Priya Sharma wants to connect with you',
      timestamp: new Date('2026-02-12T09:00:00'),
      isRead: false,
    },
    {
      id: '2',
      type: 'event',
      title: 'Event Reminder',
      description: 'AI & Machine Learning Workshop starts tomorrow',
      timestamp: new Date('2026-02-11T18:00:00'),
      isRead: false,
    },
    {
      id: '3',
      type: 'project',
      title: 'Project Invitation',
      description: 'You have been invited to join "Campus Event Platform"',
      timestamp: new Date('2026-02-11T14:30:00'),
      isRead: true,
    },
  ]);

  const [pendingRequests, setPendingRequests] = useState<Connection[]>([
    {
      id: '3',
      name: 'Priya Sharma',
      university: 'UC Berkeley',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      domain: ['Data Science', 'Analytics'],
      skills: ['R', 'SQL', 'Tableau'],
      compatibility: 92,
      isConnected: false,
    },
  ]);

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
    };
    setProjects((prev) => [newProject, ...prev]);
  };

  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...event,
      id: Date.now().toString(),
    };
    setEvents((prev) => [newEvent, ...prev]);
  };

  const addTravelRoute = (route: Omit<TravelRoute, 'id'>) => {
    const newRoute: TravelRoute = {
      ...route,
      id: Date.now().toString(),
    };
    setTravelRoutes((prev) => [newRoute, ...prev]);
  };

  const toggleConnection = (userId: string) => {
    setConnections((prev) =>
      prev.map((conn) =>
        conn.id === userId ? { ...conn, isConnected: !conn.isConnected } : conn
      )
    );
  };

  const registerForEvent = (eventId: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              isRegistered: !event.isRegistered,
              registeredCount: event.isRegistered
                ? event.registeredCount - 1
                : event.registeredCount + 1,
            }
          : event
      )
    );
  };

  const sendMessage = (conversationId: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      conversationId,
      senderId: 'me',
      senderName: 'You',
      senderImage: '',
      content,
      timestamp: new Date(),
      isRead: true,
    };
    setMessages((prev) => [...prev, newMessage]);
    
    // Update conversation
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? { ...conv, lastMessage: content, lastMessageTime: new Date() }
          : conv
      )
    );
  };

  const markNotificationAsRead = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notificationId ? { ...notif, isRead: true } : notif
      )
    );
  };

  const acceptConnectionRequest = (userId: string) => {
    setPendingRequests((prev) => prev.filter((req) => req.id !== userId));
    setConnections((prev) =>
      prev.map((conn) =>
        conn.id === userId ? { ...conn, isConnected: true } : conn
      )
    );
  };

  const rejectConnectionRequest = (userId: string) => {
    setPendingRequests((prev) => prev.filter((req) => req.id !== userId));
  };

  return (
    <DataContext.Provider
      value={{
        connections,
        projects,
        events,
        travelRoutes,
        conversations,
        messages,
        notifications,
        pendingRequests,
        addProject,
        addEvent,
        addTravelRoute,
        toggleConnection,
        registerForEvent,
        sendMessage,
        markNotificationAsRead,
        acceptConnectionRequest,
        rejectConnectionRequest,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
