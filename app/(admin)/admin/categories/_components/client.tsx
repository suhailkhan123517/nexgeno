"use client";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Category } from "@prisma/client";

interface CategoryClientProps {
  data: Category[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage Category for your blog Website"
        />
        <Button onClick={() => router.push(`/admin/categories/create`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <div className="mt-5">
        <DataTable
          searchKey="catName"
          placeholder="Search a Category..."
          columns={columns}
          data={data}
        />
      </div>
    </>
  );
};

export default CategoryClient;
