import Link from "next/link";
import {isLogOut} from "../pages/login";

const NavbarRight = () => {
    const switchAuthModeHandler = () => {
        if (isLogOut) {
            isLogOut = false;
        }
    };
  return (
    <div className="nav-ele-right">
      <Link href="/search">
        <a>Search</a>
      </Link>
      <Link href="/login">
          <a onClick = {switchAuthModeHandler}>{isLogOut ? 'Logout' : 'Login'}
          </a>
      </Link>
      <Link href="/getaquote/">
        <a>Get a Quote</a>
      </Link>
    </div>
  );
}

export default NavbarRight;