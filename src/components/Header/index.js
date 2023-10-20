import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="bg-blue-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Innoloft</span>
            <img className="h-8 w-auto" src={Logo} alt="Innoloft Logo" />
          </Link>
        </div>

        <div className="flex gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Main Page
          </Link>
          <Link
            to="/product/6781"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Product
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
