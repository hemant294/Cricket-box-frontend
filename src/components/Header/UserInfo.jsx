import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCurrentUser } from "../../Redux/Action/currentUserAction";
import "./UserInfo.css";

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    dispatch(removeCurrentUser());
    dispatch({
      type: "REMOVE_ROLE",
      payload: {},
    });
    window.location.reload();
    navigate("/");
  };

  return (
    <div className="d-flex col-4 justify-content-end">
      {currentUser.isLogin && (
        <div className="text-lg float-end">
          <IoIosNotifications className="fs-3 text-primary" />
        </div>
      )}
      <div>
        {currentUser.isLogin ? (  
          <div className="ms-4 list-unstyled header-item">
            <FaUserCircle className="fs-3 text-secondary me-2" />
            {currentUser.fullname}
            <IoLogOutOutline
              className="ms-2 fs-5 text-danger logout-icon"
              onClick={handleLogout}
            />
          </div>
        ) : (
          <Link to="/login" className="text-decoration-none text-dark">
            <li className="ms-4 list-unstyled header-item">
              <IoLogInOutline className="me-2 fs-5 text-danger" />
              Login
            </li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
