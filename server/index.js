import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, sourceUrl } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'invalid_payload' });
  }
  process.stdout.write(
    `CONTACT_FORM_SUBMISSION\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Subject: ${subject}\n` +
    `Source: ${sourceUrl || req.headers.referer || ''}\n` +
    `Message: ${message}\n\n`
  );
  const toRaw = process.env.RESEND_CONTACT_TO || 'contact@exploge.com';
  const to = String(toRaw).split(',').map(s => s.trim()).filter(Boolean);
  const from = process.env.RESEND_FROM || 'contact@mail.exploge.com';
  const canSend = !!resend && to.length > 0;
  if (!canSend) {
    return res.status(500).json({ ok: false, error: 'resend_not_configured' });
  }
  try {
    const html =
      `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#0a0a0a">` +
      `<h2 style="margin:0 0 12px">New Contact Form Submission</h2>` +
      `<p style="margin:0 0 8px"><strong>Name:</strong> ${name}</p>` +
      `<p style="margin:0 0 8px"><strong>Email:</strong> ${email}</p>` +
      `<p style="margin:0 0 8px"><strong>Subject:</strong> ${subject}</p>` +
      `<p style="margin:0 0 8px"><strong>Source:</strong> ${sourceUrl || ''}</p>` +
      `<div style="margin-top:12px;padding:12px;border:1px solid #e5e5e5;border-radius:8px;background:#fafafa">` +
      `<div style="white-space:pre-wrap">${message}</div>` +
      `</div>` +
      `</div>`;
    const result = await resend.emails.send({
      from,
      to,
      subject: `Contact: ${subject}`,
      html,
      replyTo: email
    });
    if (result && result.error) {
      process.stdout.write(`RESEND_SEND_ERROR ${JSON.stringify(result.error)}\n`);
      return res.status(500).json({ ok: false, error: 'email_send_failed' });
    }
    return res.json({ ok: true });
  } catch (err) {
    process.stdout.write(`RESEND_SEND_EXCEPTION ${String(err)}\n`);
    return res.status(500).json({ ok: false, error: 'email_send_exception' });
  }
});

app.listen(port, () => {
  process.stdout.write(`server listening on ${port}\n`);
});
