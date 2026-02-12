import { useState } from 'react';
import { Edit, MapPin, Briefcase, Calendar, Upload, X } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

const projects = [
  {
    id: 1,
    title: 'Climate Change App',
    status: 'Completed',
    date: 'Jan 2026',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=400&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'AI Tutor Platform',
    status: 'In Progress',
    date: 'Feb 2026',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'AI & ML Hackathon 2026',
    date: 'Feb 20, 2026',
    type: 'Event',
  },
  {
    id: 2,
    title: 'Design Systems Workshop',
    date: 'Feb 18, 2026',
    type: 'Event',
  },
  {
    id: 3,
    title: 'Project Deadline: AI Tutor',
    date: 'Feb 28, 2026',
    type: 'Deadline',
  },
];

export function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: user?.fullName || '',
    profession: user?.profession || '',
    university: user?.university || '',
    country: user?.country || '',
    bio: user?.bio || '',
    skills: user?.skills?.join(', ') || '',
    interests: user?.interests?.join(', ') || '',
    profileImage: user?.profileImage || '',
  });
  const [imagePreview, setImagePreview] = useState(user?.profileImage || '');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setEditForm({ ...editForm, profileImage: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateProfile({
      fullName: editForm.fullName,
      profession: editForm.profession,
      university: editForm.university,
      country: editForm.country,
      bio: editForm.bio,
      skills: editForm.skills.split(',').map((s) => s.trim()).filter(Boolean),
      interests: editForm.interests.split(',').map((i) => i.trim()).filter(Boolean),
      profileImage: editForm.profileImage,
    });
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={user.profileImage || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'}
                    alt={user.fullName}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#1E3A8A]/20"
                  />
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 p-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-full cursor-pointer">
                      <Upload className="w-4 h-4" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                {!isEditing ? (
                  <>
                    <h2 className="text-2xl font-bold mb-1">{user.fullName}</h2>
                    <p className="text-muted-foreground mb-2">{user.profession}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{user.university}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{user.country}</span>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3 text-left">
                    <input
                      type="text"
                      value={editForm.fullName}
                      onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      value={editForm.profession}
                      onChange={(e) => setEditForm({ ...editForm, profession: e.target.value })}
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      placeholder="Profession"
                    />
                    <input
                      type="text"
                      value={editForm.university}
                      onChange={(e) => setEditForm({ ...editForm, university: e.target.value })}
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      placeholder="University"
                    />
                    <input
                      type="text"
                      value={editForm.country}
                      onChange={(e) => setEditForm({ ...editForm, country: e.target.value })}
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                      placeholder="Country"
                    />
                  </div>
                )}
              </div>

              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full py-2 flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditForm({
                        fullName: user.fullName,
                        profession: user.profession || '',
                        university: user.university,
                        country: user.country,
                        bio: user.bio || '',
                        skills: user.skills?.join(', ') || '',
                        interests: user.interests?.join(', ') || '',
                        profileImage: user.profileImage || '',
                      });
                      setImagePreview(user.profileImage || '');
                    }}
                    className="px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">About</h3>
              {!isEditing ? (
                <p className="text-muted-foreground">
                  {user.bio || 'No bio added yet.'}
                </p>
              ) : (
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Write something about yourself..."
                />
              )}
            </div>

            {/* Skills */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Skills</h3>
              {!isEditing ? (
                <div className="flex flex-wrap gap-2">
                  {user.skills && user.skills.length > 0 ? (
                    user.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] dark:bg-[#3b82f6]/20 dark:text-[#3b82f6] rounded-full"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No skills added yet.</p>
                  )}
                </div>
              ) : (
                <input
                  type="text"
                  value={editForm.skills}
                  onChange={(e) => setEditForm({ ...editForm, skills: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter skills separated by commas (e.g. React, Python, Design)"
                />
              )}
            </div>

            {/* Interests */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Interests</h3>
              {!isEditing ? (
                <div className="flex flex-wrap gap-2">
                  {user.interests && user.interests.length > 0 ? (
                    user.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full"
                      >
                        {interest}
                      </span>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No interests added yet.</p>
                  )}
                </div>
              ) : (
                <input
                  type="text"
                  value={editForm.interests}
                  onChange={(e) => setEditForm({ ...editForm, interests: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter interests separated by commas (e.g. AI, Startups, Travel)"
                />
              )}
            </div>

            {/* Projects */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Projects Completed</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="border border-border rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3">
                      <h4 className="font-medium mb-1">{project.title}</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            project.status === 'Completed'
                              ? 'bg-green-500/20 text-green-600 dark:text-green-500'
                              : 'bg-blue-500/20 text-blue-600 dark:text-blue-500'
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-muted-foreground">{project.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events & Deadlines</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <div className="p-2 bg-[#1E3A8A]/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-[#1E3A8A] dark:text-[#3b82f6]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        event.type === 'Event'
                          ? 'bg-[#14B8A6]/20 text-[#14B8A6]'
                          : 'bg-orange-500/20 text-orange-600 dark:text-orange-500'
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
