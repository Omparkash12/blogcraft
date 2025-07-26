import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogsSection = () => {
  const [featuredPosts] = useState([
    {
      id: 1,
      title: "10 AI Writing Tips That Will Transform Your Blog Content",
      excerpt: "Discover how artificial intelligence can enhance your writing process and create more engaging content for your audience.",
      featuredImage: "/assets/images/no_image.png",
      author: "Sarah Johnson",
      publishedAt: "2025-01-20T10:00:00Z",
      views: 2450,
      comments: 18,
      tags: ["AI Writing", "Content Strategy", "Tips"],
      status: "published"
    },
    {
      id: 2,
      title: "The Ultimate Guide to SEO Optimization for Bloggers",
      excerpt: "Learn the essential SEO strategies that will help your blog posts rank higher in search engines and attract more organic traffic.",
      featuredImage: "/assets/images/no_image.png",
      author: "Michael Chen",
      publishedAt: "2025-01-18T14:30:00Z",
      views: 3200,
      comments: 24,
      tags: ["SEO", "Optimization", "Guide"],
      status: "published"
    },
    {
      id: 3,
      title: "Building Engaging Content Communities: A Blogger's Handbook",
      excerpt: "Explore effective strategies for building and nurturing an engaged community around your blog content.",
      featuredImage: "/assets/images/no_image.png",
      author: "Emily Rodriguez",
      publishedAt: "2025-01-15T09:15:00Z",
      views: 1890,
      comments: 15,
      tags: ["Community", "Engagement", "Strategy"],
      status: "published"
    },
    {
      id: 4,
      title: "Monetizing Your Blog: Proven Strategies for 2025",
      excerpt: "Discover the latest monetization techniques that successful bloggers are using to generate sustainable income.",
      featuredImage: "/assets/images/no_image.png",
      author: "David Kim",
      publishedAt: "2025-01-12T16:45:00Z",
      views: 4100,
      comments: 32,
      tags: ["Monetization", "Income", "Strategy"],
      status: "published"
    },
    {
      id: 5,
      title: "Content Calendar Mastery: Plan Like a Pro",
      excerpt: "Master the art of content planning with proven calendar strategies that keep your blog consistent and engaging.",
      featuredImage: "/assets/images/no_image.png",
      author: "Lisa Zhang",
      publishedAt: "2025-01-10T11:20:00Z",
      views: 2780,
      comments: 21,
      tags: ["Planning", "Calendar", "Organization"],
      status: "published"
    },
    {
      id: 6,
      title: "Visual Storytelling: Making Your Blog Posts Come Alive",
      excerpt: "Learn how to incorporate compelling visuals and multimedia elements to enhance your blog's storytelling impact.",
      featuredImage: "/assets/images/no_image.png",
      author: "Alex Thompson",
      publishedAt: "2025-01-08T13:10:00Z",
      views: 2150,
      comments: 19,
      tags: ["Visual Design", "Storytelling", "Media"],
      status: "published"
    }
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const truncateText = (text, maxLength) => {
    if (text?.length <= maxLength) return text;
    return text?.substring(0, maxLength) + '...';
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Latest Insights
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest trends, tips, and insights from our community of expert writers and content creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts?.map((post) => (
            <article
              key={post.id}
              className="bg-card border border-border rounded-lg editorial-shadow-sm hover:editorial-shadow-md transition-editorial group"
            >
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-editorial-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-editorial" />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>

                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-editorial line-clamp-2">
                  <Link to="/blog-post-detail-view" state={{ postId: post.id }}>
                    {truncateText(post.title, 60)}
                  </Link>
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {truncateText(post.excerpt, 120)}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{post.views?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <Link to="/blog-post-detail-view" state={{ postId: post.id }}>
                    <Button variant="ghost" size="sm">
                      Read More
                      <Icon name="ArrowRight" size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags?.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog-posts-listing-dashboard">
            <Button variant="outline" size="lg">
              <Icon name="Grid" size={20} className="mr-2" />
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;