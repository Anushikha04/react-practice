import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const HeaderComponent = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)
  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img className="header-logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="header-nav-items">
        <ul>
          <li>{onlineStatus}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>{loggedInUser}</li>
          <button
            onClick={() => {
              setLoginBtnName(loginBtnName === "Login" ? "Logout" : "Login");
            }}
          >
            {loginBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
