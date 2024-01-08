import { db } from "@/lib/db";
import CategoryClient from "./_components/client";

const CategoryPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <div className="pt-6">
        <CategoryClient data={categories} />
      </div>
    </>
  );
};

export default CategoryPage;
