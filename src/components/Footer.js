import React from "react";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footerdet">
        <div className="footerintro">
          <h1>Want to work together?</h1>
          <p>
            Feel free to reach out for collaborations or just a friendly hello
            <br />
            Theabolfazl@gmail.com
          </p>
        </div>

        <div className="clist">
          <button className="cbtn">Contact Me</button>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="bg">
          <div className="bg1"></div>
          <div className="bg2"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
