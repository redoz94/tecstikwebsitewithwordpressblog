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
const decodeHtml = (str = "") => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};
export default function HomeCard() {
  return (
    
    <div className="container">
      <div className="row">
        {/* ===== Blockchain ===== */}
        <div className="col-sm-3">
          <div id="flip" className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="icon-box mt-2" data-aos="fade-up" data-aos-delay="200">
                  <img src={BlockChain} alt="Blockchain" height={80} />
                  <h4 className="ts-tech-title">
                    <Link to="/TecStik-Blockchain" className="y">Blockchain</Link>
                  </h4>
                  <p className="ts-tech-desc">
                    With enhanced reliability, protection, clarity, and trackability,
                    you take advantage of the approaching future
                  </p>
                </div>
              </div>

              <div className="flip-box-back">
                <div className="w3-container w3-center">
                  <table className="m-2">
                    <thead>
                      <tr>
                        <th>
                          <Link to="/TecStik-Blockchain" className="text-white" id="Blocktext">
                            Public Blockchain
                          </Link>
                        </th>
                        <th>
                          <Link to="/TecStik-Blockchain" className="text-white" id="Blocktext">
                            Private Blockchain
                          </Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <img src={foze} alt="" height={60} />
                        </th>
                        <th>
                          <img src={Public} alt="" height={55} />
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td style={{ textAlign: "start" }}>
                          <Link to="/TecStik-Blockchain" className="text-white">
                            <ul>
                              <li>Binance</li>
                              <li>Ethereum</li>
                            </ul>
                          </Link>
                        </td>
                        <td style={{ textAlign: "start" }}>
                          <Link to="/TecStik-Blockchain" className="text-white">
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

        {/* ===== Web Development (Full Stack) ===== */}
        <div className="col-sm-3">
          <div id="flip" className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <img src={codeIcon} alt="Web Development" height={80} />
                  <h4 className="title">
                    <Link to="/TecStik-WebDevelopment">Web Development</Link>
                  </h4>
                  <p className="description">
                    Impress visitors with high-powered functionality and elegant design.
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
                          <img src={meany} alt="" height={80} />
                        </th>
                        <th>
                          <img src={merno} alt="" height={80} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/TecStik-WebDevelopment" className="text-white">
                            MEAN Stack
                          </Link>
                        </td>
                        <td>
                          <Link to="/TecStik-WebDevelopment" className="text-white">
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

        {/* ===== Mobile Apps ===== */}
        <div className="col-sm-3">
          <div id="flip" className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="icon-box mt-2" data-aos="fade-up" data-aos-delay="200">
                  <img src={mobileIcon} alt="Mobile Apps" height={80} />
                  <h4 className="title">
                    <Link to="/TecStik-mobileApp">Mobile Apps</Link>
                  </h4>
                  <p className="description">
                    Interact with users of your fintech applications on the go.
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
                          <img src={apple} alt="" height={80} />
                        </th>
                        <th>
                          <img src={Android} alt="" height={80} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/TecStik-mobileApp" className="text-white" id="AndroidtextIos">
                            IOS
                          </Link>
                        </td>
                        <td>
                          <Link to="/TecStik-mobileApp" className="text-white" id="Androidtext">
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

        {/* ===== Cloud ===== */}
        <div className="col-sm-3">
          <div id="flip" className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <div className="icon-box mt-2" data-aos="fade-up" data-aos-delay="200">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/115/115804.png"
                    alt="Cloud"
                    height={80}
                  />
                  <h4 className="title">
                    <Link to="/TecStik-Cloud">Cloud</Link>
                  </h4>
                  <p className="description">
                    Distribute your IT (Information-Technology) across the world.
                  </p>
                </div>
              </div>

              <div className="flip-box-back">
                <div className="w3-container w3-center">
                  <h5 className="text-white mt-3">Smart Storage</h5>
                  <table className="w3-table">
                    <thead>
                      <tr>
                        <th>
                          <img
                            src="https://d0.awsstatic.com/logos/powered-by-aws.png"
                            className="mt-4"
                            alt=""
                            height={35}
                          />
                        </th>
                        <th>
                          <img src={cloud} alt="" height={60} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/TecStik-Cloud" className="text-white ml-4">
                            AWS
                          </Link>
                        </td>
                        <td>
                          <Link to="/TecStik-Cloud" className="text-white">
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
