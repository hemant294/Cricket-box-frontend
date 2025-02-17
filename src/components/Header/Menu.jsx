import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { useSelector } from "react-redux";

const Menu = () => {
  const currentUserRole = useSelector((state) => state.currentUserRole);
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink to="/live" className="nav-link header-item ">
          Live
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/results" className="nav-link  header-item">
          Results
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/upcoming" className="nav-link  header-item">
          Upcoming
        </NavLink>
      </li>
      {currentUserRole.isSuperAdmin && (
        <>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link  header-item">
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link  header-item">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reports" className="nav-link  header-item">
              Reports
            </NavLink>
          </li>
        </>
      )}

      {currentUserRole.isAdmin && (
        <>
          <li className="nav-item">
            <NavLink to="/yourbets" className="nav-link  header-item">
              YourBets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link  header-item">
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link  header-item">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reports" className="nav-link  header-item">
              Reports
            </NavLink>
          </li>
        </>
      )}

      {currentUserRole.isNormalUser && (
        <>
          <li className="nav-item">
            <NavLink to="/yourbets" className="nav-link  header-item">
              YourBets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link  header-item">
              Settings
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default Menu;




