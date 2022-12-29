import React, {useEffect, useState} from 'react';
import styles from '/styles/Body.module.css'
import Moment from "react-moment";
// import Swiper core and required modules
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Body(props) {

    const [timelines, setTimelines] = useState([{
        date: 'June 2022',
        title: 'Genesis Cask',
        description: 'This Genesis Collection features 1,000 NFTs of a rare 32 year old Cask from the prestigious stillery, Macallan. '
            + 'Filled in 1990 with the preferred choice of wood; Sherry. (Cask Number: 161041).'
    }, {
        date: 'September 2022',
        title: 'The Tipsy NFT Collection',
        description: 'Feeling tipsy? Stay Tuned as we distill the 2nd NFT Collection. It may be a Cask, it may be a Bottle, whatever it may be, the community will decide!'
    }, {
        date: 'November 2022',
        title: 'Whitepaper v2.0 + Wizky Portal',
        description: 'Can\'t wait to find out what we have in store? Stay tuned for the launch of our Full Whitepaper and Wizky Portal!'
    }, {
        date: 'December 2022',
        title: '$IZ + Cask XYZ',
        description: 'The Wizky Club launches its token and a glimpse into Wizland our very own tipsy metaverse where we will be introducing staking, GameFi and Marketplace' +
            'to trade and flaunt all things whisky. Each feature will be launched in phases as we build just like how whisky matures over time. Stay tuned!'
    }, {
        date: 'TBA',
        title: 'Wizland V1.0 - Staking + Marketplace',
        description: 'Behold!...another step deeper into Wizland~! Get ready your $Wiz and be rewarded to seed the fertile lands where fresh Earth is turned into liquid gold'
    }, {
        date: 'TBA',
        title: 'Wizland V2.0 - Wizky Profile',
        description: 'Being tipsy is just the start, in Wizland all the whisky NFTs you own and drink will be stored on your Wizky Profile on chain. Be prepared to flaunt'
    },{
        date: 'TBA',
        title: 'Wizland V3.0 - Metaverse',
        description: 'A new world is born! Stay tuned as we develop an immersive world where you can drink, play and earn!'
    },{
        date: 'TBA',
        title: 'More Casks! More Bottles!',
        description: 'The Wizky Club will continue to curate exquisite bottles and rare casks for our community to enjoy. Join just by simply owning any NFT in our collection.'
    },]);

    const initialD = {
        initial: 'tasting',
        title: `OUR GENESIS CASK`,
        description: `This first collection features a rare 32 year old cask from the prestigious
                        distillery,
                        macallan. filled in 1990 with the preferred choice of wood; sherry. (cask
                        number:
                            161041)`,
        divPosition: `ms-auto`,
        text: 'TASTING NOTES',
        style: styles.arrowIcon,
        arrow: 'yellow-arrow.png',
        flexDirection: '',
    }

    const [text, setText] = useState({
        title: initialD.title,
        description: initialD.description
    });

    const [button, setButton] = useState({
        initialD: initialD.initial,
        divPosition: initialD.divPosition,
        text: initialD.text,
        style: initialD.style,
        arrow: initialD.arrow,
        flexDirection: initialD.flexDirection
    });

    const [activeTimeline, setActiveTimeline] = useState({});

    const [clickTimeline, setClickTimeline] = useState([1, 0, 0, 0])

    const toUpperCaseFilter = (d) => {
        return d.toUpperCase();
    };

    function changeTimeline(timeline, index) {
        setActiveTimeline(timeline)

        let click = [0, 0, 0, 0]
        click[index] = 1;
        setClickTimeline(click)
    }

    function changeTasting(stat) {
        if (stat == 'tasting') {
            setButton({
                initial: 'genesis',
                divPosition: ``,
                text: 'OUR CASK',
                style: styles.arrowIconLeft,
                arrow: 'yellow-arrow-left.png',
                flexDirection: 'flex-row-reverse'
            })

            setText({
                title: `TASTING NOTES`,
                description: `on the nose; a lovely waft of sherry orange and vanilla. on the palate; 
                            mixed fruits and raisings. delicious citrus bouncing off a toffee and honey base. the rolls royce of whiskies`
            })
        } else {
            setButton({
                initial: initialD.initial,
                divPosition: initialD.divPosition,
                text: initialD.text,
                style: initialD.style,
                arrow: initialD.arrow,
                flexDirection: initialD.flexDirection
            })

            setText({
                title: initialD.title,
                description: initialD.description,
            })
        }
    }

    useEffect(() => {
        timelines.map((timeline, index) => {
            if (index === 0) {
                setActiveTimeline(timeline)
            }
        })
    }, [])


    return (<section className={`${styles.body}`}>
            <div className={`container`}>
                {/*Genesis Cask*/}
                <div className={`row py-lg-5`}>
                    <div className="col-12">
                        <div className="row my-5 mx-0">
                            <div className={`col-lg-6 col-12 mb-5 mb-lg-0 `}>
                                <img src="barrel_with_line.png" className={`img-fluid`}/>
                            </div>
                            <div className={`col-lg-6 col-12 ps-lg-5 d-flex justify-content-center flex-column`}>
                                <div className={`${styles.lineContainer}`}>
                                    <div className={`${styles.whiteLine}`}></div>
                                    <div className={`${styles.yellowLine}`}></div>
                                </div>

                                <div className={`${styles.textWrapper}`}>
                                    <h1 className={`${styles.header}`}>
                                        {text.title}
                                    </h1>

                                    <p className={`mt-5 ${styles.paragraph}`}>
                                        {text.description}
                                    </p>

                                    <div className={`mb-5`}>
                                        <button onClick={() => {
                                            changeTasting(button.initial)
                                        }}
                                                className={`${button.divPosition} ${styles.tastingLink} d-flex align-items-center ${button.flexDirection}`}>{button.text}
                                            <img src={`icons/${button.arrow}`} className={`${styles.arrowIcon}`}/>
                                        </button>
                                    </div>
                                </div>

                                <div className={`${styles.lineContainer}`}>
                                    <div className={`${styles.yellowLine}`}></div>
                                    <div className={`${styles.whiteLine}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*IT WORKS*/}
                <div className={`row mt-lg-5 py-lg-5`} id="howItWorks">
                    <div className={`col-lg-2 d-flex justify-content-center align-items-center`}>
                        <h1 className={`${styles.header}`}>HOW IT WORKS?</h1>
                    </div>

                    <div className={`col-lg-2 d-none d-lg-flex`}>
                        <div className={`${styles.whiteVerticalLine}`}></div>
                        <div className={`${styles.yellowVerticalLine}`}></div>
                    </div>

                    <div className={`col-lg-8`}>
                        <p className={`my-lg-5`}>
                            Each NFT in the collection represents a fraction of the cask of whisky backing the
                            collection. The Wizky Club would like to introduce the concept of the full house, where a
                            certain number of shares make up a proper bottle of whisky
                        </p>

                        <div className={`row mb-5`}>
                            <div className={`col-lg-7 col-12 mb-5 mb-lg-0`}>
                                <table className={`table table-borderless ${styles.table}`}>
                                    <thead>
                                    <tr className={`text-center`}>
                                        <th scope="col" colSpan={`2`}>SUPPLIES</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className={`border-bottom`}>
                                        <td>Total Supply</td>
                                        <th scope="row">1000 NFTs or 275 bottles of 70CL</th>
                                    </tr>
                                    <tr className={`border-bottom`}>
                                        <td>Standard Supply</td>
                                        <th scope="row">900 NFTs (90%)</th>
                                    </tr>
                                    <tr className={`border-bottom`}>
                                        <td>Rare Supply</td>
                                        <th scope="row">100 NFTs (90%)</th>
                                    </tr>
                                    <tr>
                                        <td>Reserved for Community</td>
                                        <th scope="row">1000 NFTs or 275 bottles of 70CL</th>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={`col-lg-4 offset-lg-1 col-12`}>
                                <table className={`table table-borderless ${styles.table}`}>
                                    <thead>
                                    <tr className={`text-center`}>
                                        <th scope="col" colSpan={`2`}>BOTTLE SHARES</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className={`border-bottom`}>
                                        <td>Full House</td>
                                        <th scope="row">4 Shares</th>
                                    </tr>
                                    <tr className={`border-bottom`}>
                                        <td>Standard NFT</td>
                                        <th scope="row">1 Share</th>
                                    </tr>
                                    <tr>
                                        <td>Rare NFT</td>
                                        <th scope="row">2 Shares</th>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Timeline*/}
                <div className="row py-lg-5">
                    <div className={`col-lg-8 col-12 pe-lg-5`}>
                        <div className={`${styles.timelineDetail}`}>
                            <div className={`${styles.timelineDate}`}>
                                {activeTimeline.date === "TBA"?
                                <p className="mb-0">{activeTimeline.date}</p>
                                :
                                <Moment filter={toUpperCaseFilter} format={`MMMM YYYY`}>
                                    {activeTimeline.date}
                                </Moment>
                                }
                            </div>
                            <h3 className={`${styles.subHeader} mb-4 text-uppercase`}>
                                {activeTimeline.title}
                            </h3>
                            <p className={`${styles.timelineDescription}`}>
                                {activeTimeline.description}
                            </p>
                        </div>

                        <div className={`row`}>
                            <Swiper slidesPerView={3}
                                    className={`col-12 d-flex align-items-center ${styles.swiperContainer}`}>
                                <div className={`${styles.swiperWrapper} ${styles.timeline}`}>
                                    {
                                        timelines.map((timeline, index) => {
                                            if (index % 2 == 0) {
                                                return (
                                                    <SwiperSlide className={`${styles.swiperSlide}`}>

                                                        <div className={`${styles.timestamp}`}
                                                             onClick={() => changeTimeline(timeline, index)}>
                                                            <span
                                                                className={`${styles.timelineDateTitle} ${clickTimeline[index] == 1 ? styles.textActive : ''} ${styles.textInactive}`}>{timeline.date}</span>
                                                            <p className={`${styles.timelineTitle} ${clickTimeline[index] == 1 ? styles.textActive : ''} ${styles.textInactive}`}>{timeline.title}</p>
                                                        </div>

                                                        <div className={`${styles.status}`}>
                                                            <span
                                                                className={`${clickTimeline[index] == 1 ? styles.activeStatus : ''}`}
                                                                onClick={() => changeTimeline(timeline, index)}></span>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            } else {
                                                return (
                                                    <SwiperSlide className={`${styles.swiperSlide}`}>

                                                        <div className={`${styles.timestamp}`}>
                                                                <span
                                                                    className={`${styles.noSelect}`}>&nbsp;
                                                                </span>
                                                        </div>

                                                        <div className={`${styles.status} ${styles.textActive}`}>
                                                            <div className={`${styles.bottomTimelineContainer}`}
                                                                 onClick={() => changeTimeline(timeline, index)}>
                                                                <span
                                                                    className={`${clickTimeline[index] == 1 ? styles.activeStatus : ''}`}></span>
                                                                <label
                                                                    className={` ${clickTimeline[index] == 1 ? styles.textActive : ''} ${styles.textInactive} ${styles.timelineDateTitle} `}>{timeline.date}</label>
                                                                <p className={`${styles.timelineTitle} ${clickTimeline[index] == 1 ? styles.textActive : ''} ${styles.textInactive}`}>{timeline.title}</p>
                                                            </div>
                                                        </div>

                                                    </SwiperSlide>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </Swiper>
                        </div>

                        {/*<div className={`row mt-5 justify-content-center align-items-center`}>*/}
                        {/*    {*/}
                        {/*        timelines.map((timeline, index) => {*/}
                        {/*            if (index !== timelines.length - 1) {*/}
                        {/*                return (*/}
                        {/*                    <React.Fragment key={index}>*/}
                        {/*                        <div className={`col d-flex justify-content-center`}*/}
                        {/*                             onClick={() => changeTimeline(timeline, index)}>*/}
                        {/*                            <div*/}
                        {/*                                className={`${styles.timelineCircle} ${clickTimeline[index] == 1 ? styles.timelineCircleActive : ''} d-flex justify-content-center timeline-circle`}>*/}
                        {/*                                <p className={`my-auto`}><Moment*/}
                        {/*                                    format={`MM/YY`}>{timeline.date}</Moment></p>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}

                        {/*                        <div className={`col-2 ${styles.timelineDivider}`}></div>*/}
                        {/*                    </React.Fragment>*/}
                        {/*                )*/}
                        {/*            } else {*/}
                        {/*                return (*/}
                        {/*                    <div key={index} className={`col d-flex justify-content-center`}*/}
                        {/*                         onClick={() => changeTimeline(timeline, index)}>*/}
                        {/*                        <div*/}
                        {/*                            className={`${styles.timelineCircle} ${clickTimeline[index] == 1 ? styles.timelineCircleActive : ''} d-flex justify-content-center timeline-circle`}>*/}
                        {/*                            <p className={`my-auto`}><Moment*/}
                        {/*                                format={`MM/YY`}>{timeline.date}</Moment></p>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                )*/}
                        {/*            }*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>

                    <div className={`col-lg-2 d-none d-lg-flex`}>
                        <div className={`${styles.yellowVerticalLine}`}></div>
                        <div className={`${styles.whiteVerticalLine}`}></div>
                    </div>

                    <div className={`col-lg-2 d-flex justify-content-center align-items-center`}>
                        <h1 className={`${styles.header}`}>WIZKY ROADMAP</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;