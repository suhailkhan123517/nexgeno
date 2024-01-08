import { db } from "@/lib/db";
import PostForm from "./_components/post-form";

const PostsPage = async ({ params }: { params: { postId: string } }) => {
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      catName: "asc",
    },
  });

  return (
    <>
      <PostForm
        options={categories.map((category) => ({
          label: category.catName,
          value: category.id,
        }))}
        initialData={post}
      />
    </>
  );
};

export default PostsPage;
