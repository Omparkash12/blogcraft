import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BulkActions = ({ selectedCount, onBulkDelete, onBulkPublish, onBulkUnpublish, onSelectAll, onDeselectAll, totalCount }) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:relative md:bottom-auto md:left-auto md:transform-none md:z-auto">
      <div className="bg-popover border border-border rounded-lg editorial-shadow-md p-4 min-w-[320px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon name="CheckSquare" size={16} className="text-primary" />
            <span className="text-sm font-medium text-popover-foreground">
              {selectedCount} post{selectedCount !== 1 ? 's' : ''} selected
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSelectAll}
              disabled={selectedCount === totalCount}
              className="text-xs"
            >
              Select All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onDeselectAll}
              className="text-xs"
            >
              Clear
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onBulkPublish}
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
          >
            Publish
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onBulkUnpublish}
            iconName="EyeOff"
            iconPosition="left"
            iconSize={14}
          >
            Unpublish
          </Button>
          
          <Button
            variant="destructive"
            size="sm"
            onClick={onBulkDelete}
            iconName="Trash2"
            iconPosition="left"
            iconSize={14}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkActions;