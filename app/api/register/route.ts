import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, title, imageUrl, publicId, email, password } = body;
    if (!name || !title || !email || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: {
        name,
        title,
        role: "user",
        imageUrl,
        publicId,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
