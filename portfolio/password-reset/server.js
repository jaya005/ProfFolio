const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());  // Enable CORS for frontend access

// In-memory storage (no real database)
const users = [{ userId: 'admin', email: 'admin@example.com', password: 'admin123' }];
const resetTokens = {};  // Store reset tokens

// Forgot Password Endpoint: Step 1 (Request Reset Link)
app.post('/forgot-password', (req, res) => {
  const { userId } = req.body;
  const user = users.find(u => u.userId === userId);

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Generate a reset token
  const token = crypto.randomBytes(20).toString('hex');

  // Store the token with the userId
  resetTokens[token] = userId;

  // Set up email transporter using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',  // Replace with your email
      pass: 'your-email-password',  // Replace with your email password
    },
  });

  // Send reset password email with token link
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: user.email,
    subject: 'Password Reset Link',
    text: `Click the following link to reset your password: http://localhost:3000/reset-password?token=${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Reset link sent to your email' });
  });
});

// Reset Password Endpoint: Step 2 (Reset Password using Token)
app.post('/reset-password', (req, res) => {
  const { token, newPassword } = req.body;

  // Validate token
  const userId = resetTokens[token];
  if (!userId) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  // Find the user and update the password
  const user = users.find(u => u.userId === userId);
  if (user) {
    user.password = newPassword;
  }

  // Remove the token after password reset
  delete resetTokens[token];

  res.status(200).json({ message: 'Password successfully reset' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
