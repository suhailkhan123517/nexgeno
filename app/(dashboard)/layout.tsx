import getCurrentUser from "@/actions/getCurrentUser";
import Sidebar from "./dashboard/_components/side-bar";
import TopBar from "./dashboard/_components/top-bar";
import { ThemeProvider } from "@/providers/theme-provider";

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
