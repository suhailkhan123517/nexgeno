import Image from "next/image";
import Link from "next/link";

const ThankYou = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-[100vh]">
        <Image src="/thank.jpg" width={700} height={700} alt="Thank You" />
        <Link href="/" className="btn">
          Go To Home
        </Link>
      </div>
    </>
  );
};

export default ThankYou;
