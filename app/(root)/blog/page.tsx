import { Metadata } from "next";
import BlogClient from "./_components/client";
import { getPosts } from "@/actions/getPosts";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blogs",
};

interface BlogPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const posts = await getPosts({
    ...searchParams,
  });

  return (
    <>
      {/* <BlogClient /> */}
      {posts.map((item) => (
        <div className="" key={item.id}>
          <Link href={`/blog/${item.slug}`}>
            <Image width={500} height={500} alt="title" src={item.imageUrl!} />
          </Link>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.slug}</p>
          <p>{item.textEditor}</p>
          <p>{item.metaTitle}</p>
        </div>
      ))}
    </>
  );
};

export default BlogPage;
