import {
  About,
  Blog,
  Careers,
  Portfolio,
  Blockchain,
  Cloud,
  Contact,
  WebAndMobile,
  MobileApp,
  Product,
  NewHome,
} from "./Pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import Privacy from "./Pages/Privacy/Privacy";
import BlogFile from "./Pages/Blog/BlogFile";
import { StoreProvider } from "./ContextApi";
import { useState } from "react";

ReactGA.initialize("UA-261697612-2");

export const App = () => {
  const [BlogData, setBlogData] = useState("");
  return (
    <StoreProvider value={{ BlogData, setBlogData }}>
      <BrowserRouter>
        <Helmet>
          ‍<title>TecStik - Home</title>‍
          <meta
            name="description"
            content="Find all the best quality products your pet may need"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@user" />
          <meta name="twitter:creator" content="@user" />
          <meta name="twitter:title" content="TecStik" />
          <meta
            name="twitter:description"
            content="Ignite your business & personal lives with cutting-edge fintech apps available on popular app stores."
          />
          <meta name="twitter:image" content="url_to_image" />
          <meta property="og:title" content="TecStik - Home" />
          <meta
            property="og:description"
            content="Fintech propelling growth"
          />
          <meta property="og:image" content="url_to_image" />
          <meta property="og:https://tecstik.com/" content="pets.abc" />
          <meta property="og:tecstik" content="TecStik - Home" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:type"
            content="Unleash the Power of Financial Technology: Empowering Business Owners and Transforming the Mass Market with Fintech!"
          />
          <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        </Helmet>

        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="Tecstik-Meet" element={<About />} />
          <Route path="TecStik-Portfolio" element={<Portfolio />} />
          <Route path="TecStik-Privacy" element={<Privacy />} />

          <Route>
            <Route path="TecStik-Blockchain" element={<Blockchain />} />
            <Route path="TecStik-WebDevelopment" element={<WebAndMobile />} />
            <Route path="TecStik-MobileApp" element={<MobileApp />} />
            <Route path="TecStik-Cloud" element={<Cloud />} />
          </Route>

          <Route path="TecStik-Contact" element={<Contact />} />
          <Route path="TecStik-Product" element={<Product />} />
          <Route path="TecStik-Careers" element={<Careers />} />
          <Route path="TecStik-Blog" element={<Blog />} />
          <Route path="/TecStik-Blog/:blogId" element={<BlogFile />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};
