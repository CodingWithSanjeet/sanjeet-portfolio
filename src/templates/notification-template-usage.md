# Contact Form Notification Template

## 📧 Template Variables

Replace these placeholders in your backend code:

```javascript
const templateVariables = {
  user_name: "John Doe",
  user_email: "john@example.com", 
  user_subject: "Job Opportunity",
  message: "Hi Sanjeet, I saw your portfolio and would love to discuss a position...",
  timestamp: new Date().toISOString(),
  user_ip: "192.168.1.1" // Optional
};
```

## 🔧 Backend Integration Examples

### Node.js with Nodemailer
```javascript
const fs = require('fs');
const nodemailer = require('nodemailer');

// Read template
let emailTemplate = fs.readFileSync('./templates/contact-form-notification.html', 'utf8');

// Replace placeholders
emailTemplate = emailTemplate
  .replace(/{{user_name}}/g, formData.name)
  .replace(/{{user_email}}/g, formData.email)
  .replace(/{{user_subject}}/g, formData.subject)
  .replace(/{{message}}/g, formData.message)
  .replace(/{{timestamp}}/g, new Date().toISOString())
  .replace(/{{user_ip}}/g, req.ip);

// Send email
await transporter.sendMail({
  from: 'noreply@yourportfolio.com',
  to: 'sanjeet@yourportfolio.com',
  subject: `Portfolio Contact: ${formData.subject}`,
  html: emailTemplate
});
```

### Express.js Route Example
```javascript
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  try {
    // Send notification to yourself
    await sendNotificationEmail({
      user_name: name,
      user_email: email,
      user_subject: subject,
      message: message,
      timestamp: new Date().toISOString(),
      user_ip: req.ip
    });
    
    // Send response to user (using the other template)
    await sendResponseEmail(email, name);
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});
```

### PHP Example
```php
<?php
$template = file_get_contents('templates/contact-form-notification.html');

$template = str_replace([
    '{{user_name}}',
    '{{user_email}}',
    '{{user_subject}}',
    '{{message}}',
    '{{timestamp}}',
    '{{user_ip}}'
], [
    $_POST['name'],
    $_POST['email'],
    $_POST['subject'],
    $_POST['message'],
    date('c'),
    $_SERVER['REMOTE_ADDR']
], $template);

// Send email using your preferred method
mail('sanjeet@yourportfolio.com', 'Portfolio Contact', $template, $headers);
?>
```

## 🎯 Features Included

- **📱 Responsive Design** - Works on all devices
- **🚨 Alert Badge** - Clear "action required" indicator  
- **👤 Contact Cards** - Organized contact information
- **📧 Quick Actions** - One-click reply buttons
- **⏰ Response Reminder** - Professional follow-up timing
- **🔍 Tracking Info** - Timestamp and IP logging
- **🎨 Brand Consistency** - Matches your portfolio colors

## 🛠️ Customization Options

### Colors
- **Primary**: `#08fdd8` (teal accent)
- **Dark**: `#1d1d1d` (background)
- **Alert**: `#fff3cd` (reminder section)

### Quick Reply Template
The "Reply Now" button includes a pre-filled response:
```
Hi {{user_name}},

Thank you for reaching out through my portfolio!
```

### Additional Variables
You can add more placeholders:
- `{{user_phone}}` - Phone number
- `{{user_company}}` - Company name  
- `{{referrer}}` - Where they found you
- `{{form_page}}` - Which page they contacted from

## 📱 Mobile Optimization

The template includes:
- Responsive table layout
- Mobile-friendly button sizes
- Readable font sizes on small screens
- Touch-friendly click targets

## ✅ Testing Checklist

- [ ] All variables are properly replaced
- [ ] Email renders correctly in Gmail
- [ ] Email renders correctly in Outlook
- [ ] Quick action buttons work
- [ ] Mobile view looks good
- [ ] Timestamps are formatted correctly 