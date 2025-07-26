import React from 'react';

const LoadingSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-card border border-border rounded-lg editorial-shadow-sm overflow-hidden">
          {/* Image Skeleton */}
          <div className="h-48 bg-muted animate-pulse" />
          
          {/* Content Skeleton */}
          <div className="p-4 space-y-3">
            {/* Title Skeleton */}
            <div className="space-y-2">
              <div className="h-5 bg-muted rounded animate-pulse" />
              <div className="h-5 bg-muted rounded w-3/4 animate-pulse" />
            </div>
            
            {/* Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
            </div>
            
            {/* Meta Info Skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-3 bg-muted rounded w-20 animate-pulse" />
                <div className="h-3 bg-muted rounded w-16 animate-pulse" />
              </div>
              <div className="h-3 bg-muted rounded w-12 animate-pulse" />
            </div>
            
            {/* Tags Skeleton */}
            <div className="flex space-x-2">
              <div className="h-6 bg-muted rounded-full w-16 animate-pulse" />
              <div className="h-6 bg-muted rounded-full w-20 animate-pulse" />
              <div className="h-6 bg-muted rounded-full w-12 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;