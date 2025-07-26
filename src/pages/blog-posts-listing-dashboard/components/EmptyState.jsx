import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ hasSearchQuery, searchQuery, onClearSearch }) => {
  if (hasSearchQuery) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <Icon name="Search" size={32} className="text-muted-foreground" />
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No posts found
        </h3>
        
        <p className="text-muted-foreground text-center mb-6 max-w-md">
          We couldn't find any posts matching "{searchQuery}". Try adjusting your search terms or browse all posts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onClearSearch}
            iconName="X"
            iconPosition="left"
            iconSize={16}
          >
            Clear Search
          </Button>
          
          <Link to="/blog-post-creation-form">
            <Button
              variant="default"
              iconName="Plus"
              iconPosition="left"
              iconSize={16}
            >
              Create New Post
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-8">
        <Icon name="PenTool" size={48} className="text-primary" />
      </div>
      
      <h3 className="text-2xl font-semibold text-foreground mb-3">
        Start Your Blogging Journey
      </h3>
      
      <p className="text-muted-foreground text-center mb-8 max-w-md leading-relaxed">
        Welcome to BlogCraft! You haven't created any blog posts yet. Create your first post and start sharing your thoughts with the world.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/blog-post-creation-form">
          <Button
            variant="default"
            size="lg"
            iconName="Plus"
            iconPosition="left"
            iconSize={20}
            className="w-full sm:w-auto"
          >
            Create Your First Post
          </Button>
        </Link>
        
        <Button
          variant="outline"
          size="lg"
          iconName="BookOpen"
          iconPosition="left"
          iconSize={20}
          className="w-full sm:w-auto"
        >
          View Examples
        </Button>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Edit" size={24} className="text-primary" />
          </div>
          <h4 className="font-medium text-foreground mb-2">Rich Editor</h4>
          <p className="text-sm text-muted-foreground">
            Create beautiful posts with our intuitive rich text editor
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Image" size={24} className="text-success" />
          </div>
          <h4 className="font-medium text-foreground mb-2">Media Support</h4>
          <p className="text-sm text-muted-foreground">
            Add images and media to make your posts more engaging
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Search" size={24} className="text-accent" />
          </div>
          <h4 className="font-medium text-foreground mb-2">SEO Optimized</h4>
          <p className="text-sm text-muted-foreground">
            Built-in SEO tools to help your content reach more readers
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;