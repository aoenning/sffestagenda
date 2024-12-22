import React from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import GlobalStyled from "./Styles/GlobalStyled";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Rotas from "./routes";
// import Menu from "./components/menu/SidebarMenu";
// import Sidebar from "./Components/Sidebar";
import * as s from "./stylesApp";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <s.Container>
        {/* {auth ? ( */}
        <>
          {/* <Sidebar /> */}
          <s.Area>
            {/* <Header /> */}
            <Rotas />
          </s.Area>
        </>
        {/* ) : ( */}
        <>{/* <RoutesAuth /> */}</>
        {/* )} */}
      </s.Container>
    </Router>
  );
}

export default App;
