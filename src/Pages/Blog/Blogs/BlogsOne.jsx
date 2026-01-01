import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import StoreContext from "../../../ContextApi";
import ecnomis from "../BlogImages/ecnomis.png";
import growth from "../BlogImages/growth.png";
import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import BlogThreeStyle from "./BlogThree.module.css";
import tabletImg from "../BlogImages/blog2images/tablet.png";
import CircleImg from "../BlogImages/blog3images/One.png";
import chartImg from "../BlogImages/blog2images/Untitled--1.png";
import islamicImg from "../BlogImages/blog3images/islamic.png";
import kollectImg from "../BlogImages/kollectit.png";
import TwoImg from "../BlogImages/blog3images/two.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function BlogOne({ copyText }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  const [copySuccess, setCopySuccess] = React.useState("");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textArea = document.querySelector("textarea");
    textArea.select();
    document.execCommand("copy");
    textArea.blur();
    setCopySuccess("Copied!");
  };

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
  // console.log(window.location.pathname.slice(1), "link raza");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div>
          <section className="banner_container">
            <div id="banner_11_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              Revolutionizing Finance: <br /> Unleash the Power of Fintech with Tecstik
              
              <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-140px", right: '60px', color: "white" }} className="author_none">
              <div>
                <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author Azfar Saleem</p>
              </div>
              <div style={{ display: "flex", gap: '3px' }}>
                <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>updated on 22/12/23</p>
              </div>
            </div>
            </div>


            {/* <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-140px", right: '60px', color: "white" }} className="author_none">
              <div>
                <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author Azfar Saleem</p>
              </div>
              <div style={{ display: "flex", gap: '3px' }}>
                <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>updated on 22/12/23</p>
              </div>
            </div> */}


          </section>



          <Modal
            // title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <input type="text" value={copyText} readOnly />
              {/* Bind our handler function to the onClick button property */}
              <button>
                <span>{isCopied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </Modal>
          <br />
          <br />
          <br />
          <div style={{ margin: "0px 30px" }}>
            <div className="row">
              <div className="col-sm-12 col-md-3 col-lg-3 ">
                <br />
                <div class="social-sharing">
                  <div class="heading-container">
                    <h2
                      style={{
                        textAlign: "center",
                      }}
                    >
                      SHARE
                    </h2>
                    <hr />
                    <p className="mb-1 table_my_res">
                      Share across your favourite social media:
                    </p>

                    <div id="LinkIconMain">
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="fab fa-facebook-f"></i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="fab fa-twitter"></i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="material-icons">email</i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="fab fa-linkedin-in"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 blog-main m-auto">
                <div className="blog-post">
                  {/* <div className="main_text_center">
                    <h1  style={{ fontSize: "3rem", background: "#81AFD9", padding: '3px 3px' }}>
                      Revolutionizing Finance: <br /> Unleash the Power of Fintech with Tecstik
                    </h1>
                    <p></p>
                  </div> */}

                  <div style={{ padding: "30px 0px" }}>
                    <p className="w3-text-grey table_Justify">
                      Pakistan's burgeoning fintech or financial technology industry is transforming how individuals and businesses manage their finances. Advanced software can unlock significant cost savings.</p>                     <p className="w3-text-grey table_Justify">
                      Fintech has democratized financial services - empowering citizens to take control of their finances with ease and affordability.</p>
                    <p className="w3-text-grey table_Justify" id="heading1">
                      Modernizing, democratizing financial services are key roles of Fintech Applications. By upgrading financial services, modern fintech apps bring an array of global benefits. Top associations operating fintech in Pakistan support everyone in reaching new heights of economic prosperity, financial freedom, accessibility, speed and ease too.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Fintech companies in Pakistan are building convenient fintech applications and software to reduce complexity. <a href="https://tecstik.com/" target="_blank" rel="noopener noreferrer">Innovative Outfits</a> are consistently building corresponding applications, leading to favorable circumstances and opportunities for the Pakistani population.
                    </p>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res">
                        Unveiling TecStik
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        TecStik has been launched as a rising star in the fintech landscape of Pakistan. Bringing you the power of enriched financial workflows.
                      </p>

                      <p className="w3-text-grey table_Justify" id="heading2">
                        TecStik’s team is on a mission to empower financial futures, pioneering <a href="https://tecstik.com/TecStik-Product" target="_blank" rel="noopener noreferrer">technology advancements</a>. Delivering enhanced convenience and effective financial productivity. The organization’s members are committed to providing accessible technology to the global population.
                      </p>
                      <p className="w3-text-grey table_Justify">From Mobile Apps to Desktop Software, TecStik provides a diverse range of solutions for your professional and personal endeavors. The TecStik team’s passion lies in using cutting-edge technology for re-imagining your corporate or personal financial routines.</p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res">
                        Reimagining Islamic Banking
                      </h3>
                      <div className={BlogThreeStyle.islamicImg_container}>
                        <img
                          src={islamicImg}
                          alt="circle"
                          className={BlogThreeStyle.islamicImg}
                        />
                      </div>
                      <p className="w3-text-grey table_Justify">
                        According to several Islamic Fatwas and Muslim Scholars alike, contemporary Islamic Banking does <b>not adhere to True Shariah Law</b> (Islamic Law) <a style={{ textDecoration: "none" }} className="w3-text-grey" href="#heading7"><sup>(1)</sup></a>. There is a prominent need to revise  how Islamic Banks operate.</p>
                      <p className="w3-text-grey table_Justify">
                        With Blockchain Technology, problems relating to compliance with Islamic principles are acknowledged. Blockchain Technology offers optimal solutions for enhancing Islamic Banking. Blockchain Technology is distributed ledger technology that records and retains transactions across numerous databases, in a transparent and immutable manner. A consensus among multiple databases is needed, if data is altered on a related blockchain network.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        As a first, The IJMA Platform introduced by TecStik uses Blockchain for The Murabaha product of The Islamic Banking Domain. Blooming with more products to be introduced on the network, IJMA allows the swift digitization and automation of relative processes:</p>
                      <ol className="w3-text-grey">
                        <li>Streamlined documentation is required for Murabaha, showcased on The IJMA Platform.</li>
                        <br />
                        <li>IJMA presents The Murabaha Product with improved accountability and transparency.</li>
                        <br />
                        <li >Murabaha on The IJMA Blockchain Network instantly verifies goods from Takaful Operators.</li>
                        <br />
                        <li>IJMA’s Murabaha product brings upgraded Shariah Compliance.</li>
                        <br />
                        <li>When a Murabaha deal is carried out via IJMA, ownership of goods (s) is genuinely transferred to the partnering bank.</li>
                        <br />
                        <li id="heading3">Banks essentially own goods, before engaging in a Murabaha Sale through IJMA.</li>
                      </ol>

                      <p className="w3-text-grey table_Justify">
                        Murabaha on IJMA ensures ethical Shariah-Compliance. A bank or government can now apply blockchain technology to align with Shariah-Law. For Islamic Financial Services and Islamic Banks to reassure their customers: about their dedication to true Islamic Banking. Making sure Murabaha is practiced according to Islamic Banking jurisprudence, as opposed to non-compliant Islamic Banking.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res">
                        Enabling Accurate Authenticity in Paper Cash Payments
                      </h3>
                      <div className={BlogThreeStyle.islamicImg_container}>
                        <img
                          src={kollectImg}
                          alt="circle"
                          className="kolect_logo"
                        />
                      </div>
                      <p className="w3-text-grey table_Justify">
                        A large number of Pakistani businesses are cash-based due to an unfair taxation system <a style={{ textDecoration: "none" }} className="w3-text-grey" href="#heading8"><sup>(2)</sup></a> prevailing in the country. These establishments rely on physical currency or paper cash transactions for payments. It is also highly challenging for ventures to authenticate paired transactions involving Physical Currency. Resulting in huge discrepancies and disagreements between payors, recipients or associated personnel from both parties. The team at TecStik recognizes the absence of effortless authentication in Paper Cash Payments.</p>
                      <p className="w3-text-grey table_Justify">
                        Companies operating in Pakistan prefer to keep timely records of their financial transactions. <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">KollectIt</a> has been successfully launched on The Android App Store, with a paid desktop admin panel built for granular control. The app has been primarily created to facilitate official cash remittances between organizations or individuals. With <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">KollectIt</a>: users can overcome <strong>Payment Inconsistency</strong>, <strong>Conquer Common Problems of Remittances</strong>, <strong>Achieve Enhanced Performance in Payment Scenarios</strong>, <strong>Reduce Disparity between Themselves</strong> and <strong> Their Beneficiaries</strong>. In addition, they do not need to worry about <strong>Delayed Reconciliation</strong>, <strong>ensure Cash has exchanged hands faithfully</strong>, <strong>Diminish Errors in Payment Entries</strong>, and minimize other problems faced when payments are concluded. Your receivals will be unlikely to crash when you bring The KollectIt Cross-Platform Software into play.
                      </p>
                      <p className="w3-text-grey table_Justify" id="heading4">
                        Users registered on The KollectIt Mobile App can conduct authentic financial transactions in paper cash without delayed reconciliation, too. For people living in remote areas with limited access to banks’ branches, The KollectIt Mobile App will allow users to verify payments received in hard cash, trim down discrepancies leading to disagreements and keep accurate records of their tangible cash transactions.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res">
                        Level Up Your Biz with TecStik's Tech Chops
                      </h3>
                      <p className="table_Justify">
                        TecStik’s ensemble of Fintech Experts have orchestrated numerous Fintech Projects across the world. Carefully studying Blockchain Technology, the ensemble is regularly achieving massive popularity as an agency responsible for giving birth to mammoth projects.
                      </p>
                      <p className="table_Justify">
                        Composed of <strong>Blockchain Experts</strong>, experienced <strong>Finance Specialists</strong>, proficient <strong>MERN <br />     (Mongo-Express-React-Node.js) Developers</strong> and professionals writing code in <strong>React-Native</strong>, TecStik brings together expertise for giving outstanding performance to external clients too. Such as these recently crafted Software installments:
                      </p>
                      <div className={BlogThreeStyle.img_container1}>
                        <img src={TwoImg} alt="logo" id="heading5" />
                      </div>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading6">
                        JINDO SWAP
                      </h3>
                      <p className="table_Justify">
                        <a href="https://coincodex.com/crypto/jindo-inu/exchanges/" target="_blank" rel="noopener noreferrer"> JINDO SWAP</a> <b>is a Blockchain exchange on The BSC (Binance Smart Chain)</b> constructed by TecStik’s team - well-versed in Blockchain Technology. <b>The exchange offers users rewards in cryptocurrency using The JINDO FEED, if users provide liquidity.</b> The JINDO FEED tokens are issued with the swap launch and are distributed to all of its liquidity providers.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res">
                        SANTA COIN
                      </h3>
                      <p className="w3-text-grey table_Justify" id="heading7">
                        TecStik’s fintech enthusiasts lately engaged in a project founded on Blockchain Technology. With TecStik’s workers' sustained persistence, The Santa Coin was born. It’s <b>a New Yield Generation Token that rewards BUSD (Binance USD) to its holders.</b> When you hold a <a href="https://coinmarketcap.com/currencies/santa-coin-2/" target="_blank" rel="noopener noreferrer">Santa Coin</a>, you can receive rewards in the form of USD. Santa Coin Crypto has a unique feature of 8% redistribution in BUSD. All Token Holders will earn a considerable amount of 8% of all trade transactions.
                      </p>
                      <p className="w3-text-grey table_Justify" id="heading8">
                        TecStik’s proprietary hybrid applications with its projects for external clients, underline the firm's expertise in Financial Technology. TecStik’s groundbreaking work on Fintech Applications is prominent in different parts of the globe, contributing to innovations and fostering the growth of advanced products.
                      </p>
                    </div>
                    {/* work center */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
                      <h5>Works Cited</h5>
                      <ol style={{ padding: "10px 0px" }} className="table_Justify">
                        <li>
                          Journal Storage. “Is "Islamic Banking" Islamic? Analysis of Current Debate on Sharī'ah Legitimacy of Islamic Banking and Finance.” https://www.statista.com/, JSTOR, Autumn - Winter 2011 October - December 2011, https://www.jstor.org/stable/41932603. Accessed 10 November 2023.</li>
                        <br />
                        <li style={{ padding: '5px 0px' }}>
                          Hassan, Taimoor. “Pakistan can't have a digital payments revolution in retail. Because the government and the banks quell it!” Profit by Pakistan Today, 13 December 2022, https://profit.pakistantoday.com.pk/2022/12/13/pakistan-cant-have-a-digital-payments-revolution-in-retail-because-the-government-and-the-banks-quell-it/. Accessed 10 November 2023.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-3 col-lg-3 blog-sidebar hide_res">
                {/* <div className={BlogThreeStyle.border__line1}></div> */}

                <h1 style={{ padding: "10px 0px", fontSize: "1.3rem" }} className="table_my_res">
                  Unleashing the Power of TecStik’s Cutting-Edge Solutions
                </h1>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <h1 style={{ fontSize: "1.2rem", paddingLeft: '16px' }}>
                      <a style={{ textDecoration: 'none' }} className="w3-text-grey" href="#heading1">Unveiling TecStik</a>
                    </h1>
                    <h2 style={{ fontSize: "1.1rem", paddingLeft: "40px" }}>
                      <a style={{ textDecoration: 'none' }} href="#heading2" className="w3-text-grey">Renovating Islamic Banking</a>
                    </h2>
                    <h3 style={{ fontSize: "1rem", paddingLeft: "40px" }}>
                      <a style={{ textDecoration: 'none' }} href="#heading3" className="w3-text-grey">
                        Enabling Accuracy in Paper Cash Payments
                      </a>
                    </h3>
                    <h3 style={{ fontSize: "1rem", paddingLeft: "23px" }}>
                      <a style={{ textDecoration: 'none' }} href="#heading4" className="w3-text-grey">Level Up Your Biz with TecStik's Tech Chops</a>
                    </h3>
                    <h3 style={{ fontSize: "1rem", paddingLeft: "57px" }}><a style={{ textDecoration: 'none' }} href="#heading5" className="w3-text-grey">JINDO SWAP</a></h3>
                    <h4 style={{ fontSize: "0.9rem", paddingLeft: "57px" }}><a style={{ textDecoration: 'none' }} href="#heading6" className="w3-text-grey">SANTA COIN</a></h4>
                  </div>
                </div>
              </div>

              <div id="LinkIconMain">
                <div id="BoxPointer">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div id="BoxPointer">
                  <i class="fab fa-twitter"></i>
                </div>
                <div id="BoxPointer">
                  <i class="material-icons">email</i>
                </div>
                <div id="BoxPointer">
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
              <p className="text-center ">
                Share across your favourite social media!
              </p>
            </div>

            <hr />
            <div class="d-flex flex-wrap justify-content-center">
              <div
                class="card m-2 p-2 col-sm-3"
                style={{
                  background: "#81AFD9",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "13px",
                }}
              >
                <div class="container">
                  <h4>
                    <b className="text-white">TecStik</b>
                  </h4>
                  <p>
                    Managing Physical Cash Payment Risks in Pakistan's Cash
                    Economy
                  </p>
                </div>
                <img
                  src={whitepaper}
                  alt="Avatar"
                  // style={{ width: "40vh", height: "50vh" }}

                  className="m-2"
                />
              </div>
              <div class="col-sm-4">
                <br />
                <div class="container">
                  <h4 style={{ textAlign: "center" }}>
                    <b>Get your free white paper.</b>
                  </h4>
                  {/* <p>Architect & Engineer</p> */}
                  {/* <br /> */}
                  <div class="form-outline">
                    <input
                      type="email"
                      // id="typeNumber"
                      class="form-control mt-3"
                      style={{ background: "#F1F1F1" }}
                      placeholder="Your Email Address"
                    />
                    {/* <label class="form-label" for="typeNumber">
                        Email
                      </label> */}
                  </div>
                  <br />
                  <span type="button" class="btn btn-warning btn-rounded">
                    SUBMIT
                  </span>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
