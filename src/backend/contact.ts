export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResult =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      errors: Partial<Record<keyof ContactPayload, string>>;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: Partial<ContactPayload>): ContactResult {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

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
    return { ok: false, errors };
  }

  return { ok: true, message: "Thanks. Your message is ready for follow-up." };
}

export async function handleContactSubmission(payload: ContactPayload): Promise<ContactResult> {
  const validation = validateContactPayload(payload);

  if (!validation.ok) {
    return validation;
  }

  // Production hook: connect Resend, Postmark, SendGrid, or a CRM here.
  console.info("Portfolio contact submission", {
    name: payload.name,
    email: payload.email,
    messageLength: payload.message.length,
  });

  return validation;
}
