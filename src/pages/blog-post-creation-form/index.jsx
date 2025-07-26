import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import FormHeader from './components/FormHeader';
import ImageUpload from './components/ImageUpload';
import SEOSection from './components/SEOSection';
import AutoSaveIndicator from './components/AutoSaveIndicator';
import LivePreview from './components/LivePreview';

const BlogPostCreationForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    metaTitle: '',
    metaDescription: ''
  });

  // UI state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('idle');
  const [lastSaved, setLastSaved] = useState('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Auto-save functionality
  const autoSave = useCallback(async () => {
    if (!hasUnsavedChanges) return;
    
    setSaveStatus('saving');
    setIsSaving(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      
      setSaveStatus('saved');
      setLastSaved(`at ${timeString}`);
      setHasUnsavedChanges(false);
    } catch (error) {
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  }, [hasUnsavedChanges]);

  // Auto-save timer
  useEffect(() => {
    if (!hasUnsavedChanges) return;
    
    const timer = setTimeout(() => {
      autoSave();
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasUnsavedChanges, autoSave]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must be less than 100 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
    }

    if (formData.metaTitle && formData.metaTitle.length > 60) {
      newErrors.metaTitle = 'Meta title must be less than 60 characters';
    }

    if (formData.metaDescription && formData.metaDescription.length > 160) {
      newErrors.metaDescription = 'Meta description must be less than 160 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form field changes
  const handleFieldChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setHasUnsavedChanges(true);
    setSaveStatus('idle');
    
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - redirect to blog listing
      navigate('/blog-posts-listing-dashboard', {
        state: { 
          message: 'Blog post published successfully!',
          type: 'success'
        }
      });
    } catch (error) {
      setErrors({ submit: 'Failed to publish post. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle save draft
  const handleSaveDraft = async () => {
    if (!formData.title.trim()) {
      setErrors({ title: 'Title is required to save draft' });
      return;
    }

    await autoSave();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Breadcrumbs />
          
          <FormHeader
            hasUnsavedChanges={hasUnsavedChanges}
            onSaveDraft={handleSaveDraft}
            isSaving={isSaving}
          />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="xl:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Auto-save indicator */}
                <div className="flex justify-end">
                  <AutoSaveIndicator 
                    saveStatus={saveStatus} 
                    lastSaved={lastSaved} 
                  />
                </div>

                {/* Title Input */}
                <Input
                  label="Post Title"
                  type="text"
                  placeholder="Enter your blog post title..."
                  value={formData.title}
                  onChange={(e) => handleFieldChange('title', e.target.value)}
                  error={errors.title}
                  required
                  description="This will be the main heading of your blog post"
                />

                {/* Description Textarea */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Post Content <span className="text-error">*</span>
                  </label>
                  <textarea
                    placeholder="Write your blog post content here..."
                    value={formData.description}
                    onChange={(e) => handleFieldChange('description', e.target.value)}
                    rows={12}
                    className={`w-full px-3 py-3 border rounded-lg text-sm transition-editorial resize-none ${
                      errors.description
                        ? 'border-error focus:border-error focus:ring-error/20' :'border-border focus:border-primary focus:ring-primary/20'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.description && (
                    <p className="text-sm text-error">{errors.description}</p>
                  )}
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Minimum 50 characters required</span>
                    <span>{formData.description.length} characters</span>
                  </div>
                </div>

                {/* Image Upload */}
                <ImageUpload
                  image={formData.image}
                  onImageChange={(image) => handleFieldChange('image', image)}
                  error={errors.image}
                />

                {/* SEO Section */}
                <SEOSection
                  metaTitle={formData.metaTitle}
                  metaDescription={formData.metaDescription}
                  onMetaTitleChange={(value) => handleFieldChange('metaTitle', value)}
                  onMetaDescriptionChange={(value) => handleFieldChange('metaDescription', value)}
                  errors={errors}
                />

                {/* Submit Error */}
                {errors.submit && (
                  <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                    <p className="text-sm text-error">{errors.submit}</p>
                  </div>
                )}

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                  <Button
                    type="submit"
                    variant="default"
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="left"
                    iconSize={16}
                    className="sm:order-2"
                  >
                    {isSubmitting ? 'Publishing...' : 'Publish Post'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/blog-posts-listing-dashboard')}
                    className="sm:order-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>

            {/* Live Preview Sidebar - Desktop Only */}
            <div className="hidden xl:block">
              <LivePreview
                title={formData.title}
                description={formData.description}
                image={formData.image}
                metaTitle={formData.metaTitle}
                metaDescription={formData.metaDescription}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostCreationForm;