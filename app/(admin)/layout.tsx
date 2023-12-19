import getCurrentUser from "@/actions/getCurrentUser";
import { ThemeProvider } from "@/providers/theme-provider";
import Sidebar from "./admin/dashboard/_components/side-bar";
import TopBar from "./admin/dashboard/_components/top-bar";

export const metadata = {
  title: "Nexgeno | Dashboard",
  description:
    "Offshore Software Development & IT Consulting Company in mumbai india",
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="flex">
          <div className="sidebar p-5 min-h-screen ">
            <Sidebar user={currentUser} />
          </div>
          <div className="content p-5">
            <TopBar />
            {children}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default DashboardLayout;
