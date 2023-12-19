"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Post } from "@prisma/client";

interface PostClientProps {
  data: Post[];
}

const PostClient: React.FC<PostClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <Heading
          title={`Posts (${data.length})`}
          description="Manage Posts for you blog"
        />
        <Button onClick={() => router.push("/admin/posts/create")}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <div className="mt-5">
        <DataTable
          searchKey="title"
          placeholder="Search Your Post..."
          columns={columns}
          data={data}
        />
      </div>
    </>
  );
};

export default PostClient;
