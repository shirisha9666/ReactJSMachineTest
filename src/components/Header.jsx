import React, { useState } from "react";
import { Images } from "../images/images";
// import logo from "../../public/images/loginLogo.png"

const Header = () => {
  const [login, setLogin] = useState("Login");

  const handleScrollToFreeTrial = () => {
    setTimeout(() => {
      const section = document.getElementById("free-trial-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        console.log("Scrolling to Free Trial section");
      } else {
        console.log("Section not found");
      }
    }, 500);
  };
  // console.log("login", login);

  return (
    <div className="flex-between w-100  p-1rem bg-white">
      <div className="p-50rem">
        <img src={Images.loginLogo} alt="loginlogo" className="h-10" />
      </div>
      <div className="fw-500  pointer fn-1rem black flex-center">
        <span className="mr ml pointer">Features</span>
        <span className="mr ml pointer">Pricing</span>
        <span className="mr ml pointer">Community</span>
        <span className="mr ml pointer">Support</span>
      </div>
      <div className="fw-500 f-1rem flex fn-1rem">
        <span
          className={`pointer mr flex-center  border-radius-6 pointer p w-100px  ${
            login === "Login" ? "bg-blue white" : "bg-white border-blue blue"
          }`}
          onClick={() => setLogin("Login")}
        >
          Login
        </span>
        <span
          className={`pointer ml flex-center border-radius-6 p  pointer w-100px  ${
            login === "Register" ? "bg-blue white" : "bg-white border-blue blue"
          }`}
          onClick={() => {
            setLogin("Register");
            handleScrollToFreeTrial(); // Trigger the scroll here
          }}
        >
          Register
        </span>
      </div>
    </div>
  );
};

export default Header;
