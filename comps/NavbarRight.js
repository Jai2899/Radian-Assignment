import Link from "next/link";

const NavbarRight = () => {
  return (
    <div className="nav-ele-right">
      <Link href="/search">
        <a>Search</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/getaquote/">
        <a>Get a Quote</a>
      </Link>
    </div>
  );
}

export default NavbarRight;