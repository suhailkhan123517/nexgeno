import { Metadata } from "next";
import BlogClient from "./_components/client";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogPage = async () => {
  return (
    <>
      <BlogClient />
    </>
  );
};

export default BlogPage;
