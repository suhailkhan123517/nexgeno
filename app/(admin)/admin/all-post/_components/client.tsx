import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Post } from "@prisma/client";
import { columns } from "./columns";

interface AllPostClientProps {
  data: Post[];
}

const AllPostClient: React.FC<AllPostClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between pb-4">
        <Heading
          title={`All Post (${data.length})`}
          description="Manage all post of your employ and your post here"
        />
      </div>
      <Separator />
      <div className="mt-5">
        <DataTable
          searchKey="title"
          placeholder="Search a Post..."
          columns={columns}
          data={data}
        />
      </div>
    </>
  );
};

export default AllPostClient;
