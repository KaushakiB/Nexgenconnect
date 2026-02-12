import React, { useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useData } from '../context/DataContext';
import {
  Home,
  Compass,
  Briefcase,
  Calendar,
  Plane,
  Users,
  MessageCircle,
  Bell,
  Sun,
  Moon,
  LogOut,
  User,
} from 'lucide-react';

export const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { notifications, conversations } = useData();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const unreadNotifications = notifications.filter((n) => !n.isRead).length;
  const unreadMessages = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/discover', label: 'Discover', icon: Compass },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/travel', label: 'Travel Hub', icon: Plane },
    { path: '/network', label: 'My Network', icon: Users },
    { path: '/messages', label: 'Messages', icon: MessageCircle, badge: unreadMessages },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-card border-b border-border z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NC</span>
              </div>
              <span className="font-bold text-xl text-[#1E3A8A] dark:text-primary hidden sm:block">
                NexGen Connect
              </span>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-[#1E3A8A] dark:bg-primary text-white'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden md:block text-sm">{item.label}</span>
                    {item.badge && item.badge > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.badge > 9 ? '9+' : item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* Notifications */}
              <Link
                to="/notifications"
                className="relative p-2 rounded-lg hover:bg-secondary transition-all"
              >
                <Bell className="w-5 h-5 text-foreground" />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {unreadNotifications > 9 ? '9+' : unreadNotifications}
                  </span>
                )}
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-secondary transition-all"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-accent" />
                ) : (
                  <Moon className="w-5 h-5 text-[#1E3A8A]" />
                )}
              </button>

              {/* Profile Avatar */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-1 rounded-lg hover:bg-secondary transition-all"
                >
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.fullName}
                      className="w-9 h-9 rounded-full object-cover border-2 border-[#14B8A6]"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] flex items-center justify-center text-white">
                      {user.fullName.charAt(0)}
                    </div>
                  )}
                </button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div className="absolute right-0 top-12 w-56 bg-white dark:bg-card rounded-lg shadow-xl border border-border overflow-hidden">
                    <div className="p-4 border-b border-border">
                      <p className="font-semibold text-foreground">{user.fullName}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center space-x-2 px-4 py-3 hover:bg-secondary transition-all"
                    >
                      <User className="w-5 h-5 text-foreground" />
                      <span className="text-foreground">My Profile</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-3 hover:bg-secondary transition-all w-full text-left"
                    >
                      <LogOut className="w-5 h-5 text-destructive" />
                      <span className="text-destructive">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};
