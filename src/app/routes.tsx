import { createBrowserRouter, Navigate } from 'react-router';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { DiscoverPage } from './pages/DiscoverPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { TravelHubPage } from './pages/TravelHubPage';
import { NetworkPage } from './pages/NetworkPage';
import { MessagesPage } from './pages/MessagesPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotificationsPage } from './pages/NotificationsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/register',
    element: <RegistrationPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/discover',
    element: <DiscoverPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/events/:id',
    element: <EventDetailPage />,
  },
  {
    path: '/travel',
    element: <TravelHubPage />,
  },
  {
    path: '/network',
    element: <NetworkPage />,
  },
  {
    path: '/messages',
    element: <MessagesPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/notifications',
    element: <NotificationsPage />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);
