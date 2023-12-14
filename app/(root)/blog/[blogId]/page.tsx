import Image from "next/image";
import db from "@/lib/db";
import { format } from "date-fns";
import { Preview } from "@/components/preview";
import { Metadata } from "next";

export async function generateStaticParams() {
  const post = await db.post.findMany();

  return post.map(({ id }) => id);
}

export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> {
  const post = await db.post.findUnique({
    where: {
      id: params.blogId,
    },
  });

  return {
    title: post?.title,
    description: post?.description,
  };
}

const BlogIdPage = async ({ params }: { params: { blogId: string } }) => {
  const post = await db.post.findUnique({
    where: {
      id: params.blogId,
    },
    include: {
      author: true,
      category: true,
    },
  });

  return (
    <>
      <section>
        <div className="container mx-auto mt-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="mt-5 flex flex-col gap-6">
              <h5 className="text-pink-600 text-xl font-medium">
                {post?.category?.catName}
              </h5>
              <h2 className="font-semibold text-4xl leading-snug text-black">
                {post?.title}
              </h2>
              <p className="desc line-clamp-4">{post?.description}</p>
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20">
                  <Image
                    src={post?.author?.imageUrl || "/noavatar.png"}
                    alt="Profile Image"
                    fill={true}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3>
                    Written By:
                    <span className="font-semibold"> {post?.author?.name}</span>
                  </h3>
                  <p className="font-semibold text-pink-600">
                    {post?.author?.title}
                  </p>
                  <p>{format(post?.createdAt!, "MMMM do, yyyy")}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-full h-[350px] rounded-lg">
                <Image
                  src={`${post?.imageUrl}`}
                  fill={true}
                  alt="blog Banner"
                  className="rounded-lg hover:-translate-y-2 transition-all duration-200"
                />
              </div>
            </div>
          </div>
          <div className="my-20">
            <Preview value={post?.description!} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIdPage;
