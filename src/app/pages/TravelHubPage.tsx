import { useState } from 'react';
import { Plus, MapPin, Calendar, Users, X, Upload, Search } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const activeRoutes = [
  {
    id: 1,
    from: 'Boston',
    to: 'New York',
    date: 'Feb 18, 2026',
    time: '8:00 AM',
    transport: 'Car',
    seatsAvailable: 2,
    totalSeats: 4,
    user: {
      name: 'Sarah Chen',
      university: 'MIT',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
  },
  {
    id: 2,
    from: 'San Francisco',
    to: 'Los Angeles',
    date: 'Feb 22, 2026',
    time: '6:00 PM',
    transport: 'Car',
    seatsAvailable: 3,
    totalSeats: 4,
    user: {
      name: 'Michael Rodriguez',
      university: 'UC Berkeley',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
  },
  {
    id: 3,
    from: 'Cambridge',
    to: 'Philadelphia',
    date: 'Feb 25, 2026',
    time: '10:00 AM',
    transport: 'Train',
    seatsAvailable: 1,
    totalSeats: 2,
    user: {
      name: 'Emily Watson',
      university: 'Harvard',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  },
  {
    id: 4,
    from: 'Seattle',
    to: 'Portland',
    date: 'Mar 1, 2026',
    time: '3:00 PM',
    transport: 'Car',
    seatsAvailable: 2,
    totalSeats: 3,
    user: {
      name: 'David Kim',
      university: 'University of Washington',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
  },
];

const myTravelPlans = [
  {
    id: 5,
    from: 'Stanford',
    to: 'San Diego',
    date: 'Feb 20, 2026',
    time: '9:00 AM',
    transport: 'Car',
    seatsAvailable: 1,
    totalSeats: 4,
  },
];

export function TravelHubPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [routeForm, setRouteForm] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    transport: 'Car',
    maxPeople: '',
    visibility: 'public',
    notes: '',
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
        setRouteForm({ ...routeForm, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New route:', routeForm);
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Travel Hub</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Create Route
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by location, date, or transport type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] shadow-sm"
            />
          </div>
        </div>

        {/* My Travel Plans */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">My Travel Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myTravelPlans.map((route) => (
              <div key={route.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#14B8A6]" />
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-semibold">{route.from}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-semibold">{route.to}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{route.date} at {route.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{route.seatsAvailable}/{route.totalSeats} seats available</span>
                  </div>
                  <div className="text-sm">
                    <span className="px-2 py-1 bg-secondary rounded-md">{route.transport}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm">
                    Edit
                  </button>
                  <button className="flex-1 px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors text-sm">
                    View Requests
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Active Routes */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Active Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeRoutes.map((route) => (
              <div key={route.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-5">
                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={route.user.image}
                      alt={route.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{route.user.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{route.user.university}</div>
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#14B8A6] flex-shrink-0" />
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="font-semibold truncate">{route.from}</span>
                      <span className="text-muted-foreground flex-shrink-0">→</span>
                      <span className="font-semibold truncate">{route.to}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{route.date} at {route.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{route.seatsAvailable}/{route.totalSeats} seats available</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-secondary text-sm rounded-md">{route.transport}</span>
                    {route.seatsAvailable > 0 && (
                      <span className="text-sm text-[#14B8A6] font-medium">Available</span>
                    )}
                  </div>

                  <button className="w-full py-2 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors">
                    Request to Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Create Route Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Create Travel Route</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">From</label>
                  <input
                    type="text"
                    required
                    value={routeForm.from}
                    onChange={(e) => setRouteForm({ ...routeForm, from: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    placeholder="Starting location"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">To</label>
                  <input
                    type="text"
                    required
                    value={routeForm.to}
                    onChange={(e) => setRouteForm({ ...routeForm, to: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    placeholder="Destination"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Date</label>
                  <input
                    type="date"
                    required
                    value={routeForm.date}
                    onChange={(e) => setRouteForm({ ...routeForm, date: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Time</label>
                  <input
                    type="time"
                    required
                    value={routeForm.time}
                    onChange={(e) => setRouteForm({ ...routeForm, time: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Transport Type</label>
                  <select
                    value={routeForm.transport}
                    onChange={(e) => setRouteForm({ ...routeForm, transport: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  >
                    <option value="Car">Car</option>
                    <option value="Train">Train</option>
                    <option value="Bus">Bus</option>
                    <option value="Flight">Flight</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Max People</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={routeForm.maxPeople}
                    onChange={(e) => setRouteForm({ ...routeForm, maxPeople: e.target.value })}
                    className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    placeholder="Number of seats"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Additional Notes (Optional)</label>
                <textarea
                  value={routeForm.notes}
                  onChange={(e) => setRouteForm({ ...routeForm, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Any additional information..."
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Route Image (Optional)</label>
                <div className="flex items-center gap-4">
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="w-32 h-20 rounded-lg object-cover" />
                  )}
                  <label className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary hover:bg-secondary/80 border border-input rounded-lg transition-colors">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm">Upload Image</span>
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Visibility</label>
                <select
                  value={routeForm.visibility}
                  onChange={(e) => setRouteForm({ ...routeForm, visibility: e.target.value })}
                  className="w-full px-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                >
                  <option value="public">Public</option>
                  <option value="university">University Only</option>
                  <option value="connections">Connections Only</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors"
                >
                  Create Route
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
