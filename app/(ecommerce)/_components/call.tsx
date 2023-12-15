import Link from "next/link";
import { IoMdCall } from "react-icons/io";

const Call = () => {
  return (
    <>
      <div>
        <section className="call-buton">
          <Link className="cc-calto-action-ripple" href="tel:+91 7070070716">
            <IoMdCall className="h-10 w-10" />
          </Link>
          <span className="num"></span>
        </section>
      </div>
    </>
  );
};

export default Call;
