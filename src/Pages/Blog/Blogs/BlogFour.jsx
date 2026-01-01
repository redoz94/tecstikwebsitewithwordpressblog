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
import chartImg from "../BlogImages/blog2images/Untitled--1.png";
import bgImg from "../BlogImages/Blog4Images/laptop.png";
import handImg from "../BlogImages/Blog4Images/Blog.png";
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
            <div id="banner_14_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              Why Fintech Matters: <br /> Exploring the Transformation of Finance in Pakistan
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
                <div className="blog-post">
                  {/* <div className="main_text_center">
                    <h1 className="table_my_res" style={{ fontSize: "3rem", background: "#81AFD9", padding: '3px 3px', position: "relative", top: "-50px" }}>
                      Why Fintech Matters: <br /> Exploring the Transformation of Finance in Pakistan
                    </h1>
                    <p></p>
                    <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-120px", right: '60px', color: "white" }}>
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
                      As per Statista’s report, the number of fintech (popularly known as fintech) users in Pakistan is to reach 65 million in 2023(1). Fintech entails the use of technology to automate, improve, manage and track the performance of financial tasks.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Understanding the impact of fintech in Pakistan requires: studying leading contemporary fintech organisations operating in the country and investigating the potential caveats they are met with. The rising trend of fintech use can partly be attributed to the nation’s government supporting its growth and innovation, too.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Unlocking a universe of financial opportunities awaits citizens, as they embrace the use of fintech.
                    </p>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading1">
                        Understanding Fintech as a Pakistani
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        The use of top Fintech in Pakistan is rapidly
                        transforming the region's productivity sector. Local
                        businesses and individuals are gradually leveraging
                        fintech applications for their regular financial
                        proceedings. Adopting new technologies to enhance their
                        fiscal arrangements.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        A broad range of products built by the top fintech in
                        Pakistan, most notably: Robo-Advisors, Peer-to-Peer
                        Lending platforms, Mobile Banking and Internet Payment
                        solutions are paving the way for a more transparent,
                        efficient and inclusive financial order.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        With lower investment fees, Robo-Advisors are steadily
                        bringing citizens access to investment possibilities:
                        simultaneously providing automated investment
                        management. Peer-to-Peer Lending platforms in the
                        country are supplying residents with surging access to
                        credit with more-affordable interest rates through a
                        more transparent lending process. Considering the
                        significant size of remote areas in Pakistan,
                        Mobile-Banking and Payment Solutions are enhancing
                        financial inclusion by making it easier for people to
                        manage their finances and make transactions via their
                        smartphones. Key Fintech Outlets in Pakistan
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading2">
                        Key Fintech Outlets in Pakistan
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Brands such as Jazz, Investory, Finja, Stripe and TecStik are representing the top fintech in Pakistan, successfully covering: Digital Payments, Robo-Advisory, Digital Investment, Peer-to-Peer Lending, Online Payment Platforms, Islamic Banking with Blockchain and making tangible Cash Collection <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">faithfully accurate</a>.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        With dedicated apps and digital platforms, it has become possible for Pakistanis (from all walks of life)(2) to invest in high-performing businesses and gain wholesome knowledge about how to use fintech products to their advantage(s). Smartphones have become popular payment methods for residents all across the country, software applications are also connecting lenders with borrowers to offer loans with decreased interest rates and smartphones are providing people internet access to discover how fintech can help achieve their financial goals faster, easier than ever before.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading3">
                        Mainstream Banking vs. Fintech
                      </h3>
                    </div>
                    <div className={BlogThreeStyle.img_container}>
                      <img src={handImg} alt="logo" />
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <p className="w3-text-grey table_Justify">
                        Mainstream banks provide a wide variety of services including investment products, savings accounts, loans and credit cards. On the other hand, these banks are slow, bureaucratic and expensive.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        With fintech, more affordable and convenient services are made available. Banks are consistently and regularly introducing digital products to match offerings made available through in-person banking. Neobanks are a leading example of digitalised financial services too. With their paperless accounts in hand, account-holders everywhere are depositing cash in them: to make and receive payments easily. For example, Revolut, Wise and Wallester accounts empower customers to dispatch and obtain payments digitally which was once only possible via physical bank branches.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading4">
                        Government Initiatives and Regulations
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        The Pakistani administration is promoting the growth of fintech by taking numerous steps to encourage innovation in the sector. With regulations set for fintechs to follow, the state ensures all new technology is built to appropriately magnify governance procedures as well as delivering convenience to the masses.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        A regulatory sandbox created for fintechs to test their software in a live environment and electronic money institution regulations that have enabled fintech outfits to operate trailblazing software. Fintech companies that have pushed the boundaries of financial inclusion have attracted millions of dollars of global investment(3), owing to the supportive environment set up by the government.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading5">
                        Challenges and Concerns for Pakistani Fintechs
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Despite impressive progress, Pakistan’s fintech players
                        face many challenges, primarily:
                      </p>
                      <ul className={BlogThreeStyle.islamic__ul}>
                        <li className="w3-text-grey ">
                          Budgetary constraints: Startups and companies struggle
                          to cover costs, scale and design groundbreaking
                          fintech solutions. Limited access to bank loans and
                          venture capital create these constraints.
                        </li>
                        <li className="w3-text-grey">
                          Lack of awareness: A sizable portion of the population
                          is still unaware of fintech applications. This makes
                          it difficult for fintechs to scale, grow their
                          businesses and attract new customers.
                        </li>
                        <li className="w3-text-grey">
                          Challenges from established banks: Traditional
                          financial institutions, such as banks and microfinance
                          institutions, are increasingly offering their own
                          fintech products and services. Making it difficult for
                          incumbent fintechs to compete..
                        </li>
                      </ul>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading6">
                        Fintech Risks and Considerations for Pakistan
                      </h3>
                      <p className="table_Justify">
                        The number of fintech applications is quickly growing in
                        Pakistan. Offering multiple opportunities for business
                        and consumers, alike. At the same time, fintech
                        companies should carefully consider the risks and
                        implications surrounding their products or services.{" "}
                      </p>
                      <ul className={BlogThreeStyle.islamic__ul}>
                        <li>
                          Financial inclusion: Fintech progressively boosts
                          financial inclusion for Pakistani citizens who have
                          been excluded from the formal financial system.
                          Fintech companies can be mindful of their target
                          market’s needs and design technologies that are
                          accessible and budget-friendly.
                        </li>
                        <li>
                          Data privacy concerns and cybersecurity: Data breaches
                          and cyberattacks are rampant in modern times. Fintechs
                          storing and processing large amounts of sensitive
                          customer data, can become victims of cyberattacks and
                          data breaches. By investing in cybersecurity methods,
                          fintech ventures can conveniently protect their
                          customers’ data.
                        </li>
                        <li>
                          Regulatory uncertainty: The constantly evolving
                          regulatory landscape of fintech in Pakistan is causing
                          ambiguity about the application of certain
                          regulations. Making it difficult for fintechs to
                          operate in a predictable environment, while actively
                          following related laws put in place.
                        </li>
                        <li>
                          Fraud: Frauds like payment fraud and identity theft
                          endanger fintech users’ privacy extensively. These
                          frauds can be easily avoided with highly effective
                          systems put into place.
                        </li>
                        <li>
                          Evolving regulations: Fintech regulations are changing
                          in a rapidly evolving Pakistani environment. Posing
                          challenges relating to how these regulations will be
                          applied to products and services.
                        </li>
                        <li>
                          Consumer protection risks: Pakistani fintech companies
                          need to make sure that their target market is
                          comfortable sharing confidential information with
                          them. For example, products or services need to
                          provide clear and concise terms and conditions to sign
                          up so they are protected from frauds including
                          identity-theft and payment fraud.
                        </li>
                      </ul>

                      <p className="table_Justify">
                        {" "}
                        Fintech offers a number of opportunities for business
                        and consumers alike. It is important to be aware of the
                        dangers and implications associated with the medium. As
                        they operate in a new and immature vertical, fintech
                        companies have considerably less competition and there
                        is greater scope for innovation. If the related
                        uncertainties are successfully challenged.
                      </p>
                      <p className="table_Justify">
                        Overall, the financial technology sector is a promising
                        but risky domain. Businesses and users should carefully
                        consider the risks and rewards before pursuing fintech
                        initiatives.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading7">
                        Fintech’s Future in Pakistan
                      </h3>
                      <p className="table_Justify">
                        The reformation of Pakistan’s financial system can primarily be attributed to the digital payment systems, which are expected to grow in the near future. Fintech companies are changing the way underbanked and unbanked Pakistanis are offered financial services. Digital payment systems eliminate barriers to financial inclusion by providing easy and secure ways to send and receive money.
                      </p>
                      <p className="table_Justify">
                        When tailored hybrid software is utilised, Pakistanis in underserved areas can also {" "}
                        <a href="https://kollectit.tecstik.com/" target="_blank" rel="noopener noreferrer">cooperatively confirm and efficiently record</a>    their physical cash payments upon receival.
                      </p>
                      <p className="table_Justify">
                        Carefully studying the current influence of fintech in The Pakistani Region is crucial to take full advantage of the financial situation. People of the country can apply the latest tailored developments for seizing the abundant opportunities fintech brings forward. Incumbent and existing fintech outlets are devoted to providing users with practical technology which can be used to simplify their routine financial tasks.
                      </p>
                    </div>
                    <div
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                    >
                      <h3 className="w3-text-grey table_my_res">Works Cited</h3>
                      <ol className={BlogThreeStyle.islamic__ul}>
                        <li>
                          State Bank of Pakistan(SBP). “FinTech - Pakistan.”
                          Statista,{" "}
                          <a
                            href="https://www.statista.com/outlook/
                            dmo/fintech/pakistan#key-market-indicators"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://www.statista.com/outlook/
                            dmo/fintech/pakistan#key-market-indicators
                          </a>
                          . Accessed 3 November 2023.
                        </li>
                        <li>
                          State Bank of Pakistan. “Special Section: Pakistan's
                          Growing IT Exports and Tech Start- ups: Opportunities
                          and Challenges1.” State Bank of Pakistan,{" "}
                          <a
                            href="https://www.sbp.org.pk/reports/half/
                            arFY23/SpecialSection.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://www.sbp.org.pk/reports/half/
                            arFY23/SpecialSection.pdf
                          </a>
                          . Accessed 3 November 2023.
                        </li>
                        <li>
                          “Fintech sector’s growth shaping Pakistan’s future -
                          Opinion.” Business Recorder, 3 September 2022,
                          <a
                            href="https://www.brecorder.com/news/40195419"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://www.brecorder.com/news/40195419
                          </a>
                          . Accessed 3 November 2023.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">

                <h6 style={{ padding: "10px 0px", fontSize: "1.5rem" }} className="table_my_res">
                  Table of Contents
                </h6>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <p><a href="#heading1">Understanding Fintech as a Pakistani</a></p>
                    <p><a href="#heading2">Key Fintech Outlets in Pakistan</a></p>
                    <p><a href="#heading3">Mainstream Banking vs. Fintech</a></p>
                    <p><a href="#heading4">Government Initiatives and Regulations</a></p>
                    <p><a href="#heading5">Challenges and Concerns for Pakistani Fintechs</a></p>
                    <p><a href="#heading6">Fintech Risks and Considerations for Pakistan</a></p>
                    <p><a href="#heading7">Fintech’s Future in Pakistan</a></p>
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

// import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams, Link } from "react-router-dom";

// import StoreContext from "../../../ContextApi";

// import whitepaper from "../BlogImages/whitepaper.png";
// import { Button, Modal } from "antd";
// // import "./Blog";
// // new import image
// import BlogThreeStyle from "./BlogFour.module.css";
// // new images import
// import fbImg from "../BlogImages/blog2images/facebook/facebook.png";
// import linImg from "../BlogImages/blog2images/linkedin/linkedin.png";
// import TwiImg from "../BlogImages/blog2images/twitter/twitter.png";
// import laptopImg from "../BlogImages/Blog4Images/laptop.png";
// import handImg from "../BlogImages/Blog4Images/Blog.png";

// export default function BlogFour({ copyText }) {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const currentTab = searchParams.get("tab") || "0";
//   const [copySuccess, setCopySuccess] = React.useState("");
//   const [isCopied, setIsCopied] = useState(false);

//   const copyToClipboard = () => {
//     const textArea = document.querySelector("textarea");
//     textArea.select();
//     document.execCommand("copy");
//     textArea.blur();
//     setCopySuccess("Copied!");
//   };

//   const changeTab = (tab) => {
//     searchParams.set("tab", tab);
//     setSearchParams(searchParams);
//   };
//   let ContextData = useContext(StoreContext);
//   let data = ContextData.BlogData;
//   // console.log(data.metaDescription, "raza=====>");

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     });
//   }, [searchParams]);
//   // console.log(window.location.pathname.slice(1), "link raza");

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <Modal
//             // title="Basic Modal"
//             open={isModalOpen}
//             onOk={handleOk}
//             onCancel={handleCancel}
//           >
//             <div>
//               <input type="text" value={copyText} readOnly />
//               {/* Bind our handler function to the onClick button property */}
//               <button>
//                 <span>{isCopied ? "Copied!" : "Copy"}</span>
//               </button>
//             </div>
//           </Modal>
//           <br />
//           <br />
//           <br />
//           <div className="container">
//             <div className="row">
//               <div className=" blog-main m-auto">
//                 <div className={BlogThreeStyle.three_container}>
//                   <h1 id="heading" className={BlogThreeStyle.future_heading}>
//                     Why Fintech Matters: Exploring the Transformation of Finance
//                     in Pakistan
//                   </h1>
//                   <br />

//                   <p
//                     className="w3-text-grey"
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: "20px",
//                       textAlign: "center",
//                     }}
//                   >
//                     Enhance earnings by exploring Pakistan's financial realm
//                   </p>
//                   <br />
//                   <p class="w3-text-grey">By Azfar Bilal - xx-xx-xxxx</p>
//                   <div className={BlogThreeStyle.socialImg}>
//                     <img src={fbImg} alt="fb" />
//                     <img src={linImg} alt="linkedin" />
//                     <img src={TwiImg} alt="twitter" />
//                   </div>
//                   <br />
//                   <div>
//                     <img
//                       src={laptopImg}
//                       alt="circle"
//                       className={BlogThreeStyle.CircleImg}
//                     />
//                   </div>
//                   <div className={BlogThreeStyle.main___conatiner}>
//                     <div className={BlogThreeStyle.firstpara}>
//                       <p className="w3-text-grey" style={{ fontWeight: "bold" }}>
//                         As per Statista’s report, the number of fintech
//                         (popularly known as fintech) users in Pakistan is to
//                         reach 65 million in 2023. Fintech entails the use of
//                         technology for automating, improving, managing and
//                         tracking the performance of financial tasks.
//                       </p>
//                       <p className="w3-text-grey">
//                         Understanding the impact of fintech in Pakistan
//                         includes: studying leading contemporary fintech
//                         organisations operating in the country and the potential
//                         caveats they are met with. The rising trend of using
//                         financial technology applications can be partly
//                         attributed to the nation’s government supporting its
//                         growth and innovation, too.
//                       </p>
//                       <p className="w3-text-grey">
//                         With citizens embracing the power of corresponding
//                         software, unlocking a universe of financial
//                         opportunities awaits them.
//                       </p>
//                       <div className={BlogThreeStyle.main___conatiner1}>
//                         <h3 className="w3-text-grey">
//                           Understanding Fintech as a Pakistani
//                         </h3>
//                         <p className="w3-text-grey">
//                           The use of top Fintech in Pakistan is rapidly
//                           transforming the region's productivity sector. Local
//                           businesses and individuals are gradually leveraging
//                           fintech applications for their regular financial
//                           proceedings. Adopting new technologies to enhance
//                           their fiscal arrangements.
//                         </p>
//                         <p className="w3-text-grey">
//                           A broad range of products built by the top fintech in
//                           Pakistan, most notably: Robo-Advisors, Peer-to-Peer
//                           Lending platforms, Mobile Banking and Internet Payment
//                           solutions are paving the way for a more transparent,
//                           efficient and inclusive financial order.
//                         </p>
//                         <p className="w3-text-grey">
//                           With lower investment fees, Robo-Advisors are steadily
//                           bringing citizens access to investment possibilities:
//                           simultaneously providing automated investment
//                           management. Peer-to-Peer Lending platforms in the
//                           country are supplying residents with surging access to
//                           credit with more-affordable interest rates through a
//                           more transparent lending process. Considering the
//                           significant size of remote areas in Pakistan,
//                           Mobile-Banking and Payment Solutions are enhancing
//                           financial inclusion by making it easier for people to
//                           manage their finances and make transactions via their
//                           smartphones. Key Fintech Outlets in Pakistan
//                         </p>
//                       </div>
//                       <div className={BlogThreeStyle.main___conatiner1}>
//                         <h3 className="w3-text-grey">
//                           Key Fintech Outlets in Pakistan
//                         </h3>
//                         <p className="w3-text-grey">
//                           Brands such as Jazz, Investory, Finja, Stripe and
//                           TecStik are representing the top fintech in Pakistan,
//                           successfully covering: Digital Payments,
//                           Robo-Advisory, Digital Investment, Peer-to-Peer
//                           Lending, Online Payment Platforms, Islamic Banking
//                           with Blockchain and making tangible Cash Collection
//                           faithfully accurate.
//                         </p>
//                         <p className="w3-text-grey">
//                           With dedicated apps and digital platforms, it has
//                           become possible for Pakistanis (from all walks of
//                           life)(2) to invest in high-performing businesses and
//                           gain wholesome knowledge about how to use fintech
//                           products to their advantage(s). Smartphones have
//                           become popular payment methods for residents all
//                           across the country, software applications are also
//                           connecting lenders with borrowers to offer loans with
//                           decreased interest rates and smartphones are providing
//                           people internet access to discover how fintech can
//                           help achieve their financial goals faster, easier than
//                           ever before.
//                         </p>
//                       </div>
//                       <div className={BlogThreeStyle.main___conatiner1}>
//                         <h3 className="w3-text-grey">
//                           Mainstream Banking vs. Fintech
//                         </h3>
//                       </div>
//                       <div className={BlogThreeStyle.img_container}>
//                         <img src={handImg} alt="logo" />
//                       </div>
//                       <div className={BlogThreeStyle.main___conatiner2}>
//                         <p className="w3-text-grey">
//                           Mainstream banks provide a wide variety of services
//                           including investment products, savings accounts, loans
//                           and credit cards. On the other hand, these banks are
//                           slow, bureaucratic and expensive.
//                         </p>
//                         <p className="w3-text-grey">
//                           With fintech, more affordable and convenient services
//                           are made available. Banks are consistently and
//                           regularly introducing digital products to match
//                           offerings made available through in-person banking.
//                           Neobanks are a leading example of digitalised
//                           financial services too. With their paperless accounts
//                           in hand, account-holders everywhere are depositing
//                           cash in them: to make and receive payments easily. For
//                           example, Revolut, Wise and Wallester accounts empower
//                           customers to dispatch and obtain payments digitally
//                           which was once only possible via physical bank
//                           branches.
//                         </p>
//                       </div>
//                       <div className={BlogThreeStyle.main___conatiner2}>
//                         <h3 className="w3-text-grey">
//                           Government Initiatives and Regulations
//                         </h3>
//                         <p className="w3-text-grey">
//                           The Pakistani administration is promoting the growth
//                           of fintech by taking numerous steps to encourage
//                           innovation in the sector. With regulations set for
//                           fintechs to follow, the state ensures all new
//                           technology is built to appropriately magnify
//                           governance procedures as well as delivering
//                           convenience to the masses.
//                         </p>
//                         <p className="w3-text-grey">
//                           A regulatory sandbox created for fintechs to test
//                           their software in a live environment and electronic
//                           money institution regulations that have enabled
//                           fintech outfits to operate trailblazing software.
//                           Fintech companies that have pushed the boundaries of
//                           financial inclusion have attracted millions of dollars
//                           of global investment(3), owing to the supportive
//                           environment set up by the government.
//                         </p>
//                       </div>
//                       <div className={BlogThreeStyle.main___conatiner1}>
//                         <h3 className="w3-text-grey">
//                           Challenges and Concerns for Pakistani Fintechs
//                         </h3>
//                         <p className="w3-text-grey">
//                           Despite impressive progress, Pakistan’s fintech
//                           players face many challenges, primarily:
//                         </p>
//                         <ul className={BlogThreeStyle.islamic__ul}>
//                           <li className="w3-text-grey">
//                             Budgetary constraints: Startups and companies
//                             struggle to cover costs, scale and design
//                             groundbreaking fintech solutions. Limited access to
//                             bank loans and venture capital create these
//                             constraints.
//                           </li>
//                           <li className="w3-text-grey">
//                             Lack of awareness: A sizable portion of the
//                             population is still unaware of fintech applications.
//                             This makes it difficult for fintechs to scale, grow
//                             their businesses and attract new customers.
//                           </li>
//                           <li className="w3-text-grey">
//                             Challenges from established banks: Traditional
//                             financial institutions, such as banks and
//                             microfinance institutions, are increasingly offering
//                             their own fintech products and services. Making it
//                             difficult for incumbent fintechs to compete..
//                           </li>
//                         </ul>
//                       </div>
//                       <div className={BlogThreeStyle.main___conatiner1}>
//                         <h3 className="w3-text-grey">
//                           Fintech Risks and Considerations for Pakistan
//                         </h3>
//                         <p>
//                           The number of fintech applications is quickly growing
//                           in Pakistan. Offering multiple opportunities for
//                           business and consumers, alike. At the same time,
//                           fintech companies should carefully consider the risks
//                           and implications surrounding their products or
//                           services.{" "}
//                         </p>
//                         <ul className={BlogThreeStyle.islamic__ul}>
//                           <li>
//                             Financial inclusion: Fintech progressively boosts
//                             financial inclusion for Pakistani citizens who have
//                             been excluded from the formal financial system.
//                             Fintech companies can be mindful of their target
//                             market’s needs and design technologies that are
//                             accessible and budget-friendly.
//                           </li>
//                           <li>
//                             Data privacy concerns and cybersecurity: Data
//                             breaches and cyberattacks are rampant in modern
//                             times. Fintechs storing and processing large amounts
//                             of sensitive customer data, can become victims of
//                             cyberattacks and data breaches. By investing in
//                             cybersecurity methods, fintech ventures can
//                             conveniently protect their customers’ data.
//                           </li>
//                           <li>
//                             Regulatory uncertainty: The constantly evolving
//                             regulatory landscape of fintech in Pakistan is
//                             causing ambiguity about the application of certain
//                             regulations. Making it difficult for fintechs to
//                             operate in a predictable environment, while actively
//                             following related laws put in place.
//                           </li>
//                           <li>
//                             Fraud: Frauds like payment fraud and identity theft
//                             endanger fintech users’ privacy extensively. These
//                             frauds can be easily avoided with highly effective
//                             systems put into place.
//                           </li>
//                           <li>
//                             Evolving regulations: Fintech regulations are
//                             changing in a rapidly evolving Pakistani
//                             environment. Posing challenges relating to how these
//                             regulations will be applied to products and
//                             services.
//                           </li>
//                           <li>
//                             Consumer protection risks: Pakistani fintech
//                             companies need to make sure that their target market
//                             is comfortable sharing confidential information with
//                             them. For example, products or services need to
//                             provide clear and concise terms and conditions to
//                             sign up so they are protected from frauds including
//                             identity-theft and payment fraud.
//                           </li>
//                         </ul>

//                         <p>
//                           {" "}
//                           Fintech offers a number of opportunities for business
//                           and consumers alike. It is important to be aware of
//                           the dangers and implications associated with the
//                           medium. As they operate in a new and immature
//                           vertical, fintech companies have considerably less
//                           competition and there is greater scope for innovation.
//                           If the related uncertainties are successfully
//                           challenged.
//                         </p>
//                         <p>
//                           Overall, the financial technology sector is a
//                           promising but risky domain. Businesses and users
//                           should carefully consider the risks and rewards before
//                           pursuing fintech initiatives.
//                         </p>
//                       </div>
//                       <div className={BlogThreeStyle.main___conatiner2}>
//                         <h3 className="w3-text-grey">
//                           Fintech’s Future in Pakistan
//                         </h3>
//                         <p>
//                           payment systems, which are expected to grow in the near
//                           future. Fintech companies are changing the way
//                           underbanked and unbanked Pakistanis are offered
//                           financial services. Digital payment systems eliminate
//                           barriers to financial inclusion by providing easy and
//                           secure ways to send and receive money.
//                         </p>
//                         <p>
//                           When tailored hybrid software is utilised, Pakistanis
//                           in underserved areas can also cooperatively confirm
//                           and efficiently record their physical cash payments
//                           upon receival
//                         </p>
//                         <p>
//                           Carefully studying the current influence of fintech in
//                           The Pakistani Region is crucial to take full advantage
//                           of the financial situation. People of the country can
//                           apply the latest tailored developments for seizing the
//                           abundant opportunities fintech brings forward.
//                           Incumbent and existing fintech outlets are devoted to
//                           providing users with practical technology which can be
//                           used to simplify their routine financial tasks.
//                         </p>
//                       </div>
//                       <div
//                         className={BlogThreeStyle.main___conatiner_work_center}
//                       >
//                         <h3 className="w3-text-grey">Work Cited</h3>
//                         <ol className={BlogThreeStyle.islamic__ul}>
//                           <li>
//                             State Bank of Pakistan(SBP). “FinTech - Pakistan.”
//                             Statista,{" "}
//                             <a
//                               href="https://www.statista.com/outlook/
//                             dmo/fintech/pakistan#key-market-indicators"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               https://www.statista.com/outlook/
//                               dmo/fintech/pakistan#key-market-indicators
//                             </a>
//                             . Accessed 3 November 2023.
//                           </li>
//                           <li>
//                             State Bank of Pakistan. “Special Section: Pakistan's
//                             Growing IT Exports and Tech Start- ups:
//                             Opportunities and Challenges1.” State Bank of
//                             Pakistan,{" "}
//                             <a
//                               href="https://www.sbp.org.pk/reports/half/
//                             arFY23/SpecialSection.pdf"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               https://www.sbp.org.pk/reports/half/
//                               arFY23/SpecialSection.pdf
//                             </a>
//                             . Accessed 3 November 2023.
//                           </li>
//                           <li>
//                             “Fintech sector’s growth shaping Pakistan’s future -
//                             Opinion.” Business Recorder, 3 September 2022,
//                             <a
//                               href="https://www.brecorder.com/news/40195419"
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               https://www.brecorder.com/news/40195419
//                             </a>
//                             . Accessed 3 November 2023.
//                           </li>
//                         </ol>
//                       </div>
//                     </div>
//                     <div className={BlogThreeStyle.border__line}></div>
//                     <div className={BlogThreeStyle.second__para_container}>
//                       <p style={{ width: "300px" }}>
//                         Why Fintech Matters: Exploring the Transformation of
//                         Finance in Pakistan
//                       </p>
//                       <div className={BlogThreeStyle.second__para_container1}>
//                         <p>Understanding Fintech as a Pakistani</p>
//                         <p>Key Fintech Outlets in Pakistan</p>
//                         <p>Mainstream Banking vs. Fintech</p>
//                         <p>Government Initiatives and Regulations</p>
//                         <p>Challenges and Concerns for Pakistani Fintechs</p>
//                         <p>Fintech Risks and Considerations for Pakistan</p>
//                         <p>Fintech’s Future in Pakistan</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div id="LinkIconMain">
//                 <div id="BoxPointer">
//                   <i class="fab fa-facebook-f"></i>
//                 </div>
//                 <div id="BoxPointer">
//                   <i class="fab fa-twitter"></i>
//                 </div>
//                 <div id="BoxPointer">
//                   <i class="material-icons">email</i>
//                 </div>
//                 <div id="BoxPointer">
//                   <i class="fab fa-linkedin-in"></i>
//                 </div>
//               </div>
//               <p className="text-center ">
//                 Share across your favourite social media!
//               </p>
//             </div>

//             <hr />
//             <div class="d-flex flex-wrap justify-content-center">
//               <div
//                 class="card m-2 p-2 col-sm-3"
//                 style={{
//                   background: "#81AFD9",
//                   color: "white",
//                   textAlign: "center",
//                   borderRadius: "13px",
//                 }}
//               >
//                 <div class="container">
//                   <h4>
//                     <b className="text-white">TecStik</b>
//                   </h4>
//                   <p>
//                     Managing Physical Cash Payment Risks in Pakistan's Cash
//                     Economy
//                   </p>
//                 </div>
//                 <img
//                   src={whitepaper}
//                   alt="Avatar"
//                   // style={{ width: "40vh", height: "50vh" }}

//                   className="m-2"
//                 />
//               </div>
//               <div class="col-sm-4">
//                 <br />
//                 <div class="container">
//                   <h4>
//                     <b>Get your free white paper.</b>
//                   </h4>
//                   {/* <p>Architect & Engineer</p> */}
//                   {/* <br /> */}
//                   <div class="form-outline">
//                     <input
//                       type="email"
//                       // id="typeNumber"
//                       class="form-control mt-3"
//                       style={{ background: "#F1F1F1" }}
//                       placeholder="Your Email Address"
//                     />
//                     {/* <label class="form-label" for="typeNumber">
//                         Email
//                       </label> */}
//                   </div>
//                   <br />
//                   <span type="button" class="btn btn-warning btn-rounded">
//                     SUBMIT
//                   </span>
//                   <br />
//                   <br />
//                   <br />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
