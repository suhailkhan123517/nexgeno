"use client";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProfileClientProps {
  user: User | null;
}

const ProfileClient: React.FC<ProfileClientProps> = ({ user }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex gap-5 relative">
          <div
            className={` border-2 h-72 border-dotted grid place-items-center bg-slate-100 relative rounded-lg w-full  }`}
          >
            <Image
              src={user?.imageUrl || "/noavatar.png"}
              fill
              className="absolute object-cover inset-0 rounded-lg"
              alt="Profile Image"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <h2 className="text-xl font-bold">{user?.name}</h2>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <h2 className="text-xl font-bold">{user?.email}</h2>
            </div>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <h2 className="text-xl font-bold">{user?.title}</h2>
            </div>
            <div className="flex flex-col gap-2">
              <label>Role</label>
              <h2 className="text-xl font-bold">{user?.role}</h2>
            </div>
            <div>
              <Button>
                <Link href={`/admin/profile/${user?.id}`}>Update</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileClient;
