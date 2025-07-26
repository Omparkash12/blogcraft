import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SEOSection = ({ metaTitle, metaDescription, onMetaTitleChange, onMetaDescriptionChange, errors }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const metaTitleLength = metaTitle.length;
  const metaDescriptionLength = metaDescription.length;

  const getCharacterCountColor = (current, optimal, max) => {
    if (current === 0) return 'text-muted-foreground';
    if (current >= optimal && current <= max) return 'text-success';
    if (current > max) return 'text-error';
    return 'text-warning';
  };

  return (
    <div className="border border-border rounded-lg">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-editorial"
      >
        <div className="flex items-center space-x-3">
          <Icon name="Search" size={20} className="text-muted-foreground" />
          <div>
            <h3 className="font-medium text-foreground">SEO Settings</h3>
            <p className="text-sm text-muted-foreground">
              Optimize your post for search engines
            </p>
          </div>
        </div>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={20} 
          className="text-muted-foreground" 
        />
      </button>

      {isExpanded && (
        <div className="border-t border-border p-4 space-y-6">
          <div>
            <Input
              label="Meta Title"
              type="text"
              placeholder="Enter SEO title for search results"
              value={metaTitle}
              onChange={(e) => onMetaTitleChange(e.target.value)}
              error={errors.metaTitle}
              description="This title appears in search engine results"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-muted-foreground">
                Recommended: 50-60 characters
              </span>
              <span className={`text-xs font-medium ${getCharacterCountColor(metaTitleLength, 50, 60)}`}>
                {metaTitleLength}/60
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Meta Description
            </label>
            <textarea
              placeholder="Write a compelling description for search results..."
              value={metaDescription}
              onChange={(e) => onMetaDescriptionChange(e.target.value)}
              rows={3}
              className={`w-full px-3 py-2 border rounded-lg text-sm transition-editorial resize-none ${
                errors.metaDescription
                  ? 'border-error focus:border-error focus:ring-error/20' :'border-border focus:border-primary focus:ring-primary/20'
              } focus:outline-none focus:ring-2`}
            />
            {errors.metaDescription && (
              <p className="text-sm text-error flex items-center space-x-1 mt-1">
                <Icon name="AlertCircle" size={14} />
                <span>{errors.metaDescription}</span>
              </p>
            )}
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-muted-foreground">
                Recommended: 150-160 characters
              </span>
              <span className={`text-xs font-medium ${getCharacterCountColor(metaDescriptionLength, 150, 160)}`}>
                {metaDescriptionLength}/160
              </span>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
              <Icon name="Eye" size={16} />
              <span>Search Preview</span>
            </h4>
            <div className="space-y-1">
              <div className="text-primary text-sm font-medium truncate">
                {metaTitle || 'Your Blog Post Title'}
              </div>
              <div className="text-xs text-success">
                https://blogcraft.com/posts/your-post-slug
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">
                {metaDescription || 'Your meta description will appear here to help users understand what your blog post is about...'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOSection;