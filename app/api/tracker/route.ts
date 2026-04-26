import { NextResponse } from "next/server";
import { trackerSeed } from "@/lib/dummy-data";

export async function GET() {
  return NextResponse.json({ rows: trackerSeed });
}
