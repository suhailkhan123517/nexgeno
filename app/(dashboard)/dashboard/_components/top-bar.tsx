"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdLogout, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const TopBar = () => {
  const router = useRouter();

  return (
    <>
      <div className="p-5 rounded-lg bg-white shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-5 bg-gray-100 p-2 rounded-lg">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-5">
            <MdPublic
              onClick={() => router.push("/blog")}
              className="cursor-pointer"
              size={20}
            />

            <button onClick={() => signOut()}>
              <MdLogout size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
