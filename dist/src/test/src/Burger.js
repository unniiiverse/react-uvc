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
const burger_1 = __importDefault(require("./API/burger"));
require("./API/styles/burger.scss");
const Burger = (props) => {
    const instance = new burger_1.default({
        triggerQuery: '.uvc-burger-trigger-MYOWNCLASS',
        menuId: 'uvc-burger-trigger-MYOWNID'
    });
    (0, react_1.useEffect)(() => {
        instance.init();
    }, []);
    return (<>
      <button className="uvc-burger-trigger uvc-burger-trigger-MYOWNCLASS" onClick={e => instance.toggle(e)}>
        TRIGGER
      </button>

      <div className="uvc-burger-menu bg-red-400" id="uvc-burger-trigger-MYOWNID">
        <button className="uvc-burger-trigger uvc-burger-trigger-MYOWNCLASS" onClick={e => instance.toggle(e)}>
          TRIGGER
        </button>
      </div>
    </>);
};
exports.default = Burger;
