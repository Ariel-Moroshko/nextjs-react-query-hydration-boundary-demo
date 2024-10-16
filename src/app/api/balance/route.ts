import { getAmount } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const balance = await getAmount();
  return NextResponse.json({ balance });
}
