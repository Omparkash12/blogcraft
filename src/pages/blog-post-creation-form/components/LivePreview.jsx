import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LivePreview = ({ title, description, image, metaTitle, metaDescription }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Eye" size={18} className="text-muted-foreground" />
        <h3 className="font-medium text-foreground">Live Preview</h3>
      </div>

      <div className="space-y-4">
        {/* Blog Post Preview */}
        <div className="border border-border rounded-lg overflow-hidden">
          {image && (
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={image.preview}
                alt="Blog post preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-4 space-y-3">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Calendar" size={12} />
              <span>{formatDate(new Date())}</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            
            <h2 className="text-lg font-semibold text-foreground line-clamp-2">
              {title || 'Your blog post title will appear here...'}
            </h2>
            
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description || 'Your blog post description will be displayed here. Start writing to see the preview update in real-time...'}
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Icon name="User" size={12} color="white" />
                </div>
                <span className="text-xs text-muted-foreground">Author Name</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Icon name="Heart" size={12} />
                <span>24</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Icon name="MessageCircle" size={12} />
                <span>8</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Preview */}
        {(metaTitle || metaDescription) && (
          <div className="border border-border rounded-lg p-4">
            <h4 className="text-sm font-medium text-foreground mb-3 flex items-center space-x-2">
              <Icon name="Search" size={14} />
              <span>SEO Preview</span>
            </h4>
            <div className="space-y-1">
              <div className="text-primary text-sm font-medium truncate">
                {metaTitle || title || 'Your Blog Post Title'}
              </div>
              <div className="text-xs text-success">
                https://blogcraft.com/posts/your-post-slug
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">
                {metaDescription || (description ? description.substring(0, 160) + '...' : 'Your meta description will appear here...')}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePreview;