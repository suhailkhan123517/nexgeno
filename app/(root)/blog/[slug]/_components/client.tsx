"use client";

import { Preview } from "@/components/preview";
import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { TPost } from "@/types";
import { PostVisitor } from "@prisma/client";
import { Eye } from "lucide-react";

interface BlogClientPage {
  id: string;
  catName?: string;
  title: string | null;
  description: string | null;
  authorImage?: string | null;
  authorName?: string | null;
  authorTitle?: string | null;
  createdAt: Date;
  imageUrl: string | null;
  textEditor: string | null;
  views: PostVisitor[];
}

const BlogClientPage = ({
  id,
  catName,
  title,
  description,
  authorImage,
  authorName,
  authorTitle,
  createdAt,
  imageUrl,
  textEditor,
  views,
}: BlogClientPage) => {
  const postId = id;

  const isMountedRef = useRef(true);

  useEffect(() => {
    const visitor = async () => {
      try {
        const postData = { postId };
        if (isMountedRef.current) {
          const storedPostIds = JSON.parse(Cookies.get("postIds") || "[]");
          if (!storedPostIds.includes(postId)) {
            const updatedPostIds = [...storedPostIds, postId];
            Cookies.set("postIds", JSON.stringify(updatedPostIds));
            console.log("Updated postIds:", updatedPostIds);
            await axios.post(`/api/seen`, postData);
          }
        }
      } catch (error) {
        console.log("Request Error");
      }
    };
    visitor();
    return () => {
      isMountedRef.current = false;
    };
  }, [postId]);

  return (
    <>
      <section>
        <div className="container mx-auto mt-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="mt-5 flex flex-col gap-6">
              <h5 className="text-pink-600 text-xl font-medium">{catName}</h5>
              <h2 className="font-semibold text-4xl leading-snug text-black">
                {title}
              </h2>
              <p className="desc line-clamp-4">{description}</p>
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20">
                  <Image
                    src={authorImage || "/noavatar.png"}
                    alt="Profile Image"
                    fill={true}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3>
                    Written By:
                    <span className="font-semibold"> {authorName}</span>
                  </h3>
                  <p className="font-semibold text-pink-600">{authorTitle}</p>
                  <p>{format(createdAt, "MMMM do, yyyy")}</p>
                  <span className="flex items-center gap-2">
                    <Eye />
                    {views.length} views
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-full h-[350px] rounded-lg">
                <Image
                  src={`${imageUrl}`}
                  fill={true}
                  alt="blog Banner"
                  className="rounded-lg hover:-translate-y-2 transition-all duration-200"
                />
              </div>
            </div>
          </div>
          <div className="my-20">
            <Preview value={textEditor!} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogClientPage;
