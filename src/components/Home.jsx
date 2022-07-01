import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] cursor-default select-none"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yash Kalaria
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I build things for the web.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer based in Mumbai. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a
              href="https://drive.google.com/file/d/10TiJ9IsP5B8zO-nVvKKpaxGciV5Q9-CE/view"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
