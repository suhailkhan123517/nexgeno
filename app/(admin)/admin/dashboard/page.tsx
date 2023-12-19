import getCurrentUser from "@/actions/getCurrentUser";
import DashboardPage from "./_components/dashboard";
import db from "@/lib/db";

const Dashboard = async () => {
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
      author: true,
    },
  });
  const category = await db.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const currentUser = await getCurrentUser();
  const myPost = await db.post.findMany({
    where: {
      authorId: currentUser?.id,
    },
  });
  const users = await db.user.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return (
    <>
      <DashboardPage
        data={posts}
        category={category}
        myPost={myPost}
        users={users}
      />
    </>
  );
};

export default Dashboard;
