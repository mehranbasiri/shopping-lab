import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
export const LoginPage = ({
  onDelete,
  CreateAcc,
  LoginChange,
  clickLogin,
  ClickUser,
}) => {
  return (
    <div className="login-page">
      <div className="login-form">
        <label> Enter your UserName</label>
        <input
          onChange={LoginChange}
          type="text"
          placeholder="userName"
          name="UserName"
          value={clickLogin.UserName}
        />
        <label>Enter your password</label>
        <input type="password" placeholder="password" />

        <button
          onClick={ClickUser}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Login
        </button>
        <CloseIcon
          className="close-icon"
          style={{ fontSize: 40 }}
          onClick={onDelete}
        />
      </div>
      <hr />
      <div>
        <a className="login-footer" href="#">
          Forget Password
        </a>
        <Link to="/createAccount">
          <span onClick={CreateAcc} className="login-footer" href="#">
            Create Account
          </span>
        </Link>
      </div>
    </div>
  );
};
