import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export const metadata = {
  title: "E-Commerce Website",
  description:
    "Offshore Software Development & IT Consulting Company in mumbai india",
};

const ECommerceLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default ECommerceLayout;
