import Link from "next/link";
import Image from "next/image";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/logo-1.svg" alt="site logo" width={140} height={38} />
        </Link>
      </div>
      <div className="navmenu">
        <div className="nav-ele">
          <Link href="/learn">
            <a>Learn</a>
          </Link>
          <Link href="/states">
            <a>States</a>
          </Link>
          <Link href="/foragents">
            <a>For Agents</a>
          </Link>
          <Link href="/faqs">
            <a>FAQs</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </div>
        <NavbarRight></NavbarRight>
      </div>
    </nav>
  );
};

export default Navbar;
