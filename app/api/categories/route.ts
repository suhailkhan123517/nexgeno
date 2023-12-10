import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { catName } = await req.json();
    const category = await db.category.create({
      data: {
        catName,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
