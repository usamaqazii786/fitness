import React, { useState } from 'react';
import { Clock, User, Tag, Heart, MessageSquare, Share2 } from 'lucide-react';

export function Blog() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = {
    id: 1,
    title: "10 Essential Tips for Building Muscle and Strength",
    excerpt: "Discover the key principles of muscle building, from proper nutrition to effective workout routines...",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Michael Chen",
    date: "March 15, 2024",
    category: "Strength Training",
    likes: 245,
    comments: 56
  };

  const posts = [
    {
      id: 2,
      title: "The Ultimate Guide to HIIT Workouts",
      excerpt: "High-Intensity Interval Training (HIIT) is one of the most effective ways to burn fat and improve cardiovascular fitness...",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      category: "Cardio",
      likes: 183,
      comments: 42
    },
    {
      id: 3,
      title: "Nutrition Myths Debunked",
      excerpt: "Let's separate fact from fiction when it comes to common nutrition beliefs and dietary advice...",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Emma Williams",
      date: "March 10, 2024",
      category: "Nutrition",
      likes: 156,
      comments: 38
    },
    {
      id: 4,
      title: "Beginner's Guide to Yoga",
      excerpt: "Start your yoga journey with these fundamental poses and breathing techniques...",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Lisa Chen",
      date: "March 8, 2024",
      category: "Yoga",
      likes: 129,
      comments: 27
    }
  ];

  const categories = [
    "Strength Training",
    "Cardio",
    "Nutrition",
    "Yoga",
    "Recovery",
    "Mental Health"
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Post */}
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: `url(${featuredPost.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <span className="inline-block bg-indigo-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {featuredPost.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{featuredPost.title}</h1>
            <p className="text-lg mb-6">{featuredPost.excerpt}</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{featuredPost.date}</span>
              </div>
              <button 
                onClick={() => handleLike(featuredPost.id)}
                className="flex items-center space-x-2 hover:text-indigo-400 transition-colors"
              >
                <Heart className={`h-5 w-5 ${likedPosts.has(featuredPost.id) ? 'fill-current text-red-500' : ''}`} />
                <span>{featuredPost.likes + (likedPosts.has(featuredPost.id) ? 1 : 0)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden transform hover:scale-[1.02] transition-transform">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => handleLike(post.id)}
                          className="flex items-center space-x-2 hover:text-indigo-600 transition-colors"
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.has(post.id) ? 'fill-current text-red-500' : ''}`} />
                          <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-indigo-600" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-indigo-600 rounded-lg shadow-sm p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="mb-4">Get the latest fitness tips and articles delivered to your inbox.</p>
              {subscribed ? (
                <div className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-center">
                  Thanks for subscribing! 🎉
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}