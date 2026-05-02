"use client";

import Link from "next/link";
import { useState } from "react";
import type { PortfolioAssistantResult } from "@/backend/portfolio-assistant";

const starterQuestions = [
  "What should a recruiter look at first?",
  "Which projects show backend depth?",
  "Where does Chris use AI?",
  "Which work shows real users?",
];

export function PortfolioAssistant() {
  const [question, setQuestion] = useState(starterQuestions[0]);
  const [result, setResult] = useState<PortfolioAssistantResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function ask(nextQuestion = question) {
    setIsLoading(true);
    setQuestion(nextQuestion);

    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: nextQuestion }),
    });

    setResult(await response.json());
    setIsLoading(false);
  }

  return (
    <section className="py-8 sm:py-10">
      <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-ink p-5 text-white shadow-soft dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-soft-dark sm:p-6 lg:p-8">
        <div className="absolute inset-0 opacity-45">
          <div className="absolute left-6 top-8 h-40 w-40 rounded-full bg-teal-400 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-amber-300 blur-3xl" />
        </div>
        <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">Portfolio AI</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ask my work directly</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              A recruiter-friendly assistant that answers from the structured project and skills data behind this site.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {starterQuestions.map((item) => (
                <button
                  className="rounded-md border border-white/15 bg-white/10 px-3 py-2 text-left text-xs font-semibold text-zinc-100 transition hover:border-teal-200 hover:bg-white/15"
                  key={item}
                  onClick={() => ask(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-black/35 p-4 backdrop-blur">
            <label className="text-sm font-semibold text-zinc-100" htmlFor="portfolio-question">
              Ask a question
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                className="min-h-11 rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-teal-200"
                id="portfolio-question"
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    ask();
                  }
                }}
                placeholder="Ask about projects, skills, or fit..."
                value={question}
              />
              <button
                className="min-h-11 rounded-lg bg-teal-300 px-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 disabled:opacity-60"
                disabled={isLoading}
                onClick={() => ask()}
                type="button"
              >
                {isLoading ? "Thinking..." : "Ask"}
              </button>
            </div>

            <div className="mt-5 min-h-48 rounded-lg border border-white/10 bg-black/25 p-4">
              {result ? (
                <div>
                  <p className="whitespace-pre-line text-sm leading-7 text-zinc-200">{result.answer}</p>
                  {result.sources.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {result.sources.map((source) => (
                        <Link
                          className="rounded-md border border-teal-200/30 bg-teal-300/10 px-3 py-2 text-xs font-semibold text-teal-100 transition hover:bg-teal-300/20"
                          href={source.href}
                          key={source.href}
                        >
                          {source.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="flex h-full min-h-40 items-center text-sm leading-7 text-zinc-400">
                  Ask about backend depth, AI work, ML/data projects, production experience, or which technical write-up to read first.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
