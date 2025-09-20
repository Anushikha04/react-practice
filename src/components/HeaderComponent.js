import { LOGO_URL } from "../utils/constants";
import {useState} from 'react'

const HeaderComponent = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img
          className="header-logo"
          alt="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="header-nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button onClick={() => {
            setLoginBtnName(loginBtnName === "Login" ? 'Logout' : 'Login');
          }}>{loginBtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;