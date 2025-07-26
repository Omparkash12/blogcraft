import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/ui/Button';

const FormHeader = ({ hasUnsavedChanges, onSaveDraft, isSaving }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      const confirmLeave = window.confirm(
        'You have unsaved changes. Are you sure you want to leave? Your changes will be lost.'
      );
      if (!confirmLeave) return;
    }
    navigate('/blog-posts-listing-dashboard');
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCancel}
          className="shrink-0"
          iconName="ArrowLeft"
          iconSize={20}
        />
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Create New Post</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Write and publish your blog post with SEO optimization
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          onClick={onSaveDraft}
          loading={isSaving}
          iconName="Save"
          iconPosition="left"
          iconSize={16}
          className="shrink-0"
        >
          Save Draft
        </Button>
      </div>
    </div>
  );
};

export default FormHeader;