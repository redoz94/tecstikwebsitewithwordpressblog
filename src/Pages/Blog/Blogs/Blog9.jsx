import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import StoreContext from "../../../ContextApi";
import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import BlogThreeStyle from "./BlogThree.module.css";
import handImg from "../BlogImages/Blog4Images/Blog.png";
import BannerImg from "../BlogImages/Blog9images/BlogBannerImage.png";
import BlogninrContentImg from "../BlogImages/Blog9images/blogContentImage.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';




export default function BlogNine({ copyText }) {
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
            <div id="banner_19_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              The Emergence of Fintech
              <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-180px", right: '60px', color: "white" }} className="author_none">
                <div>
                  <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author Azfar Saleem</p>
                </div>
                <div style={{ display: "flex", gap: '3px' }}>
                  <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                  <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>updated on 22/12/23</p>
                </div>
              </div>
            </div>
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
                <div className="blog-post table_my_res">
                  {/* <div className="main_text_center">
                    <h1 className="table_my_res" style={{ fontSize: "3rem", background: "#81AFD9", padding: '3px 3px', position: "relative", top: "-65px" }}>
                      The Emergence of Fintech
                    </h1>
                    <p></p>
                    <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-105px", right: '60px', color: "white" }}>
                      <div>
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author Azfar Saleem</p>
                      </div>
                      <div style={{ display: "flex", gap: '3px' }}>
                        <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>updated on 22/12/23</p>
                      </div>
                    </div>
                  </div> */}


                  <div style={{ padding: "30px 0px" }}>
                    <p className="w3-text-grey table_Justify" style={{ fontWeight: "bold" }}>
                      Fintech or Financial Technology involves activities that help move money securely. With the increasing use of Fintech Applications globally -- 64% of the world’s population used at least one Fintech app in 2019 -- Fintech now drives the digitization of the finance departments of businesses.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      In recent years, progressive Fintech Applications have encompassed Mobile Payments, Accounting Software, Blockchain and Distributed Ledger Technology, Digital Currencies, Peer-to-Peer lending, Marketplace Lending, etc. Companies that assign teams with catchall experience in the fields of finance and technology, helps produce solutions that increasingly provide businesses with the convenience to run their financial affairs.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      TecStik --With a team that holds the experience of 20 years in the international financial services and technology sectors-- is The Fintech Wing of Pacific Financial Services PVT. LTD., a company providing financial services to international firms. TecStik aims to innovate possibilities that assist global businesses in enhancing their finance proceedings. Along with its established applications, TecStik’s continuous Research & Development of Technology will encompass Defi (Decentralised Finance), Non-Banking, and Banking verticals.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Supplementing these developments, TecStik will pioneer Fintech Solutions around international Corporate Processes and Personal Finance. The Emergence of Fintech Systems has exquisitely begun to optimise all manners of business processes, as it usually targets the lifeblood of all businesses – Their Finances.
                    </p>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading1">
                        How Fintech Polishes your Corporate Processes
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Using advanced technology, business owners and companies use Fintech Applications to forecast, record their Regular Costs simultaneously, identify where they can cut down on overheads and maximise efficiency simultaneously. Forecasted and current Income is popularly recorded using Fintech Applications, as well. A staggering $91.5 Billion was invested into Fintech internationally -- last year alone --, which spectacularly exhibits its potential to improve businesses’ financial proceedings. Fintech comes with scores of possibilities that are currently uncovered. Revolution within the The Finance Sector holds extraordinary possibilities. Let’s have a look at how Fintech can enhance your Corporate Processes.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        More than half of Fintech Users are accustomed to Insurance Apps and Financial Planning software. To relieve themselves from recording crucial financial data manually, companies prefer using helpful apps like Quickbooks, Freshbooks, Bill.com, etc. However, cashiers or accountants at these companies must carefully scrutinise these entries before they really hit the books. Systems like KollectIt accurately record these transactions independently and there is increasingly less room for error.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Highly skilled members of contemporary Fintech Teams and Organizations are cooperating to bring users remarkable Fintech Applications and Software. Ranging from Blockchain Technology to Accounting Software, these solutions are built around real-world collection and payment situations. Assigning personnel to create Fintech Solutions – Those with immense experience in the Field of Finance and Computer Programming -- results in User-Friendly Fintech applications. This technology can be applied to diverse circumstances.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Largely, companies can benefit from automation and industrialization. Prominent advantages of using Fintech are listed as follows:
                      </p>
                      <ul
                        className="w3-text-grey"
                        style={{ padding: "2px 0px" }}
                      >
                        <li>Reduced Costs</li>
                        <br />
                        <li>The Safety of Monetary Assets</li>
                        <br />
                        <li>Accessing Legitimate Information</li>
                        <br />
                        <li>Quick Corporate Transactions</li>
                      </ul>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading2">
                        Popular Fintech Applications
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        A hefty amount of Fintech Applications have been introduced through the years. The most recent Fintech Applications harness the forces of moving funds fast and securely. A quick Google Search of “Popular FIntech Applications” can give us a run-through of the most widely used Fintech Applications by Large or Small Organizations, along with end-consumers.
                      </p>

                      <div className={BlogThreeStyle.img_container}>
                        <img src={BlogninrContentImg} alt="logo" />
                      </div>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading3">
                        VanGuard
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        This application covers investments in Mutual Funds, IRAs, ETFs, 401k plans. Their website says there are many more investments that can be made via other instruments too.  Personalized financial advice, retirement tools, relevant market tools, and high-quality investments are among services of theirs you can benefit from. With traditional monetary devices, you can use this mechanism for your benefit.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading4">
                        UniSwap
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        This is a Decentralised Trading Platform that offers a program where users can invest their funds using Tokens based on The Ethereum Cryptocurrency. As opposed to centralised Crypto Trading Platforms like Coinbase and Binance, Uniswap is run by the majority of its users based on voting. Users who hold UniSwap (The Parent Token of Uniswap) can help determine what directions the platform takes in its operations. The Unipilot token is among the different cryptocurrencies that can be traded on the platform.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading5">
                        Bluesheets
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Bluesheets is a Singaporean venture started in 2020. They introduced automated bookkeeping software by the same name. Their software helps organisations record and view their financial data across all of the digital platforms they use. Allowing them to create reports and analytics too.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading6">
                        Robinhood
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Robinhood brought users a programme where they can start investing in companies to profit from favourable returns. This app provides users tools using which they can forecast, access order information, and extensively plan their financial futures. Established in 2015, in Menlo, California, Robinhood also started to offer cryptocurrency trading wallets starting this year.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading7">
                        Rapyd
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        The innovative platform founded by Arik Shtilman, Arkady Karpman and Omer Prie allows users to send and receive payments from anyone, internationally. It allows users to carry out: fundraising, fund payments, foreign exchange, card issuing, and have virtual IBAN accounts, etc.
                      </p>

                      <h3
                        className="w3-text-grey table_my_res"
                        id="heading8"
                        style={{ fontSize: "2rem" }}
                      >
                        TecStik’s Repertoire of FIntech Applications
                      </h3>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading9">
                        KollectIt
                      </h3>

                      <p className="w3-text-grey table_Justify">
                        Companies operating in several countries around the world prefer to keep timely records of their business transactions. KollectIt has been launched on The Android App Store to facilitate official cash remittances between organisations. With KollectIt: users can overcome Payment Inconsistency, conquer Common Problems of Remittances, achieve Performance Enhancement in Payment Scenarios, Reduce Disparity between Them and Their Customers. In addition, they need not worry about delayed reconciliation, ensure cash has exchanged hands faithfully, diminish errors in payment entries, along with minimising other problems faced when payments are concluded. Your accounts payable entries will never conflict when you bring The KollectIt Mobile App into play.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading10">
                        JINDO SWAP
                      </h3>

                      <p className="w3-text-grey table_Justify">
                        The TecStik team is also seasoned in creating different apps for external clients. JINDO SWAP is a <b>Blockchain exchange on The BSC (Binance Smart Chain) that offers users rewards using The JINDO FEED, if it provides liquidity.</b>The JINDO FEED tokens are issued with the swap launch and are distributed to all of the liquidity providers.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading11">
                        SANTA COIN
                      </h3>

                      <p className="w3-text-grey table_Justify">
                        Santa Coin - built by The TecStik team,  is <b>a New Yield Generation Token that rewards BUSD (Binance USD) to its holders.</b> When you hold Santa Coin(s), you receive rewards in the form of USD. Santa Coin Crypto has a unique feature of 8% redistribution in BUSD - all Token Holders will earn a considerable 8% of all trade transactions.
                      </p>

                      <p className="w3-text-grey table_Justify">
                        There has been a sizable increase in the development, usage and application of fintech applications worldwide. The team at TecStik brings Fintech Solutions to be used for streamlining your companies’ regular financial processes including your monetary investments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">
                {/* <div className={BlogThreeStyle.border__line9}></div> */}
                <h6 style={{ padding: "10px 0px", fontSize: "1.5rem" }} className="table_my_res">
                  Table of Contents
                </h6>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <p>
                      <a href="#heading1">
                        How Fintech Polishes your Corporate Processes
                      </a>
                    </p>
                    <p>
                      <a href="#heading2">Popular Fintech Applications</a>
                    </p>
                    <div style={{ padding: '0px 20px' }}>
                      <p>
                        <a href="#heading3">VanGuard</a>
                      </p>
                      <p>
                        <a href="#heading4">UniSwap</a>
                      </p>
                      <p>
                        <a href="#heading5">Bluesheets</a>
                      </p>
                      <p>
                        <a href="#heading6">Robinhood</a>
                      </p>
                      <p>
                        <a href="#heading7">Rapyd</a>
                      </p>
                    </div>
                    <p>
                      <a href="#heading9">
                        TecStik’s Repertoire of FIntech Applications
                      </a>
                    </p>
                    <div style={{ padding: '0px 20px' }}>
                      <p>
                        <a href="#heading8">KollectIt</a>
                      </p>
                      <p>
                        <a href="#heading10">JINDO SWAP</a>
                      </p>
                      <p>
                        <a href="#heading11">SANTA COIN</a>
                      </p>
                    </div>
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
