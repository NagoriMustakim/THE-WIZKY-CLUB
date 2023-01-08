import React from 'react';
import styles from '/styles/JoinUs.module.css'

function JoinUs(props) {
    return (
        <section className={`${styles.joinUs}`}>
            <div className={`container-fluid ${styles.joinUsContainer}`}>
                {/*<div className={`${styles.shader}`}></div>*/}
                <div className={`row h-100 justify-content-center align-items-center`}>
                    <div className={`col-lg-5 col-8 text-center`}>
                        <h1 className={`text-white mb-4 ${styles.header}`}>Keen to know more?</h1>

                        <p className={`text-white mb-4`}>Join our Discord to speak with us today!</p>

                        <a href="" target="_blank" className={`btn btn-warning rounded-0`}><img src="/icons/discord_logo.png" className={`${styles.discordLogo} me-2`}/>Join Discord</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JoinUs;