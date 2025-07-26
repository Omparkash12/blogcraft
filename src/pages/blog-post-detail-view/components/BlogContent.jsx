import React from 'react';

const BlogContent = ({ content, metaDescription }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Meta Description */}
      {metaDescription && (
        <div className="bg-muted p-4 rounded-lg mb-8 border-l-4 border-primary">
          <p className="text-muted-foreground italic text-base leading-relaxed">
            {metaDescription}
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="text-foreground leading-relaxed">
        {content.split('\n').map((paragraph, index) => {
          if (paragraph.trim() === '') return null;
          
          // Check if paragraph is a heading (starts with #)
          if (paragraph.startsWith('# ')) {
            return (
              <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                {paragraph.substring(2)}
              </h2>
            );
          }
          
          // Check if paragraph is a subheading (starts with ##)
          if (paragraph.startsWith('## ')) {
            return (
              <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                {paragraph.substring(3)}
              </h3>
            );
          }
          
          // Check if paragraph is a list item (starts with -)
          if (paragraph.startsWith('- ')) {
            return (
              <li key={index} className="ml-4 mb-2 text-foreground">
                {paragraph.substring(2)}
              </li>
            );
          }
          
          // Regular paragraph
          return (
            <p key={index} className="mb-4 text-foreground text-base leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BlogContent;