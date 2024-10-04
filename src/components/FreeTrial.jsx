import React, { useState } from "react";
import { Images } from "../images/images";

const FreeTrial = () => {
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordPattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.firstname === "" || inputData.lastname === "") {
      return alert("Please enter firstname and lastname ");
    }

    if (!emailPattern.test(inputData.email)) {
      return alert("Please enter a valid email address");
    }

    if (!passwordPattern.test(inputData.password)) {
      return alert(
        "Password must be at least 8 characters long and include at least one special character"
      );
    }
    if (inputData.password.length < 8) {
      return alert("Password must be at least 8 characters long");
    }
    console.log("inputData", inputData);
  };
  return (
    <div
      className="m-b-1rem bg-white w-100   p-1rem black bg-white"
      id="free-trial-section"
    >
      <div className="flex-center flex-colum  p-top-bottom-1rem">
        <h1 className="fw-500 flex-wrap ">Ready to take a free trial?</h1>
        <p className="fn-5rem  mt mb gray fw-400 text-center w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="  flex-colum w-100 flex-center">
        <form
          className="flex-center flex-colum boder-gray p  m-0 boder-gray"
          onSubmit={handleSubmit}
        >
          <div>
            <h1 className="fw-600 fn-5rem p-topBottom-2rem">
              Sign up for a free account
            </h1>
            <input
              name="firstname"
              value={inputData.firstname}
              onChange={handleInputChange}
              placeholder="First name"
              type="text"
              className="w-237 mr mt  p-allside-75rem boder-gray"
            />
            <input
              name="lastname"
              value={inputData.lastname}
              onChange={handleInputChange}
              placeholder="Last name"
              type="text"
              className="w-237   p-allside-75rem boder-gray"
            />
          </div>
          <div>
            <input
              name="email"
              value={inputData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              type="text"
              className="w-237 mr mt   p-allside-75rem boder-gray"
            />

            <input
              name="phoneNumber"
              value={inputData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              type="text"
              className="w-237  p-allside-75rem boder-gray"
            />
          </div>
          <input
            name="password"
            value={inputData.password}
            onChange={handleInputChange}
            placeholder="Create password"
            type="text"
            className=" w-474 boder-gray mt p-allside-75rem boder-gray "
          />
          <div className="w-474 m-topBottom">
            <button
              type="submit"
              className={`pointer  flex-center border-radius-6 p mt  pointer w-130px border-blue blue bg-blue white  `}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeTrial;
