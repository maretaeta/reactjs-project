/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
