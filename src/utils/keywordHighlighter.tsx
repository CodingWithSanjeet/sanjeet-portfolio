import React from 'react';

// Keywords to highlight - you can modify this array
export const highlightKeywords = [
  'React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'JavaScript',
  'GraphQL', 'REST', 'API', 'HTML', 'CSS', 'Material UI', 'Azure',
  'MERN', 'Full-Stack', 'Frontend', 'Backend', 'Database', 'Cloud',
  'Git', 'GitHub', 'Docker', 'CI/CD', 'Testing', 'Performance',
  'Responsive', 'UI/UX', 'Redux', 'Hooks', 'Components'
];

// Function to highlight keywords in text
export const highlightText = (text: string | React.ReactElement | any, keywords: string[] = highlightKeywords): React.ReactNode => {
  // If text is not a string, return as is
  if (typeof text !== 'string' || !text || keywords.length === 0) return text;
  
  // Create a regex pattern that matches any of the keywords (case-insensitive)
  const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  
  // Split text by the pattern while keeping the matched parts
  const parts = text.split(keywordPattern);
  
  return parts.map((part, index) => {
    // Check if this part is a keyword (case-insensitive)
    const isKeyword = keywords.some(keyword => 
      keyword.toLowerCase() === part.toLowerCase()
    );
    
    if (isKeyword) {
      // Determine highlight class based on keyword for theme rotation
      const keywordIndex = keywords.findIndex(keyword => 
        keyword.toLowerCase() === part.toLowerCase()
      );
      const highlightClass = `keyword-highlight-${(keywordIndex % 3) + 1}`;
      
      return (
        <span key={index} className={`keyword-highlight ${highlightClass}`}>
          {part}
        </span>
      );
    }
    
    return part;
  });
};

// Function to highlight text in arrays (for subText)
export const highlightTextArray = (textArray: string[], keywords: string[] = highlightKeywords): React.ReactNode[] => {
  return textArray.map((text, index) => (
    <React.Fragment key={index}>
      {highlightText(text, keywords)}
    </React.Fragment>
  ));
}; 