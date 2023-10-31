import { Route, Routes } from "react-router-dom";
import WareHouse from "./components/Ware-House/WareHouse";
import Detail from "./components/Detail/Detail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<WareHouse />} />
      <Route path="/Details-page-12345" element={<Detail />} />
      <Route />
    </Routes>
  );
}

export default App;
