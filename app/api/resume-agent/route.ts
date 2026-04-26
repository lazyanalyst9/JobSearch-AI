import { NextRequest, NextResponse } from "next/server";
import { runResumeMatch } from "@/lib/ai";

export async function POST(req: NextRequest) {
  const { resumeText, jobDescription } = await req.json();
  const result = runResumeMatch(resumeText ?? "", jobDescription ?? "");

  return NextResponse.json(result);
}
