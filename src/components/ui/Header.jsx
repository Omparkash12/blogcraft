import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Home',
      path: '/blog-craft-homepage',
      icon: 'Home'
    },
    {
      label: 'Dashboard',
      path: '/blog-posts-listing-dashboard',
      icon: 'LayoutDashboard'
    },
    {
      label: 'Create Post',
      path: '/blog-post-creation-form',
      icon: 'PenTool'
    },
    {
      label: 'View Posts',
      path: '/blog-post-detail-view',
      icon: 'FileText'
    }
  ];

  const isActivePath = (path) => {
    return location.pathname === path || (path === '/blog-craft-homepage' && location.pathname === '/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border editorial-shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link 
          to="/blog-craft-homepage" 
          className="flex items-center space-x-2 transition-editorial hover:opacity-80"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <Icon name="PenTool" size={20} color="white" />
          </div>
          <span className="text-xl font-semibold text-foreground">BlogCraft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-editorial ${
                isActivePath(item.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={item.icon} size={16} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Settings"
            iconPosition="left"
            iconSize={16}
          >
            Settings
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="User"
            iconPosition="left"
            iconSize={16}
          >
            Profile
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          iconName={isMobileMenuOpen ? "X" : "Menu"}
          iconSize={20}
        />
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border editorial-shadow-md">
          <nav className="px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-editorial ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="pt-4 mt-4 border-t border-border space-y-2">
              <button className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-editorial">
                <Icon name="Settings" size={18} />
                <span>Settings</span>
              </button>
              <button className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-editorial">
                <Icon name="User" size={18} />
                <span>Profile</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;