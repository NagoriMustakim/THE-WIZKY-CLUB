import React, {useEffect, useState} from 'react';
import styles from '/styles/Navbar.module.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";
import axios from "axios";

import { contractAddress } from "./contract/address";
import { contractABI } from "./contract/abi";


// eslint-disable-next-line react/display-name
export default (props) => {
    //MetaMAsk
    const [provider, setProvider] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [currentAcc, setCurrentAcc] = useState("");
    const [loading, setLoading] = useState(false);
    const [isWhitelist, setWhitelist] = useState(false);
    const [publicPrice, setPublicPrice] = useState(0);
    const [whitelistPrice, setWLPrice] = useState(0);
    const [state, setState] = useState(true);
    const [wlCount, setWLCount] = useState(1);
    const [publicCount, setPublicCount] = useState(1);
    const [mintedWL, setMintedWL] = useState(0);
    const [WLAmount, setWLAmount] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const [loginWizky, setLoginWizky] = useState('');
    const [textWizky, setTextWizky] = useState('');

    useEffect(() => {
        const {ethereum} = window;

        if (ethereum && ethereum.isMetaMask) {
            setProvider(ethereum);
            setWeb3(new Web3(ethereum));
            ethereum.on("accountsChanged", (accs) => {
                setCurrentAcc(accs[0]);
            });
        } else {
            toast.error("Please install Metamask wallet in this browser", {
                theme: "dark",
            });
        }
    }, []);

    useEffect(() => {
        const setCurrentlyConnectedAccount = async () => {
            let accounts = await web3.eth.getAccounts();
            if (accounts && accounts.length > 0) {
                setCurrentAcc(accounts[0]);
            }
        };
        if (web3) {
            setCurrentlyConnectedAccount();
        }
    }, [web3]);

    useEffect(() => {
        const getInfo = async () => {
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            const proof = await axios
                .get(`https://wizky-backend.vercel.app/get/${currentAcc}`)
                .then((res) => {
                    return res.data.proof;
                });
            await contract.methods
                .isWhitelist(proof)
                .call({from: currentAcc})
                .then((res) => {
                    setWhitelist(res);
                })
                .catch((err) => {
                    toast.error(err, {theme: "dark"});
                });
        };

        if (currentAcc) {
            getInfo();
        } else {
            setWLCount(1);
            setPublicCount(1);
        }
    }, [currentAcc, web3]);

    useEffect(() => {
        if (web3) {
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            const interval = setInterval(async () => {
                await contract.methods
                    .paused()
                    .call()
                    .then((res) => {
                        setState(res);
                    })
                    .catch((err) => {
                        toast.error(err, {theme: "dark"});
                    });

                await contract.methods
                    .whitelistPrice()
                    .call()
                    .then((res) => {
                        setWLPrice(res / 10 ** 18);
                    })
                    .catch((err) => {
                        toast.error(err, {theme: "dark"});
                    });

                await contract.methods
                    .publicPrice()
                    .call()
                    .then((res) => {
                        setPublicPrice(res / 10 ** 18);
                    })
                    .catch((err) => {
                        toast.error(err, {theme: "dark"});
                    });

                await contract.methods
                    .mintedWL()
                    .call()
                    .then((res) => {
                        setMintedWL(Number(res));
                    })
                    .catch((err) => {
                        toast.error(err, {theme: "dark"});
                    });

                await contract.methods
                    .WLAmount()
                    .call()
                    .then((res) => {
                        setWLAmount(Number(res));
                    })
                    .catch((err) => {
                        toast.error(err, {theme: "dark"});
                    });

                await contract.methods
                    .totalSupply()
                    .call()
                    .then((res) => {
                        setTotalSupply(Number(res));
                    })
                    .catch((err) => {
                        toast.error(err, {theme: "dark"});
                    });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [web3]);

    const handleConnectWallet = async () => {
        if (provider) {
            await provider.request({method: `eth_requestAccounts`});
        } else {
            toast.error("Please install Metamask wallet in this browser", {
                theme: "dark",
            });
        }
    };

    const MintNFT = async (price) => {
        if (currentAcc) {
            setLoading(true);
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            const proof = await axios
                .get(`https://wizky-backend.vercel.app/get/${currentAcc}`)
                .then((res) => {
                    return res.data.proof;
                });

            const isWhitelisted = await contract.methods
                .isWhitelist(proof)
                .call({from: currentAcc});

            if (isWhitelisted) {
                await contract.methods
                    .whitelistMint(wlCount, proof)
                    .send({
                        from: currentAcc,
                        value: await web3.utils.toWei(
                            (((price * wlCount).toFixed(4) * 10000) / 10000).toString(),
                            "ether"
                        ),
                    })
                    .on("receipt", function (receipt) {
                        toast("Mint success!");
                        setWLCount(1);
                        setLoading(false);
                    })
                    .on("error", function (error) {
                        toast.error("Mint failure!", {
                            theme: "dark",
                        });
                        setWLCount(1);
                        setLoading(false);
                    });
            } else {
                await contract.methods
                    .mintItem(publicCount)
                    .send({
                        from: currentAcc,
                        value: await web3.utils.toWei(
                            (((price * publicCount).toFixed(4) * 10000) / 10000).toString(),
                            "ether"
                        ),
                    })
                    .on("receipt", function (receipt) {
                        toast("Mint success!");
                        setPublicCount(1);
                        setLoading(false);
                    })
                    .on("error", function (error) {
                        toast.error("Mint failure!", {
                            theme: "dark",
                        });
                        setPublicCount(1);
                        setLoading(false);
                    });
            }
            // }
        } else {
            handleConnectWallet();
        }
    };


    //Set Active Link

    const [activeLink, setActiveLink] = useState(styles.navLinkActive);
    const [activeLinkAbout, setActiveLinkAbout,] = useState('');
    const [activeLinkFAQ, setActiveLinkFAQ] = useState('');

    useEffect(() => {

        if (props.activeNow == 'faq') {
            setActiveLink('');
            setActiveLinkAbout('');
            setActiveLinkFAQ(styles.navLinkActive);
        } else if (props.activeNow == 'about') {
            setActiveLink('');
            setActiveLinkAbout(styles.navLinkActive);
            setActiveLinkFAQ('');

        } else {
            setActiveLink(styles.navLinkActive);
            setActiveLinkAbout('');
            setActiveLinkFAQ('');

        }

        if (currentAcc) {
            setLoginWizky(currentAcc.substring(0, 8) + '...' + currentAcc.substring(38));
            setTextWizky('');
        } else {
            setLoginWizky(<img src='/metamask-logo.png' className={`${styles.metamaskLogo}`} />);
            setTextWizky(' Metamask')
        }
        
    })

    
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbarBg}`}>
            <div className="container-fluid mx-5 my-4">
                <a href="/" className={`${styles.navbarBrandHref}`}><h1 className={`${styles.navbarBrand}`}>The Wizky Club</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto text-end mb-2 mb-lg-0">
                        <li className={`nav-item ${styles.navItem}`}>
                            <a className={`nav-link ${styles.navLink} ${activeLink}`} aria-current="page"
                               href="/">Home</a>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <a className={`nav-link ${styles.navLink} ${activeLinkAbout}`} href="/about">About</a>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <a className={`nav-link ${styles.navLink}`} href="https://whisky.gitbook.io/wizky-litepaper-v1.0/" target={"_blank"}>Whitepaper</a>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <a className={`nav-link ${styles.navLink} ${activeLinkFAQ}`} href="/faq">FAQ</a>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <button className={`btn ${styles.metamaskBtn}`} onClick={() => {
                                handleConnectWallet();
                            }}>
                                {loginWizky}
                                {textWizky}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            
            <ToastContainer/>
        </nav>
    );
}