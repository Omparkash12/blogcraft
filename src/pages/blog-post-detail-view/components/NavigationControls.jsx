import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NavigationControls = ({ previousPost, nextPost }) => {
  return (
    <div className="border-t border-border pt-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Previous Post */}
        <div className="flex-1 md:max-w-sm">
          {previousPost ? (
            <Link
              to={`/blog-post-detail-view?id=${previousPost.id}`}
              className="group flex items-center space-x-3 p-4 bg-card hover:bg-muted rounded-lg border border-border transition-editorial editorial-shadow-sm"
            >
              <div className="flex-shrink-0">
                <Icon 
                  name="ChevronLeft" 
                  size={20} 
                  className="text-muted-foreground group-hover:text-foreground transition-editorial"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                  Previous Post
                </p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-editorial truncate">
                  {previousPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">No previous post</p>
            </div>
          )}
        </div>

        {/* Back to Dashboard */}
        <div className="flex-shrink-0">
          <Link to="/blog-posts-listing-dashboard">
            <Button
              variant="outline"
              iconName="ArrowLeft"
              iconPosition="left"
              iconSize={16}
            >
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Next Post */}
        <div className="flex-1 md:max-w-sm">
          {nextPost ? (
            <Link
              to={`/blog-post-detail-view?id=${nextPost.id}`}
              className="group flex items-center space-x-3 p-4 bg-card hover:bg-muted rounded-lg border border-border transition-editorial editorial-shadow-sm"
            >
              <div className="min-w-0 text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                  Next Post
                </p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-editorial truncate">
                  {nextPost.title}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Icon 
                  name="ChevronRight" 
                  size={20} 
                  className="text-muted-foreground group-hover:text-foreground transition-editorial"
                />
              </div>
            </Link>
          ) : (
            <div className="p-4 bg-muted/50 rounded-lg border border-border text-right">
              <p className="text-sm text-muted-foreground">No next post</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationControls;