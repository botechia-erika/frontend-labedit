import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginBank } from "./../pages/LabeBank/Login/Login";
import { SignIn } from "./../pages/LabeEdit/SignIn/SignIn";
import { SignUp } from "./../pages/LabeEdit/SignUp/SignUp";
import { PostDetails } from "./../pages/LabeEdit/PostDetails/PostDetails";
import { NewPost } from "./../pages/OrangeClub/NewPost/NewPost";
import { Header } from "./../components/Header/Header";
import { LabeBooks } from "./../pages/LabeBooks/LabeBooks";

import { Products } from "./../pages/LabeEcommerce/Products/Products";
import { ProductDetails } from "../pages/LabeEcommerce/ProductDetails/ProductDetails";
import { CashBalance } from "../components/LabeBank/CashBalance/CashBalance";
import { HomePage } from "../pages/HomePage/HomePage";
import { ScorePage } from "../pages/ScorePage/ScorePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pAll">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/posts" element={<NewPost />} />
          <Route path="/labe-books" element={<LabeBooks />} />
          <Route path="/frota" element={<Products />} />
          <Route path="/labe-bank" element={<LoginBank />} />
          <Route path="/bank" element={<CashBalance />} />
          <Route path="/frota/:idDetails" element={<ProductDetails />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
