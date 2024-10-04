import React, { useState } from "react";
import { Images } from "../images/images";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="bg-white w-100 p-1rem black bg-gray w-100">
      <div className="flex-between p-topBottom-2rem">
        <div className="p-50rem w-50">
          <img src={Images.footerLogo} alt="loginlogo" className="h-10" />
        </div>
        <div className="flex flex-wrap flex-between w-50">
          <div className="flex flex-colum mr  ">
            <p className="white fw-600 mb pb">Mobile app</p>
            <span className="white-gray mt fw-400">Features</span>
            <span className="white-gray mt fw-400">Video</span>
            <span className="white-gray mt fw-400">record</span>
          </div>
          <div className="flex flex-colum mr ml">
            <p className="white fw-600 mb pb">Community</p>
            <span className="white-gray mt fw-400">Featured artists </span>
            <span className="white-gray mt fw-400">The Portal</span>
            <span className="white-gray mt fw-400">Live events</span>
          </div>
          <div className="flex flex-colum mr ml">
            <p className="white fw-600 mb pb">Company</p>

            <span className="white-gray mt fw-400 pointer">About us </span>
            <span className="white-gray mt fw-400 pointer">Contact</span>
            <span className="white-gray mt fw-400 pointer">History</span>
          </div>

          <div className="fw-500 f-1rem ">
            <span
              className={`pointer  flex-center mb pb border-radius-6 pointer p w-100px  ${
                login === "Login"
                  ? "bg-blue white"
                  : "bg-white border-blue blue"
              }`}
              onClick={() => setLogin("Login")}
            >
              Login
            </span>
            <span
              className={`pointer  flex-center border-radius-6 p  pointer w-100px  ${
                login === "Register"
                  ? "bg-blue white"
                  : "bg-white border-blue blue"
              }`}
              onClick={() => setLogin("Register")}
            >
              Register
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex-between p-topBottom-2rem">
        <span className="white-gray mt fw-400 font-13px ">
          © Photo, Inc. 2019. We love our users!
        </span>
        <div className="white flex">
          <p className="white-gray mt fw-500 mr font-13px pr ">Follow us:</p>
          <FaFacebook className="icon-styles pointer mr  " />
          <FaTwitter className="icon-styles pointer mr " />
          <FaLinkedinIn className="icon-styles pointer mr " />
          <IoLogoInstagram className="icon-styles pointer " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
