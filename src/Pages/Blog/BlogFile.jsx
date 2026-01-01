import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import StoreContext from "../../ContextApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BlogOne from "./Blogs/BlogTwo";
import BlogTwo from "./Blogs/BlogsOne";
import BlogThree from "./Blogs/BlogThree";
import BlogFour from "./Blogs/BlogFour";
import BlogFive from "./Blogs/BlogFive";
import BlogSix from "./Blogs/BlogSix";
import BlogSeven from "./Blogs/Blog7";
import BlogEight from "./Blogs/Blog8";
import BlogNine from "./Blogs/Blog9";



export default function BlogContent({ copyText }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };
  let ContextData = useContext(StoreContext);
  let data = ContextData.BlogData;
  // console.log(data.metaDescription, "raza=====>");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);
  console.log(window.location.pathname.slice(1), "link ali blog card");

  return (
    <>
      <div style={{ marginTop: "5%" }}>
        <Header />
      </div>

      {window.location.pathname.slice(1) ===
        "TecStik-Blog/Unleashing-the-Power-of-TecStik%E2%80%99s-Cutting-Edge-Solutions" ? (
        <BlogTwo />
      )
        : window.location.pathname.slice(1) ===
          "TecStik-Blog/Revealing-Pakistan's-Financial-Structure" ? (
          <BlogOne />
        )
          : window.location.pathname.slice(1) ===
            "TecStik-Blog/Future-of-Fintech-in-Pakistan-The-Next-frontier" ? (
            <BlogThree /> // You should import BlogThree if it's not already imported
          )
            : window.location.pathname.slice(1) ===
              "TecStik-Blog/Enhance-earnings-by-exploring-Pakistan's-financial-realm" ? (
              <BlogFour />
            ) : window.location.pathname.slice(1) ===
              "TecStik-Blog/Fintech-Trends-in-Business-during-2023" ? (
              <BlogFive />
            ) : window.location.pathname.slice(1) ===
              "TecStik-Blog/Payments-in-A-Cash-Economy" ? (
              <BlogSix />
            ) : window.location.pathname.slice(1) ===
              "TecStik-Blog/The-Impacts-of-Strategic-Budgeting-Methods-on-Business" ? (
              <BlogSeven />
            ) : window.location.pathname.slice(1) ===
              "TecStik-Blog/The-Hidden-Risks-of-Financial-Reporting" ? (
              <BlogEight />
            ) : window.location.pathname.slice(1) ===
              "TecStik-Blog/The-Recent-Emergence-of-Fintech-Systems" ? (
              <BlogNine />
            )
              : window.location.pathname.slice(1) ===
                "TecStik-Blog/Navigating-Pakistani-Finance" ? (
                <BlogOne />
              )
                : (
                  <h1>Coming Soon</h1>
                )}

      <div>
        <Footer />
      </div>
    </>
  );
}
