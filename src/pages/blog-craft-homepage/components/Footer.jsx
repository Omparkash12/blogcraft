import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Dashboard', path: '/blog-posts-listing-dashboard' },
      { name: 'Create Post', path: '/blog-post-creation-form' },
      { name: 'View Posts', path: '/blog-post-detail-view' },
      { name: 'Analytics', path: '#' },
      { name: 'Templates', path: '#' }
    ],
    company: [
      { name: 'About Us', path: '#' },
      { name: 'Careers', path: '#' },
      { name: 'Press', path: '#' },
      { name: 'Partners', path: '#' },
      { name: 'Contact', path: '#' }
    ],
    resources: [
      { name: 'Blog', path: '#' },
      { name: 'Help Center', path: '#' },
      { name: 'Community', path: '#' },
      { name: 'API Docs', path: '#' },
      { name: 'Tutorials', path: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'GDPR', path: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/blogcraft' },
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/blogcraft' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/blogcraft' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/blogcraft' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/blogcraft' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="PenTool" size={24} color="white" />
                </div>
                <span className="text-2xl font-bold text-foreground">BlogCraft</span>
              </Link>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering creators with AI-powered blogging tools. Transform your content 
                creation journey with intelligent writing assistance and powerful analytics.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-editorial"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-editorial"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-editorial"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-editorial"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-editorial"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="py-12 border-t border-border">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Transform Your Blog?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of creators who are already using BlogCraft to create 
              amazing content with AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog-post-creation-form">
                <Button size="lg">
                  <Icon name="PenTool" size={20} className="mr-2" />
                  Start Creating
                </Button>
              </Link>
              <Link to="/blog-posts-listing-dashboard">
                <Button variant="outline" size="lg">
                  <Icon name="LayoutDashboard" size={20} className="mr-2" />
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} BlogCraft. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Icon name="Heart" size={14} className="text-error" />
                <span>Made with love</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="Globe" size={14} />
                <span>Global reach</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="Shield" size={14} className="text-success" />
                <span>Secure & trusted</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;