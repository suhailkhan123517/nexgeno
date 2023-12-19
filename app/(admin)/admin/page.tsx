import { authOptions } from "@/utils/auth-options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/admin/dashboard");
  }
  return;
};

export default AdminPage;
