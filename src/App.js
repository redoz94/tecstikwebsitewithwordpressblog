import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewHome from "./Pages/Home/NewHome";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PrivacyPolicy from "./Pages/Privacy/Privacy";
import Blockchain from "./Pages/Services/Blockchain/Blockchain.jsx";
import WebAndMobile from "./Pages/Services/WebAndMobile/WebAndMobile.jsx";
import MobileApp from "./Pages/Services/MobileApp/MobileApp.jsx";
import Cloud from "./Pages/Services/Cloud/Cloud.jsx";

import Product from "./Pages/Product/Product";
import Careers from "./Pages/Careers/Careers";
import Contact from "./Pages/Contact/Contact";

import Blog from "./Pages/Blog/Blog";
import BlogFile from "./Pages/Blog/BlogFile";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewHome />} />

        <Route path="/Tecstik-Meet" element={<About />} />
        <Route path="/TecStik-Portfolio" element={<Portfolio />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />

       <Route path="/TecStik-Blockchain" element={<Blockchain />} />
<Route path="/TecStik-WebDevelopment" element={<WebAndMobile />} />
<Route path="/TecStik-MobileApp" element={<MobileApp />} />
<Route path="/TecStik-Cloud" element={<Cloud />} />


        <Route path="/TecStik-Product" element={<Product />} />
        <Route path="/TecStik-Careers" element={<Careers />} />
        <Route path="/TecStik-Contact" element={<Contact />} />

        <Route path="/TecStik-Blog" element={<Blog />} />
      <Route path="/TecStik-Blog/:slug" element={<BlogFile />} />

      </Routes>
    </BrowserRouter>
  );
}
