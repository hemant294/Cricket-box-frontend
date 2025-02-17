import React from "react";
import Menu from "./Menu";
import UserInfo from "./UserInfo";
import Logo from "../../assets/Logo/CricketBox_Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-bg-color header-style navbar navbar-expand-lg navbar-light bg-light default-box-shadow">
      <div className="container-fluid ThemeGrid_Container ">
        <div className="">
          <img src={Logo} alt="" className="logoset" />
        </div>
        <div className="logo-text  me-2" href="#">
          <Link to="/" className="logo-style header-item">
            CricketBox
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Menu />
          <UserInfo />
        </div>
      </div>
    </nav>
  );
};

export default Header;
