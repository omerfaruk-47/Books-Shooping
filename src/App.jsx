import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    //Tarayıcıdaki url göre sayfalama yapmaya yarar.
    <BrowserRouter>
      <div className="page">
        <Header />

        {/*
        //!Routes
       -Tarayıcıdaki url' i izler değiştiğinde yol tanımladığımız routerlardan birinin
        path değeri ile  eşleşirse ekrana o router 'ın elementini basar.
       - Bütün sabit kalan bileşenler routes 'in dışında olur.
      */}
        <Routes>
          {/*
         //!Route
         -Projedeki her sayfa için tanımlanır
         -Route yol ve yol için ekrana basılacak bileşini verir
        */}
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />

          {/*Dinamik ruout*/}
          <Route path="/ürün/:id" element={<ProductDetail />} />

          {/*nested routes >iç içe yollar */}
          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          {/* Tanımsız bir route yönlenirse */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
