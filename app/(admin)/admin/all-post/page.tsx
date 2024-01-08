import getCurrentUser from "@/actions/getCurrentUser";
import AllPostClient from "./_components/client";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const AllPostPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser?.role !== "admin") {
    redirect("/dashboard");
  }

  const posts = await db.post.findMany({
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
        <AllPostClient data={posts} />
      </div>
    </>
  );
};

export default AllPostPage;
