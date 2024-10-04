import React from "react";
import { Images } from "../images/images";

const PhotosStylish = () => {
  const Snapdata = [
    {
      heading: "Sed ut perspiciatis",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      img: Images.img1,
    },
    {
      heading: "Lorem ipsum dolor",
      content:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: Images.img2,
    },
    {
      heading: "Nemo enim ipsam",
      content:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.",
      img: Images.img3,
    },
  ];
  return (
    <div className="m-b-1rem bg-white w-100   p-1rem black bg-white">
      <div className="flex-center flex-colum  p-top-bottom-1rem">
        <h1 className="fw-500 flex-wrap ">Make your photos more stylish</h1>
        <p className="fn-5rem  mt mb gray fw-400 text-center w-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="flex-between ">
        <div className="flex w-100 flex-between flex-center flex-wrap">
          {Snapdata.map((item, index) => (
            <div className="   border  " key={index}>
              <img src={item.img} alt="" className="img-h  img-w " />
              <div className="flex-colum">
                <h3 className="fw-600 fn-5rem mb p-1rem img-w text-center ">
                  {item.heading}
                </h3>
                <p className="fn-1rem mt mb gray fw-400 p-bottom-right-left  img-w text-center ">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotosStylish;
