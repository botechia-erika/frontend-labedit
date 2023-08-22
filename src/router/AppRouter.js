import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import { SignIn } from "./../pages/SignIn/SignIn";
import { SignUp } from "./../pages/SignUp/SignUp";
import { PostDetails } from "./../pages/PostDetails/PostDetails";
import { Posts } from "./../pages/Posts/Posts";
import { Header } from "./../components/Header/Header";
import { LabeBooks } from './../pages/LabeBooks/LabeBooks';
import { LabeEcommerce } from './../pages/LabeEcommerce/LabeEcommerce';
export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/posts" element={<Posts/>} />
     
        <Route path="/labe-books" element={<LabeBooks />} />
        <Route path="/labe-ecommerce" element={<LabeEcommerce/>} />
        <Route path="/details/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
