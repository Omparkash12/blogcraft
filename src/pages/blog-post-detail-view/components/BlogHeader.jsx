import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogHeader = ({ post, onEdit, onDelete, onShare }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="mb-8">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden editorial-shadow-md">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Meta */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>{formatDate(post.publishedDate)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Eye" size={16} />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onShare}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-editorial"
          >
            <Icon name="Share2" size={16} />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={onEdit}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-editorial"
          >
            <Icon name="Edit" size={16} />
            <span className="hidden sm:inline">Edit</span>
          </button>
          <button
            onClick={onDelete}
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-error hover:bg-error hover:text-error-foreground rounded-lg transition-editorial"
          >
            <Icon name="Trash2" size={16} />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogHeader;