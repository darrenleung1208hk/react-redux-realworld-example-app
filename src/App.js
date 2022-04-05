import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import * as pages from "./pages";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<pages.HomePage />} />
        <Route path="login" element={<pages.AuthPage />} />
        <Route path="register" element={<pages.AuthPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
