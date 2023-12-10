import getCurrentUser from "@/actions/getCurrentUser";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    const {
      title,
      description,
      textEditor,
      imageUrl,
      metaTitle,
      metaDesc,
      categoryId,
    } = await req.json();

    const post = await db.post.create({
      data: {
        title,
        description,
        textEditor,
        imageUrl,
        metaTitle,
        metaDesc,
        categoryId,
        authorId: user?.id,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("[POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}