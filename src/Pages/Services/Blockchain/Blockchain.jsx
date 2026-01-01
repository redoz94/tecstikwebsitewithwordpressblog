import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Blockchain.css";
import Jing from '../../images/jing.png'
import BlockImg from "./BlockChainBanner.jpg";

const Blockchain = () => {
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
        <div id="banner_7_image"></div>
        {/* <img src={BlockImg} alt="logo" class="background-image" /> */}
        <div class="overlay"></div>
        <div class="banner-text">
          BLOCKCHAIN
        </div>
      </section>

      <br />
      <br />


      {/* <!-- ======= Counts Section ======= --> */}
      <section id="specials" class="specials">
        <div class="container">
          <div class="specials-title">
            <h2 className="text_center">
              Specialized <span>Fintech for :</span>
            </h2>
            {/* <pF */}
          </div>

          <div class="row text_center">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item active show" onClick={() => setTrigger(0)} style={{ cursor: "pointer" }}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(0)}
                  >
                    Decentralized Finance (DeFi)
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(1)} style={{ cursor: "pointer" }}>
                  <a
                    class="nav-link "
                    // data-bs-toggle=""
                    onClick={() => setTrigger(1)}
                  >
                    NFTs and Digital Assets
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(2)} style={{ cursor: "pointer" }}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(2)}
                  >
                    Tokenization
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(3)} style={{ cursor: "pointer" }}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(3)}
                  >
                    Initial Coin Offering
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(4)} style={{ cursor: "pointer" }}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(4)}
                  >
                    Smart contract Audit
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
                        <div class="col-lg-8 details order-2 order-lg-1 defi_margin">
                          <h3>Decentralized Finance (DeFi)</h3>
                          <p class="fst-italic">
                            Our team has extensive experience in working on
                            popular Defi protocols including:
                          </p>
                          <p>
                            <ul>
                              <li>
                                Decentralized Exchanges (DEX) such as Uniswap
                              </li>
                              <li>
                                Crypto lending and investment protocols such as
                                AAve
                              </li>
                              <li>Liquidity mining and yield farming</li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We assist our valued clients in the development of
                            their DeFi ecosystem, backed by the latest Fintech.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 1 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>NFTs and Digital Assets</h3>
                          <p class="fst-italic">
                            NFTs or (non-fungible tokens) are unique cryptographic tokens on The Blockchain,
                            with unique identification codes and metadata that distinguish them from each other:
                          </p>
                          <p>
                            <ul>
                              <li>
                                NFTs represent Certificates or Access Rights,
                              </li>
                              <li>
                                NFTs represent entirely digital assets such as Digital Graphics or Audio and Visual Clips,
                              </li>
                              <li>
                                NFTs represent certificates or access rights,
                              </li>
                            </ul>
                            Our team has built NFTs of popular standards like ERC721, ERC1155, and others as they were introduced into the fintech ecosystem.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 2 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Tokenization</h3>
                          <p class="fst-italic">
                            Our experienced team can assist you in designing, developing, and introducing Crypto
                            Tokens for popular Blockchain Platforms. Benefit from Fintech Consultancy on suitable tokens
                            included in the list of available tokens, too.
                          </p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including

                            <ul>
                              <li>Decentralized Exchanges DEX such as Uniswap,</li>
                              <li>cryoto lending and investment  protocols such asAAve</li>
                              <li>Liquidity mining and yield farming </li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We help our valued clients in the development of their DeFi ecosystem.

                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 3 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Initial Coin Offering</h3>
                          <p class="fst-italic">
                            An Initial Coin Offering (ICO) is the cryptocurrency industry’s
                            equivalent of an Initial Public Offering (IPO). A company seeking
                            to raise money for creating a new coin, app, or service can launch
                            an ICO as a method of raising funds.

                          </p>
                          <p>
                            Investors can buy into an initial coin offering to
                            receive a new cryptocurrency token issued by a specific company.
                            This token has utility related to the product or service that the
                            company is offering (i.e a Utility Token), or it represents a stake
                            in the company or even a project it is built for (i.e a Security Token).
                            Our team works closely with corresponding clients in
                            the final EndInitial Coin Offering Process which
                            includes:
                            <ul>
                              <li>Project evaluation,</li>
                              <li>Designing Suitable Tokenomics,</li>
                              <li>Preparation of the White Paper,</li>
                              <li>Development of the Smart Contract,</li>
                              <li>ICO Launch of Website,</li>
                              <li>
                                Listing of Coins at Relevant Suitable Exchanges.
                              </li>
                            </ul>
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 4 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Smart Contract Audit</h3>
                          <p class="fst-italic">
                            The Smart Contract Audit service includes checks against known vulnerabilities that are
                            relevant to the unique business logic of each smart contract. In addition, it verifies
                            that the smart contract is free from Logical Issues, Access Control Issues, and an Assessment
                            of Compliance with the Code Style Guide.
                          </p>
                          {/* <p>
                            In addition, it provides verification that the smart
                            contract is free from logical and access control
                            issues, and an assessment of compliance with the
                            Code Style guide.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
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
      </section>
      <br />
      <br />
      {/* <!-- End Counts Section --> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blockchain;
