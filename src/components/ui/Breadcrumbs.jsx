import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumbs = () => {
  const location = useLocation();
  
  const breadcrumbMap = {
    '/blog-posts-listing-dashboard': [
      { label: 'Dashboard', path: '/blog-posts-listing-dashboard', isActive: true }
    ],
    '/blog-post-creation-form': [
      { label: 'Dashboard', path: '/blog-posts-listing-dashboard', isActive: false },
      { label: 'Create Post', path: '/blog-post-creation-form', isActive: true }
    ],
    '/blog-post-detail-view': [
      { label: 'Dashboard', path: '/blog-posts-listing-dashboard', isActive: false },
      { label: 'Post Details', path: '/blog-post-detail-view', isActive: true }
    ]
  };

  const currentBreadcrumbs = breadcrumbMap[location.pathname] || [];

  if (currentBreadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <Link 
        to="/blog-posts-listing-dashboard"
        className="flex items-center hover:text-foreground transition-editorial"
      >
        <Icon name="Home" size={16} className="mr-1" />
        <span>Home</span>
      </Link>
      
      {currentBreadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.path}>
          <Icon name="ChevronRight" size={14} className="text-border" />
          {crumb.isActive ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <Link 
              to={crumb.path}
              className="hover:text-foreground transition-editorial"
            >
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;