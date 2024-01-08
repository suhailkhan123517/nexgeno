import { Metadata } from "next";
import { redirect } from "next/navigation";
import BlogClientPage from "./_components/client";
import { db } from "@/lib/db";

export async function generateStaticParams() {
  const post = await db.post.findMany();

  return post.map(({ id }) => id);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await db.post.findUnique({
    where: {
      slug: params.slug as string,
    },
  });

  return {
    title: post?.title,
    description: post?.description,
  };
}

const BlogIdPage = async ({ params }: { params: { slug: string } }) => {
  const post = await db.post.findUnique({
    where: {
      slug: params.slug,
      isPublished: true,
    },
    include: {
      author: true,
      category: true,
    },
  });

  const views = await db.postVisitor.findMany({
    where: {
      postId: post?.id,
    },
  });

  const postPublished = post?.isPublished;

  if (!postPublished) {
    redirect("/blog");
  }

  return (
    <>
      <BlogClientPage
        id={post.id}
        catName={post.category?.catName}
        title={post.title}
        description={post.description}
        authorImage={post.author?.imageUrl}
        authorName={post.author?.name}
        authorTitle={post.author?.title}
        createdAt={post.createdAt}
        imageUrl={post.imageUrl}
        textEditor={post.textEditor}
        views={views}
      />

      {/* <section>
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
            <Preview value={post?.textEditor!} />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BlogIdPage;
