"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const accordion_1 = __importDefault(require("./API/accordion"));
require("./API/styles/accordion.scss");
const Accordion = (props) => {
    const AccordionInstance1 = new accordion_1.default({ parent: '.uvc-accordion-ex1' });
    const AccordionInstance2 = new accordion_1.default({ parent: '.uvc-accordion-ex2', singleOpen: true });
    const AccordionInstance3 = new accordion_1.default({ parent: '.uvc-accordion-ex3', initialOpen: 'uvc-accordion-initiallyOpened' });
    (0, react_1.useEffect)(() => {
        AccordionInstance1.init();
        AccordionInstance2.init();
        AccordionInstance3.init();
    }, []);
    return (<div className="Accordion">
      <h2 className="font-bold text-[24px]">Example #1. Single trigger opens single content.</h2>
      <div className="uvc-accordion uvc-accordion-ex1">
        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance1.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance1.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>

      <br />
      <hr className="bg-[#000] h-[1.5px]"/>
      <br />

      <h2 className="font-bold text-[24px]">Example #2. Single trigger opens single content. One opened accordion per time.</h2>
      <div className="uvc-accordion uvc-accordion-ex2">
        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance2.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance2.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>

      <br />
      <hr className="bg-[#000] h-[1.5px]"/>
      <br />

      <h2 className="font-bold text-[24px]">Example #3. Single trigger opens single content. Accordion with one class will opened initially</h2>
      <div className="uvc-accordion uvc-accordion-ex3">
        <button className="uvc-accordion-trigger uvc-accordion-initiallyOpened" onClick={e => AccordionInstance3.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance3.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>

      <br />
      <hr className="bg-[#000] h-[1.5px]"/>
      <br />
    </div>);
};
exports.default = Accordion;
