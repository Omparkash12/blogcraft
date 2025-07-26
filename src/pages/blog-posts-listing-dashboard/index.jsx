import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PostCard from './components/PostCard';
import FilterTabs from './components/FilterTabs';
import SearchBar from './components/SearchBar';
import BulkActions from './components/BulkActions';
import EmptyState from './components/EmptyState';
import LoadingSkeleton from './components/LoadingSkeleton';
import SortDropdown from './components/SortDropdown';

const BlogPostsListingDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPosts, setSelectedPosts] = useState(new Set());
  const [currentSort, setCurrentSort] = useState('newest');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data for blog posts
  const mockPosts = [
    {
      id: 1,
      title: "Getting Started with React 18: A Complete Guide for Modern Web Development",
      excerpt: "Learn the fundamentals of React 18 including new features like concurrent rendering, automatic batching, and Suspense improvements that will revolutionize your development workflow.",
      featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      status: "published",
      publishedAt: "2025-01-20T10:30:00Z",
      views: 1247,
      comments: 23,
      tags: ["React", "JavaScript", "Web Development", "Frontend"]
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout: Advanced Techniques and Real-World Examples",
      excerpt: "Discover advanced CSS Grid techniques that will help you create complex, responsive layouts with ease. Includes practical examples and best practices for modern web design.",
      featuredImage: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?w=800&h=600&fit=crop",
      status: "draft",
      publishedAt: "2025-01-18T14:15:00Z",
      views: 892,
      comments: 15,
      tags: ["CSS", "Grid", "Layout", "Design"]
    },
    {
      id: 3,
      title: "Building Scalable Node.js Applications: Architecture Patterns and Best Practices",
      excerpt: "Explore proven architecture patterns and best practices for building scalable Node.js applications that can handle millions of users and complex business logic.",
      featuredImage: "https://images.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png?w=800&h=600&fit=crop",
      status: "scheduled",
      publishedAt: "2025-01-25T09:00:00Z",
      views: 2156,
      comments: 41,
      tags: ["Node.js", "Backend", "Architecture", "Scalability"]
    },
    {
      id: 4,
      title: "The Future of Web Development: Trends and Technologies to Watch in 2025",
      excerpt: "Stay ahead of the curve with insights into emerging web development trends, from AI-powered development tools to new JavaScript frameworks and progressive web apps.",
      featuredImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      status: "published",
      publishedAt: "2025-01-15T16:45:00Z",
      views: 3421,
      comments: 67,
      tags: ["Trends", "Future", "Technology", "Innovation"]
    },
    {
      id: 5,
      title: "TypeScript for Beginners: From JavaScript to Type-Safe Development",
      excerpt: "Make the transition from JavaScript to TypeScript with this comprehensive guide covering types, interfaces, generics, and advanced TypeScript features.",
      featuredImage: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=800&h=600&fit=crop",
      status: "published",
      publishedAt: "2025-01-12T11:20:00Z",
      views: 1876,
      comments: 34,
      tags: ["TypeScript", "JavaScript", "Types", "Development"]
    },
    {
      id: 6,
      title: "Optimizing React Performance: Techniques for Lightning-Fast Applications",
      excerpt: "Learn advanced React performance optimization techniques including memoization, code splitting, lazy loading, and profiling to build lightning-fast applications.",
      featuredImage: "https://images.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png?w=800&h=600&fit=crop",
      status: "draft",
      publishedAt: "2025-01-10T13:30:00Z",
      views: 1543,
      comments: 28,
      tags: ["React", "Performance", "Optimization", "Speed"]
    }
  ];

  // Initialize posts
  useEffect(() => {
    const initializePosts = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPosts(mockPosts);
      setLoading(false);
    };

    initializePosts();
  }, []);

  // Filter and search posts
  useEffect(() => {
    let filtered = [...posts];

    // Apply status filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(post => post.status === activeFilter);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (currentSort) {
        case 'newest':
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        case 'oldest':
          return new Date(a.publishedAt) - new Date(b.publishedAt);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'views-desc':
          return b.views - a.views;
        case 'views-asc':
          return a.views - b.views;
        default:
          return 0;
      }
    });

    setFilteredPosts(filtered);
  }, [posts, activeFilter, searchQuery, currentSort]);

  // Calculate post counts for filter tabs
  const postCounts = {
    all: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    draft: posts.filter(p => p.status === 'draft').length,
    scheduled: posts.filter(p => p.status === 'scheduled').length
  };

  // Handle search
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // Handle post selection
  const handlePostSelect = (postId, isSelected) => {
    const newSelected = new Set(selectedPosts);
    if (isSelected) {
      newSelected.add(postId);
    } else {
      newSelected.delete(postId);
    }
    setSelectedPosts(newSelected);
  };

  // Handle select all
  const handleSelectAll = () => {
    const allPostIds = new Set(filteredPosts.map(post => post.id));
    setSelectedPosts(allPostIds);
  };

  // Handle deselect all
  const handleDeselectAll = () => {
    setSelectedPosts(new Set());
  };

  // Handle bulk actions
  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedPosts.size} post(s)?`)) {
      setPosts(prevPosts => prevPosts.filter(post => !selectedPosts.has(post.id)));
      setSelectedPosts(new Set());
    }
  };

  const handleBulkPublish = () => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        selectedPosts.has(post.id) ? { ...post, status: 'published' } : post
      )
    );
    setSelectedPosts(new Set());
  };

  const handleBulkUnpublish = () => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        selectedPosts.has(post.id) ? { ...post, status: 'draft' } : post
      )
    );
    setSelectedPosts(new Set());
  };

  // Handle individual post actions
  const handleEditPost = (postId) => {
    // Navigate to edit form with post data
    console.log('Edit post:', postId);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    }
  };

  const handleToggleStatus = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, status: post.status === 'published' ? 'draft' : 'published' }
          : post
      )
    );
  };

  // Handle pull to refresh
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simulate fetching new data
    setIsRefreshing(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <>
      <Helmet>
        <title>Blog Posts Dashboard - BlogCraft</title>
        <meta name="description" content="Manage and organize your blog posts with BlogCraft's comprehensive dashboard. Create, edit, and publish content with ease." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs />
            
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Blog Posts Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Manage and organize your blog content
                </p>
              </div>
              
              <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                <SortDropdown
                  currentSort={currentSort}
                  onSortChange={setCurrentSort}
                />
                
                <Link to="/blog-post-creation-form">
                  <Button
                    variant="default"
                    iconName="Plus"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Create Post
                  </Button>
                </Link>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4 mb-8">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search posts by title, content, or tags..."
              />
              
              <FilterTabs
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                postCounts={postCounts}
              />
            </div>

            {/* Bulk Actions */}
            <BulkActions
              selectedCount={selectedPosts.size}
              totalCount={filteredPosts.length}
              onBulkDelete={handleBulkDelete}
              onBulkPublish={handleBulkPublish}
              onBulkUnpublish={handleBulkUnpublish}
              onSelectAll={handleSelectAll}
              onDeselectAll={handleDeselectAll}
            />

            {/* Content Area */}
            {loading ? (
              <LoadingSkeleton count={6} />
            ) : filteredPosts.length === 0 ? (
              <EmptyState
                hasSearchQuery={!!searchQuery.trim()}
                searchQuery={searchQuery}
                onClearSearch={clearSearch}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                    onToggleStatus={handleToggleStatus}
                    isSelected={selectedPosts.has(post.id)}
                    onSelect={handlePostSelect}
                  />
                ))}
              </div>
            )}

            {/* Load More Button - Desktop */}
            {!loading && filteredPosts.length > 0 && filteredPosts.length >= 6 && (
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  iconName="ChevronDown"
                  iconPosition="right"
                  iconSize={16}
                >
                  Load More Posts
                </Button>
              </div>
            )}
          </div>
        </main>

        {/* Floating Action Button - Mobile */}
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <Link to="/blog-post-creation-form">
            <Button
              variant="default"
              size="icon"
              className="w-14 h-14 rounded-full editorial-shadow-md"
              iconName="Plus"
              iconSize={24}
            />
          </Link>
        </div>

        {/* Pull to Refresh Indicator - Mobile */}
        {isRefreshing && (
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-popover border border-border rounded-lg px-4 py-2 editorial-shadow-md">
            <div className="flex items-center space-x-2">
              <div className="animate-spin">
                <Icon name="RefreshCw" size={16} className="text-primary" />
              </div>
              <span className="text-sm text-popover-foreground">Refreshing...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPostsListingDashboard;