import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import IRoute from "./interfaces/IRoute";

export const paths = {
  home: '/'
}

export const defaultRoutes: IRoute[] = [
  { path: paths.home, Component: App }
]

const Router: React.FC = (props) => {
  return (
    <Routes>
      {defaultRoutes.map(({ path, Component }) => {
        return <Route path={path} Component={Component} key={`?${path}&${Component}`} />
      })}
      <Route path="/*" element={<Navigate to={paths.home} />} />
    </Routes>
  );
}

export default Router;