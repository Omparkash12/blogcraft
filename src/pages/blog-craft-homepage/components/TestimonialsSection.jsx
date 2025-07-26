import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'Digital Marketing Pro',
      avatar: '/assets/images/no_image.png',
      content: 'BlogCraft transformed my content creation process. The AI assistance helped me write better, faster, and more engaging posts. My audience engagement increased by 300% in just 3 months!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      avatar: '/assets/images/no_image.png',
      content: 'The SEO optimization features are incredible. Our blog traffic doubled within 6 months of using BlogCraft. The analytics dashboard gives us insights we never had before.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Freelance Writer',
      company: 'Independent',
      avatar: '/assets/images/no_image.png',
      content: 'As a freelancer, BlogCraft helps me deliver high-quality content to my clients faster than ever. The collaboration tools make working with teams seamless and efficient.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Small Business Owner',
      company: 'Local Cafe Chain',
      avatar: '/assets/images/no_image.png',
      content: 'I\'m not a tech person, but BlogCraft made it easy for me to create professional blog content for my business. The templates and AI suggestions are game-changers.',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Zhang',
      role: 'Content Strategist',
      company: 'Growth Agency',
      avatar: '/assets/images/no_image.png',
      content: 'BlogCraft\'s analytics helped us understand our audience better and create content that actually converts. The ROI on our content marketing improved by 250%.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium">
              <Icon name="Heart" size={16} className="mr-2" />
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Users 
            <span className="text-primary"> Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied creators who have transformed their content strategy with BlogCraft.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 editorial-shadow-sm">
                    <div className="flex items-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-card-foreground mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-card-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center editorial-shadow-sm hover:editorial-shadow-md transition-editorial z-10"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center editorial-shadow-sm hover:editorial-shadow-md transition-editorial z-10"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-editorial ${
                  index === currentSlide 
                    ? 'bg-primary' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground mb-2">500K+</div>
            <div className="text-sm text-muted-foreground">Posts Created</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;