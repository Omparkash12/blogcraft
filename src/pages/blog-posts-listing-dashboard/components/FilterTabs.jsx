import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterTabs = ({ activeFilter, onFilterChange, postCounts }) => {
  const filters = [
    {
      key: 'all',
      label: 'All Posts',
      icon: 'FileText',
      count: postCounts.all
    },
    {
      key: 'published',
      label: 'Published',
      icon: 'CheckCircle',
      count: postCounts.published
    },
    {
      key: 'draft',
      label: 'Drafts',
      icon: 'Edit',
      count: postCounts.draft
    },
    {
      key: 'scheduled',
      label: 'Scheduled',
      icon: 'Clock',
      count: postCounts.scheduled
    }
  ];

  return (
    <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg overflow-x-auto">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-editorial whitespace-nowrap ${
            activeFilter === filter.key
              ? 'bg-background text-foreground editorial-shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          <Icon name={filter.icon} size={16} />
          <span>{filter.label}</span>
          <span className={`px-2 py-0.5 text-xs rounded-full ${
            activeFilter === filter.key
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted-foreground/20 text-muted-foreground'
          }`}>
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;