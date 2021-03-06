import React from "react";
import Link from "next/link";

import { Newspaper } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <header className="p-3 text-white navbar-dark bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link href="/">
                <a className="nav-link px-2 text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a className="nav-link px-2 text-white">Notícias</a>
              </Link>
            </li>
          </ul>
          <div className="text-end">
            <Link href="/news">
              <a className="btn btn-secondary">
                <Newspaper className="icon-alignment" /> Últimas Notícias
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
