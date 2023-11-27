import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { SignIn } from "./../pages/LabeEdit/SignIn/SignIn";
import { SignUp } from "./../pages/LabeEdit/SignUp/SignUp";
import { PostDetails } from "./../pages/LabeEdit/PostDetails/PostDetails";
import { Posts } from "./../pages/LabeEdit/Posts/Posts";
import { Header } from "./../components/Header/Header";
import { LabeBooks } from './../pages/LabeBooks/LabeBooks';
import  {Products}  from '../pages/LabeEcommerce/Products/Products';
export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pAll">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/projects" element={<LabeBooks />} />
        <Route path="/courses" element={<Products/>} />
        <Route path="/details/:id" element={<PostDetails />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
