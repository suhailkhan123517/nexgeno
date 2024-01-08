import { db } from "@/lib/db";
import PostClient from "./_components/client";
import getCurrentUser from "@/actions/getCurrentUser";

const PostsPage = async () => {
  const currentUser = await getCurrentUser();
  const posts = await db.post.findMany({
    where: {
      authorId: currentUser?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
      author: true,
    },
  });

  return (
    <>
      <div className="pt-6">
        <PostClient data={posts} />
      </div>
    </>
  );
};

export default PostsPage;
