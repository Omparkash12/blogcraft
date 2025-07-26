import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Icon name="Users" size={16} className="mr-2" />
                About BlogCraft
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Writers with 
              <span className="text-primary"> AI Innovation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              BlogCraft is more than just a blogging platform—it's your intelligent writing companion. 
              We combine cutting-edge AI technology with intuitive design to help creators, marketers, 
              and businesses produce exceptional content effortlessly.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI-Powered Writing Assistant</h4>
                  <p className="text-muted-foreground">Get intelligent suggestions, grammar checks, and content optimization in real-time.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">SEO Optimization</h4>
                  <p className="text-muted-foreground">Built-in SEO tools help your content rank higher and reach more readers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name="Check" size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Analytics & Insights</h4>
                  <p className="text-muted-foreground">Track performance, understand your audience, and optimize your content strategy.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <Image
                  src="/assets/images/no_image.png"
                  alt="BlogCraft Dashboard"
                  className="w-full rounded-lg editorial-shadow-md"
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 editorial-shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Performance</div>
                    <div className="text-xs text-muted-foreground">+25% this month</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 editorial-shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">AI Score</div>
                    <div className="text-xs text-muted-foreground">98% Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;