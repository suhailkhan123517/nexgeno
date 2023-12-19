import getCurrentUser from "@/actions/getCurrentUser";
import ProfileUpdate from "./_components/profile-update";

const ProfilePage = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <ProfileUpdate user={user} />
    </>
  );
};

export default ProfilePage;
