import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


import StoreContext from "../../../ContextApi";
import ecnomis from "../BlogImages/ecnomis.png";
import growth from "../BlogImages/growth.png";
import whitepaper from "../BlogImages/whitepaper.png";
import Navig from "../BlogImages/NavigPakistan.jpg";
import NavigLaptopImg from "../BlogImages/Naviglaptop.png";
import BlogFiveContentImg from "../BlogImages/blog5_content.png";
import Blog5BannerImg from "../BlogImages/blog5_banner.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import BlogThreeStyle from "../Blogs/BlogThree.module.css";

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
            <div id="banner_15_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              Fintech Trends in Pakistani Business during 2023
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
          <div className="container">
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
                <div className="blog-post table_my_res">

                  {/* <div className="main_text_center">
                    <h1 className="table_my_res" style={{ fontSize: "3rem", background: "#81AFD9", padding: '3px 3px', position: "relative", top: "-65px" }}>
                      Fintech Trends in Pakistani Business during 2023
                    </h1>
                    <p></p>
                    <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-107px", right: '60px', color: "white" }}>
                      <div>
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author Azfar Saleem</p>
                      </div>
                      <div style={{ display: "flex", gap: '3px' }}>
                        <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>updated on 22/12/23</p>
                      </div>
                    </div>
                  </div> */}

                  <p style={{ fontWeight: "bold" }} className="table_Justify">
                    By 2027, over 72.57 million users in Pakistan, will be benefiting from Fintech or Financial Technology Applications(1). Fintech encompasses a wide range of Smartphone-Apps to Desktop-Software for Business. Business executives consistently evaluate what types of Fintech they can use for making their businesses exceptionally effective.
                  </p>
                  <br />
                  <p class="w3-text-grey table_Justify">
                    The world of fintech is unleashing a revolution, transforming the financial landscape at breakneck speed: forcing international businesses to adapt to a radically reshaped financial terrain. Fintech companies are at the forefront of creating simple fintech apps to complex systems of Blockchain Networks with encoded transactions. Experienced fintech firms frequently research and develop high-tech financial solutions for business. Online Banking and Software Products for Corporations lead the market of fintech available today, but several Fintech Companies are also building types of fintech that provide the highest value of performance in The Financial Vertical of Business, too. With high levels of competition, optimal technologies are regularly designed to supply the market with practical software for business. It is certainly ideal to look out for the latest types of fintech you can apply to your organisation. Elevating your business to peak efficiency for increased profitability. Let’s have a look at the different types of fintech available today
                  </p>
                  <br />
                  <h5 class="" id="heading1">
                    Mobile-Friendly Fintech Apps for Your Business
                  </h5>
                  <br />
                  <p class="w3-text-grey table_Justify">
                    There are an increasing number of organisations like TecStik, among globally established types of fintech companies. A primary focus of these organisations is to consistently build different mobile applications and software for assisting companies in achieving financial stability, top profit levels and applying effective strategies for spending their finances.
                  </p>
                  <br />
                  <p class="w3-text-grey table_Justify">
                    Various types of Fintech Mobile Applications enable companies to raise crowdfunding, supervise payrolls, raise online loans, collect their funds into digital wallets, execute secure blockchain transactions and make <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">timely payment records</a>. Enhancing their financial operations.
                  </p>
                  <br />
                  <h5 class="" id="heading2">Acquiring Loans with Fintech</h5>
                  <br />
                  <p class="w3-text-grey table_Justify">
                    Fintech Lending Applications use AI, Secure API Connections to Banking Data, Big Data, and several other Technological Advancements. Lenders who have signed up to these apps can access multiple data points about borrowers’ financial practices and make well-informed lending decisions quickly while ensuring security. By loans listed online, businesses can take advantage of peer-to-peer lending, online mortgages, investor loans and business loans. Fintech apps such as NuBank, lists investors who can provide loanees with convenient credit and several other features. Apps like these also protect businesses with push notifications when new bills arise, providing payments flexibilities, free business accounts, attractive rates for business’s savings and give competitive loan rates all with a mobile app for their convenience.
                  </p>
                  <br />
                  <h5 class="" id="heading3">Supervising Timely Payrolls with Fintech</h5>
                  <br />
                  <p class="w3-text-grey table_Justify">
                    Paying employees of your business with secure mobile app systems can be performed easily. Running simple processes with fintech mobile apps allows businesses to set up their worker payrolls, approve the distribution of funds allocated towards salaries and print cheques for those salaries, etc. These are all features delivered by timely payroll mobile applications including Patriot Payroll and CloudPay. Businesses are helped by overcoming increased labour costs, reduced accuracy and higher risks, difficulty in integration with existing in-house software and tedious workflows.
                  </p>
                  <div class=" d-flex justify-content-center  mb-3">
                    <div class="p-2 ">
                      <img
                        src={BlogFiveContentImg}
                        alt=""
                        srcset=""
                        // id="BlogContenetImage"
                        style={{
                          width: "100%",
                          display: "block",
                          margin: "auto",
                          background: "red",
                        }}
                      />
                    </div>
                  </div>

                  <h5 class="" id="heading4">
                    Blockchain Technology for Corporate Transactions
                  </h5>
                  <br />
                  <p class="w3-text-grey table_Justify">
                    More secure and transparent transactions are possible when blockchain-enabled fintech mobile-apps come into play. Blockchain provides advancement to businesses when they need not go through the trouble of operating with huge in-house storage or software that comes with limited storage(2). By saving on physical storage, employee productivity and traditional software, blockchain effectively allows the recording of sensitive information. Corresponding information can also be transferred easily.
                  </p>
                  <br />
                  <p class="w3-text-grey table_Justify">
                    Financial Management with Blockchain is continuously being explored by giants among the likes of IBM, Barclays and CitiGroup. Using Permissioned Blockchain platforms, these firms have partnered together(3) to bring the business community: LedgerConnect. LedgerConnect is a dedicated financial Blockchain-specific App Store that provides applications to store business's data and run complex business processes like KYC (Know-your-Customer).
                  </p>
                  <br />
                  <h5 class="p-2" id="heading5">
                    Timely, Accurate Handling of Expenses and Income with Cash
                  </h5>
                  <br />
                  <p class="p-2 table_Justify">
                    While there is technology and online banking for monetary transactions available, the demand for cash in economies around the globe is increasing abruptly. Even if there is software to control different sorts of business income and expenses, the accuracy of those transactions is difficult to measure for those businesses.
                  </p>
                  <br />
                  <p class="p-2 table_Justify">
                    There are accounting transactions like payables and receivables focused on pending receipts and expenses using physical cash. There is a lack of software to truly determine if they are verified. There is an exceptionally low number of software that focus on: if those expenses have been paid or if income is actually received in the form of physical cash. Admiringly, there are mobile apps available in the major mobile app stores today, allowing these difficulties to be capably addressed.
                  </p>
                  <br />
                  <p class="p-2 table_Justify">
                    <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">KollectIt</a> is a Mobile App that promptly supports your business to get the better of common problems with remittances, achieve improved physical cash-payment processes, ensure decreased discrepancy between vendors and customers, experience less-delayed reconciliation, faithfully exchanging cash between entities, decrease errors in payment entries and to cut down on several other problems when payments are concluded.
                  </p>
                  <p class="p-2 table_Justify">
                    Businesses adopting different types of fintech according to their needs are witnessing a sharp surge in their daily financial endeavours. By using the different types of fintech mentioned above, it becomes favourably straightforward when attempting to enrich profitability and performance.
                  </p>


                  {/* reference center her */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", padding: "20px 0px" }}>
                    <h5>References</h5>
                    <ol style={{ padding: '7px 0px' }}>
                      <li style={{ padding: '7px 0px' }}>FinTech - Pakistan. (n.d.). Statista. Retrieved November 7, 2023, from <br />
                        <a href="https://www.statista.com/outlook/dmo/fintech/pakistan" target="_blank" rel="noopener noreferrer">https://www.statista.com/outlook/dmo/fintech/pakistan</a>
                      </li>
                      <li style={{ padding: '7px 0px' }}>
                        Das, S., & Das, S. (2023, October 18). What is Blockchain Technology? How Does Blockchain Work? [Updated]. Simplilearn.com. Retrieved November 8, 2023, from: <br />
                        <a href="https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology" target="_blank" rel="noopener noreferrer">https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology</a>
                      </li>
                      <li style={{ padding: '7px 0px' }}>
                        Leising, M., Leonard, J., Hawkins, M., King, I., Wu, D., & Davalos, J. (2018, July 30). Citigroup, Barclays Near End of Blockchain Test Managed by IBM. Bloomberg.com. Retrieved November 8, 2023, from: <br />
                        <a href="https://www.bloomberg.com/news/articles/2018-07-30/citigroup-barclays-near-end-of-blockchain-test-managed-by-ibm" target="_blank" rel="noopener noreferrer">https://www.bloomberg.com/news/articles/2018-07-30/citigroup-barclays-near-end-of-blockchain-test-managed-by-ibm</a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">
                {/* <div className={BlogThreeStyle.border__line_5}></div> */}
                <h4 style={{ padding: "10px 0px" }} className="table_my_res">Table of Contents</h4>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <p><a href="#heading1">Mobile-Friendly Fintech Apps for Your Business</a></p>
                    <p><a href="#heading2">Acquiring Loans with Fintech</a></p>
                    <p><a href="#heading3">Supervising Timely Payrolls with Fintech</a></p>
                    <p><a href="#heading4">Blockchain Technology for Corporate Transactions</a></p>
                    <p><a href="#heading5">Timely, Accurate Handling of Expenses and Income with Cash</a></p>
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
