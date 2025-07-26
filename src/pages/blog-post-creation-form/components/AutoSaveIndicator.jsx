import React from 'react';
import Icon from '../../../components/AppIcon';

const AutoSaveIndicator = ({ saveStatus, lastSaved }) => {
  const getStatusConfig = () => {
    switch (saveStatus) {
      case 'saving':
        return {
          icon: 'Loader2',
          text: 'Saving...',
          className: 'text-warning animate-spin'
        };
      case 'saved':
        return {
          icon: 'Check',
          text: `Saved ${lastSaved}`,
          className: 'text-success'
        };
      case 'error':
        return {
          icon: 'AlertCircle',
          text: 'Save failed',
          className: 'text-error'
        };
      default:
        return {
          icon: 'Clock',
          text: 'Not saved',
          className: 'text-muted-foreground'
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="flex items-center space-x-2 text-xs">
      <Icon 
        name={config.icon} 
        size={14} 
        className={config.className}
      />
      <span className={config.className}>
        {config.text}
      </span>
    </div>
  );
};

export default AutoSaveIndicator;