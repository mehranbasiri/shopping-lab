import React from "react";
import { Link } from "react-router-dom";
export const CreateAccount = () => {
  return (
    <div>
      <h1>Create Account</h1>
      <form className="create-acc-form">
        <ul>
          <li>
            <label for="FirstName">Enter your First Name</label>
            <input type="text" placeholder="Name" name="FirstName" />
          </li>
          <li>
            <label for="LastName">Enter your Last Name</label>
            <input type="text" placeholder="Name" name="LastName" />
          </li>
          <li>
            <label for="Email">Enter your Email</label>
            <input type="email" placeholder="Name" name="Email" />
          </li>
          <li>
            <label for="PhoneNumber">Enter your PhoneNumber</label>
            <input type="text" placeholder="Name" name="PhoneNumber" />
          </li>
          <li>
            <label>Your Address</label>
            <textarea />
          </li>
        </ul>
      </form>
    </div>
  );
};
