import { db } from "@/lib/db";
import CategoryForm from "./_components/category-form";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await db.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });
  return (
    <>
      <div className="pt-6 max-w-lg">
        <CategoryForm initialData={category} />
      </div>
    </>
  );
};

export default CategoryPage;
