import "./App.scss";
// react router v6
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// pages
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";
// components
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import Signup from "./components/Signup/Signup";
import { useEffect } from "react";
import { auth } from "./authentication/firebase";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem(
          "access_token",
          user?.stsTokenManager?.accessToken
        );
        localStorage.setItem("user_name", user?.displayName);
      }
    });
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Sidebar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductSingle />} />
                    <Route
                      path="/category/:category"
                      element={<CategoryProduct />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/search/:searchTerm" element={<Search />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
