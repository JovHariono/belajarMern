import { HashRouter, Routes, Route } from "react-router-dom";
import Sales from "./pages/Sales";
import SalesResult from "./pages/SalesResult";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={""} element={<Sales />} />
          <Route path={"/sales-result"} element={<SalesResult />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
