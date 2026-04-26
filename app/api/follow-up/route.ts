import { NextRequest, NextResponse } from "next/server";
import { generateFollowUpDraft } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const { hrName, jobTitle, companyName } = await req.json();
  const draft = generateFollowUpDraft(hrName ?? "Hiring Team", jobTitle ?? "position", companyName ?? "your company");
  return NextResponse.json({ draft });
}
