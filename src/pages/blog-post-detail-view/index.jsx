import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';
import TableOfContents from './components/TableOfContents';
import NavigationControls from './components/NavigationControls';
import ShareModal from './components/ShareModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';

const BlogPostDetailView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('id') || '1';
  
  const [isLoading, setIsLoading] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  // Mock blog posts data
  const mockPosts = [
    {
      id: '1',
      title: 'Getting Started with React 18 and Modern Development',
      metaTitle: 'React 18 Guide - Modern Development Practices',
      metaDescription: 'Learn the latest features and best practices for React 18 development, including concurrent features, automatic batching, and performance optimizations.',
      featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      publishedDate: '2025-01-20',
      readTime: 8,
      views: 2847,
      tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
      content: `React 18 introduces groundbreaking features that revolutionize how we build user interfaces. This comprehensive guide explores the most important updates and how to leverage them in your projects.

# Concurrent Features

React 18's concurrent features allow your app to stay responsive during large screen updates. The new concurrent renderer can interrupt rendering work to handle high-priority updates like user input.

## Automatic Batching

One of the most significant improvements is automatic batching. React now batches multiple state updates into a single re-render, even when they occur in promises, timeouts, or native event handlers.

- Improved performance with fewer re-renders
- Better user experience with smoother interactions
- Backward compatible with existing code

# Suspense Improvements

Suspense has been enhanced to work better with server-side rendering and data fetching libraries. You can now use Suspense boundaries more effectively throughout your application.

## Error Boundaries Integration

The new error boundary integration provides better error handling and recovery mechanisms for your React applications.

# Migration Strategy

When migrating to React 18, start by updating your root rendering method and gradually adopt new features. The transition can be done incrementally without breaking existing functionality.

The future of React development is here, and these features provide the foundation for building more responsive and user-friendly applications.`
    },
    {
      id: '2',title: 'Advanced TypeScript Patterns for React Applications',metaTitle: 'TypeScript React Patterns - Advanced Development',metaDescription: 'Master advanced TypeScript patterns and techniques for building type-safe, scalable React applications with better developer experience.',featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',publishedDate: '2025-01-18',
      readTime: 12,
      views: 1923,
      tags: ['TypeScript', 'React', 'Patterns', 'Development'],
      content: `TypeScript has become essential for modern React development. This guide covers advanced patterns that will elevate your TypeScript and React skills to the next level.

# Generic Components

Creating reusable components with TypeScript generics allows for better type safety while maintaining flexibility. Learn how to build components that work with any data type.

## Conditional Types

Conditional types enable sophisticated type logic that adapts based on input types. This powerful feature helps create more intelligent APIs and better developer experiences.

- Type-safe prop drilling solutions
- Advanced hook patterns
- Component composition techniques

# Performance Optimization

TypeScript can help identify performance bottlenecks at compile time. Discover patterns that leverage TypeScript's type system for better runtime performance.

The combination of TypeScript and React creates a powerful development environment that catches errors early and improves code maintainability.`
    },
    {
      id: '3',
      title: 'Building Scalable Design Systems with Tailwind CSS',
      metaTitle: 'Tailwind CSS Design Systems - Scalable UI Development',
      metaDescription: 'Create maintainable and scalable design systems using Tailwind CSS, including component libraries, theming, and best practices.',
      featuredImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
      publishedDate: '2025-01-15',
      readTime: 10,
      views: 3156,
      tags: ['Tailwind CSS', 'Design Systems', 'UI/UX', 'CSS'],
      content: `Design systems are crucial for maintaining consistency across large applications. Tailwind CSS provides the perfect foundation for building scalable design systems.

# Component Architecture

Structure your components with Tailwind's utility-first approach while maintaining design consistency. Learn how to create reusable component patterns.

## Theming Strategy

Implement robust theming solutions that work across different brands and use cases. Tailwind's CSS custom properties integration makes theming straightforward.

- Custom color palettes
- Typography scales
- Spacing systems
- Component variants

# Maintenance and Documentation

Keep your design system maintainable with proper documentation and automated testing. Storybook integration helps showcase components effectively.

A well-designed system accelerates development while ensuring visual consistency across your entire application ecosystem.`
    }
  ];

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      const post = mockPosts.find(p => p.id === postId) || mockPosts[0];
      setCurrentPost(post);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [postId]);

  const handleEdit = () => {
    navigate(`/blog-post-creation-form?edit=${currentPost.id}`);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Simulate delete operation
    alert('Post deleted successfully!');
    setIsDeleteModalOpen(false);
    navigate('/blog-posts-listing-dashboard');
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const getCurrentPostIndex = () => {
    return mockPosts.findIndex(post => post.id === postId);
  };

  const getPreviousPost = () => {
    const currentIndex = getCurrentPostIndex();
    return currentIndex > 0 ? mockPosts[currentIndex - 1] : null;
  };

  const getNextPost = () => {
    const currentIndex = getCurrentPostIndex();
    return currentIndex < mockPosts.length - 1 ? mockPosts[currentIndex + 1] : null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Loading Skeleton */}
            <div className="animate-pulse">
              <div className="w-full h-64 md:h-96 bg-muted rounded-lg mb-6"></div>
              <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
              <button
                onClick={() => navigate('/blog-posts-listing-dashboard')}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-editorial"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Breadcrumbs />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article>
                <BlogHeader
                  post={currentPost}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onShare={handleShare}
                />
                
                <BlogContent
                  content={currentPost.content}
                  metaDescription={currentPost.metaDescription}
                />
              </article>
              
              <NavigationControls
                previousPost={getPreviousPost()}
                nextPost={getNextPost()}
              />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TableOfContents content={currentPost.content} />
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        post={currentPost}
      />
      
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        postTitle={currentPost.title}
      />
    </div>
  );
};

export default BlogPostDetailView;