import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import StoreContext from "../../../ContextApi";
import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import BlogThreeStyle from "./BlogThree.module.css";
import handImg from "../BlogImages/Blog4Images/Blog.png";
import BannerImg from "../BlogImages/blogimages6/payment6banner.png";
import PaymentContentImg from "../BlogImages/blogimages6/paymentcontentimage.png";
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
            <div id="banner_16_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              Payments in A Cash Economy
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
                      Payments in A Cash Economy
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
                      “In short, if you only want to consider all the physical
                      notes and coins in the world, US $11.4 trillion is
                      estimated to exist across all countries and currencies as
                      of January 2023.” - trading.biz
                    </p>
                    <p className="w3-text-grey table_Justify">
                      The cash economy refers to the portion of the economy that
                      operates outside of the formal banking and financial
                      system. In these economies, transactions are conducted
                      using physical cash rather than through formal banking
                      systems. Including everything from small cash transactions
                      between individuals to those between large-scale
                      cash-based businesses.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      According to a 2020 report by the World Bank, cash
                      transactions account for around 85% of global transactions
                      by volume, with only 15% being non-cash transactions. This
                      leads to cash-based economies where cash transactions are
                      common.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      According to a 2020 report by the World Bank, cash
                      transactions account for around 85% of global transactions
                      by volume, with only 15% being non-cash transactions. This
                      leads to cash-based economies where cash transactions are
                      common.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      The importance of the cash economy lies in its ability to
                      provide financial services to people who may not have
                      access to traditional banking and financial systems. This
                      covers individuals who are unbanked or underbanked, as
                      well as small businesses and entrepreneurs who may not
                      have the resources to establish a formal banking
                      relationship.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Cash transactions can also provide a level of anonymity
                      and privacy that may be desirable for some individuals and
                      businesses. Additionally, cash can be a more reliable and
                      secure form of payment in situations where digital or
                      electronic systems may be vulnerable to hacking or system
                      failures.
                    </p>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading1">
                        The Global Cash Economy
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Regardless of new forms of payments emerging, physical
                        currency still trumps electronic methods relatively. 85%
                        of all of the world’s transactions are performed in the
                        form of physical cash. The global population prefers to
                        use this form of cash due its universal acceptance and
                        convenience.
                      </p>
                      <h5
                        className="w3-text-grey table_my_res"
                        id="heading2"
                        style={{ padding: "10px 0px" }}
                      >
                        The Advantages of a Cash Economy
                      </h5>
                      <p className="w3-text-grey table_Justify">
                        1. Lower transaction costs: Cash transactions generally
                        have lower transaction costs compared to electronic or
                        digital payments, which can involve fees, processing
                        costs, and other expenses.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        2. Increased security: Cash transactions can provide a
                        higher level of security for businesses, as there is no
                        risk of chargebacks or fraud associated with digital
                        payments.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        3. Improved cash flow management: Cash transactions can
                        be processed and settled instantly, which can improve
                        cash flow management for businesses.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        4. Anonymity and privacy: Cash transactions can provide
                        a level of anonymity and privacy for businesses that may
                        be desirable in certain situations.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        5. Wider customer base: Accepting cash payments can
                        allow businesses to cater to customers who may not have
                        access to digital or electronic payment options, such as
                        those who are unbanked or underbanked.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        6. Flexibility: Cash payments can be made in any
                        denomination, making them a flexible payment option for
                        businesses.
                      </p>
                      <p
                        style={{ padding: "10px 0px" }}
                        className="w3-text-grey table_Justify"
                      >
                        With the global preference of physical cash in monetary
                        transactions, it does come with several drawbacks.
                        Significant ones involving inefficiency business and
                        personal productivity are listed below
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading3">
                        The Disadvantages of a Cash Economy
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        1. Lack of accountability: Without precise and accurate
                        payment tracking, account discrepancies undoubtedly
                        arise among parties. Lacking a cooperative exchange of
                        cash leads to loss of revenue, inefficiencies in
                        financial transactions, financial confusion and
                        disputes.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        1. Limited record-keeping: Until recently, the only way
                        to keep accurate records of payments was through a
                        telephone call. These calls are seldom recorded and
                        there is no method to ensure payments received or
                        distributed. With the ideal software to record and
                        confirm accurate transactional information, the problems
                        can be easily avoided.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        1. Security Concerns: This drawback includes
                        misappropriation of cash by staff. Through the
                        deployment of appropriate software, this issue can be
                        easily evaded. Once you gaurantee the receiving or apt
                        disbursement of payments, there will be virtually no
                        reason to raise an argument concerning worker fund
                        misappropriation.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Void of natural demographic changes, the decline of cash
                        is quite far-sighted. Businesses and individuals find
                        better advantages in operating with cash use. It is
                        always better to go with the flow then reinvent the
                        wheel, after all.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.img_container}>
                      <img src={PaymentContentImg} alt="logo" />
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading4">
                        The Future of Cash
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Internationally, cash payments are generally viewed as
                        declining but reports have been highly overstated. As
                        compared to the pandemic era of reduced cash use, people
                        have just been withdrawing increased amounts of cash
                        from ATMs. Indicating that physical cash usage prevails
                        and is likely to still surpass online modes of payment
                        options.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Physical cash is not only a choice in cash economies.
                        It’s also believed to be the ultimate store of value in
                        most digital-economies like the USA and those in most of
                        Europe. The unbanked, underbanked and senior citizen
                        populace of the world are inclined towards using
                        physical cash since it is immediately available for
                        making their corresponding payments. Increasingly,
                        businesses also gravitate towards physical cash payments
                        since buying or selling on credit entails unnecessary
                        fees from the party providing loans.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Wrapping it up, it is clear that the use of physical
                        cash isn’t going away anytime soon. Given the wide use
                        of cash among the unbanked, underbanked, its lower
                        transaction costs, improved accessibility, optimised
                        cash flow management and accessibility, are strong
                        reasons supporting its use.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Secure from large-scale cyberattacks, providing
                        convenience, protecting from identity-theft and having
                        almost universal-acceptance, using cash is globally
                        regarded as among the best instruments to make regular
                        payments. A tailored software is necessary to enhance
                        such payment methods to decrease discrepancies,
                        streamline accountability, boost record-keeping and
                        refine appropriation of funds.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        If you wish to learn more about how to optimally handle
                        physical cash-payment risks in a Cash Economy, a
                        detailed whitepaper is available outlining: “Managing
                        Physical Cash Payment Risks in Pakistan’s Cash Economy”.
                        Enter your email and download the report right away.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">
                {/* <div className={BlogThreeStyle.border__line6}></div> */}
                <h6 className="table_my_res" style={{ padding: "10px 0px", fontSize: "1.5rem" }}>
                  Table of Contents
                </h6>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <p>
                      <a href="#heading1">The Global Cash Economy</a>
                    </p>
                    <p>
                      <a href="#heading2">The Advantages of a Cash Economy</a>
                    </p>
                    <p>
                      <a href="#heading3">
                        The Disadvantages of a Cash Economy
                      </a>
                    </p>
                    <p>
                      <a href="#heading4">The Future of Cash</a>
                    </p>
                  </div>
                </div>
              </div>


              <div id="LinkIconMain">
                <div id="BoxPointer" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div id="BoxPointer" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <i class="fab fa-twitter"></i>
                </div>
                <div id="BoxPointer" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <i class="material-icons">email</i>
                </div>
                <div id="BoxPointer" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
