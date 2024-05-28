import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Provider from "./context/Provider";
import Home from "./components/Home/Home";

function App() {

  return (
    <Provider>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default App
