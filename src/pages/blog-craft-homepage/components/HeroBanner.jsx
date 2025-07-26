import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Icon name="Sparkles" size={16} className="mr-2" />
              AI-Powered Blog Management
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Transform Your 
            <span className="text-primary"> Content Creation</span> 
            Journey
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Create, optimize, and manage your blog posts with intelligent AI assistance. 
            From idea to publication, BlogCraft streamlines your entire content workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog-post-creation-form">
              <Button size="lg" className="px-8 py-4 text-lg">
                <Icon name="PenTool" size={20} className="mr-2" />
                Start Creating
              </Button>
            </Link>
            
            <Link to="/blog-posts-listing-dashboard">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Icon name="LayoutDashboard" size={20} className="mr-2" />
                View Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-muted-foreground">Blog Posts Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
              <div className="text-muted-foreground">Active Writers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">99%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground">AI Assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;