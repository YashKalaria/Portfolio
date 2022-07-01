import React from "react";
import UserProfile from "../assets/user_profile.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 cursor-default select-none"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="justify-center">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-7 gap-8 p-4">
            <div className="col-span-5">
              <span className="">
                I'm a <span className="font-medium text-pink-600">21 </span>{" "}
                year-old software developer based in{" "}
                <span className="font-medium text-pink-600">Mumbai</span>
                . <br />
                <br />
                My interests revolve around building web technology including
                and not limiting to{" "}
                <span className="font-medium text-pink-600">web3 </span>.<br />
                <br />
                Currently, I’m focused on building responsive full-stack web
                applications.
                <br /> <br />
                Here are a few technologies I’ve been working with recently:{" "}
                <ul className="grid grid-cols-2 font-medium pt-3">
                  <li className="pl-0 select-none cursor-default">
                    <span className="text-pink-600">▹</span> JavaScript (ES6+)
                  </li>
                  <li className="pl-0 select-none cursor-default">
                    <span className="text-pink-600">▹</span> TypeScript
                  </li>
                  <li className="pl-0 select-none cursor-default">
                    <span className="text-pink-600">▹</span> React.js
                  </li>
                  <li className="pl-0 select-none cursor-default">
                    <span className="text-pink-600">▹</span> Tailwind CSS
                  </li>
                  <li className="pl-0 select-none cursor-default">
                    <span className="text-pink-600">▹</span> Next.js
                  </li>
                  <li className="pl-0 select-none cursor-default">
                    <span className="text-pink-600">▹</span> Ethers.js
                  </li>
                </ul>
              </span>
            </div>
            <div className="col-span-2">
              <img
                src={UserProfile}
                alt="icon"
                className="rounded-full w-9/12 h-9/12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
