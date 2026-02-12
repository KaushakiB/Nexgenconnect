import { MessageSquare, UserMinus, Check, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const pendingRequests = [
  {
    id: 1,
    name: 'Jessica Lee',
    university: 'Carnegie Mellon',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    mutualConnections: 5,
    skills: ['Cybersecurity', 'Linux'],
  },
  {
    id: 2,
    name: 'Ryan Patel',
    university: 'Georgia Tech',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    mutualConnections: 3,
    skills: ['iOS', 'Swift'],
  },
  {
    id: 3,
    name: 'Olivia Martinez',
    university: 'Columbia University',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    mutualConnections: 7,
    skills: ['Marketing', 'Analytics'],
  },
];

const connections = [
  {
    id: 1,
    name: 'Sarah Chen',
    university: 'MIT',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    profession: 'AI Researcher',
    connectedSince: 'Jan 2026',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    university: 'UC Berkeley',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    profession: 'Full Stack Developer',
    connectedSince: 'Dec 2025',
  },
  {
    id: 3,
    name: 'Emily Watson',
    university: 'Stanford University',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    profession: 'Product Designer',
    connectedSince: 'Nov 2025',
  },
  {
    id: 4,
    name: 'David Kim',
    university: 'Harvard University',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    profession: 'Data Scientist',
    connectedSince: 'Oct 2025',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    university: 'Princeton',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop',
    profession: 'Software Engineer',
    connectedSince: 'Sep 2025',
  },
  {
    id: 6,
    name: 'James Brown',
    university: 'Yale',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop',
    profession: 'Entrepreneur',
    connectedSince: 'Aug 2025',
  },
];

export function NetworkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Network</h1>

        {/* Pending Requests */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              Pending Requests
              <span className="ml-2 px-2 py-1 bg-[#14B8A6]/20 text-[#14B8A6] text-sm rounded-full">
                {pendingRequests.length}
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={request.image}
                    alt={request.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{request.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{request.university}</p>
                    <p className="text-xs text-muted-foreground">
                      {request.mutualConnections} mutual connections
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {request.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors">
                    <Check className="w-4 h-4" />
                    Accept
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connections */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              My Connections
              <span className="ml-2 text-muted-foreground text-base">
                ({connections.length})
              </span>
            </h2>
            <input
              type="text"
              placeholder="Search connections..."
              className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {connections.map((connection) => (
              <div key={connection.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={connection.image}
                    alt={connection.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{connection.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{connection.profession}</p>
                    <p className="text-xs text-muted-foreground">{connection.university}</p>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  Connected since {connection.connectedSince}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </button>
                  <button className="p-2 border border-border hover:bg-secondary rounded-lg transition-colors group">
                    <UserMinus className="w-4 h-4 group-hover:text-destructive" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
