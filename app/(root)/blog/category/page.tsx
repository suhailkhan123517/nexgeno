import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import db from "@/lib/db";
import { format } from "date-fns";

const CategoryPage = async () => {
  const posts = await db.post.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
      category: true,
    },
  });

  const formatePosts = posts.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    name: item.author?.name,
    categoryId: item.categoryId,
    catName: item.category?.catName,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
      <section className="my-14">
        <div className="container mx-auto ">
          <div className="flex gap-10 relative h-auto">
            <div className="">
              <h2 className="heading border-b pb-3 mb-6">All Category</h2>

              {formatePosts.map((item) => (
                <>
                  <div key={item.id} className="mt-6">
                    <div className="flex gap-5 justify-between mb-4 ">
                      <div className="">
                        <Link href={`/blog/${item.id}`}>
                          <h2 className="text-2xl font-semibold text-black mb-3">
                            {item.title}
                          </h2>
                          <p className="desc mb-3">{item.description}</p>
                        </Link>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                            {item.name}
                          </span>
                          <span className="text-gray-300">in</span>
                          <Link
                            href={`/blog/category/${item.id}`}
                            className="text-pink-600 hover:text-gray-600 transition-all duration-200"
                          >
                            {item.catName}
                          </Link>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                          <span>{item.createdAt}</span>
                          <span>.</span>
                          <span>17 min read</span>
                          <AiFillStar />
                        </div>
                      </div>
                      <Link href={`/blog/${item.id}`} className="">
                        <div className="relative w-[350px] h-[220px] max-md:hidden">
                          <Image
                            src={`${item.imageUrl}`}
                            fill={true}
                            alt="Blog post"
                            className="rounded-lg"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
