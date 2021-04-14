import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="col-1-2">
          <h1 className="logo">Meal Sharing</h1>
        </div>
        <div className="col-1-2">
          <ul className="main-menu">
            <li>
              <a href="/meals/">Meals</a>
            </li>
            <li>
              <a href="/add/">Add Meal</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
