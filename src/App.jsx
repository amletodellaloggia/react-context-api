import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from "./layouts/DefaultLayout";
import DettaglioProdotto from "./pages/DettaglioProdotto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/chisiamo" element={<ChiSiamo />}></Route>
          <Route index path="/prodotti" element={<Prodotti />}/>
          <Route path="/dettaglio-prodotto/:id" element={<DettaglioProdotto />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
