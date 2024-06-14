import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Provider from "./context/Provider";
import Home from './components/Home/Home';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isLogin = location.pathname === '/login';

  return (
    <Provider>
      {!isLogin && <Header />}
      <Outlet />
    </Provider>
  );
}

export default App;
