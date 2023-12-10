import getCurrentUser from "@/actions/getCurrentUser";
import ProfileClient from "./_components/client";

const profile = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <ProfileClient user={user} />
    </>
  );
};

export default profile;
