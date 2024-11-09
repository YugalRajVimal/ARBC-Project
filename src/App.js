import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BuyerLayout from "./pages/BuyerLayout";
import BuyerLandingPage from "./pages/BuyerLandingPage";
import SellerLayout from "./pages/SellerLayout";
import SellerLandingPage from "./pages/SellerLandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuyerLayout />}>
          <Route index element={<BuyerLandingPage />} />
        </Route>
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<SellerLandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   App
    // </div>
  );
}

export default App;
