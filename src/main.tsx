import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import SharedContextProvider from "./provider/context";
import { HashRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <SharedContextProvider>
        <Routes>
          {routes.map((route) => (
            <Fragment key={route.title}>
              <Route
                path={route.path}
                Component={route.Component}
                key={route.path}
              />
            </Fragment>
          ))}
        </Routes>
      </SharedContextProvider>
    </HashRouter>
  </React.StrictMode>
);
