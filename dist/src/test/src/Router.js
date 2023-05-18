"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.paths = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Accordion_1 = __importDefault(require("./Accordion"));
const Burger_1 = __importDefault(require("./Burger"));
const Home_1 = __importDefault(require("./Home"));
const Popup_1 = __importDefault(require("./Popup"));
const Tabs_1 = __importDefault(require("./Tabs"));
exports.paths = {
    home: '/',
    burger: '/burger',
    accordion: '/accordion',
    accordionTest: '/accordionTest',
    tabs: '/tabs',
    popup: '/popup',
};
exports.routes = [
    { path: exports.paths.home, Component: Home_1.default },
    { path: exports.paths.burger, Component: Burger_1.default },
    { path: exports.paths.accordion, Component: Accordion_1.default },
    { path: exports.paths.tabs, Component: Tabs_1.default },
    { path: exports.paths.popup, Component: Popup_1.default }
];
const Router = (props) => {
    return (<react_router_dom_1.Routes>
      {exports.routes.map(({ path, Component }) => {
            return <react_router_dom_1.Route path={path} Component={Component} key={`?${path}&${Component}`}/>;
        })}
      <react_router_dom_1.Route path="/*" element={<react_router_dom_1.Navigate to={exports.paths.home}/>}/>
    </react_router_dom_1.Routes>);
};
exports.default = Router;
