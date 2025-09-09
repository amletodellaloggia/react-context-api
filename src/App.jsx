import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from "./layouts/DefaultLayout";
import DettaglioProdotto from "./pages/DettaglioProdotto";
import { BudgetProvider } from "./context/BudgetContext";

function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route index path="/prodotti" element={<Prodotti />} />
            <Route
              path="/dettaglio-prodotto/:id"
              element={<DettaglioProdotto />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}

export default App;
