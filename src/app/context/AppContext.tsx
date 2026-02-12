import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  country: string;
  university: string;
  profileImage?: string;
  bio?: string;
  profession?: string;
  skills?: string[];
  interests?: string[];
}

interface Notification {
  id: string;
  type: 'message' | 'network' | 'event' | 'project';
  message: string;
  read: boolean;
  timestamp: Date;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markNotificationRead: (id: string) => void;
  unreadMessages: number;
  networkRequests: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'network',
      message: 'Sarah Johnson sent you a connection request',
      read: false,
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      type: 'event',
      message: 'New event: AI Hackathon 2026 is now open for registration',
      read: false,
      timestamp: new Date(Date.now() - 7200000)
    }
  ]);
  const [unreadMessages, setUnreadMessages] = useState(3);
  const [networkRequests, setNetworkRequests] = useState(2);

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [notification, ...prev]);
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        notifications,
        addNotification,
        markNotificationRead,
        unreadMessages,
        networkRequests,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
