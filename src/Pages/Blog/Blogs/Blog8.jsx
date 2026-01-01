import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import StoreContext from "../../../ContextApi";
import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import BlogThreeStyle from "./BlogThree.module.css";
import handImg from "../BlogImages/Blog4Images/Blog.png";
import BannerImg from "../BlogImages/Blog8images/blog8bannerimage.png";
import BlogeightContentImg from "../BlogImages/Blog8images/Blog8Contentimage.png";
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
            <div id="banner_18_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
              The Hidden Risks of Financial Reporting
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
                      className="table_my_res"
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
                      The Hidden Risks of Financial Reporting
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
                      Inaccurate reporting of payments and receivals will be
                      exceedingly perilous, impacting your objectives of
                      financial reporting negatively. Often bringing adverse
                      effects of suboptimal business and investment choices,
                      financial penalties imposed by regulators, and harm to
                      reputation.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      It is easy to steer clear of inaccurate payment and
                      receival reporting by applying specialised software
                      designed to tackle that issue. After selecting the most
                      reliable software solutions to address inaccurate
                      reporting, you will improve overall financial planning for
                      your business or personal endeavours and achieve your
                      optimal objectives of financial reporting. Analysing the
                      emerging issues proves beneficial in understanding the
                      challenges to figure out effective solutions tailored to
                      address payment problems when they arise. Unleashing the
                      power of a game-changing solution to conquer payment
                      collection challenges requires precise analysis and
                      resolute action.
                    </p>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading1">
                        Research and Select Reliable Software
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Looking for reputable software solutions specifically
                        designed for accurately achieving your objectives of
                        financial reporting is vital. If you do not make an
                        informed pick of the most dependable and reliable
                        fintech software, significant challenges will be faced.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Real-life examples of difficulties encountered after
                        businesses or individuals fail to research and select
                        reliable fintech software include:
                      </p>
                      <p className="w3-text-grey table_Justify">
                        1. Using software without robust security measures will
                        lead to data breaches, compromising sensitive financial
                        information and exposing the business or individuals to
                        financial and reputational damage.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        2. Tasks may become time-consuming, prone to errors, and
                        lack the assistance brought by automation features.
                        Hindering productivity and operational efficiency.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        3. Incompatibility with existing systems in businesses
                        may cause integration of new software into their
                        infrastructure to be perilous leading to: data
                        discrepancies, errors, and disruptions in financial
                        processes.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        4. Inadequate research may result in selecting software
                        that lacks scalability to accommodate business growth.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        5. Limited support and updates will leave businesses or
                        individuals without essential bug fixes, security
                        patches, and new features.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        6. Overpaying for unnecessary features or
                        underestimating ongoing maintenance costs will strain
                        budgets and impact financial sustainability.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        These real-life challenges emphasise the importance of
                        researching and selecting reliable fintech software
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Read reviews and compare features to choose a reliable
                        option that meets your business needs.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.img_container}>
                      <img src={BlogeightContentImg} alt="logo" />
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading2">
                        Initiating Software
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Adopting the necessary Fintech Software is essential for
                        enhancing efficiency, accuracy, decision-making,
                        regulatory compliance, scalability, competitive
                        advantage, collaboration, and customer satisfaction.
                        Empower your business to thrive in today’s digital
                        landscape.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Choose user-friendly software to integrate into your
                        system for seamless payment and receivable processes.
                        Achieving ease of use, streamlined processes, shorter
                        learning curves, improved efficiency, and enhanced user
                        satisfaction.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        It is crucial to establish a well-rounded approach when
                        employing Fintech. Some notable steps to take are listed
                        below.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        1. Needs assessment: Identify your specific requirements
                        and goals for implementing fintech software. Evaluate
                        existing processes and determine areas where the
                        software will add value and improve efficiency.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        2. Customisation and configuration: Have your software
                        provider tailor fintech software to match your specific
                        business processes and requirements. Customise settings,
                        workflows, and integrations to maximise its
                        effectiveness and seamless integration with existing
                        systems.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        3. Data migration: If applicable, migrate relevant data
                        from legacy systems to the new fintech software. Ensure
                        a smooth transition of data by following best practices,
                        verifying data integrity, and performing thorough
                        testing.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        4. Training and education: Provide training sessions and
                        educational resources to users who will be utilising the
                        fintech software. Ensure that employees understand its
                        features, functionalities, and how it aligns with their
                        roles and responsibilities.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        5. Rollout and adoption: Gradually introduce the fintech
                        software to your organisation or department, to ensure a
                        smooth transition. Encourage user adoption and provide
                        ongoing support to address questions or issues that
                        arise.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        6. Monitoring and evaluation: Continuously monitor the
                        performance and usage of the fintech software. Collect
                        feedback from users and stakeholders to identify areas
                        for improvement and address any concerns promptly.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        7. Continuous improvement: Regularly review the
                        effectiveness of the fintech software and make necessary
                        adjustments or enhancements to optimise its performance.
                        Stay updated with software updates and new features to
                        leverage the latest advancements.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading3">
                        Automate Data Entry
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Leverage fintech software's automation capabilities to
                        eliminate manual data entry. This reduces the chances of
                        human errors and ensures data accuracy. When your
                        accountant or cashier needs confirmation of payments
                        received, they should digitally sync with their
                        counterparts' records.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        A Hybrid App that provides confirmation OTPs for
                        reliable collection and fulfilment effectively overcomes
                        the inaccuracies of reporting. Your finances will be
                        free of unreliable payment delivery when OTPs received
                        by your customers on their mobiles will be used to
                        confirm their receival of payment(s). Abundant benefits
                        with Automated Data Entry will get you firing on all
                        cylinders.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Automating data entry offers enhanced accuracy, time
                        savings, cost reduction, improved data integrity,
                        scalability, integration capabilities, data analysis and
                        reporting, reduced compliance risks, and audit trail
                        functionality with increased efficiency.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading4">
                        Standardise Recording Procedures
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Establish standardised procedures for recording payments
                        and receivables within the software. Assign users of
                        your software for collection, delivery, and approvals.
                        Define clear guidelines and train your team to follow
                        them consistently, ensuring consistency and reliability
                        in reporting.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        When collection and delivery is complete, latest
                        software enables the automated delivery of an OTP to
                        validate.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading5">
                        Validate and Verify Data
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Utilise latest software's built-in validation and
                        verification features. These will help identify
                        discrepancies, flag potential errors, and prompt
                        corrective actions before submitting the data for
                        reporting.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        Harness cutting-edge software to capitalise on the
                        automated distribution of an OTP that validates.
                        Employing the advanced features of the most recently
                        launched hybrid software, comes with
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading6">
                        Regularly Reconcile Accounts
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Perform regular reconciliations between your financial
                        records and the software's reported data. This helps
                        identify any discrepancies or anomalies and ensures the
                        accuracy of your payment and receivable reporting.
                      </p>
                    </div>

                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" id="heading7">
                        Conduct Internal Audits
                      </h3>
                      <p className="w3-text-grey table_Justify">
                        Periodically conduct internal audits to assess the
                        effectiveness of software and ensure compliance with
                        reporting standards. Identify any areas of improvement
                        and take corrective measures.
                      </p>
                      <p className="w3-text-grey table_Justify">
                        By implementing the steps outlined above and utilising
                        specialised software, the hidden risks of financial
                        reporting will be reduced. Remember, the software is a
                        valuable tool, but it requires proper execution,
                        training, and monitoring to ensure optimal results.
                        Embrace a supportive software team, their training
                        resources, and vigilant monitoring for overcoming the
                        hidden risks of financial reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">
                {/* <div className={BlogThreeStyle.border__line8}></div> */}
                <h6 className="table_my_res" style={{ padding: "10px 0px", fontSize: "1.5rem" }}>
                  Table of Contents
                </h6>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <p>
                      <a href="#heading1">
                        Research and Select Reliable Software
                      </a>
                    </p>
                    <p>
                      <a href="#heading2">Initiating Software</a>
                    </p>
                    <p>
                      <a href="#heading3">Automate Data Entry</a>
                    </p>
                    <p>
                      <a href="#heading4">Standardise Recording Procedures</a>
                    </p>
                    <p>
                      <a href="#heading5">Validate and Verify Data</a>
                    </p>
                    <p>
                      <a href="#heading6">Regularly Reconcile Accounts</a>
                    </p>
                    <p>
                      <a href="#heading7">Conduct Internal Audits</a>
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
