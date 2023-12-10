import Navbar from "./_components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default RootLayout;
