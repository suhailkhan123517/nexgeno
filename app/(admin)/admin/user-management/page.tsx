import AdminClient from "./_components/client";
import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const PostsPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser?.role !== "admin") {
    redirect("/admin/dashboard");
  }

  const users = await db.user.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <>
      <div className="pt-6">
        <AdminClient data={users} />
      </div>
    </>
  );
};

export default PostsPage;
