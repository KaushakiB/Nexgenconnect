import { useState } from 'react';
import { Plus, Users, X, Upload } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const myProjects = [
  {
    id: 1,
    title: 'Climate Change App',
    description: 'Building a mobile app to track carbon footprint and suggest eco-friendly alternatives',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=400&h=200&fit=crop',
    skills: ['React Native', 'Firebase', 'UI/UX'],
    members: 4,
    maxMembers: 6,
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'AI Tutor Platform',
    description: 'Developing an AI-powered personalized learning platform for students',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop',
    skills: ['Python', 'OpenAI', 'Flask', 'React'],
    members: 3,
    maxMembers: 5,
    status: 'Planning',
  },
];

const invitedProjects = [
  {
    id: 3,
    title: 'Student Marketplace',
    description: 'Platform for students to buy/sell items within university',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    skills: ['MERN Stack', 'Payment API', 'AWS'],
    members: 3,
    maxMembers: 5,
    status: 'Recruiting',
  },
  {
    id: 4,
    title: 'Mental Health Chatbot',
    description: 'AI chatbot to provide mental health support for students',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400&h=200&fit=crop',
    skills: ['NLP', 'Python', 'UI Design'],
    members: 2,
    maxMembers: 4,
    status: 'Recruiting',
  },
];

export function ProjectsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    skills: '',
    maxTeamSize: '',
    visibility: 'public',
    image: '',
  });
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setProjectForm({ ...projectForm, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New project:', projectForm);
    setShowCreateModal(false);
    setProjectForm({
      title: '',
      description: '',
      skills: '',
      maxTeamSize: '',
      visibility: 'public',
      image: '',
    });
    setImagePreview('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Projects</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Create Project
          </button>
        </div>

        {/* My Projects */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myProjects.map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      project.status === 'In Progress'
                        ? 'bg-[#14B8A6]/20 text-[#14B8A6]'
                        : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{project.members}/{project.maxMembers} members</span>
                    </div>
                    <button className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invited Projects */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Project Invitations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {invitedProjects.map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-xs rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-secondary text-xs rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{project.members}/{project.maxMembers} members</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white rounded-lg transition-colors text-sm">
                        Accept
                      </button>
                      <button className="px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors text-sm">
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Create New Project</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm mb-2">Project Title</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter project title"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Description</label>
                <textarea
                  required
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Describe your project"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Project Image</label>
                <div className="flex items-center gap-4">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-32 h-20 rounded-lg object-cover"
                    />
                  )}
                  <label className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary hover:bg-secondary/80 border border-input rounded-lg transition-colors">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm">Upload Image</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Skills Required (comma-separated)</label>
                <input
                  type="text"
                  required
                  value={projectForm.skills}
                  onChange={(e) => setProjectForm({ ...projectForm, skills: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="e.g. React, Node.js, MongoDB"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Max Team Size</label>
                <input
                  type="number"
                  required
                  min="2"
                  value={projectForm.maxTeamSize}
                  onChange={(e) => setProjectForm({ ...projectForm, maxTeamSize: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter max team size"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Visibility</label>
                <select
                  value={projectForm.visibility}
                  onChange={(e) => setProjectForm({ ...projectForm, visibility: e.target.value })}
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
                  Create Project
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
