import { NextResponse } from "next/server";
import { answerPortfolioQuestion } from "@/backend/portfolio-assistant";

export async function POST(request: Request) {
  const payload = (await request.json()) as { question?: string };
  const question = payload.question ?? "";

  return NextResponse.json(answerPortfolioQuestion(question));
}
