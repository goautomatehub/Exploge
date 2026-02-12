import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, sourceUrl } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'invalid_payload' });
  }
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ ok: false, error: 'missing_api_key' });
  }
  try {
    console.log('Attempting to send email with Resend...');
    const primary = await resend.emails.send({
      from: 'Exploge <onboarding@resend.dev>', // Using verified sender for test
      to: ['contact@exploge.com'],
      reply_to: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
          <h2 style="margin:0 0 12px;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Source:</strong> <a href="${sourceUrl || req.headers.referer || ''}" target="_blank">${sourceUrl || req.headers.referer || ''}</a></p>
          <p><strong>Message:</strong></p>
          <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:8px;background:#fafafa;">${message}</div>
        </div>
      `
    });

    console.log('Resend response:', primary);

    if (primary?.error) {
      console.error('Resend error:', primary.error);
      return res.status(400).json({ ok: false, error: primary.error.message || 'send_failed' });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Server catch error:', err);
    return res.status(500).json({ ok: false, error: err.message || 'server_error' });
  }
});

app.listen(port, () => {});
