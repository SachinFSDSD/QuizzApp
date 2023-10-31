import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/" className="title">
        Intutive Quiz hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
