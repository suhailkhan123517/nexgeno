import { NextResponse } from "next/server";
import db from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";

export async function PATCH(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const user = getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { categoryId } = params;
    const values = await req.json();

    const category = await db.category.update({
      where: {
        id: categoryId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const user = getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const postsCount = await db.post.count({
      where: {
        categoryId: params.categoryId,
      },
    });

    if (postsCount > 0) {
      return new NextResponse("Cannot delete category with associated posts", {
        status: 400,
      });
    }

    const category = await db.category.delete({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
