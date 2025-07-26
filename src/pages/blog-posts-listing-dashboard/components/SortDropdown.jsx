import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    {
      key: 'newest',
      label: 'Newest First',
      icon: 'ArrowDown'
    },
    {
      key: 'oldest',
      label: 'Oldest First',
      icon: 'ArrowUp'
    },
    {
      key: 'title-asc',
      label: 'Title A-Z',
      icon: 'ArrowUp'
    },
    {
      key: 'title-desc',
      label: 'Title Z-A',
      icon: 'ArrowDown'
    },
    {
      key: 'views-desc',
      label: 'Most Viewed',
      icon: 'Eye'
    },
    {
      key: 'views-asc',
      label: 'Least Viewed',
      icon: 'EyeOff'
    }
  ];

  const currentSortOption = sortOptions.find(option => option.key === currentSort) || sortOptions[0];

  const handleSortSelect = (sortKey) => {
    onSortChange(sortKey);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-editorial"
      >
        <Icon name={currentSortOption.icon} size={16} />
        <span>{currentSortOption.label}</span>
        <Icon 
          name="ChevronDown" 
          size={16} 
          className={`transition-editorial ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-1 bg-popover border border-border rounded-lg editorial-shadow-md z-20 min-w-[180px]">
            <div className="py-1">
              {sortOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => handleSortSelect(option.key)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 text-sm transition-editorial ${
                    currentSort === option.key
                      ? 'bg-primary text-primary-foreground'
                      : 'text-popover-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={option.icon} size={14} />
                  <span>{option.label}</span>
                  {currentSort === option.key && (
                    <Icon name="Check" size={14} className="ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SortDropdown;