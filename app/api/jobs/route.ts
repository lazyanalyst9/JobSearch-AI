import { NextResponse } from "next/server";
import { jobs } from "@/lib/dummy-data";

export async function GET() {
  return NextResponse.json({ jobs });
}
