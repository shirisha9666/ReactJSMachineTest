import React from "react";
import { Images } from "../images/images";

const SocialMedia = () => {
  const Snapdata = [
    {
      heading: "Sed ut perspiciatis",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    },
    {
      heading: "Lorem ipsum dolor",
      content:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Nemo enim ipsam",
      content:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
    },
  ];
  return (
    <div className="m-b-1rem bg-white w-100   p-1rem black bg-white flex-wrap">
      <div className="flex-center flex-colum flex-wrap  ">
        <h1 className="fw-500 flex-wrap ">
          Have you ever posted any photo on social media?
        </h1>
        <p className="fn-5rem  mt mb gray fw-400 text-center w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="flex-between p-t-1rem  w-100">
        <div className="w-45 flex-center flex-colum ">
          {Snapdata.map((item, index) => (
            <div className="p-t-1rem" key={index}>
              <h3 className="fw-600 fn-5rem mb ">{item.heading}</h3>
              <p className="fn-1rem mt mb gray fw-400">{item.content}</p>
            </div>
          ))}
        </div>
        <div>
          <img src={Images.building} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
