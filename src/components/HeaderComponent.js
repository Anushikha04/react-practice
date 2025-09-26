import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  return (
    <div className="header-container flex justify-between shadow-lg items-center bg-green-50">
      <div className="header-logo-container">
        <img className="header-logo w-40" alt="logo" src={LOGO_URL} />
      </div>
      <div className="header-nav-items">
        <ul className="flex">
          <li className="px-4">{onlineStatus}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className="px-4">Cart ({cartItems} items)</li> */}
          <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <li className="px-4">{loggedInUser}</li>
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
