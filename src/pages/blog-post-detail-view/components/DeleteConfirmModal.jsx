import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, postTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-background rounded-lg border border-border editorial-shadow-md w-full max-w-md">
        {/* Header */}
        <div className="flex items-center space-x-3 p-6 border-b border-border">
          <div className="flex-shrink-0 w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
            <Icon name="AlertTriangle" size={20} className="text-error" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Delete Post</h3>
            <p className="text-sm text-muted-foreground">This action cannot be undone</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-foreground mb-2">
            Are you sure you want to delete this blog post?
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            <strong>"{postTitle}"</strong> will be permanently removed from your blog.
          </p>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={onConfirm}
              className="flex-1"
              iconName="Trash2"
              iconPosition="left"
              iconSize={16}
            >
              Delete Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;