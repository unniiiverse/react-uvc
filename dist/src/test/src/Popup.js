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
const popup_1 = __importDefault(require("./API/popup"));
require("./API/styles/popup.scss");
const Popup = (props) => {
    const instance = new popup_1.default({
        id: 'uvc-popup-dialog-0'
    });
    const instance1 = new popup_1.default({
        id: 'uvc-popup-dialog-1'
    });
    (0, react_1.useEffect)(() => {
        instance.init();
        instance1.init();
    }, []);
    return (<>
      <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-dialog-0" onClick={e => instance.open()}>
        TRIGGER
      </button>
      <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-dialog-1" onClick={e => instance1.open()}>
        TRIGGER
      </button>

      <div className="uvc-popup-close" id="uvc-popup-layer" onClick={e => instance.close(e)}>
        <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-dialog-0">
          DIALOG #0

          <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-dialog-0" onClick={e => instance.close(e)}>
            TRIGGER
          </button>
        </div>

        <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-dialog-1">
          DIALOG #1

          <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-dialog-1" onClick={e => instance1.close(e)}>
            TRIGGER
          </button>
        </div>
      </div>
    </>);
};
exports.default = Popup;
