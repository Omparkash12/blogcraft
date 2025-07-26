import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PostCard = ({ post, onEdit, onDelete, onToggleStatus, isSelected, onSelect }) => {
  const [showActions, setShowActions] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-success text-success-foreground';
      case 'draft':
        return 'bg-warning text-warning-foreground';
      case 'scheduled':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-card border border-border rounded-lg editorial-shadow-sm hover:editorial-shadow-md transition-editorial group">
      {/* Selection Checkbox - Desktop Only */}
      <div className="hidden md:block absolute top-3 left-3 z-10">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(post.id, e.target.checked)}
          className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
        />
      </div>

      {/* Featured Image */}
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-editorial-slow"
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(post.status)}`}>
            {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
          </span>
        </div>

        {/* Mobile Actions Menu */}
        <div className="md:hidden absolute bottom-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/80 backdrop-blur-sm"
            onClick={() => setShowActions(!showActions)}
            iconName="MoreVertical"
            iconSize={16}
          />
          
          {showActions && (
            <div className="absolute bottom-full right-0 mb-2 bg-popover border border-border rounded-lg editorial-shadow-md py-1 min-w-[120px]">
              <button
                onClick={() => {
                  onEdit(post.id);
                  setShowActions(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-muted transition-editorial"
              >
                <Icon name="Edit" size={14} />
                <span>Edit</span>
              </button>
              <Link
                to="/blog-post-detail-view"
                state={{ postId: post.id }}
                className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-muted transition-editorial"
                onClick={() => setShowActions(false)}
              >
                <Icon name="Eye" size={14} />
                <span>View</span>
              </Link>
              <button
                onClick={() => {
                  onToggleStatus(post.id);
                  setShowActions(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-muted transition-editorial"
              >
                <Icon name={post.status === 'published' ? 'EyeOff' : 'Eye'} size={14} />
                <span>{post.status === 'published' ? 'Unpublish' : 'Publish'}</span>
              </button>
              <button
                onClick={() => {
                  onDelete(post.id);
                  setShowActions(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-destructive hover:bg-muted transition-editorial"
              >
                <Icon name="Trash2" size={14} />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-editorial line-clamp-2">
            <Link to="/blog-post-detail-view" state={{ postId: post.id }}>
              {truncateText(post.title, 60)}
            </Link>
          </h3>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-editorial">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(post.id)}
              iconName="Edit"
              iconSize={16}
            />
            <Link to="/blog-post-detail-view" state={{ postId: post.id }}>
              <Button
                variant="ghost"
                size="icon"
                iconName="Eye"
                iconSize={16}
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(post.id)}
              iconName="Trash2"
              iconSize={16}
              className="text-destructive hover:text-destructive"
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {truncateText(post.excerpt, 120)}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={12} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{post.views.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <Icon name="MessageCircle" size={12} />
            <span>{post.comments}</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;