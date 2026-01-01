import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Product.css";
import KollectIt from "../images/K-icon.png";
import Ijma from "../images/Ijma.png";
import Swift_logo from "../images/Swift.png";
import products from "./products.jpeg";

const Product = () => {
  const [trigger, setTrigger] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  return (
    <div>
      <Header />
      <section className="banner_container">
        <div id="banner_2_image"></div>
        {/* <img src={products} alt="logo" class="background-image" /> */}
        <div class="overlay"></div>
        <div class="banner-text">
          Products
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="specials" class="specials">
        <div class="container">

          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column text_center">
                <li class="nav-item active show" onClick={() => setTrigger(0)}>
                  <a class="nav-link"
                    // data-bs-toggle=""
                    style={{ cursor: 'pointer' }}
                    onClick={() => setTrigger(0)}  > IJMA
                  </a>
                </li>

                <li class="nav-item active show " onClick={() => setTrigger(2)}>
                  <a className="nav-link"
                    // data-bs-toggle=""
                    style={{ cursor: 'pointer' }}
                    onClick={() => setTrigger(2)} >KollectIt
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content ">
                {trigger === 0 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1 ">
                          <h3 className="text_center margin">IJMA</h3>
                          <p class="fst-italic text_justify">
                            Facilitating the legacy banking system with
                            Blockchain Technology, IJMA introduces
                            functionalities that are absent in the existing
                            Islamic Banking and Finance System. With its first
                            concern  of improving The Murabaha product of The
                            Islamic Banking sector, IJMA is primed to
                            accommodate several developments in Islamic Finance
                            Products. Additionally, <b>TecStik</b> will also bring
                            Ijara, Salam, and Musharika products onto The
                            Blockchain Network. Allowing these services'
                            interaction possible through Blockchain
                            fundamentals.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Ijma}
                            alt="Ijma"
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 2 ? (
                  <>
                    <div className="tab-pane active show">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3 className="text_center">KollectIt</h3>
                          <p class="fst-italic">
                            Companies operating in several countries around the
                            world prefer timely records of business
                            transactions. KollectIt was launched on The
                            Android App Store to facilitate official
                            remittances between companies. With KollectIt: users
                            can power through Payment Inconsistency, overcome
                            Common Problems of Remittance, achieve Performance
                            Enhancement in Payment Scenarios, Reduce Disparity
                            between Vendors and their Customers, they need  not worry
                            about Delayed Reconciliation, ensure Cash has
                            exchanged hands faithfully, Diminish Errors in
                            Payment Entries, and Minimize Several problems Faced
                            when Payments are concluded. Your accounts
                            receivable entries shall now never conflict.
                          </p>

                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={KollectIt}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>



          </div>
        </div>
      </section >
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div >
  );
};

export default Product;
