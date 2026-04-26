import { addBusinessDays, formatISO } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const entry = {
    ...body,
    status: body.status ?? "Applied",
    dateApplied: formatISO(new Date(), { representation: "date" }),
    followUpDate: formatISO(addBusinessDays(new Date(), 5), { representation: "date" })
  };

  return NextResponse.json({ message: "Application saved and tracker updated", entry });
}
