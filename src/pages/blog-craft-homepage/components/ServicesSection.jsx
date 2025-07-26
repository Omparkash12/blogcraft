import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const services = [
    {
      icon: 'PenTool',
      title: 'Content Creation Tools',
      description: 'Advanced writing tools with AI assistance, templates, and real-time collaboration features.',
      features: ['AI Writing Assistant', 'Content Templates', 'Real-time Collaboration', 'Version Control']
    },
    {
      icon: 'Search',
      title: 'SEO Optimization',
      description: 'Built-in SEO analysis, keyword suggestions, and optimization recommendations.',
      features: ['Keyword Analysis', 'SEO Score', 'Meta Tag Generator', 'Content Optimization']
    },
    {
      icon: 'BarChart3',
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics dashboard with performance metrics and audience insights.',
      features: ['Traffic Analytics', 'Engagement Metrics', 'Audience Insights', 'Performance Reports']
    },
    {
      icon: 'Palette',
      title: 'Design & Customization',
      description: 'Beautiful themes, custom layouts, and visual content creation tools.',
      features: ['Custom Themes', 'Layout Builder', 'Image Editor', 'Brand Customization']
    },
    {
      icon: 'Share2',
      title: 'Publishing & Distribution',
      description: 'Multi-platform publishing, social media integration, and content syndication.',
      features: ['Multi-platform Publishing', 'Social Integration', 'Content Syndication', 'Scheduled Posts']
    },
    {
      icon: 'Shield',
      title: 'Security & Backup',
      description: 'Enterprise-grade security, automatic backups, and content protection.',
      features: ['Data Encryption', 'Automatic Backups', 'Content Protection', '99.9% Uptime']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium">
              <Icon name="Settings" size={16} className="mr-2" />
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="text-primary"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From content creation to analytics, BlogCraft provides all the tools and features 
            you need to build, grow, and monetize your blog effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 editorial-shadow-sm hover:editorial-shadow-md transition-editorial group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-editorial">
                  <Icon name={service.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-editorial">
                Learn More
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our enterprise team can help you build a customized blogging solution 
              tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;