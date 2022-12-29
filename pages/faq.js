import React from 'react'

import Navbar from '../components/Navbar'

import styles from '../styles/faq.module.css'
import Footer from "../components/Footer";


function faq() {
    return (
        <>
            <Navbar activeNow={"faq"}/>

            <div className={`mt-5 ${styles.leafBackgroundPhoto}`}>
                <div className={`container ${styles.faqContent} `}>

                    <div className={"row"}>
                        <div className={`col-12  `}>

                            <div className={" text-center mt-3"}>
                                <h3 className={`${styles.faqHeader}`}>FREQUENTLY ASKED QUESTION</h3>
                            </div>


                            <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingOne">
                                        <button
                                            className={`accordion-button ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            What is NFT?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                         aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <strong>NFT stands for a non fungible token, which means it can neither be
                                                replaced nor interchanged because it has unique properties. NFT is a
                                                digital asset that represents internet collectibles like art, music, and
                                                games with an authentic certificate by blockchain technology that
                                                underlines Cryptocurrency.
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingTwo">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            How to create a crypto wallet?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <p>
                                                A crypto wallet is a place where you can securely keep your crypto. There are many different types of crypto wallets, which one is right for you depends on what you want to do with your crypto and what kind of safety net you want to have.
                                                <ol>
                                                    <li>Download a wallet app. We recommend MetaMask.</li>
                                                    <li>Create your account.</li>
                                                    <li>Be sure to write down your private key. It’s presented as a random 12-word phrase. Keep it in a secure location. If you lose or forget this 12-word phrase you won’t be able to access your crypto.</li>
                                                    <li>Transfer crypto to your wallet. You’ll need to transfer crypto into your wallet from a CEX (Centralised Exchange) after buying your USDT.
                                                    </li>
                                                </ol>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingThree">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            How do I mint Wizky NFT?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>The launch of our NFTs would be hosted on this website. Join us on Discord for launch details and more!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingFour">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                            aria-controls="panelsStayOpen-headingFour">
                                            What currency do I use to mint Wizky NFT?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingFour">
                                        <div className="accordion-body">
                                            <p>Wizky uses Ethereum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingFifth">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                            aria-controls="panelsStayOpen-headingFifth">
                                            When is the maturity of the Genesis Collection?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingFifth">
                                        <div className="accordion-body">
                                            <p>
                                            Estimated 6-9 months from the close of the public sale. The Cask is already owned by The Wizky Club. Upon completion of the public sale, depending on the community, we will decide on auctioning or bottling the the cask. More information will be shared via our community discord <a href="https://discord.gg/V33GbcwFvE" target={`_blank`}>(here)</a> and here on our website.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingThree">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            How long will it be before I see a return?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>
                                                The process of buying the cask itself and having the ownership transferred to you takes just a few weeks, and once you have this full ownership, you may choose to sell your casks at any time.


                                            </p>
                                            <p>
                                                The rate of return can be dependent on how long you’re able to hold your casks. New make spirit cannot be called ‘whisky’ legally until it has matured for three years, so returns generally tend to be greater from that point forward. As with any asset, value is subject to fluctuations, and your actual returns may vary.


                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingThree">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            What returns can I expect?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>As with any luxury asset, returns cannot be guaranteed, and the value of a cask may be subject to market fluctuations or other unforeseen major events.

                                            </p>
                                            <p>The value of a cask of whisky is primarily determined by its age, quality, and scarcity. Generally speaking, quality and scarcity together will have greater bearing on the value than age alone. While it’s likely that most casks would increase in value, casks from renowned distilleries that produce a small number of casks per year have tended to sell for much higher prices after 25 years than mass-produced, unbranded casks of the same age.

                                            </p>
                                            <p>Wizky work exclusively with distillers who produce premium casks for well-known luxury brands. We’ve spent years cultivating relationships with the distillers who have made high-end whisky what it is today to be able to offer our clients the best potential for future returns.

                                            </p>
                                            <p>Rare, branded casks have historically tended to sell for greater amounts than unbranded casks of the same age; however, there is natural variance between even high-quality casks that can make it difficult to predict a particular per annum percentage by which they may increase in value.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingThree">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            What exit strategy do you offer?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>With operations across Asia, including F&B outlets in Singapore and Seoul we only choose particular brands that best suit our customer base. We are also partnered with several auction houses globally meaning we are constantly ready to exit should the time be ri

                                            </p>
                                            <p>Note that that while Wizky of course has a track record of simply arranging the acquisition of whisky assets on behalf of clients; where our real value add lies is in shepherding such assets from acquisition through to bottling/packaging [in the case of casks], shipping and handling, storage, and ultimately exit by way designing and deploying the exit infrastructure necessary for sale of the assets all the while ensuring that every cask, case and bottle in the portfolio is properly cared for throughout that process. This is not only a double money play, but is also a serious, news-making, whisky investment for savvy investors looking to diversify into a top performing alternative.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingThree">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            What is your expertise in this marketplace?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseNine" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>We were one of the first to offer cask whisky ownership to private clients when we started trading in 2017. Our co-founders have decades of experience in business between them, and have worked tirelessly to devise the premier turnkey cask whisky ownership experience. From securing partnerships with renowned Scottish and Irish distilleries to hand-picking an elite team of experts, we’re dedicated to excellence in every aspect of our business – and exceeding our clients’ expectations in everything we do.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingThree">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            How do I know I have genuine ownership of my cask?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTen" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>
                                                We purchase the casks under our bonded tenancy agreement with the Scottish and Irish Revenue Commissioners and our partner distilleries.


                                            </p>
                                            <p>Each cask is numbered and held in the bonded warehouse, and all cask numbers are registered with the Revenue Commissioner. We also keep our own records, as do our partner distilleries, and maintain a shared register.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`accordion-item ${styles.borderBottom} ${styles.backgroundTransparent}`}>
                                    <h2 className={`accordion-header ${styles.backgroundColor}`}
                                        id="panelsStayOpen-headingThree">
                                        <button
                                            className={`accordion-button collapsed ${styles.spacingContent} ${styles.backgroundTransparent}`}
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            Do you guys have a Whitepaper?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseEleven" className="accordion-collapse collapse"
                                         aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <p>Sure we have! Check it out <a href={"https://whisky.gitbook.io/wizky-litepaper-v1.0/"} target={'_blank'}>here</a>.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className={`container ${styles.faqBottomMargin}`}>
                <div className={`row`}>
                    <div className={"col-12"}>

                        <div className={"text-center mt-5"}>
                            <h5 className={` ${styles.headerFaqBottom}`}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Can't find an answer? Shoot us an email
                            </h5>
                            <div className={`mt-4`}>
                                <a href={"javascript:void(0);"} className={`btn btn-warning ${styles.btnEmailUs}`}>Email
                                    Us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <Footer/>
        </>

    )
}

export default faq