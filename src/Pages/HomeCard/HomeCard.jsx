import React from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";
import codeIcon from "../images/codeIcon.png";
import foze from "../images/foze.png";
import meany from "../images/meany.png";
import merno from "../images/merno.png";
import apple from "../images/apple.png";
import Android from "../images/android.png";
import BlockChain from "../images/blockchainIcon.png";
import mobileIcon from "../images/mobileIcon.png";
import Public from "../images/Public.png";
import cloud from "./cloud.png";

export default function HomeCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div>
            <div id="flip" className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div
                    className="icon-box mt-2"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img src={BlockChain} alt="" srcset="" height={80} />
                    <h4 className="title">
                      <Link to="/WebAndMobile">Blockchain </Link>
                    </h4>
                    <p className="description">
                      With enhanced reliability, protection, clarity, and
                      trackability, you take advantage of the approaching future
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="w3-container w3-center">
                    <table className="m-2">
                      <thead>
                        <tr>
                          <th>
                            <Link
                              to="/blockchain"
                              className="text-white"
                              id="Blocktext"
                            >
                              Public Blockchain
                            </Link>
                          </th>
                          <th>
                            <Link
                              to="/blockchain"
                              class="text-white"
                              id="Blocktext"
                            >
                              Private Blockchain
                            </Link>
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <img src={foze} alt="" srcset="" height={60} />
                          </th>
                          <th>
                            <img src={Public} alt="" srcset="" height={55} />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "start" }}>
                            {/* <a href="#featuresTop">sdasdasd</a> */}
                            <Link to="/blockchain" className="text-white">
                              <ul>
                                <li>Binance</li>
                                <li>Ethereum</li>
                              </ul>
                            </Link>
                          </td>
                          <td style={{ textAlign: "start" }}>
                            <Link to="/blockchain" className="text-white">
                              <ul>
                                <li>Corda</li>
                                <li>Hyperledger</li>
                              </ul>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div>
            <div id="flip" className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div
                    className="icon-box "
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img src={codeIcon} alt="" srcset="" height={80} />
                    <h4 className="title">
                      <Link to="/WebAndMobile">Full Stack</Link>
                    </h4>
                    <p className="description">
                      Impress visitors with high-powered functionality and
                      elegant design.
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="w3-container w3-center">
                    <h5 className="text-white mt-3">Full Stack</h5>
                    <table className="w3-table">
                      <thead>
                        <tr>
                          <th>
                            <img src={meany} alt="" srcset="" height={80} />
                          </th>
                          <th>
                            <img src={merno} alt="" srcset="" height={80} />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to="/WebAndMobile" className="text-white ">
                              {" "}
                              MEAN Stack
                            </Link>
                          </td>
                          <td>
                            <Link to="/WebAndMobile" className="text-white">
                              {" "}
                              MERN Stack
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-3">
          <div>
            <div id="flip" className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div
                    className="icon-box mt-2"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img src={mobileIcon} alt="" srcset="" height={80} />
                    <h4 className="title">
                      <Link to="/WebAndMobile">Mobile Apps</Link>
                    </h4>
                    <p className="description">
                      Interact with users of your fintech applications on the
                      go.
                    </p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="w3-container w3-center">
                    <h5 className="text-white mt-3">IOS & Android Apps</h5>
                    <table className="w3-table">
                      <thead>
                        <tr>
                          <th>
                            <img src={apple} alt="" srcset="" height={80} />
                          </th>
                          <th>
                            <img src={Android} alt="" srcset="" height={80} />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link
                              to="/mobileApp"
                              class="text-white col-md-6"
                              id="AndroidtextIos"
                            >
                              IOS
                            </Link>
                          </td>
                          <td>
                            <Link
                              to="/mobileApp"
                              class="text-white col-md-6"
                              id="Androidtext"
                            >
                              {" "}
                              Android
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div id="flip" className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div
                  className="icon-box mt-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/115/115804.png"
                    alt=""
                    srcset=""
                    height={80}
                  />
                  <h4 className="title">
                    <Link to="/WebAndMobile">Cloud</Link>
                  </h4>
                  <p className="description">
                    Distribute your IT (Information-Technology) across the
                    world.
                  </p>
                </div>
              </div>
              <div className="flip-box-back">
                <div className="w3-container w3-center">
                  <h5 className="text-white mt-3">Cloud Provider</h5>
                  <table className="w3-table">
                    <thead>
                      <tr>
                        <th>
                          <img
                            src="https://d0.awsstatic.com/logos/powered-by-aws.png"
                            className="mt-4"
                            alt=""
                            srcset=""
                            height={35}
                          />
                        </th>
                        <th>
                          <img
                            // src="https://lirp.cdn-website.com/aa0ef369/dms3rep/multi/opt/google-cloud-icon-400w.png"
                            src={cloud}
                            alt=""
                            srcset=""
                            height={60}
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/cloud" className="text-white ml-4">
                            AWS
                          </Link>
                        </td>
                        <td>
                          <Link to="/cloud" className="text-white">
                            Cloud
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
