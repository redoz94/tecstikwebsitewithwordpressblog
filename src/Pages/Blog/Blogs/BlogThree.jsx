import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CircleImg from "../BlogImages/blog3images/blog3.png";
import StoreContext from "../../../ContextApi";
import ecnomis from "../BlogImages/ecnomis.png";
import growth from "../BlogImages/growth.png";
import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";
import BlogThreeStyle from "./BlogThree.module.css";
import tabletImg from "../BlogImages/blog2images/tablet.png";
import chartImg from "../BlogImages/blog2images/Untitled--1.png";
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
            <div id="banner_13_image"></div>
            <div class="overlay"></div>
            <div class="banner_text__1">
            The Future of Fintech in Pakistan: <br />The Next Frontier
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
                <div className="blog-post table_my_res">
                  {/* <div className="main_text_center">
                    <h1 id="heading" style={{ fontSize: "3rem", background: "#81AFD9", padding: '3px 3px', position: "relative", top: "-65px" }}>
                      The Future of Fintech in Pakistan: <br />The Next Frontier
                    </h1>
                    <p></p>
                    <div style={{ display: "flex", gap: "45px", position: "absolute", bottom: "-80px", right: '60px' }}>
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
                    <p className="w3-text-grey table_Justify" id="heading1">
                      “The future belongs to those who can rise above the technology and master it.” – Jamie Dimon, CEO of JPMorgan Chase.
                    </p>
                    <p className="w3-text-grey table_Justify">
                      Fintech or financial technology is among the latest trends adopted by consumers and businesses to enhance their fiscal processes. Users build financial success with fintech’s convenient, streamlined and cost-effective functionalities.
                    </p>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey">What is Fintech?</h3>
                      <p className="table_Justify">
                        As a prominent driving force behind thriving businesses and individuals, fintech brings:
                      </p>
                      <ul className="flex">
                        <li id="heading2">Financial inclusion,</li>
                        <br />
                        <li>Financial freedom,</li>
                        <br />
                        <li>Cost reduction,</li>
                        <br />
                        <li>Decreased operational expenses,</li>
                        <br />
                        <li>Convenient transactions.</li>
                      </ul>
                      {/* <p className="table_Justify">
                        Fintech is poised to change the lives of the Pakistani population.
                      </p> */}
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey" id="heading3">
                        Fintech’s Impact on Pakistan
                      </h3>
                      <p className="table_Justify">
                        Fintech in Pakistan comes with notable financial advancement for local businesses and residents. Keeping an authoritative eye on fintech in Pakistan, the country’s government introduces numerous <a href="https://www.sbp.org.pk/dfs/Fintech.html" target="_blank" rel="noopener noreferrer">policies</a> to promote the use of fintech applications. Encouraging fintech creators to innovate additional products and services.
                      </p>
                      <p className="table_Justify">
                        Owing to the government’s support, educational campaigns of finance and regulatory policies for fintech have been introduced in Pakistan. These steps have enabled the mass proliferation of fintech in business and the daily routines of citizens. Bringing the current state of fintech in Pakistan to productive levels, helping to realize a promising future of fintech in Pakistan.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey" id="heading4">
                        Future of Fintech in Pakistan: Key Drivers
                      </h3>
                      <p className="table_Justify">
                        Pakistan has witnessed an upsurge in a young, technology-proficient adult population. Coupled with government support and rising internet penetration, the south-Asian nation where 51% mobile phone owners are smartphone owners. On the business side: skilled tech talent and low operational costs are compelling reasons behind the vibrant future of fintech in Pakistan.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey">
                        The Current State of Fintech in Pakistan
                      </h3>
                      <p className="table_Justify">
                        Fintech has a positive influence on The Pakistani Economy. By the end of 2023, <a href="https://www.statista.com/outlook/dmo/fintech/pakistan#key-market-indicators" target="_blank" rel="noopener noreferrer">65 million</a> folks in the country will be using fintech through their smartphones or computers. Apps like EasyPaisa are now even leveling the financial services playing field, for people from all walks of life.
                      </p>
                      <p className="table_Justify">
                        Fintech outfits are providing traditional financial services to underserved Pakistani countrymen that they can avail from the smart-devices in their pockets and their desktops. Mobile banking, mobile lending and mobile payments are just a few among the fintech services that locals can conveniently access.
                      </p>
                      <p className="table_Justify" id="heading5">
                        Lowering costs of financial services and promoting financial education are prolific advantages of fintech use in the country. Owing to the increasing affordability of smartphones, there were <a href="https://www.aajenglish.tv/news/30333342#:~:text=%E2%80%9CThere%20were%2087.35%20million%20internet,population%2C%E2%80%9D%20according%20to%20DataReportal." target="_blank" rel="noopener noreferrer">87.35 million internet users</a> in Pakistan in the beginning of 2023 - a significant chunk of the population. Inhabitants of the region are swiftly becoming digitally-savvy, financially literate and suitably collaborative: resulting in the wide-use of fintech among the masses.
                      </p>

                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey" >
                        Fintech Success Stories in Pakistan
                      </h3>
                      <p className="table_Justify">
                        Due to widespread fintech use, there are various fintech platforms flourishing in Pakistan. Digital payments, branchless banking and peer-to-peer lending are popular fintech subdomains functioning today.
                      </p>
                      <p className="table_Justify">
                        Assisting users to pay bills, make payments and send money, digital payment platforms including EasyPaisa by Telenor Pakistan are pioneers of online payment gateways facilitating exchanges of remittances. EasyPaisa and similar platforms have seen their user bases <a href="https://insights.datadarbar.io/easypaisa-losses-and-the-heavy-cost-of-growing-digital-payments/" target="_blank" rel="noopener noreferrer">skyrocket,</a> thanks to extensively available and affordable mobile phones. Such fintech systems have significantly <a href="https://journals.pakistanreview.com/index.php/PRSS/article/download/180/115">expanded</a> financial inclusion, since electronic fintech installments allow ease of transferring money to external accounts all around the country.
                      </p>
                      <p className="table_Justify">
                        Mobile money used in branchless banking apps is gaining popularity in Pakistan. With well-built banking apps, several traditional banks are now offering many of their services via mobile-software. Visiting a bank’s branch was the only way to gain access to banking services in the past, now bank customers can easily login to their corresponding bank’s application and take advantage of services offered to them at physical bank outlets.
                      </p>
                      <p className="table_Justify">
                        As a peer-2-peer lending application, Finja has emerged as the first hybrid application serving as a practical medium for people to send and receive loans for their purposes. With Finja, SMEs and the underbanked can acquire loans from banks like Bank Alfalah after relevant details are verified.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.img_container}>
                      <img src={tabletImg} alt="logo" id="heading6" />
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey">
                        Regulations Affecting Fintech in Pakistan
                      </h3>
                      <p className="table_Justify">
                        Regulatory fintech frameworks are built by the administration of Pakistan that accommodate fintech mechanisms. Interested parties need to obtain necessary licenses that lead to lagging-development of fintech endeavors. If regulations or licenses do exist for fintech establishments, lack of their awareness is a tough reality for fintech cooperatives.
                      </p>
                      <p className="table_Justify" id="heading7">
                        Despite these demanding obstacles, fintech institutions can capitalize on a number of enticing opportunities, namely:
                      </p>
                      <ol className="flex">
                        <li>A burgeoning fintech market,</li>
                        <li>Price-friendly infrastructure,</li>
                        <li>
                          A fintech regulatory sandbox and national fintech policy introduced by the regime,
                        </li>
                        <li>Digital native civilians.</li>
                      </ol>
                      <p className="table_Justify">
                        Exploring the benefits and challenges of introducing, operating or utilizing fintech will ensure fintech stakeholders realize the possibilities to leverage. Along with the potential rewards that help streamline fintech from both consumer and developer perspectives.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey">
                        Traditional Finance and Fintech
                      </h3>
                      <p>Poised with the edge of innovation and agility, fintech startups have come across as remarkably valuable to existing banks to help them reach their customer-base. Customary finance institutions partnering up with fintech providers is still in its early stages, but the upsides are clearly visible. Just like Bank Alfalah and Finja’s partnership.</p>
                      <p>More notable examples are:</p>
                      <ol>
                        <li>
                          Partnering up with Telenor Microfinance Bank, The National Bank of Pakistan (NBP) now offers mobile banking services. This move is allowing The NBP to provide its huge customer base with mobile banking services through the Telenor Microfinance Bank’s functionalities.
                        </li>
                        <li>
                          Takaful Pakistan and Roshan Digital Account - launched by The State Bank of Pakistan have partnered to distribute shariah-compliant (islamically legal) loans and additional banking services to customers online.
                        </li>
                        <li id="heading8">
                          With Easypaisa, Pakistanis can easily pay relevant entities on the internet according to its partnership with State Bank of Pakistan’s bringing increased cashless transactions.
                        </li>
                      </ol>
                      <p className="table_Justify">
                        Partnerships between traditional financial institutions of Pakistan and fintech are soaring. A huge share of the future of fintech in Pakistan is likely to feature fintech used in existing finance practices.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey">
                        Anticipated Future of Fintech in Pakistan
                      </h3>
                      <p className="table_Justify">
                        The future fintech in Pakistan is optimistic. As outlined above, the strengths of conducting fintech companies and usage of their fintech applications undoubtedly outweigh its drawbacks.
                      </p>
                      <p>Digital payments contribute primarily to the spread of fintech from one end of Pakistan to the other. The scant prevalence of credit and debit cards has prompted the use of digital wallets, which have made their users capable of efficient money movement needs.</p>
                      <div className={BlogThreeStyle.img_container1}>
                        <img src={chartImg} alt="logo" id="heading9" />
                      </div>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner1}>
                      <h3 className="w3-text-grey table_my_res" id="heading10">
                        Investing in The Future of Fintech in Pakistan
                      </h3>
                      <p className="table_Justify">
                        Projected to have a market volume of <a href="https://www.statista.com/outlook/dmo/fintech/pakistan" target="_blank" rel="noopener noreferrer">US$4.95 billion in 2027</a>, the future of fintech in Pakistan shows exciting promise. <a href="https://www.forbes.com/sites/forbesbusinesscouncil/2023/08/17/the-fintech-startup-environment-in-pakistan-from-idea-to-execution/?sh=4e7f1d3372bc" target="_blank" rel="noopener noreferrer">Striking returns</a> can be achieved by foreign and domestic financers once they have invested in the industry.
                      </p>
                      <p className="table_Justify">
                        The large Pakistani demographic is proliferating. With a majority of the citizenry owning smartphones, including a rapidly multiplying middle class that have created a fertile landscape for the future of fintech in Pakistan.
                      </p>
                      <p className="table_Justify">
                        A staggering $200 Million was raised <a href="https://www.bloomberg.com/news/features/2021-11-17/pakistan-startups-draw-record-money-helped-by-covid-and-china-s-tech-crackdown?embedded-checkout=true" target="_blank" rel="noopener noreferrer">in 2021</a> alone, by startups in the fintech industry of Pakistan. With several Pakistanis showcasing abilities of ingenious modernisation, the interests of international parties are distinctly ascending. Along with pursuits of those within the homeland too.
                      </p>
                    </div>
                    <div className={BlogThreeStyle.main___conatiner2}>
                      <h3 className="w3-text-grey table_my_res" style={{ textAlign: "center" }}>Key Takeaways</h3>
                      <p className="table_Justify">
                        The fintech landscape of Pakistan is prepared for creating digital financial transformations, as can be observed in the following key takeaways derived from the information mentioned above:
                      </p>
                      <ol>
                        <li>
                          The young digital enthusiasts of Pakistan making into an ultimate breeding space to nurture fintech catering to a briskly emerging market.
                        </li>
                        <li>
                          It is apparent in the success of startups like Easypaisa, Finja and Zindigi that the locale is ripe for revolutionary computerized changes.
                        </li>
                        <li>
                          The economy of Pakistan is being impacted strongly with underserved Pakistanis given access to digital wallets - boosting financial inclusion.
                        </li>
                        <li>
                          The government is supportive of fintech, introducing policies to promote its growth.
                        </li>
                        <li>
                          The future of fintech in Pakistan is very favourable with highly-renowned worldwide resources forecasting the fintech market’s volume in Pakistan to be $4.95 in 2027.
                        </li>
                      </ol>
                      <p className="table_Justify">
                        Financial technology is leading to equivalent, convenient services to distant occupants while reducing the costs of financial services. Namely, digital wallets for paying bills, investing in stocks or just plainly transferring cash without extra charges.
                      </p>
                      <p className="table_Justify">
                        Internet users in Pakistan are tactically implementing fintech in their daily lives. To make the most out of routine financial procedures, fintech is availed for automating arduous tasks, refining efficiency and reducing costs. The future of fintech in Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hide_res col-sm-12 col-md-3 col-lg-3 blog-sidebar">

                <h1 style={{ padding: "10px 0px", fontSize: "1.3rem" }} className="table_my_res">The Future of Fintech in Pakistan: The Next Frontier</h1>
                <div className={BlogThreeStyle.second__para_container}>
                  <div className={BlogThreeStyle.second__para_container1}>
                    <h2 style={{ fontSize: "1.2rem" }}><a href="#heading1" style={{ textDecoration: 'none' }} className="w3-text-grey">What is Fintech?</a></h2>
                    <h2 style={{ fontSize: "1.2rem" }}><a href="#heading2" style={{ textDecoration: 'none' }} className="w3-text-grey">Fintech’s Impact on Pakistan</a></h2>
                    <div
                      className={BlogThreeStyle.second__para_container1__left}
                    >
                      <h3 style={{ fontSize: "1rem" }}><a href="#heading3" style={{ textDecoration: 'none' }} className="w3-text-grey">Future of Fintech in Pakistan: Key Drivers</a></h3>
                      <h3 style={{ fontSize: "1rem" }}><a href="#heading4" style={{ textDecoration: 'none' }} className="w3-text-grey">The Current State of Fintech in Pakistan</a></h3>
                      <h3 style={{ fontSize: "1rem" }}><a href="#heading5" style={{ textDecoration: 'none' }} className="w3-text-grey">Fintech Success Stories in Pakistan</a></h3>
                      <h3 style={{ fontSize: "1rem" }}><a href="#heading6" style={{ textDecoration: 'none' }} className="w3-text-grey">Regulations Affecting Fintech in Pakistan</a></h3>
                      <h3 style={{ fontSize: "1rem" }}><a href="#heading7" style={{ textDecoration: 'none' }} className="w3-text-grey">Traditional Finance and Fintech</a></h3>
                    </div>
                    <h2 style={{ fontSize: "1.2rem" }}><a href="#heading8" style={{ textDecoration: 'none' }} className="w3-text-grey">Anticipated Future of Fintech in Pakistan</a></h2>
                    <div
                      className={BlogThreeStyle.second__para_container1__left}
                    >
                      <h3 style={{ fontSize: "1rem" }}><a href="#heading9" style={{ textDecoration: 'none' }} className="w3-text-grey">Investing in The Future of Fintech in Pakistan</a></h3>
                    </div>
                    <h4 style={{ fontSize: "1.1rem" }}><a href="#heading10" style={{ textDecoration: 'none' }} className="w3-text-grey">Key Takeaways</a></h4>
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

