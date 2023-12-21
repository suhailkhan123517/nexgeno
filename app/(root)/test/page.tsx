import db from "@/lib/db";

const TestPage = async () => {
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      catName: "asc",
    },
  });

  return (
    <>
      <div>Test Page</div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          {categories.map((item) => (
            <ul key={item.id}>
              <li>{item.catName}</li>
            </ul>
          ))}
        </div>
        <div>
          {posts.map((item) => (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestPage;
