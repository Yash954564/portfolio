import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkdIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>
          <a className="email" href="mailto:yashgaikwad954564@gmail.com">
            yashgaikwad954564@gmail.com
          </a>
        </span>
        <div className="f-icons">
          <a
            href="https://github.com/Yash954564"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-gaikwad-758178206/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkdIn color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.instagram.com/y_a_s_h__g_a_i_k_w_a_d/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
