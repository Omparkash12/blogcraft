import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroBanner from './components/HeroBanner';
import BlogsSection from './components/BlogsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const BlogCraftHomepage = () => {
  return (
    <>
      <Helmet>
        <title>BlogCraft - AI-Powered Blog Management Platform</title>
        <meta name="description" content="Transform your content creation with BlogCraft's intelligent blog management tools. Create, optimize, and manage your blog posts with AI-powered features." />
        <meta name="keywords" content="blog management, content creation, AI writing, SEO optimization, blog platform" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroBanner />
          <BlogsSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <NewsletterSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogCraftHomepage;