import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Privacy.css";

const Privacy = () => {


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
            <section id="resume" class="resume">
                <Header />
                <br />
                <br />
                <br />
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2 className="text-center mt-4">Privacy Policy</h2>
                        <br />
                        <p>Our core values regarding privacy and security guide all of our products, processes, and team members. We believe in respecting our users and their privacy, which means being transparent about what data we collect and why, and never selling our users' personal information. We make it easy for users to control their privacy with on/off data controls and the ability to review, move, or delete their data. We prioritize security by constantly strengthening our security infrastructure and leading by example in advancing online security for all. As technology progresses, we remain committed to evolving our privacy and security principles to meet the evolving needs of our users.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <h3 class="resume-title">Police 1</h3>
                            <div class="resume-item pb-0">
                                <h4>Alice Barkley</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <p>
                                    <ul>
                                        <li>Portland par 127,Orlando, FL</li>
                                        <li>(123) 456-7891</li>
                                        <li>alice.barkley@example.com</li>
                                    </ul>
                                </p>
                            </div>

                            <h3 class="resume-title">Police 2</h3>
                            <div class="resume-item">
                                <h4>Police Dtails</h4>
                                <h5>Police Note</h5>
                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>
                            <div class="resume-item">
                                <h4>Police Dtails</h4>
                                <h5>Police Dtails</h5>
                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h3 class="resume-title">Police 3</h3>
                            <div class="resume-item">
                                {/* <h4>Police Dtails</h4> */}
                                <h5>Police Dtails</h5>
                                <p><em>Experion, New York, NY </em></p>
                                <p>
                                    <ul>
                                        <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                        <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                        <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                        <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="resume-item">
                                <h4>Police 4</h4>
                                {/* <h5>2017 - 2018</h5> */}
                                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                                <p>
                                    <ul>
                                        <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                        <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                        <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                        <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Privacy