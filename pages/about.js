import React from 'react';

import styles from '../styles/about.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function about() {
    return (
        <>
            <Navbar activeNow={'about'} />

            <div className={`${styles.leafGroup}`}>
                <div className={"container mt-5"}>
                    <div className={`row d-flex justify-content-around align-items-center ${styles.aboutWizkyContent} `}>
                        <div className={`col-12 d-inline d-md-none mb-3`}>
                            <img src={"/about-wizky.png"} className={"img-fluid"}/>

                        </div>
                        <div className={"col-12 col-md-6"}>
                            <div className={`position-relative`}>
                                <p className={`position-absolute ${styles.numberAboutWizky}`}>01</p>
                                <h3 className={` ${styles.headerAbout}`}>ABOUT WIZKY</h3>
                            </div>
                            <p className={`${styles.textContent}`}>The wizky club is a curator of fine whisky; fractionalizing each bottle or cask into
                                nfts. Each nft is fully asset backed and gives the holder membership into wizky
                                club.
                            </p>
                        </div>
                        <div className={"col-12 col-md-6 d-none d-md-inline-block"}>
                            <img src={"/about-wizky.png"} className={"img-fluid"}/>
                        </div>
                    </div>
                    <div className={"row d-flex justify-content-around align-items-center"}>
                        <div className={"col-12 col-md-6"}>
                            <img src={"/our-vision.png"} className={"img-fluid"}/>
                        </div>
                        <div className={`col-12 col-md-6 ${styles.ourVisionContent}`}>
                            <div className={`position-relative`}>
                                <p className={`position-absolute ${styles.numberVisionWizky}`}>02</p>
                                <h3 className={` ${styles.headerAbout}`}>OUR VISION</h3>
                            </div>
                            <p className={styles.textContent}>
                                The Wizky Club's mission is to provide access to any individual, enthusiast or
                                connoisseur to be part of the journey our selected premium and rare whisky takes from
                                raw earth to liquid gold.
                            </p>
                            <p className={styles.textContent}>
                                Using blockchain and NFTS, Wizky intends to build a digital economy metaverse where all
                                members get a chance to enjoy their whisky. Members get rewarded for owning nfts,
                                drinking and converting their nfts, buying and selling bottles/casks/tokens on our
                                marketplace, taking part in metaverse games and activities, and much more.
                            </p>

                            <a href={"https://whisky.gitbook.io/wizky-litepaper-v1.0/"} target={"_blank"} className={`${styles.linkWhitepaper}`}>
                                <u>SEE WHITEPAPER</u>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>


    );

}
