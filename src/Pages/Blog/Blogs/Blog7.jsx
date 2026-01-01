import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import StoreContext from "../../../ContextApi";
import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import BlogThreeStyle from "./BlogThree.module.css";
import handImg from "../BlogImages/Blog4Images/Blog.png";
import BannerImg from "../BlogImages/Blog7image/block7bannerimage.png";
import BlogsevenContentImg from "../BlogImages/Blog7image/blog7contentImage.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function BlogSeven({ copyText }) {
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
            <div id="banner_17_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              The Impacts of Strategic Budgeting Methods on Business

              <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-180px", right: '60px', color: "white", }} className="author_none">
                <div>
                  <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Author: Azfar Saleem</p>
                </div>
                <div style={{ display: "flex", gap: '3px' }}>
                  <CalendarMonthIcon style={{ position: "relative", top: '4px' }} />
                  <p style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: "bold" }}>Updated on: 3/7/24</p>
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
          <div style={{ margin: "0px 30px", marginTop: "-50px" }}>
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
                    <h1 className="table_my_res" style={{ fontSize: "3rem", background: "#81AFD9", padding: '3px 3px', position: "relative", top: "-65px" }}>
                      The Impacts of Strategic Budgeting Methods on Business
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
                      If you envision a positive cash flow for your business,
                      well-defined strategic budgeting methods are pivotal to
                      your success. These approaches become ideal components of
                      increased profitability and sensible investments.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      A budget is an outline of the expected costs and income
                      beared or earned by business(es). Organisations
                      occasionally change their budgets according to
                      performance. Laying out a financial plan for incurring
                      expenses or generating revenue allows ventures to create
                      an effective budget that all internal stakeholders will
                      follow.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Outlining Strategic budgeting methods allows companies to
                      uncover suitable ways to expand their business(es). When a
                      company has an effectives budget in place, managers can
                      ensure there is sufficient income to relieve anticipated
                      expenses or abrupt costs. A roadmap for financial futures
                      is available when creating budgets. Whether aiming to save
                      for a big purchase or simply looking into gaining control
                      of spending(Oboloo), mastering the art of budgeting is
                      essential.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Effectively planning and implementing strategic budgeting
                      methods for business enable democratic communicative
                      action among corresponding business departments. Reducing
                      chances of a scathing corresponding financial system. Once
                      a schematic financial budget is in place, each department
                      within a company will plan their expenses accordingly.
                      Creating a strong foundation for financial security.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Devoid of strategic budgeting methods for financial
                      management, businesses suffer far-reaching constraints.
                      Shortage of budgets can lead to uninformed financial
                      decisions.
                    </p>
                    <p className="w3-text-grey">1. Failure is imminent,</p>
                    <p className="w3-text-grey">
                      2. Resulting in a lack of accountability,
                    </p>
                    <p className="w3-text-grey">
                      3. Businesses may set impractical expectations,{" "}
                    </p>
                    <p className="w3-text-grey">
                      4. Cash flow issues may arise.{" "}
                    </p>
                    <p className="w3-text-grey table_Justify" style={{ padding: "5px 0px" }}>
                      These circumstances are avoidable if a well-planned budget
                      is in order. Analysing available capital, targeted
                      revenue, and predicting future expenses allow businesses
                      to make informed financial decisions.
                    </p>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading1">
                        The Art of Expense Management
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Achieving financial goals heavily relies on tracking,
                        budgeting and controlling business expenses. Regardless
                        of a company’s or an institution’s financial situation,
                        the art of mastering expenses yields numerous strengths.
                        Expense management need not only be done by experienced
                        professionals. Anyone can become proficient in the skill
                        by carefully analysing regular expenses, planning out
                        prospective costs, spending monetary resources wisely
                        and efficiently reaching their financial goals.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        It is imperative to be cleverly mindful about corporate
                        expenses, otherwise businesses can be unavoidably faced
                        with overriding problems
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading2">
                        Pitfalls of Ignoring Strategic Budgeting Methods
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        1. Huge credit problems: Without budgeting successfully
                        enough to pay off suppliers, distributors of your raw
                        materials or products, they will not be comfortable
                        working with you or your business again. These effects
                        may easily spill on to your other suppliers or
                        distributors from which vital material is needed.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        2. Excessive debt: Uncontrolled spending can also lead
                        to the financial burden of repaying them. Making your
                        business inefficiently productive to produce profits
                        after burdens of previous charges have been uplifted.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        3. Financial instability: Insecurities emerge in
                        finances when there is mismanagement of expenditures.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.img_container}>
                      <img src={BlogsevenContentImg} alt="logo" />
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading3">
                        Premium Strategic Budgeting Methods
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        If a business’ strategic budgeting methods are created
                        and well-executed, it will trigger a prolific surge in
                        collaborative productivity. Once meticulously
                        implemented, a skillfully crafted budget is advantageous
                        for all types of businesses:
                      </p>
                      <p className="w3-text-grey table_Justify">
                        1. Accomplishments planned for the future can be
                        recorded, to determine which business operations are to
                        be prioritised.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        2. Estimates of expenses and income give a comprehensive
                        understanding of how much income is needed to spend on
                        expenditures.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        3. Being flexible enough to change budgets according to
                        realities, allow for appropriate adjustments.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Excelling in the art of expense management for business
                        brings an impeccable touch to your organisational
                        operations. With meticulous practices of incurring the
                        right expenses and projecting income appropriately, the
                        perks mentioned above can be realised by budgeting
                        relative finances. Following we discuss ideal strategic
                        budgeting methods for business:
                      </p>

                      <p
                        className="w3-text-grey table_Justify"
                        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                        id="heading4"
                      >
                        1. Budgeting from Scratch:
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Businesses that start off their operations or projects
                        by organising their net income, set a framework for
                        prescribing their business tactics. In case(s) of rising
                        costs and spending more in an upcoming year instead,
                        creating a new budget will allow businesses to control
                        their spending to make certain that funds are assigned
                        efficiently.
                      </p>

                      <p
                        id="heading5"
                        className="w3-text-grey"
                        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        2. Adaptive Budgeting:
                      </p>
                      <p className="table_Justify">
                        To dodge frugal financial outlay, adaptive budgeting is
                        commonly used according to a business’s circumstance(s).
                        For example, if your clothing boutique offers clothes
                        for winters, you can’t expect higher or equivalent sales
                        in summers. In short, you will need to make sure the
                        costs your income is unable to justify. With adaptive
                        budgeting you can earn the revenue your business needs
                        and leave a lasting impact on your business’ revenue,
                        its workers and customers.
                      </p>

                      <p
                        id="heading6"
                        className="w3-text-grey table_Justify"
                        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        3. Operational Budgeting:
                      </p>
                      <p className="table_Justify">
                        This budgeting approach can be applied to track which
                        activity’s related costs can be reduced to have more
                        finances to allocate elsewhere. For instance AI can
                        create specific financial reports, freeing up a worker's
                        time to focus on other responsibilities.
                      </p>

                      <p
                        id="heading7"
                        className="w3-text-grey table_Justify"
                        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        4. Exception Reporting:
                      </p>
                      <p className="table_Justify">
                        When a business’s spending is not in line with revenue
                        gains, challenges surface in reconciling such
                        differences. Gratefully, when accounting exception
                        reports detail verifiable income values and expenses
                        that fail to offset each other, the variance(s) can be
                        identified. Once created, these exceptions can be
                        studied to make them things of the past and defeat those
                        obstacles specifically.
                      </p>
                      <p className="table_Justify">
                        Strategic budgeting methods are a welcome relief for
                        existing or modern businesses. Budgeting strategies are
                        key for securing profitability, assigning
                        accountability, setting realistic expectations and
                        enhancing cash flow.
                      </p>
                      <p className="table_Justify">
                        Renowned learning aid, is commonly utilised to learn
                        about the benefits presented by budgeting procedures.
                        Several softwares are also available to assist you in
                        making better financial decisions for business. Embark
                        on a fruitful journey of distinguishing the ideal
                        budgeting strategies you can adopt for cost-effective
                        earnings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">
                {/* <div className={BlogThreeStyle.border__line7}></div> */}
                <h6 className="table_my_res" style={{ padding: "10px 0px", fontSize: "1.5rem" }}>
                  Table of Contents
                </h6>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <p>
                      <a href="#heading1">The Art of Expense Management</a>
                    </p>
                    <p>
                      <a href="#heading2">
                        Pitfalls of Ignoring Strategic Budgeting Methods
                      </a>
                    </p>
                    <p>
                      <a href="#heading3">
                        Premium Strategic Budgeting Methods
                      </a>
                    </p>
                    <p>
                      <a href="#heading4">1. Budgeting from Scratch:</a>
                    </p>
                    <p>
                      <a href="#heading5">2. Adaptive Budgeting:</a>
                    </p>
                    <p>
                      <a href="#heading6">3. Operational Budgeting:</a>
                    </p>
                    <p>
                      <a href="#heading7">4. Exception Reporting:</a>
                    </p>
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
                  <h4>
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
