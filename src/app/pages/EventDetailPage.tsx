import { Calendar, MapPin, Users, UserPlus, MessageSquare, CalendarPlus } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useParams } from 'react-router';

const eventData = {
  id: 1,
  title: 'AI & ML Hackathon 2026',
  organizer: 'MIT Tech Club',
  date: 'Feb 20, 2026',
  time: '9:00 AM - 6:00 PM',
  location: 'Virtual - Zoom Link Provided',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=400&fit=crop',
  description: 'Join us for an exciting 24-hour hackathon focused on AI and Machine Learning. Build innovative solutions, collaborate with talented individuals, and compete for amazing prizes. This event is perfect for students passionate about artificial intelligence and looking to create real-world impact.',
  fullDescription: 'This hackathon will bring together students from top universities to work on AI/ML challenges. Participants will have access to mentors from leading tech companies, workshops on cutting-edge technologies, and networking opportunities with industry professionals.',
  attendees: 234,
  maxAttendees: 500,
  skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science', 'Deep Learning'],
  registrationDeadline: 'Feb 15, 2026',
  teamSize: '2-4 members',
  prizes: ['$5,000 First Prize', '$2,500 Second Prize', '$1,000 Third Prize'],
};

const registeredParticipants = [
  {
    id: 1,
    name: 'Sarah Chen',
    university: 'MIT',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    skills: ['AI', 'Python'],
    lookingForTeam: true,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    university: 'UC Berkeley',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    skills: ['ML', 'TensorFlow'],
    lookingForTeam: true,
  },
  {
    id: 3,
    name: 'Emily Watson',
    university: 'Stanford',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    skills: ['Data Science', 'Python'],
    lookingForTeam: false,
  },
  {
    id: 4,
    name: 'David Kim',
    university: 'Harvard',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    skills: ['Deep Learning', 'PyTorch'],
    lookingForTeam: true,
  },
];

export function EventDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        {/* Banner Image */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={eventData.image}
            alt={eventData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">{eventData.title}</h1>
            <p className="text-white/90 text-lg">{eventData.organizer}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Event Info Card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#14B8A6]" />
                    <div>
                      <div className="font-medium">{eventData.date}</div>
                      <div className="text-sm text-muted-foreground">{eventData.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#14B8A6]" />
                    <div className="font-medium">{eventData.location}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#14B8A6]" />
                    <div>
                      <div className="font-medium">{eventData.attendees}/{eventData.maxAttendees} Registered</div>
                      <div className="text-sm text-muted-foreground">Team Size: {eventData.teamSize}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">About This Event</h2>
                <p className="text-muted-foreground mb-4">{eventData.description}</p>
                <p className="text-muted-foreground">{eventData.fullDescription}</p>
              </div>

              {/* Skills Required */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Skills Required</h2>
                <div className="flex flex-wrap gap-2">
                  {eventData.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:bg-[#3b82f6]/20 dark:text-[#3b82f6] rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prizes */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Prizes</h2>
                <div className="space-y-2">
                  {eventData.prizes.map((prize, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#14B8A6] rounded-full" />
                      <span className="text-muted-foreground">{prize}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discussion Section */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Discussion</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        placeholder="Share your thoughts or questions..."
                        rows={3}
                        className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      />
                      <button className="mt-2 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Register Card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                <div className="space-y-4">
                  <button className="w-full py-3 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                    <UserPlus className="w-5 h-5" />
                    Register for Event
                  </button>
                  <button className="w-full py-3 border border-border hover:bg-secondary rounded-lg transition-colors flex items-center justify-center gap-2">
                    <CalendarPlus className="w-5 h-5" />
                    Add to Calendar
                  </button>
                  <div className="text-center text-sm text-muted-foreground">
                    Registration closes on {eventData.registrationDeadline}
                  </div>
                </div>
              </div>

              {/* Team Formation */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Looking for Team Members</h3>
                <div className="space-y-3">
                  {registeredParticipants
                    .filter((p) => p.lookingForTeam)
                    .slice(0, 3)
                    .map((participant) => (
                      <div key={participant.id} className="flex items-center gap-3 pb-3 border-b border-border last:border-0">
                        <img
                          src={participant.image}
                          alt={participant.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{participant.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{participant.university}</div>
                          <div className="flex gap-1 mt-1">
                            {participant.skills.slice(0, 2).map((skill, idx) => (
                              <span key={idx} className="text-xs px-2 py-0.5 bg-secondary rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                </div>
                <button className="w-full mt-4 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors text-sm">
                  Join Team Building
                </button>
              </div>

              {/* Registered Participants */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Registered Participants ({eventData.attendees})</h3>
                <div className="grid grid-cols-5 gap-2">
                  {registeredParticipants.map((participant) => (
                    <img
                      key={participant.id}
                      src={participant.image}
                      alt={participant.name}
                      className="w-10 h-10 rounded-full object-cover"
                      title={participant.name}
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs">
                    +230
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
