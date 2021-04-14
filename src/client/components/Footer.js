import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col-1-4">
          <div className="footer-brand">
            <a href="#">
              <img src="public/logo.png" alt="" />
            </a>
            <p>
              We offer best quality food delivery system right behind your door
            </p>
          </div>
        </div>
        <div className="col-1-4">
          {" "}
          <p></p>
        </div>
        <div className="col-1-4">
          {" "}
          <p></p>
        </div>
        <div className="col-1-4">
          {" "}
          <p>Developed by Nashmil for Hack Your Future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
