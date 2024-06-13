import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Provider from "./context/Provider";

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isLogin = location.pathname === '/login';

  return (
    <Provider>
      {!isHome && !isLogin && <Header />}
      <Outlet />
    </Provider>
  );
}

export default App;
