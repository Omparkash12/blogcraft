import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ShareModal = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  const shareUrl = window.location.href;
  const shareTitle = post.title;
  const shareText = post.metaDescription || post.title;

  const shareOptions = [
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'text-blue-500'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'text-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'text-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`,
      color: 'text-green-500'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-background rounded-lg border border-border editorial-shadow-md w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Share Post</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-editorial"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Social Share Options */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => handleShare(option.url)}
                className="flex items-center space-x-3 p-3 bg-card hover:bg-muted rounded-lg border border-border transition-editorial"
              >
                <Icon name={option.icon} size={20} className={option.color} />
                <span className="text-sm font-medium text-foreground">{option.name}</span>
              </button>
            ))}
          </div>

          {/* Copy Link */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Copy Link</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 text-sm bg-muted border border-border rounded-lg text-muted-foreground"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                iconName="Copy"
                iconSize={16}
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;