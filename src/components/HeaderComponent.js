import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;