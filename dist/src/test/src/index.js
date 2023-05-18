"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const Router_1 = __importDefault(require("./Router"));
require("./styles/index.scss");
require("./styles/tailwind.css");
client_1.default.createRoot(document.getElementById('root')).render(<react_router_dom_1.BrowserRouter>
    <Router_1.default />
  </react_router_dom_1.BrowserRouter>);
