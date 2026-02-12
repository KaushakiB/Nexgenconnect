import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Search, Filter, MessageCircle, UserPlus, UserCheck } from 'lucide-react';

export const Discover = () => {
  const { connections, toggleConnection } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    skills: '',
    university: '',
    location: '',
  });

  const filteredConnections = connections.filter((conn) => {
    const matchesSearch = conn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conn.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Discover Collaborators</h1>
        <p className="text-muted-foreground">Find talented students to work with on your next project</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by skills, university, domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary shadow-sm"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter by skills"
            value={filters.skills}
            onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary"
          />
        </div>
        <input
          type="text"
          placeholder="Filter by university"
          value={filters.university}
          onChange={(e) => setFilters({ ...filters, university: e.target.value })}
          className="w-full px-4 py-2 bg-white dark:bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full px-4 py-2 bg-white dark:bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-primary"
        />
        <button className="px-4 py-2 bg-[#1E3A8A] dark:bg-primary text-white rounded-lg hover:opacity-90 transition-all">
          Apply Filters
        </button>
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConnections.map((person) => (
          <div
            key={person.id}
            className="bg-white dark:bg-card rounded-xl border border-border p-6 hover:shadow-xl transition-all"
          >
            {/* Profile Header */}
            <div className="flex items-start space-x-4 mb-4">
              <img
                src={person.profileImage}
                alt={person.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.university}</p>
                <div className="mt-2">
                  <div className="inline-flex items-center px-2 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-lg text-sm font-medium">
                    {person.compatibility}% Match
                  </div>
                </div>
              </div>
            </div>

            {/* Domain Bubbles */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {person.domain.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1 bg-[#1E3A8A]/10 dark:bg-primary/10 text-[#1E3A8A] dark:text-primary rounded-full text-xs font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-2">Skills</p>
              <div className="flex flex-wrap gap-1">
                {person.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-secondary text-foreground rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => toggleConnection(person.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg transition-all ${
                  person.isConnected
                    ? 'bg-secondary text-foreground hover:bg-secondary/80'
                    : 'bg-[#14B8A6] text-white hover:bg-[#14B8A6]/90'
                }`}
              >
                {person.isConnected ? (
                  <>
                    <UserCheck className="w-4 h-4" />
                    <span className="text-sm">Connected</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span className="text-sm">Connect</span>
                  </>
                )}
              </button>
              {person.isConnected && (
                <button className="px-4 py-2 bg-[#1E3A8A] dark:bg-primary text-white rounded-lg hover:opacity-90 transition-all">
                  <MessageCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
