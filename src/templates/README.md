# Email Templates for Portfolio Contact Responses

## 📧 Contact Response Email Template

A beautiful, professional HTML email template to respond to portfolio inquiries.

### Features

- ✨ **Professional Design** - Matches your portfolio's branding
- 📱 **Mobile Responsive** - Looks great on all devices
- 🎨 **Brand Colors** - Uses your signature teal (#08fdd8) accent
- 🔗 **Social Links** - Direct links to LinkedIn and GitHub
- 💼 **Skills Showcase** - Highlights your key technologies
- ✅ **Email Client Compatible** - Works across all major email providers

### How to Use

#### Option 1: Email Client Templates
1. Open your email client (Gmail, Outlook, etc.)
2. Copy the HTML content from `contact-response-email.html`
3. Create a new template/signature with this content
4. Use when responding to portfolio inquiries

#### Option 2: Backend Integration
```javascript
// Example Node.js integration
const fs = require('fs');
const emailTemplate = fs.readFileSync('./templates/contact-response-email.html', 'utf8');

// Send email using your preferred service (Nodemailer, SendGrid, etc.)
await sendEmail({
  to: inquirer.email,
  subject: 'Thank you for reaching out - Sanjeet Kumar',
  html: emailTemplate
});
```

#### Option 3: Manual Copy-Paste
1. Open `contact-response-email.html` in a browser
2. Copy the rendered content
3. Paste into your email composer

### Customization

Feel free to modify:
- **Personal message** - Update the content to match your tone
- **Response time** - Change the "24-48 hours" commitment
- **Skills tags** - Update with your current tech stack
- **Social links** - Add or modify social media links
- **Colors** - Adjust the color scheme if needed

### Preview

The template includes:
- Header with your name and title
- Warm, professional greeting
- Clear response time expectation
- Call-to-action buttons for social connections
- Skills showcase section
- Professional footer

### Email Client Compatibility

Tested and optimized for:
- Gmail
- Outlook
- Apple Mail
- Yahoo Mail
- Thunderbird

### Tips

- Always personalize the greeting when possible
- Update the skills section regularly
- Test the template in your email client before using
- Consider creating variations for different types of inquiries 