# 🚀 Sanjeet Kumar - Interactive Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience, skills, and projects with stunning animations and a comprehensive resume template.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=netlify&logoColor=white)
[![Netlify Status](https://api.netlify.com/api/v1/badges/99ed6bff-9c0b-42d9-ac5f-af317ad50824/deploy-status)](https://app.netlify.com/projects/sanjeet-kumar-nitt/deploys)

## ✨ Features

### 🎨 **Modern Design System**
- **Dark Theme** with teal (#08fdd8) and pink (#ff6b6b) accent colors
- **Animated Background** with floating particles and gradient overlays
- **Smooth Animations** using custom CSS keyframes and transitions
- **Interactive Components** with hover effects and micro-interactions

### 📱 **Fully Responsive**
- **Mobile-First Design** with 6 comprehensive breakpoints
- **Adaptive Layouts** that work perfectly on all devices
- **Optimized Performance** with responsive images and lazy loading
- **Touch-Friendly** interface for mobile users

### 💼 **Professional Resume Template**
- **Print-Optimized** resume with clean black/white styling
- **ATS-Friendly** structure for applicant tracking systems
- **Client Work Showcase** with detailed project breakdowns
- **Award Highlighting** with special visual styling
- **Downloadable PDF** functionality

### 🏗️ **Pages & Sections**
- **Home** - Hero section with animated introduction
- **About** - Personal story, tech stack, and growth journey
- **Skills** - Interactive skill cloud and categorized expertise
- **Experience** - Detailed work history with expandable project details
- **Work** - Project showcase with live demos and GitHub links
- **Resume** - Professional resume template with print functionality
- **Contact** - Contact form with EmailJS integration

### ⚡ **Technical Features**
- **TypeScript** for type safety and better developer experience
- **Styled Components** for component-scoped styling
- **React Router** for seamless navigation
- **EmailJS Integration** for contact form functionality
- **Responsive Images** with optimized loading
- **SEO Optimized** with proper meta tags and structure

## 🛠️ Technologies Used

### **Frontend**
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **SCSS/Sass** - Advanced CSS preprocessing
- **Styled Components** - CSS-in-JS styling solution

### **UI/UX**
- **React Spectrum** - Adobe's design system
- **Material-UI** - Component library
- **Custom Animations** - CSS keyframes and transitions
- **Responsive Design** - Mobile-first approach

### **Tools & Build**
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **EmailJS** - Email service integration
- **React Toastify** - Toast notifications

### **Deployment**
- **Netlify** - Continuous deployment and hosting
- **Git** - Version control
- **GitHub** - Code repository

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodingWithSanjeet/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── assets/
│   │   └── resume/
│   │       └── Sanjeet-Resume.pdf
│   ├── logos/
│   │   ├── adobe-logo.svg
│   │   ├── bestwestern-logo.svg
│   │   ├── oracle-logo.svg
│   │   └── teksystems-logo.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimateLetters/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Chart/
│   │   │   ├── HeaderTwo/
│   │   │   ├── Panel/
│   │   │   └── SectionContainer/
│   │   ├── Layout/
│   │   ├── Menu/
│   │   └── pages/
│   │       ├── About/
│   │       ├── Contact/
│   │       ├── Experience/
│   │       ├── ExperienceDetails/
│   │       ├── Home/
│   │       ├── Resume/
│   │       ├── Skills/
│   │       └── Work/
│   ├── data/
│   │   ├── AboutData.tsx
│   │   ├── ExperienceData.tsx
│   │   ├── MenuData.tsx
│   │   ├── resumeData.ts
│   │   ├── SkillsData.tsx
│   │   └── WorkData.ts
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── music/
│   ├── styles/
│   │   └── theme.scss
│   ├── types/
│   │   └── common.ts
│   ├── utils/
│   │   └── keywordHighlighter.tsx
│   ├── App.tsx
│   ├── App.scss
│   └── index.tsx
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### **Personal Information**
Update your information in the data files:
- `src/data/resumeData.ts` - Resume content
- `src/data/MenuData.tsx` - Navigation and social links
- `src/data/AboutData.tsx` - About page content
- `src/data/ExperienceData.tsx` - Work experience
- `src/data/WorkData.ts` - Project portfolio

### **Styling**
- `src/styles/theme.scss` - Global color variables
- Component-specific SCSS files for detailed styling
- `src/index.css` - Animated background and global styles

### **Resume Template**
The resume template (`src/components/pages/Resume/`) is fully customizable:
- Edit `src/data/resumeData.ts` for content
- Modify `Resume.scss` for styling
- Print-optimized styles included

## 📱 Responsive Breakpoints

```scss
// Large Screens (1920px+)
@media screen and (min-width: 1921px)

// Large Laptops (1441px - 1920px)
@media screen and (min-width: 1441px) and (max-width: 1920px)

// Standard Laptops (1025px - 1440px)
@media screen and (min-width: 1025px) and (max-width: 1440px)

// Small Laptops/Tablets (768px - 1024px)
@media screen and (min-width: 768px) and (max-width: 1024px)

// Large Mobile/Small Tablets (481px - 767px)
@media screen and (min-width: 481px) and (max-width: 767px)

// Mobile (480px and below)
@media screen and (max-width: 480px)
```

## 🚀 Deployment

### **Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard
5. Deploy automatically on every push to main branch

### **Build for Production**
```bash
npm run build
# or
yarn build
```

## 🌟 Key Features Showcase

### **Interactive Elements**
- Collapsible experience sections with smooth animations
- Hover effects on skill tags and project cards
- Animated background with floating particles
- Smooth page transitions

### **Professional Resume**
- Print-optimized layout (A4 dimensions)
- ATS-friendly structure
- Client work breakdown under TekSystems
- Award highlighting with special styling
- Responsive contact information grid

### **Performance Optimizations**
- Lazy loading for images
- Optimized bundle size
- Responsive images
- Efficient CSS animations

## 📞 Contact

**Sanjeet Kumar**
- 📧 Email: sanjeet.kuma.nitt@gmail.com
- 📱 Phone: +91 9876543210
- 🌐 Portfolio: [https://sanjeet-kumar-portfolio.netlify.app/](https://sanjeet-kumar-portfolio.netlify.app/)
- 💼 LinkedIn: [https://www.linkedin.com/in/sanjeet-kumar-nitt/](https://www.linkedin.com/in/sanjeet-kumar-nitt/)
- ⚡ GitHub: [https://github.com/CodingWithSanjeet](https://github.com/CodingWithSanjeet)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/CodingWithSanjeet/my-portfolio/issues).

## ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a star on GitHub!

---

**Built with ❤️ by Sanjeet Kumar** | **© 2024 All Rights Reserved**
