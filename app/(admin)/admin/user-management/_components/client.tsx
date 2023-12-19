"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { User } from "@prisma/client";
import { columns } from "./columns";

interface AdminClientProps {
  data: User[];
}

const AdminClient: React.FC<AdminClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <Heading
          title={`Employ (${data.length})`}
          description="Manage Employ  For Your Company"
        />
        <Button onClick={() => router.push("/admin/user-management/new")}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <div className="mt-5">
        <DataTable
          searchKey="title"
          placeholder="Search a Employ..."
          columns={columns}
          data={data}
        />
      </div>
    </>
  );
};

export default AdminClient;
