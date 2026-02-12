import { UserPlus, MessageSquare, Calendar, FolderKanban, MapPin, Bell } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const notifications = [
  {
    id: 1,
    type: 'connection',
    icon: UserPlus,
    title: 'New Connection Request',
    description: 'Jessica Lee sent you a connection request',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    timestamp: '5 minutes ago',
    unread: true,
  },
  {
    id: 2,
    type: 'message',
    icon: MessageSquare,
    title: 'New Message',
    description: 'Sarah Chen: Sounds good! Let\'s meet tomorrow.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    timestamp: '2 hours ago',
    unread: true,
  },
  {
    id: 3,
    type: 'event',
    icon: Calendar,
    title: 'Event Reminder',
    description: 'AI & ML Hackathon 2026 starts in 2 days',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=150&h=150&fit=crop',
    timestamp: '3 hours ago',
    unread: true,
  },
  {
    id: 4,
    type: 'project',
    icon: FolderKanban,
    title: 'Project Invitation',
    description: 'You were invited to join "Mental Health Chatbot"',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=150&h=150&fit=crop',
    timestamp: '5 hours ago',
    unread: true,
  },
  {
    id: 5,
    type: 'travel',
    icon: MapPin,
    title: 'Travel Request',
    description: 'Michael Rodriguez accepted your travel route request',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    timestamp: '1 day ago',
    unread: false,
  },
  {
    id: 6,
    type: 'connection',
    icon: UserPlus,
    title: 'Connection Accepted',
    description: 'Emily Watson accepted your connection request',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    timestamp: '1 day ago',
    unread: false,
  },
  {
    id: 7,
    type: 'event',
    icon: Calendar,
    title: 'Event Registration Confirmed',
    description: 'You are registered for Design Systems Workshop',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=150&h=150&fit=crop',
    timestamp: '2 days ago',
    unread: false,
  },
];

export function NotificationsPage() {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Notifications</h1>
            <p className="text-muted-foreground">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          <button className="px-4 py-2 text-sm text-[#1E3A8A] dark:text-[#3b82f6] hover:underline">
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-2">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                  notification.unread ? 'border-l-4 border-l-[#14B8A6]' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Notification Image */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={notification.image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${
                      notification.type === 'connection' ? 'bg-[#1E3A8A]' :
                      notification.type === 'message' ? 'bg-[#14B8A6]' :
                      notification.type === 'event' ? 'bg-blue-500' :
                      notification.type === 'project' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`}>
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Notification Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                  </div>

                  {/* Unread Indicator */}
                  {notification.unread && (
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-[#14B8A6] rounded-full" />
                    </div>
                  )}
                </div>

                {/* Action Buttons (for specific notification types) */}
                {notification.type === 'connection' && notification.unread && (
                  <div className="flex gap-2 mt-4 ml-16">
                    <button className="px-4 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors text-sm">
                      Accept
                    </button>
                    <button className="px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors text-sm">
                      Decline
                    </button>
                  </div>
                )}

                {notification.type === 'project' && notification.unread && (
                  <div className="flex gap-2 mt-4 ml-16">
                    <button className="px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors text-sm">
                      View Project
                    </button>
                    <button className="px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors text-sm">
                      Dismiss
                    </button>
                  </div>
                )}

                {notification.type === 'message' && notification.unread && (
                  <div className="flex gap-2 mt-4 ml-16">
                    <button className="px-4 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors text-sm">
                      Reply
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State (if needed) */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex w-16 h-16 bg-secondary rounded-full items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No notifications</h3>
            <p className="text-muted-foreground">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
