import { useState } from 'react';
import { Send, Paperclip, Search, MoreVertical } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const conversations = [
  {
    id: 1,
    user: {
      name: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      status: 'online',
    },
    lastMessage: 'Sounds good! Let\'s meet tomorrow.',
    timestamp: '2m ago',
    unread: 2,
  },
  {
    id: 2,
    user: {
      name: 'Michael Rodriguez',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      status: 'offline',
    },
    lastMessage: 'Thanks for the project invite!',
    timestamp: '1h ago',
    unread: 0,
  },
  {
    id: 3,
    user: {
      name: 'Emily Watson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      status: 'online',
    },
    lastMessage: 'Can you review my design mockup?',
    timestamp: '3h ago',
    unread: 1,
  },
  {
    id: 4,
    user: {
      name: 'David Kim',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      status: 'offline',
    },
    lastMessage: 'Great work on the presentation!',
    timestamp: '1d ago',
    unread: 0,
  },
];

const messages = [
  {
    id: 1,
    senderId: 1,
    content: 'Hey! How are you doing?',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    senderId: 'me',
    content: 'Hi Sarah! I\'m doing great, thanks for asking. How about you?',
    timestamp: '10:32 AM',
  },
  {
    id: 3,
    senderId: 1,
    content: 'I\'m good too! I wanted to ask if you\'re interested in collaborating on the AI hackathon project?',
    timestamp: '10:33 AM',
  },
  {
    id: 4,
    senderId: 'me',
    content: 'Absolutely! That sounds exciting. What did you have in mind?',
    timestamp: '10:35 AM',
  },
  {
    id: 5,
    senderId: 1,
    content: 'I was thinking we could build a machine learning model for climate prediction. We could meet tomorrow to discuss the details.',
    timestamp: '10:36 AM',
  },
  {
    id: 6,
    senderId: 'me',
    content: 'Sounds good! Let\'s meet tomorrow.',
    timestamp: '10:38 AM',
  },
];

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16 h-screen flex">
        {/* Conversations Sidebar */}
        <div className="w-80 border-r border-border bg-card flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-xl font-semibold mb-3">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b border-border cursor-pointer transition-colors hover:bg-secondary ${
                  selectedConversation.id === conversation.id ? 'bg-secondary' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={conversation.user.image}
                      alt={conversation.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.user.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium truncate">{conversation.user.name}</h3>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <span className="flex-shrink-0 ml-2 w-5 h-5 bg-[#14B8A6] text-white text-xs rounded-full flex items-center justify-center">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border bg-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={selectedConversation.user.image}
                  alt={selectedConversation.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {selectedConversation.user.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                )}
              </div>
              <div>
                <h3 className="font-semibold">{selectedConversation.user.name}</h3>
                <p className="text-xs text-muted-foreground capitalize">
                  {selectedConversation.user.status}
                </p>
              </div>
            </div>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-end gap-2 max-w-lg">
                  {message.senderId !== 'me' && (
                    <img
                      src={selectedConversation.user.image}
                      alt={selectedConversation.user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.senderId === 'me'
                          ? 'bg-[#1E3A8A] text-white'
                          : 'bg-secondary'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-2">
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border bg-card">
            <form onSubmit={handleSendMessage} className="flex items-end gap-2">
              <button
                type="button"
                className="p-3 hover:bg-secondary rounded-lg transition-colors"
              >
                <Paperclip className="w-5 h-5 text-muted-foreground" />
              </button>
              <div className="flex-1">
                <textarea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message..."
                  rows={1}
                  className="w-full px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] resize-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
              </div>
              <button
                type="submit"
                className="p-3 bg-[#1E3A8A] hover:bg-[#1e3a8a]/90 text-white rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
