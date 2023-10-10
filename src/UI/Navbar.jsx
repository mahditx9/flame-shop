import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FcHome, FcShop } from "react-icons/fc";
import { PiShoppingCart } from "react-icons/pi";
import styles from "../styles";
function Navbar() {
  return (
    <nav
      className={`flex w-full items-center justify-between border-b-2 bg-bgLight px-16 py-3 text-text drop-shadow-md`}
    >
      <Link to="/">
        <img
          src="/flame-logo.png"
          alt="logo"
          className="h-14 w-10  object-cover"
        />
      </Link>
      <ul className="hidden flex-1 items-center justify-center  text-lg  xs:flex xs:gap-x-5 lg:gap-x-32 lg:text-xl">
        <Link to="/products" className="text-text hover:text-primary">
          Home
        </Link>
        <Link to="/products" className="text-text hover:text-primary">
          Shop
        </Link>
        <Link to="/products" className="text-text hover:text-primary">
          Cart
        </Link>
      </ul>
      <ul className="sticky inset-x-0 flex w-full  items-center justify-evenly gap-x-5 bg-blue-900 py-5 text-2xl xs:hidden">
        <Link to="/products">
          <FcHome className="" />
        </Link>
        <Link to="/products">
          <FcShop />
        </Link>
        <Link to="/products">
          <PiShoppingCart />
        </Link>
      </ul>
      <div className="flex items-center gap-3 text-3xl">
        <Link to="/authentication">
          <HiOutlineUserCircle className="text-text hover:text-primary" />
        </Link>
        {/* <button>
          <RxHamburgerMenu />
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
