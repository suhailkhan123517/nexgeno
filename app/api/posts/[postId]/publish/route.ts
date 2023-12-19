import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const post = await db.post.findUnique({
      where: {
        id: params.postId,
      },
    });

    if (!post) {
      return new NextResponse("Missing Post", { status: 400 });
    }

    const publishedPost = await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedPost);
  } catch (error) {
    console.log("POST_PUBLISH", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
