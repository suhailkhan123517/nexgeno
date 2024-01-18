import { db } from "@/lib/db";
import { Post } from "@prisma/client";

type getPosts = {
  title?: string;
  categoryId?: string;
};

export const getPosts = async ({
  title,
  categoryId,
}: getPosts): Promise<Post[]> => {
  try {
    const post = await db.post.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
          mode: "insensitive",
        },
        categoryId,
      },
      include: {
        author: true,
        category: true,
        postVisitor: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return post;
  } catch (error) {
    console.log("[GET_PROJECT]", error);
    return [];
  }
};
