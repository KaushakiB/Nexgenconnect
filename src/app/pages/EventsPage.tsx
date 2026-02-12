import { useState } from 'react';
import { Plus, Calendar, MapPin, Users, X, Upload, Search } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router';

const upcomingEvents = [
  {
    id: 1,
    title: 'AI & ML Hackathon 2026',
    organizer: 'MIT Tech Club',
    date: 'Feb 20, 2026',
    time: '9:00 AM',
    location: 'Virtual',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
    attendees: 234,
    maxAttendees: 500,
    skills: ['Machine Learning', 'Python', 'Data Science'],
    teamBuilding: true,
  },
  {
    id: 2,
    title: 'Startup Pitch Competition',
    organizer: 'Harvard Innovation Lab',
    date: 'Feb 25, 2026',
    time: '2:00 PM',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop',
    attendees: 156,
    maxAttendees: 200,
    skills: ['Business', 'Entrepreneurship', 'Pitching'],
    teamBuilding: true,
  },
  {
    id: 3,
    title: 'Tech Career Fair 2026',
    organizer: 'Stanford Career Services',
    date: 'Mar 5, 2026',
    time: '10:00 AM',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop',
    attendees: 412,
    maxAttendees: 600,
    skills: ['Networking', 'Career Development'],
    teamBuilding: false,
  },
  {
    id: 4,
    title: 'Web3 Workshop Series',
    organizer: 'Berkeley Blockchain Club',
    date: 'Mar 10, 2026',
    time: '6:00 PM',
    location: 'Virtual',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
    attendees: 89,
    maxAttendees: 150,
    skills: ['Blockchain', 'Solidity', 'Web3'],
    teamBuilding: false,
  },
];

const myRegisteredEvents = [
  {
    id: 5,
    title: 'Design Systems Workshop',
    organizer: 'UX/UI Collective',
    date: 'Feb 18, 2026',
    time: '3:00 PM',
    location: 'Virtual',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
  },
];

export function EventsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [eventForm, setEventForm] = useState({
    title: '',
    organizer: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxParticipants: '',
    skills: '',
    visibility: 'public',
    image: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setEventForm({ ...eventForm, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New event:', eventForm);
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Events</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Create Event
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] shadow-sm"
            />
          </div>
        </div>

        {/* My Registered Events */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">My Registered Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myRegisteredEvents.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`} className="group">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-4">
                    <h3 className="font-medium mb-2 group-hover:text-[#1E3A8A] transition-colors">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.organizer}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`} className="group">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    {event.teamBuilding && (
                      <span className="absolute top-3 right-3 px-2 py-1 bg-[#14B8A6] text-white text-xs rounded-full">
                        Team Building
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-[#1E3A8A] transition-colors">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{event.organizer}</p>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}/{event.maxAttendees} registered</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {event.skills.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                      {event.skills.length > 2 && (
                        <span className="px-2 py-1 bg-secondary text-xs rounded-md">
                          +{event.skills.length - 2}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="w-full py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Create New Event</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm mb-2">Event Title</label>
                <input
                  type="text"
                  required
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter event title"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Organizer</label>
                <input
                  type="text"
                  required
                  value={eventForm.organizer}
                  onChange={(e) => setEventForm({ ...eventForm, organizer: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter organizer name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Description</label>
                <textarea
                  required
                  value={eventForm.description}
                  onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Describe your event"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Banner Image</label>
                <div className="flex items-center gap-4">
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="w-32 h-20 rounded-lg object-cover" />
                  )}
                  <label className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary hover:bg-secondary/80 border border-input rounded-lg transition-colors">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm">Upload Banner</span>
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Date</label>
                  <input
                    type="date"
                    required
                    value={eventForm.date}
                    onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Time</label>
                  <input
                    type="time"
                    required
                    value={eventForm.time}
                    onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Location</label>
                <input
                  type="text"
                  required
                  value={eventForm.location}
                  onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter location or 'Virtual'"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Max Participants</label>
                <input
                  type="number"
                  required
                  value={eventForm.maxParticipants}
                  onChange={(e) => setEventForm({ ...eventForm, maxParticipants: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter max participants"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Skills Required (comma-separated)</label>
                <input
                  type="text"
                  value={eventForm.skills}
                  onChange={(e) => setEventForm({ ...eventForm, skills: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="e.g. Python, Machine Learning"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Visibility</label>
                <select
                  value={eventForm.visibility}
                  onChange={(e) => setEventForm({ ...eventForm, visibility: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                >
                  <option value="public">Public</option>
                  <option value="university">University Only</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors"
                >
                  Create Event
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-3 border border-border hover:bg-secondary rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
