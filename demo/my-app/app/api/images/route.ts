import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const images = await db.image.findMany();
    return NextResponse.json(images);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
