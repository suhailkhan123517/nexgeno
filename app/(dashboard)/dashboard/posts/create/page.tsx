import getCurrentUser from "@/actions/getCurrentUser";
import PostForm from "./_components/post-form";
import db from "@/lib/db";

const PostCreatePage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      catName: "asc",
    },
  });

  const currentUser = await getCurrentUser();

  return (
    <>
      <PostForm
        options={categories.map((category) => ({
          label: category.catName,
          value: category.id,
        }))}
        currentUser={currentUser}
      />
    </>
  );
};

export default PostCreatePage;
