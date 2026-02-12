import { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  fullName: string;
  email: string;
  country: string;
  university: string;
  profileImage?: string;
  profession?: string;
  skills?: string[];
  interests?: string[];
  bio?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (userData: Omit<User, 'id'> & { password: string }) => void;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const register = (userData: Omit<User, 'id'> & { password: string }) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      fullName: userData.fullName,
      email: userData.email,
      country: userData.country,
      university: userData.university,
      profileImage: userData.profileImage,
      profession: 'Student',
      skills: [],
      interests: [],
      bio: '',
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const login = (email: string, password: string) => {
    // Mock login - in production, validate against backend
    const mockUser: User = {
      id: '1',
      fullName: 'Alex Johnson',
      email: email,
      country: 'United States',
      university: 'Stanford University',
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      profession: 'Computer Science Student',
      skills: ['React', 'Python', 'Machine Learning', 'UI/UX Design'],
      interests: ['AI', 'Startups', 'Travel', 'Photography'],
      bio: 'Passionate about building innovative solutions and connecting with like-minded individuals.',
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
