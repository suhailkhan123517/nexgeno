import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { Eye } from "lucide-react";
import { db } from "@/lib/db";

export const revalidate = 0;

const BlogClient = async () => {
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
      postVisitor: true,
    },
  });

  const formatePosts = posts.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    name: item.author?.name,
    categoryId: item.categoryId,
    catName: item.category?.catName,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
    views: item.postVisitor.length,
  }));

  const firstPost = formatePosts[0];
  const firstFourPost = formatePosts.slice(0, 5);
  const remainingPosts = firstFourPost.length > 1 ? firstFourPost.slice(1) : [];
  const remainingObjects = formatePosts.slice(5);

  return (
    <>
      {posts.length > 0 ? (
        <>
          {" "}
          <section>
            <div className="container mx-auto mt-5 my-20">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
                <div>
                  {firstPost ? (
                    <>
                      <Link href={`/blog/${firstPost.slug}`}>
                        <div className="relative w-full md:h-[350px] h-[200px] rounded-lg">
                          <Image
                            src={`${firstPost.imageUrl}`}
                            fill={true}
                            alt="blog Banner"
                            className="rounded-lg"
                          />
                        </div>
                        <div className="mt-5 ">
                          <h2 className="text-xl font-semibold text-black">
                            {firstPost.title}
                          </h2>
                          <p className="desc mt-3 line-clamp-3">
                            {firstPost.description}
                          </p>
                        </div>
                      </Link>
                      <div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                            {firstPost?.name}
                          </span>
                          <span className="text-gray-300">in</span>
                          <Link
                            href={`/blog/category/${firstPost.categoryId}`}
                            className="text-pink-600 hover:text-gray-600 transition-all duration-200"
                          >
                            {firstPost.catName}
                          </Link>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                          <span>{firstPost.createdAt}</span>
                          <span>.</span>
                          <span>17 min read</span>
                          <AiFillStar />
                          <span className="flex items-center gap-2">
                            <Eye />
                            {firstPost.views} views
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full bg-gray-300 animate-pulse h-[350px]"></div>
                    </>
                  )}
                </div>
                <div>
                  {remainingPosts.map((item) => (
                    <>
                      <div
                        key={item.id}
                        className="grid grid-cols-3 gap-5 mb-3"
                      >
                        <Link className="" href={`/blog/${item.slug}`}>
                          <div className="relative xl:h-[130px] lg:h-[100px] xl:w-[200px] lg:w-[160px] h-[130px] w-full">
                            <Image
                              src={`${item.imageUrl}`}
                              fill={true}
                              alt="Blog post"
                              className="rounded-lg object-cover"
                            />
                          </div>
                        </Link>
                        <div className="col-span-2 ">
                          <Link href={`/blog/${item.id}`}>
                            <h2 className="xl:text-xl text-base line-clamp-2 font-semibold text-black">
                              {item.title}
                            </h2>
                          </Link>

                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                              {item.name}
                            </span>
                            <span className="text-gray-300">in</span>

                            <Link
                              href={`/blog/category/${item.categoryId}`}
                              className="text-pink-600 hover:text-gray-600 transition-all duration-200"
                            >
                              {item.catName}
                            </Link>
                          </div>
                          <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                            <span>
                              {item.createdAt.toString().split("T")[0]}
                            </span>
                            <span>.</span>
                            <span>17 min read</span>
                            <AiFillStar />
                            <span className="flex items-center gap-2">
                              <Eye />
                              {item.views} views
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mb-20 ">
            <div className="container mx-auto ">
              <div className="flex gap-10 relative h-auto">
                <div className="">
                  <h2 className="heading border-b pb-3 mb-6">All Posts</h2>

                  {remainingObjects.map((item) => (
                    <>
                      <div className="flex gap-5 mb-4 ">
                        <div className="flex-auto">
                          <Link
                            key={item.id}
                            href={`/blog/${item.slug}`}
                            className="mt-6"
                          >
                            <h2 className="md:text-2xl text-lg font-semibold text-black mb-3">
                              {item.title}
                            </h2>
                            <p className="desc mb-3 max-md:hidden line-clamp-3">
                              {item.description}
                            </p>
                          </Link>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                              {item.name}
                            </span>
                            <span className="text-gray-300">in</span>
                            <Link
                              href={`/blog/category/${item.categoryId}`}
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
                            <span className="flex items-center gap-2">
                              <Eye />
                              {item.views} views
                            </span>
                          </div>
                        </div>
                        <div className="flex-auto">
                          <Link href={`/blog/${item.id}`}>
                            <div className="relative md:w-[350px]  h-[220px] max-md:hidden">
                              <Image
                                src={`${item.imageUrl}`}
                                fill={true}
                                alt="Blog post"
                                className="rounded-lg object-cover"
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
      ) : (
        <>
          <div className="flex justify-center items-center h-screen w-full">
            <h2 className="text-3xl">No Post Here</h2>
          </div>
        </>
      )}
    </>
  );
};

export default BlogClient;
