import React from "react";
import HeaderCard from "./components/HeaderCard";

const Home: React.FC = (props) => {
  return (
    <div className="Home min-h-screen h-[100%] bg-[#2F3640] font-Montserrat">
      <div className="wrapper min-h-screen h-[100%] max-w-[1560px] m-auto flex flex-col gap-[40px] justify-between items-center px-6 py-[80px] bg-[#2F3640]">
        <div className="text-center text-white">
          <h2 className="mb-[8px] text-[40px] font-black">UVC</h2>
          <p className="text-[24px]">Unniiiverse Componets</p>
        </div>
        <div className="flex w-[100%] gap-[24px] flex-wrap justify-between items-start text-white">
          <HeaderCard title="accordion" />
          <HeaderCard title="menu" />
        </div>
      </div>
    </div>
  );
}

export default Home;