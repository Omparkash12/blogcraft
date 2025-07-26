import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const NewsletterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription:', data);
      setIsSubmitted(true);
      setIsLoading(false);
      reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Icon name="Mail" size={16} className="mr-2" />
              Stay Updated
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Never Miss an 
            <span className="text-primary"> Update</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest blogging tips, AI writing insights, 
            and platform updates delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-success/10 border border-success/20 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-success">
                <Icon name="CheckCircle" size={24} />
                <span className="font-medium">Successfully subscribed!</span>
              </div>
              <p className="text-sm text-success/80 mt-2">
                Thank you for joining our community. Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={errors.email ? 'border-error' : ''}
                  />
                  {errors.email && (
                    <p className="text-error text-sm mt-1 text-left">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isLoading}
                  className="whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={16} className="mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          <div className="text-sm text-muted-foreground mb-12">
            <p>
              No spam, ever. Unsubscribe anytime. 
              <a href="#" className="text-primary hover:underline ml-1">
                Read our privacy policy
              </a>
            </p>
          </div>

          {/* Newsletter Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Weekly Insights</h4>
              <p className="text-sm text-muted-foreground">
                Get actionable blogging tips and industry trends every week.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Feature Updates</h4>
              <p className="text-sm text-muted-foreground">
                Be the first to know about new features and improvements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Exclusive Content</h4>
              <p className="text-sm text-muted-foreground">
                Access premium templates, guides, and subscriber-only resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;