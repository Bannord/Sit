import "./Header.scss";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="left_side_wrapper">
        <div className="img_wrapper">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right_side_wrapper">
        <ul className="wrapper_list">
          <li className="header_item">About</li>
          <li className="header_item">Profile</li>
          <li className="header_item">Cart</li>
          <li className="header_item">Logout</li>
          <li className="header_item">Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
