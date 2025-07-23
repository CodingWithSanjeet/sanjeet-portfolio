# Resume Template

A modern, responsive resume template built with React, TypeScript, and SCSS that matches your portfolio's design system.

## Features

✅ **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)  
✅ **Print Optimized** - Clean print styles for physical resumes  
✅ **Easy Customization** - Simple data file configuration  
✅ **Modern Styling** - Matches your portfolio's dark theme with teal/pink accents  
✅ **Professional Layout** - Clean, ATS-friendly structure  
✅ **Interactive Elements** - Hover effects and smooth animations  

## How to Customize

### 1. Update Resume Data
Edit the file `src/data/resumeData.ts` with your personal information:

```typescript
export const resumeData: ResumeData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Job Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, State",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourusername",
    portfolio: "yourportfolio.com"
  },
  summary: "Your professional summary...",
  // ... rest of your data
};
```

### 2. Sections Included

- **Personal Information** - Contact details and links
- **Professional Summary** - Brief overview of your experience
- **Professional Experience** - Work history with responsibilities
- **Technical Skills** - Categorized skill sets
- **Key Projects** - Showcase your best work
- **Education** - Academic background
- **Certifications** - Professional certifications

### 3. Responsive Breakpoints

The resume automatically adapts to different screen sizes:

- **Desktop (1920px+)** - Full layout with optimal spacing
- **Large Laptops (1441px-1920px)** - Slightly condensed
- **Standard Laptops (1025px-1440px)** - Adjusted font sizes
- **Tablets (768px-1024px)** - Single column layout
- **Mobile (767px and below)** - Stacked layout with smaller fonts

### 4. Print Functionality

- **Print Button** - Optimized for printing with clean black/white styling
- **Download Button** - Links to your PDF resume file
- **A4 Optimized** - Perfect page dimensions for standard printing

## Navigation

The resume is accessible via:
- **URL**: `/resume`
- **Menu**: "Resume" link in the main navigation

## Styling

The resume uses your existing design system:
- **Colors**: Teal (#08fdd8) and Pink (#ff6b6b) accents
- **Typography**: Consistent with your portfolio fonts
- **Layout**: Clean, professional structure
- **Animations**: Subtle hover effects and transitions

## Tips for Customization

1. **Keep It Concise** - Aim for 1-2 pages when printed
2. **Use Action Verbs** - Start bullet points with strong action words
3. **Quantify Results** - Include numbers and percentages where possible
4. **Update Regularly** - Keep skills and experience current
5. **Test Print** - Always test the print layout before sharing

## File Structure

```
src/components/pages/Resume/
├── Resume.tsx          # Main component
├── Resume.scss         # Styling
└── README.md          # This file

src/data/
└── resumeData.ts      # Your resume data
```

---

**Need Help?** The resume template follows the same patterns as your other portfolio components, making it easy to maintain and customize! 