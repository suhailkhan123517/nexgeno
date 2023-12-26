import { TPost } from "@/types";

const getPosts = async (): Promise<TPost[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  return res.json();
};

export default getPosts;
