import { db } from "@/lib/db";
import EmployUpdate from "./_components/employ-update";

const AdminPage = async ({ params }: { params: { adminId: string } }) => {
  const user = await db.user.findUnique({
    where: {
      id: params.adminId,
    },
  });

  const role = [
    {
      label: "User",
      value: "user",
    },
    {
      label: "Admin",
      value: "admin",
    },
  ];

  return (
    <>
      <EmployUpdate
        options={role.map((item) => ({
          label: item.label,
          value: item.value,
        }))}
        initialData={user}
      />
    </>
  );
};

export default AdminPage;
