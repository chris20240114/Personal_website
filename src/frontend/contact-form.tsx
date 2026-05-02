"use client";

import { useState } from "react";
import type { ContactPayload } from "@/backend/contact";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setErrors(data.errors ?? {});
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    event.currentTarget.reset();
    setStatus({ type: "success", message: data.message ?? "Message sent." });
  }

  return (
    <form className="space-y-4 rounded-lg border border-zinc-200 bg-white/72 p-5 dark:border-zinc-800 dark:bg-white/[0.04]" onSubmit={onSubmit}>
      <div>
        <label className="text-sm font-semibold text-ink dark:text-zinc-100" htmlFor="name">
          Name
        </label>
        <input
          className="mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-ink outline-none transition focus:border-teal-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-teal-300"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
        />
        {errors.name ? <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p> : null}
      </div>
      <div>
        <label className="text-sm font-semibold text-ink dark:text-zinc-100" htmlFor="email">
          Email
        </label>
        <input
          className="mt-2 min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 text-sm text-ink outline-none transition focus:border-teal-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-teal-300"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
        />
        {errors.email ? <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p> : null}
      </div>
      <div>
        <label className="text-sm font-semibold text-ink dark:text-zinc-100" htmlFor="message">
          Message
        </label>
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-teal-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-teal-300"
          id="message"
          name="message"
        />
        {errors.message ? <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p> : null}
      </div>
      <button
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-ink bg-ink px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-70 dark:border-teal-300 dark:bg-teal-300 dark:text-ink"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {status.message ? (
        <p className={`text-sm ${status.type === "success" ? "text-teal-700 dark:text-teal-300" : "text-red-600 dark:text-red-400"}`} role="status">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
