import { Route, Routes } from "react-router-dom";
import HomePageSP4 from "../components/Sprint-4/S4-02-Introdução-ao-React-Router-Dom";
import ContactPageSP4 from "../components/Sprint-4/S4-02-Introdução-ao-React-Router-Dom/index2";
import AboutPageSP4 from "../components/Sprint-4/S4-02-Introdução-ao-React-Router-Dom/index3";

const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePageSP4 />}
      />
      <Route
        path="/contato"
        element={<ContactPageSP4 />}
      />
      <Route
        path="/sobre"
        element={<AboutPageSP4 />}
      />
    </Routes>
  );
};

export default RoutesMain;
