import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { format } from "date-fns";
import { Eye } from "lucide-react";
import { db } from "@/lib/db";

const CategoryIdPage = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const categoryPost = await db.post.findMany({
    where: {
      categoryId: params.categoryId,
      isPublished: true,
    },
    include: {
      author: true,
      category: true,
      postVisitor: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatePosts = categoryPost.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    name: item.author?.name,
    categoryId: item.categoryId,
    catName: item.category?.catName,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
    views: item.postVisitor.length,
  }));

  const category = formatePosts[0].catName;

  return (
    <>
      <section className="my-14">
        <div className="container mx-auto ">
          <div className="flex gap-10 relative h-auto">
            <div className="">
              <h2 className="heading border-b pb-3 mb-6">
                All Post Category{" "}
                <span className="text-pink-600 transition-all duration-200 ">
                  {" "}
                  {category}{" "}
                </span>{" "}
              </h2>

              {formatePosts.length > 0 ? (
                <>
                  {formatePosts.map((item) => (
                    <>
                      <Link
                        key={item.id}
                        href={`/blog/${item.id}`}
                        className="mt-6"
                      >
                        <div className="flex gap-5 justify-between mb-4 ">
                          <div className="">
                            <h2 className="text-2xl font-semibold text-black mb-3">
                              {item.title}
                            </h2>
                            <p className="desc mb-3">{item.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                                {item.name}
                              </span>
                              <span className="text-gray-300">in</span>
                              <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                                {item.catName}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                              <span>{item.createdAt}</span>
                              <span>.</span>
                              <span>17 min read</span>
                              <AiFillStar />
                              <span className="flex items-center gap-2">
                                <Eye />
                                {item.views} views
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <div className="relative w-[350px] h-[220px]">
                              <Image
                                src={`${item.imageUrl}`}
                                fill={true}
                                alt="Blog post"
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center h-full w-fll">
                    <h2 className="text-3xl">No Post In Category Here</h2>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryIdPage;
