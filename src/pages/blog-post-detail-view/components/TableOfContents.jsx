import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TableOfContents = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Extract headings from content
    const lines = content.split('\n');
    const extractedHeadings = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        extractedHeadings.push({
          id: `heading-${index}`,
          text: line.substring(2),
          level: 1
        });
      } else if (line.startsWith('## ')) {
        extractedHeadings.push({
          id: `heading-${index}`,
          text: line.substring(3),
          level: 2
        });
      }
    });
    
    setHeadings(extractedHeadings);
  }, [content]);

  if (headings.length === 0) return null;

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 bg-card rounded-lg border border-border editorial-shadow-sm"
        >
          <div className="flex items-center space-x-2">
            <Icon name="List" size={20} />
            <span className="font-medium text-foreground">Table of Contents</span>
          </div>
          <Icon 
            name={isOpen ? "ChevronUp" : "ChevronDown"} 
            size={20} 
            className="text-muted-foreground"
          />
        </button>
        
        {isOpen && (
          <div className="mt-2 p-4 bg-card rounded-lg border border-border editorial-shadow-sm">
            <nav className="space-y-2">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-editorial hover:bg-muted ${
                    heading.level === 1 
                      ? 'font-medium text-foreground' 
                      : 'text-muted-foreground ml-4'
                  }`}
                >
                  {heading.text}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <div className="sticky top-24 bg-card p-4 rounded-lg border border-border editorial-shadow-sm">
          <h3 className="flex items-center space-x-2 font-semibold text-foreground mb-4">
            <Icon name="List" size={18} />
            <span>Table of Contents</span>
          </h3>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-editorial hover:bg-muted ${
                  heading.level === 1 
                    ? 'font-medium text-foreground' 
                    : 'text-muted-foreground ml-4'
                }`}
              >
                {heading.text}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default TableOfContents;