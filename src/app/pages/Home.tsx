import React from 'react';
import { Link } from 'react-router';
import { useData } from '../context/DataContext';
import { Search, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

export const Home = () => {
  const { connections, events, projects, travelRoutes } = useData();

  const recommendedCollaborators = connections.filter((c) => !c.isConnected).slice(0, 3);
  const trendingEvents = events.slice(0, 3);
  const activeProjects = projects.filter((p) => p.status === 'Active' || p.status === 'Recruiting').slice(0, 3);
  const nearbyRoutes = travelRoutes.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search people, events, projects..."
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary shadow-sm"
          />
        </div>
      </div>

      {/* Recommended Collaborators */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-foreground">Recommended Collaborators</h2>
          <Link to="/discover" className="text-[#14B8A6] hover:underline flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedCollaborators.map((person) => (
            <div
              key={person.id}
              className="bg-white dark:bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start space-x-3 mb-3">
                <img
                  src={person.profileImage}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.university}</p>
                  <div className="mt-1 text-xs text-[#14B8A6] font-medium">
                    {person.compatibility}% Match
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {person.domain.map((d) => (
                  <span
                    key={d}
                    className="px-2 py-1 bg-[#1E3A8A]/10 dark:bg-primary/10 text-[#1E3A8A] dark:text-primary rounded-md text-xs"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {person.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-secondary text-foreground rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                to="/discover"
                className="mt-4 w-full block text-center bg-[#14B8A6] text-white py-2 rounded-lg hover:bg-[#14B8A6]/90 transition-all"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Events */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-foreground">Trending Events</h2>
          <Link to="/events" className="text-[#14B8A6] hover:underline flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trendingEvents.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="bg-white dark:bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] relative overflow-hidden">
                {event.image && (
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{event.organizer}</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {event.registeredCount}/{event.maxParticipants} registered
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Active Projects Near You */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-foreground">Active Projects Near You</h2>
          <Link to="/projects" className="text-[#14B8A6] hover:underline flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-32 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] relative overflow-hidden">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Recruiting' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.skillsRequired.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-secondary text-foreground rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {project.members}/{project.maxMembers} members
                    </span>
                  </div>
                  <Link
                    to="/projects"
                    className="text-[#14B8A6] hover:underline text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Routes Nearby */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-foreground">Travel Routes Nearby</h2>
          <Link to="/travel" className="text-[#14B8A6] hover:underline flex items-center space-x-1">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nearbyRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white dark:bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-foreground mb-2">
                    <MapPin className="w-5 h-5 text-[#14B8A6]" />
                    <span className="font-semibold">{route.startLocation}</span>
                  </div>
                  <div className="pl-7 text-muted-foreground mb-2">↓</div>
                  <div className="flex items-center space-x-2 text-foreground">
                    <MapPin className="w-5 h-5 text-[#1E3A8A] dark:text-primary" />
                    <span className="font-semibold">{route.destination}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{new Date(route.date).toLocaleDateString()}</div>
                  <div className="text-sm font-medium text-foreground">{route.time}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-3 pt-3 border-t border-border">
                <img
                  src={route.creatorImage}
                  alt={route.creatorName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-foreground">{route.creatorName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {route.seatsAvailable}/{route.maxSeats} seats available
                </span>
                <span className="px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-lg text-sm">
                  {route.transport}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
