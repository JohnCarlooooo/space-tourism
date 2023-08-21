import { NextResponse } from "next/server";
export async function GET() {
  const data = await import("../../../../public/data.json");
  return NextResponse.json(JSON.stringify(data.destinations));
}
