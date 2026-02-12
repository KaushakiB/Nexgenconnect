import { useState } from 'react';
import { Search, MessageSquare, UserPlus } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const users = [
  {
    id: 1,
    name: 'Sarah Chen',
    university: 'MIT',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    domain: ['AI', 'Machine Learning'],
    skills: ['Python', 'TensorFlow', 'Research'],
    location: 'Boston, MA',
    compatibility: 92,
    isConnected: false,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    university: 'UC Berkeley',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    domain: ['Web Development', 'Full Stack'],
    skills: ['React', 'Node.js', 'MongoDB'],
    location: 'Berkeley, CA',
    compatibility: 88,
    isConnected: false,
  },
  {
    id: 3,
    name: 'Emily Watson',
    university: 'Stanford University',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    domain: ['UI/UX Design', 'Product Design'],
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    location: 'Stanford, CA',
    compatibility: 85,
    isConnected: true,
  },
  {
    id: 4,
    name: 'David Kim',
    university: 'Harvard University',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    domain: ['Data Science', 'Analytics'],
    skills: ['Python', 'R', 'SQL', 'Tableau'],
    location: 'Cambridge, MA',
    compatibility: 90,
    isConnected: false,
  },
  {
    id: 5,
    name: 'Jessica Lee',
    university: 'Carnegie Mellon',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    domain: ['Cybersecurity', 'Network Security'],
    skills: ['Ethical Hacking', 'Linux', 'Security'],
    location: 'Pittsburgh, PA',
    compatibility: 78,
    isConnected: false,
  },
  {
    id: 6,
    name: 'Ryan Patel',
    university: 'Georgia Tech',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    domain: ['Mobile Development', 'iOS'],
    skills: ['Swift', 'React Native', 'Flutter'],
    location: 'Atlanta, GA',
    compatibility: 82,
    isConnected: false,
  },
];

export function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Discover Collaborators</h1>

        {/* Search and Filters */}
        <div className="mb-6 bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by skills, university, domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-2">Skills</label>
              <select className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]">
                <option>All Skills</option>
                <option>React</option>
                <option>Python</option>
                <option>Design</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">University</label>
              <select className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]">
                <option>All Universities</option>
                <option>MIT</option>
                <option>Stanford</option>
                <option>Harvard</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Location</label>
              <select className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]">
                <option>All Locations</option>
                <option>Boston</option>
                <option>San Francisco</option>
                <option>New York</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Compatibility</label>
              <select className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]">
                <option>All</option>
                <option>90%+</option>
                <option>80%+</option>
                <option>70%+</option>
              </select>
            </div>
          </div>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">{user.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{user.university}</p>
                    <p className="text-xs text-muted-foreground">{user.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-[#14B8A6]">{user.compatibility}%</div>
                    <div className="text-xs text-muted-foreground">Match</div>
                  </div>
                </div>

                {/* Domain Tags */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {user.domain.map((d, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:bg-[#3b82f6]/20 dark:text-[#3b82f6] text-xs rounded-full">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {user.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {user.isConnected ? (
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </button>
                  ) : (
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors">
                      <UserPlus className="w-4 h-4" />
                      Connect
                    </button>
                  )}
                  <button className="px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
