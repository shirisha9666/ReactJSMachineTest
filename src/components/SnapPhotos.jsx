import React from "react";

const SnapPhotos = () => {
  const Snapdata = [
    {
      heading: "Sed ut perspiciatis",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      btn: "Learn more",
    },
    {
      heading: "Lorem ipsum dolor",
      content:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      btn: "Learn more",
    },
    {
      heading: "Nemo enim ipsam",
      content:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      btn: "Learn more",
    },

    {
      heading: "Tempor incididunt",
      content:
        "Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
      btn: "Learn more",
    },
  ];
  return (
    <div className="w-100  p-1rem black bg-white" >
      <h1 className="fw-500 flex-wrap  w-35">
        Snap photos and share like never before
      </h1>

      <div className=" w-100 flex-between p-t-2rem flex-wrap">
        {Snapdata.map((item, index) => (
          <div className="w-40" key={index}>
            <h3 className="fw-600 fn-5rem ">{item.heading}</h3>
            <p className="fn-1rem mt mb gray fw-400">{item.content}</p>
            <span
              className={`pointer  flex-center border-radius-6 p m-b-1rem  pointer w-130px border-blue blue bg-blue white  `}
            >
              {item.btn}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnapPhotos;
