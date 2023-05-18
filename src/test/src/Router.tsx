import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Accordion from "./Accordion";
import BurgerC from "./Burger";
import Home from "./Home";
import PopupC from "./Popup";
import TabsC from "./Tabs";
import Page from "./Page";

export const paths = {
  home: '/',
  burger: '/burger',
  accordion: '/accordion',
  accordionTest: '/accordionTest',
  tabs: '/tabs',
  popup: '/popup',
  page: '/page'
}

export const routes = [
  { path: paths.home, Component: Home },
  { path: paths.burger, Component: BurgerC },
  { path: paths.accordion, Component: Accordion },
  { path: paths.tabs, Component: TabsC },
  { path: paths.popup, Component: PopupC },
  { path: paths.page, Component: Page },
]

const Router: React.FC = (props) => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route path={path} Component={Component} key={`?${path}&${Component}`} />
      })}
      <Route path="/*" element={<Navigate to={paths.home} />} />
    </Routes>
  );
}

export default Router;