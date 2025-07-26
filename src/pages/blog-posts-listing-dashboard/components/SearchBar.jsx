import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, placeholder = "Search posts by title or content..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="relative">
      <div className={`relative transition-editorial ${isFocused ? 'scale-[1.02]' : ''}`}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon 
            name="Search" 
            size={18} 
            className={`transition-editorial ${isFocused ? 'text-primary' : 'text-muted-foreground'}`}
          />
        </div>
        
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="pl-10 pr-10 bg-background border-border focus:border-primary focus:ring-primary"
        />
        
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-editorial"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>

      {/* Search Suggestions - Show when focused and has input */}
      {isFocused && searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg editorial-shadow-md z-50 max-h-60 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-muted-foreground px-2 py-1">
              Search suggestions
            </div>
            <div className="space-y-1">
              <button className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-popover-foreground hover:bg-muted rounded transition-editorial">
                <Icon name="Search" size={14} />
                <span>Search in titles: "{searchTerm}"</span>
              </button>
              <button className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-popover-foreground hover:bg-muted rounded transition-editorial">
                <Icon name="FileText" size={14} />
                <span>Search in content: "{searchTerm}"</span>
              </button>
              <button className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-popover-foreground hover:bg-muted rounded transition-editorial">
                <Icon name="Tag" size={14} />
                <span>Search in tags: "{searchTerm}"</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;