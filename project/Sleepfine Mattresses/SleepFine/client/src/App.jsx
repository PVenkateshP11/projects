import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./pages/Products/Product.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Medical from "./pages/Medical/Medical.jsx";
import MedicalRebonded from "./pages/Medical/RebondedMattresses.jsx";
import RebondedLatex from "./pages/Medical/RebondedLatex.jsx";
import RebondedMemory from "./pages/Medical/RebondedMemory.jsx";
import RebondedSuperSoft from "./pages/Medical/RebondedSuperSoft.jsx";
import Bonnell from "./pages/Bonnell/Bonnell.jsx";
import Pocketed from "./pages/Pocketed/Pocketed.jsx";
import Pillow from "./pages/Pillows/Pillow.jsx";
import Comforter from "./pages/Comforters/Comforter.jsx";
import HeadBoard from "./pages/HeadBoardsAndBases/HeadBoard.jsx";
import GoToTop from "./components/GoToTop/GoToTop.jsx";
import Whatsaap from "./components/Whatsapp/Whatsapp.jsx";
import ProductTypes from "./pages/ProductTypes/ProductTypes.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import NewsandUpdate from "./components/NewsandUpdates/NewsUpdate.jsx";
import Store from "./components/OurStore/OurStore.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import { useLoading } from "./components/context/LoadingContext.jsx";

function App() {
  const { loading } = useLoading();

  return (
    <>
      <>
        <Router>
          {loading && <Spinner />}
          <Navbar />

          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/products" Component={Products} />
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/contactus" Component={ContactUs} />
            <Route path="/gallery" Component={Gallery} />
            <Route path="/products/medical" Component={Medical} />
            <Route path="/product-types" element={<ProductTypes />} />
            <Route path="/updates" element={<NewsandUpdate />} />
            <Route path="/ourstores" element={<Store />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route
              path="/product-details/:productType"
              element={<ProductDetails />}
            />
            <Route
              path="/products/medical/medicalrebonded"
              Component={MedicalRebonded}
            />
            <Route
              path="/products/medical/medicalsupersoft"
              Component={RebondedSuperSoft}
            />
            <Route
              path="/products/medical/medicallatex"
              Component={RebondedLatex}
            />
            <Route
              path="/products/medical/medicalmemory"
              Component={RebondedMemory}
            />
            <Route path="/products/bonnell" Component={Bonnell} />
            <Route path="/products/pocketed" Component={Pocketed} />
            <Route path="/products/pillow" Component={Pillow} />
            <Route path="/products/comforters" Component={Comforter} />
            <Route path="/products/headboards" Component={HeadBoard} />
          </Routes>
        </Router>

        <GoToTop />
        <Whatsaap />
      </>
    </>
  );
}

export default App;
