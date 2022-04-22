import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import { LoginPage } from "./loginPage";
export const UserName = () => {
  const [login, setLogin] = useState(false);
  const [clickLogin, setClickLogin] = useState({
    UserName: "",
  });
  const [itemUser, setItemUser] = useState(
    <h5 className="logon">ورود-عضویت </h5>
  );
  const AddUser = () => {
    setLogin(true);
  };
  const DeleteUser = () => {
    setLogin(false);
  };
  const CreateAcc = () => {
    setLogin(false);
  };
  const ClickUser = () => {
    setItemUser(clickLogin.UserName);
  };

  const LoginChange = (event) => {
    const { name, value } = event.target;
    setClickLogin((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  return (
    <div>
      <div className="user-icon">
        <a onClick={AddUser}>
          <PersonIcon style={{ fontSize: 50 }} />
          {itemUser}
        </a>
      </div>
      {login ? (
        <LoginPage
          onDelete={DeleteUser}
          CreateAcc={CreateAcc}
          LoginChange={LoginChange}
          clickLogin={clickLogin}
          ClickUser={ClickUser}
        />
      ) : (
        ""
      )}
    </div>
  );
};
