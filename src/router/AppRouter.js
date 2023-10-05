// import from NPM PACKAGES
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PAGES
import { Home } from "../pages/orangeDefault/Home/Home";

// import default components
import { Header } from "./../components/orangeDefault/Header/Header";
import  {Footer} from "../components/orangeDefault/Footer/Footer";
// import specific components





import { LoginBank } from "./../pages/orangePay/Login/Login";
import { SignUp } from "./../pages/orangeClub/SignUp/SignUp";

import { Posts } from "./../pages/orangeClub/Posts/Posts";


import { LabeAdmin } from "./../pages/orangeAdmin/LabeAdmin";

import { ProductDetails } from "./../pages/orangeShop/ProductDetails/ProductDetails";
import { Products } from "../pages/orangeShop/Products/Products";
import { CashBalance } from "../components/orangePay/CashBalance/CashBalance";
import Login from "../pages/orangeAuth/Login";

export function AppRouter() {
  return (<>
    <BrowserRouter>
      <Header />
      <div className="pAll">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/posts" element={<Posts />} />

          <Route path="/frota" element={<Products />} />
          <Route path="/bank" element={<LoginBank />} />
          <Route path="/club" element={<CashBalance />} />
          <Route path="/products/:idDetails" element={<ProductDetails />} />
          <Route path="/admin" element={<LabeAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
      <Footer/>
  </>
  );
}
