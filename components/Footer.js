import React from 'react';
import styles from '../styles/Footer.module.css'

function Footer(props) {
    return (
        <section className={`footer`}>
            <div className={`container-fluid ${styles.footerNav}`}>
                <div className={`row align-items-center py-4 p-lg-5`}>
                    <div className={`col-lg-3 col-12 mb-lg-0 mb-3 text-center`}>
                        <a className={`navbar-brand ${styles.footerBrand}`} href="/">THE WIZKY CLUB</a>
                    </div>

                    <div className={`col-lg-6 col-12 mb-lg-0 mb-3 text-center`}>
                        <a href="/about" className={`${styles.footerLink} me-lg-5 me-3`}>
                            About
                        </a>
                        <a href="https://whisky.gitbook.io/wizky-litepaper-v1.0/" target={"_blank"} className={`${styles.footerLink} me-lg-5 me-3`}>
                            Whitepaper
                        </a>
                        <a href="/faq" className={`${styles.footerLink} me-lg-5 me-3`}>
                            FAQ
                        </a>
                        <a href="#" className={`${styles.footerLink} me-lg-5 me-3`}>
                            Contact Us
                        </a>
                    </div>

                    <div className={`col-lg-3 col-12 mb-lg-0 mb-3 text-center`}>
                        <a href="#" target="_blank" className={``}><img src="/icons/twitter-rev.png" className={`${styles.iconBtn} img-fluid`} /></a>
                        <a href="#" target="_blank" className={`ms-3`}><img src="/icons/discord-rev.png" className={`${styles.iconBtn} img-fluid`} /></a>
                        <a href="#" target="_blank" className={`ms-3`}><img src="/icons/instagram-rev.png" className={`${styles.iconBtn} img-fluid`} /></a>
                    </div>
                </div>
            </div>

            <div className={`container-fluid ${styles.copyrightContainer}`}>
                <div className="row p-4 justify-content-center align-items-center">
                    <div className="col-lg-3 col-5 text-center my-auto">
                        <p className={`mb-0 ${styles.copyrightText}`}>2022 The Wizky Club</p>
                    </div>
                    <div className="col-lg-3 col-5 text-center my-auto">
                        <p className={`mb-0 ${styles.copyrightText}`}>Dev ~ Nagori Mustakim</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;