import { NextResponse } from "next/server";
import { handleContactSubmission, type ContactPayload } from "@/backend/contact";

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<ContactPayload>;
  const result = await handleContactSubmission({
    name: payload.name ?? "",
    email: payload.email ?? "",
    message: payload.message ?? "",
  });

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result);
}
