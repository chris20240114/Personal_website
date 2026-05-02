export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export type ContactResult =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      message: string;
      errors: ContactErrors;
      statusCode?: number;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultRecipients = ["cs.mizuwari@berkeley.edu", "christopher.cs.shen@gmail.com"];

export function validateContactPayload(payload: Partial<ContactPayload>): ContactResult {
  const errors: ContactErrors = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!payload.email || !emailPattern.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!payload.message || payload.message.trim().length < 12) {
    errors.message = "Please include a short message.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }

  return { ok: true, message: "Thanks. Your message was sent." };
}

export async function handleContactSubmission(payload: ContactPayload): Promise<ContactResult> {
  const validation = validateContactPayload(payload);

  if (!validation.ok) {
    return validation;
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      ok: false,
      message: "Email delivery is not configured yet. Please email Chris directly.",
      errors: {},
      statusCode: 503,
    };
  }

  const recipients = parseRecipients(process.env.CONTACT_TO_EMAILS);
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";
  const subject = `Portfolio contact from ${payload.name}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: payload.email,
      subject,
      text: buildPlainTextEmail(payload),
      html: buildHtmlEmail(payload),
    }),
  });

  if (!response.ok) {
    console.error("Resend email delivery failed", {
      status: response.status,
      body: await response.text(),
    });

    return {
      ok: false,
      message: "The message could not be sent right now. Please email Chris directly.",
      errors: {},
      statusCode: 502,
    };
  }

  return validation;
}

function parseRecipients(value: string | undefined) {
  const recipients = value
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return recipients?.length ? recipients : defaultRecipients;
}

function buildPlainTextEmail(payload: ContactPayload) {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function buildHtmlEmail(payload: ContactPayload) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1 style="font-size: 20px;">New portfolio contact</h1>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
