"use client";
import Image from "next/image";
import { MdDashboard, MdOutlineSettings } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillPostcardFill } from "react-icons/bs";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { User } from "@prisma/client";

interface SidebarProps {
  user: User | null;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      id: 1,
      title: "Pages",
      list: [
        {
          id: 1,
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard size={30} />,
        },
        {
          id: 3,
          title: "My  Posts",
          path: "/dashboard/posts",
          icon: <BsFillPostcardFill size={30} />,
        },
        {
          id: 4,
          title: "Categories",
          path: "/dashboard/categories",
          icon: <BiSolidCategory size={30} />,
        },
        {
          id: 5,
          title: "Profile",
          path: `/dashboard/profile`,
          icon: <MdOutlineSettings size={30} />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="sticky top-10">
        <div className="flex items-center gap-5 mb-5">
          <div className="relative h-14 w-14">
            <Image
              className="rounded-full object-cover"
              src={user?.imageUrl || "/noavatar.png"}
              alt="profile"
              fill={true}
              key={"item._id"}
            />
          </div>

          <div className="flex flex-col">
            <span className="font-medium">{user?.name}</span>
            <span className="text-xs">{user?.title}</span>
          </div>
        </div>
        <ul className="list-none">
          {menuItems.map((cat) => (
            <li key={cat.id}>
              <span className="font-bold text-xs my-2">{cat.title}</span>
              {cat.list.map((item) => (
                <>
                  <Link
                    href={item.path}
                    key={item.id}
                    className={`p-5 flex items-center gap-5 my-1 rounded-lg border-[1px]   ${
                      pathname === item.path &&
                      " text-[#17c1e8] font-semibold shadow-lg"
                    } `}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </>
              ))}
            </li>
          ))}

          {user?.role === "admin" && (
            <li>
              <span className="font-bold text-xs my-2">Admin</span>
              <Link
                href="/dashboard/admin"
                className={`p-5 flex items-center gap-5 my-1 rounded-lg border-[1px]   ${
                  pathname === "/dashboard/admin" &&
                  " text-[#17c1e8] font-semibold shadow-lg"
                } `}
              >
                <FaUser />
                User Management
              </Link>
              <Link
                href="/dashboard/all-post"
                className={`p-5 flex items-center gap-5 my-1 rounded-lg border-[1px]   ${
                  pathname === "/dashboard/all-post" &&
                  "text-[#17c1e8] font-semibold shadow-lg"
                } `}
              >
                <BsFillPostcardFill />
                All Post
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
