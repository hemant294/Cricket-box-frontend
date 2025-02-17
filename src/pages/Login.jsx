import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentUser } from "../Redux/Action/currentUserAction";
import Logo from "../assets/Logo/CricketBox_Logo.png";
import "./Login.css";
import cryptoJs from "crypto-js";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const userData = { username, password };
  console.log("userData", userData)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.1.46:3000/api/v1/sign_in", userData)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => console.log(err));

    let res = {
      token: "$2a$10$L9Ou1szmSNxQd/QhyWt3jeWv7a.lntrw/ByhSdNsKm6JMHz3eQQiS",
      role: "User",
      username: "Hemant",
      fullname: "Hemant Patidar",
      email: "hemant1234@gmail.com",
    };
    let user = {
      fullname: res.fullname,
      username: res.username,
      email: res.email,
    };
    let encryptedRole = cryptoJs.AES.encrypt(
      res.role,
      "ewewewewaewasdsds"
    ).toString();
    localStorage.setItem("auth_token", res.token);
    localStorage.setItem("user_role", encryptedRole);
    localStorage.setItem("user_info", JSON.stringify(user));
    dispatch({ type: "SET_ROLE", payload: res.role });
    dispatch(currentUser({ ...user, isLogin: true }));
    navigate("/");
  };

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center ">
        <div className="col-md-4 card align-middle px-4 py-5">
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <div className="">
                <img src={Logo} alt="" className="logo rounded-0" />
              </div>
              <div className="mt-3">
                <span className="heading5">CricketBox</span>
              </div>
            </div>
            <div>
              <div className="form-floating mb-1 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={username}
                  onChange={handleUsername}
                  autoComplete="off"
                />
                <label htmlFor="floatingInput" className="label-size">
                  Username <span className="star">*</span>
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={password}
                  onChange={handlePassword}
                  autoComplete="off"
                />
                <label htmlFor="floatingInput" className="label-size">
                  Password <span className="star">*</span>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="mb-3 ">
                <input
                  type="checkbox"
                  className="form-check-input rounded-0 "
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label label-size ms-1"
                  htmlFor="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
              <div className="">
                <a className="forget-bt forget-btn me-0">Forget Password</a>
              </div>
            </div>
            <button
              type="submit"
              className="btn-primary logn-btn rounded-1 mt-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
