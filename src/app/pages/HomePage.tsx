import { Search, UserPlus, Calendar, FolderKanban, MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router';

const recommendedCollaborators = [
  {
    id: 1,
    name: 'Sarah Chen',
    university: 'MIT',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    skills: ['AI', 'Python', 'Research'],
    compatibility: 92,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    university: 'UC Berkeley',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    skills: ['Web Dev', 'React', 'Node.js'],
    compatibility: 88,
  },
  {
    id: 3,
    name: 'Emily Watson',
    university: 'Stanford',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    skills: ['UI/UX', 'Figma', 'Design'],
    compatibility: 85,
  },
  {
    id: 4,
    name: 'David Kim',
    university: 'Harvard',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    skills: ['Data Science', 'ML', 'Analytics'],
    compatibility: 90,
  },
];

const trendingEvents = [
  {
    id: 1,
    title: 'AI & ML Hackathon 2026',
    date: 'Feb 20, 2026',
    location: 'Virtual',
    attendees: 234,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Startup Pitch Competition',
    date: 'Feb 25, 2026',
    location: 'San Francisco',
    attendees: 156,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Tech Career Fair',
    date: 'Mar 5, 2026',
    location: 'New York',
    attendees: 412,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop',
  },
];

const activeProjects = [
  {
    id: 1,
    title: 'Climate Change App',
    description: 'Building a mobile app to track carbon footprint',
    members: 4,
    maxMembers: 6,
    skills: ['React Native', 'Firebase', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=400&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Student Marketplace',
    description: 'Platform for students to buy/sell items',
    members: 3,
    maxMembers: 5,
    skills: ['MERN Stack', 'Payment API', 'AWS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
  },
];

const travelRoutes = [
  {
    id: 1,
    from: 'Boston',
    to: 'New York',
    date: 'Feb 18, 2026',
    transport: 'Car',
    seats: 2,
  },
  {
    id: 2,
    from: 'San Francisco',
    to: 'Los Angeles',
    date: 'Feb 22, 2026',
    transport: 'Car',
    seats: 3,
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search people, events, projects..."
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] shadow-sm"
            />
          </div>
        </div>

        {/* Recommended Collaborators */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recommended Collaborators</h2>
            <Link to="/discover" className="text-[#14B8A6] hover:underline text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendedCollaborators.map((person) => (
              <div key={person.id} className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{person.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{person.university}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {person.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#14B8A6]">{person.compatibility}% Match</span>
                  <button className="p-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors">
                    <UserPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Events */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Trending Events</h2>
            <Link to="/events" className="text-[#14B8A6] hover:underline text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trendingEvents.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`} className="group">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <h3 className="font-medium mb-2 group-hover:text-[#1E3A8A] transition-colors">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <span className="text-sm text-[#14B8A6]">{event.attendees} attending</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Active Projects */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Active Projects Near You</h2>
            <Link to="/projects" className="text-[#14B8A6] hover:underline text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {project.members}/{project.maxMembers} members
                    </span>
                    <button className="px-4 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors text-sm">
                      Join Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Routes */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Travel Routes Nearby</h2>
            <Link to="/travel" className="text-[#14B8A6] hover:underline text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelRoutes.map((route) => (
              <div key={route.id} className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#14B8A6]" />
                    <span className="font-medium">{route.from}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-medium">{route.to}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-muted-foreground">
                    <div>{route.date}</div>
                    <div>{route.transport} · {route.seats} seats available</div>
                  </div>
                  <button className="px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors">
                    Join
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
