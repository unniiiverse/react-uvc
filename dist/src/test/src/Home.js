"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeaderCard_1 = __importDefault(require("./components/HeaderCard"));
const Home = (props) => {
    return (<div className="Home min-h-screen h-[100%] bg-[#2F3640] font-Montserrat">
      <div className="wrapper min-h-screen h-[100%] max-w-[1560px] m-auto flex flex-col gap-[40px] justify-between items-center px-6 py-[80px] bg-[#2F3640]">
        <div className="text-center text-white">
          <h2 className="mb-[8px] text-[40px] font-black">UVC</h2>
          <p className="text-[24px]">Unniiiverse Componets</p>
        </div>
        <div className="flex w-[100%] gap-[24px] flex-wrap justify-between items-start text-white">
          <HeaderCard_1.default title="accordion"/>
          <HeaderCard_1.default title="menu"/>
        </div>
      </div>
    </div>);
};
exports.default = Home;
