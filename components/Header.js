import React, { useState } from 'react';
import styles from '../styles/Header.module.css'
import { ethers } from 'ethers';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import { contractAddress } from "./contract/address";
import { contractABI } from "./contract/abi";
function Header(props) {


    const [hitungCounter, setHitungCounter] = useState(0);
    const [showModalMint, setModalMint] = useState(false);
    const [connected, setConnected] = useState(false)
    const [currentAcc, setCurrentAcc] = useState(null)
    const [signer, setSigner] = useState(null)
    const [signerAddress, setSignerAddress] = useState(null)
    const [provider, setProvider] = useState(null)
    const [contract, setContract] = useState(null)
    const [whitelistPrice, setWhitelistPrice] = useState(0)
    const [whitelistAmount, setWhitelistAmount] = useState(0)
    const [whitelistMinted, setWhitelistMinted] = useState(0)
    //noramal minting
    const [publicPrice, setPublicPrice] = useState(0)
    const [pulbicSupply, setPublicSupply] = useState(0)
    const [publicMinted, setPublicMinted] = useState(0)
    // useEffect(() => {
    // });

    async function emptyOutModalBackdrop() {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts[0]);
            setConnected(true)
            setCurrentAcc[accounts[0]]
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = await provider.getSigner()
            const signerAddress = await signer.getAddress();
            setSigner(signer)
            setSignerAddress(signerAddress)
            window.ethereum
                .request({ method: 'eth_accounts' })
                .then(handleAccountsChanged)
                .catch((err) => {
                    // Some unexpected error.
                    // For backwards compatibility reasons, if no accounts are available,
                    // eth_accounts will return an empty array.
                    console.error(err);
                });

            window.ethereum.on('accountsChanged', handleAccountsChanged)
            function handleAccountsChanged(accounts) {
                if (accounts.length === 0) {
                    // MetaMask is locked or the user has not connected any accounts
                    console.log('Please connect to MetaMask.');
                } else if (accounts[0] !== currentAcc) {
                    setCurrentAcc(accounts[0]);
                    // Do any other work!
                }
            }

        }
        else {
            toast.error("Please install Metamask wallet in this browser", {
                theme: "dark",
            });
        }
        document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

    }
    async function NormalMint() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer1 = provider.getSigner()
        const signerAddress1 = await signer.getAddress();
        if (signer1 !== signer) {
            setSigner(signer1)

        }
        if (signerAddress1 !== signerAddress) {
            setSignerAddress(signerAddress1)
        }
        console.log(`signerAddress1: ${signerAddress1}`);
        // console.log('Normal Minting');
        const con = new ethers.Contract(contractAddress, contractABI, signer)
        let requiredAmount = publicPrice * hitungCounter
        requiredAmount = requiredAmount.toString()
        const sendValue = ethers.utils.parseEther(requiredAmount)
        const amount = ethers.utils.formatUnits(sendValue.toString())

        try {
            const tx = await con.mintItem(hitungCounter, {
                value: ethers.utils.parseEther(amount)
            })
            await tx.wait()
            toast("Mint success!");
        } catch (error) {
            console.log(error);
            toast.error("Mint failure!", {
                theme: "dark",
            });
        }
    }
    async function WhiteListMint() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer1 = provider.getSigner()
        const signerAddress1 = await signer.getAddress();
        if (signer1 !== signer) {
            setSigner(signer1)

        }
        if (signerAddress1 !== signerAddress) {
            setSignerAddress(signerAddress1)
        }
        console.log(`signerAddress1: ${signerAddress1}`);
        const con = new ethers.Contract(contractAddress, contractABI, signer)
        let requiredAmount = whitelistPrice * hitungCounter
        requiredAmount = requiredAmount.toString()
        const sendValue = ethers.utils.parseEther(requiredAmount)
        const amount = ethers.utils.formatUnits(sendValue.toString())
        console.log(`{Current Account: ${signerAddress}`);
        const proof = await axios
            .get(`https://wizky-backend.vercel.app/get/${signerAddress}`)
            .then((res) => {
                return res.data.proof;
            });

        const isWhitelist = await con.connect(signerAddress).isWhitelist(proof);
        console.log(isWhitelist);

        if (isWhitelist) {
            try {

                const tx = await con.whitelistMint(hitungCounter, proof, {
                    value: ethers.utils.parseEther(amount)
                })
                await tx.wait()
                toast("Mint success!");
            } catch (error) {
                console.log(error);
                toast.error("Mint failure!", {
                    theme: "dark",
                });
            }
        } else {
            toast.error("You are not whitelisted! ", {
                theme: "dark",
            });
        }
    }

        function incrementCount() {
            var counterSkrg = 0;
            counterSkrg = hitungCounter + 1;
            setHitungCounter(counterSkrg);
        }
        function decrementCount() {
            if (hitungCounter > 0) {
                var counterSkrg = 0;
                counterSkrg = hitungCounter - 1;
                setHitungCounter(counterSkrg);
            }
        }

        function showModal() {

            setModalMint(false)
        }
        async function showModalContent() {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                setProvider(provider)
                const contract = new ethers.Contract(contractAddress, contractABI, provider);
                setContract(contract)
                //whitelist minting        
                const whitelistPrice = await contract.whitelistPrice()
                const whitelistAmount = await contract.WLAmount()
                const whitelistCounter = await contract.mintedWL()
                setWhitelistPrice((whitelistPrice) / 10 ** 18)
                setWhitelistAmount(parseInt(whitelistAmount))
                setWhitelistMinted(parseInt(whitelistCounter))
                //normal minting
                const publicPrice = await contract.publicPrice()
                const totalSupply = await contract.maxNft()
                const publicMinted = await contract.totalSupply()
                setPublicPrice((publicPrice) / 10 ** 18)
                setPublicSupply(parseInt(totalSupply))
                setPublicMinted(parseInt(publicMinted))
                setModalMint(true)
            }
            catch (error) {
                toast.error("Install Metamask!", {
                    theme: "dark",
                });
            }
        }
    



        const whitelistconnectedMint = () => {
            if (connected) {
                return (
                    <div className={`text-center ${styles.modalBtnConnect}`}>

                        <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={WhiteListMint}>WhiteList Mint</a>
                    </div>
                )
            }
            else {
                return (
                    <div className={`text-center ${styles.modalBtnConnect}`}>

                        <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={emptyOutModalBackdrop}>Connect</a>
                    </div>
                )
            }
        }
        const NormalconnectedMint = () => {
            if (connected) {
                return (
                    <div className={`text-center ${styles.modalBtnConnect}`}>
                        <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={NormalMint}>Normal Mint</a>

                    </div>
                )
            }
            else {
                return (
                    <div className={`text-center ${styles.modalBtnConnect}`}>
                        <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={emptyOutModalBackdrop}>{connected ? "Connected" : "Connect"}</a>

                    </div>
                )
            }
        }
        return (
            <section className={`${styles.header}`}>
                <style type="text/css">
                    {` 
                    .contentMint:hover,
                    .contentMint.active {
                        background: #F2EDE3!important;
                        color: #D49834 !important;
                    }

                    .contentMint {
                        background: rgba(236, 233, 233, 0.3)!important;
                        backdrop-filter: blur(4px);
                        color: rgba(245, 245, 245, 0.5);
                        border-radius:0!important;
                        
                    }

                `}
                </style>
                <div className={`container-fluid ${styles.headerBackground}`}>
                    <div className={`row h-100 align-content-center`}>
                        <div className={`col-lg-5 offset-lg-1 col-12 me-lg-5`}>
                            <h1 className={`${styles.headerHeading}`}>
                                Introducing the world’s first NFT whisky trading.
                            </h1>

                            <div className={`pe-lg-5 me-lg-5`}>
                                <p className={`pe-lg-5 me-lg-5 ${styles.headerParagraph}`}>
                                    An alternative asset class historically reserved for
                                    the wealthy is now yours to own, collect, trade
                                    and enjoy.
                                </p>
                            </div>

                            <div className={`mt-4`}>
                                <a href="#howItWorks" className={`btn btn-outline-light rounded-0`}>See how it works</a>
                                <a href="#" className={`btn btn-warning rounded-0 ms-4 mint-now `} data-bs-toggle="modal" data-bs-target="#modalMintNow" onClick={showModal}>Mint Now</a>

                            </div>

                            <div className={`mt-4`}>
                                <a href="#" className={``}><img src="icons/twitter.png" className={`${styles.iconBtn} img-fluid`} /></a>
                                <a href="#" className={`ms-3`}><img src="icons/discord.png" className={`${styles.iconBtn} img-fluid`} /></a>
                                <a href="#" className={`ms-3`}><img src="icons/instagram.png" className={`${styles.iconBtn} img-fluid`} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div className="modal fade" id="modalMintNow" tabIndex={-1} aria-labelledby="" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog modal-dialog-centered">
                        {
                            showModalMint ?
                                <div className={`modal-content ${styles.HeaderModalContent}`} id="modalMintContent">
                                    <div className={"modal-header " + styles.modalHeader}>
                                        <button type="button" className={"btn-close " + styles.btnClose} data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className={"modal-body " + styles.modalBody + styles.modalBodyMintContent}>
                                        <div className=''>
                                            <ul className={"nav nav-tabs d-flex justify-content-center " + styles.tabList} id="tabList" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`nav-link  contentMint ${styles.modalFirstTab} active`}
                                                        id="home-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#home"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="home"
                                                        aria-selected="true"
                                                    >
                                                        Whitelist Minting
                                                    </button>
                                                </li>
                                                <li className={`nav-item`} role="presentation">
                                                    <button
                                                        className={`nav-link contentMint ${styles.modalSecondTab}`}
                                                        id="profile-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#profile"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="profile"
                                                        aria-selected="false"
                                                    >
                                                        Normal Minting
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='d-flex justify-content-center '>
                                            <div className={"tab-content " + styles.tabContent} id="myTabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="home"
                                                    role="tabpanel"
                                                    aria-labelledby="home-tab"
                                                >
                                                    <p className={`${styles.modalTextPadding}`}>
                                                        Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non dui fermentum hendrerit.
                                                    </p>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <div className='text-center'>
                                                                <p>
                                                                    Supply Left
                                                                </p>
                                                                <p>
                                                                    <b>{whitelistAmount - whitelistMinted}/{whitelistAmount}</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <div className='text-center'>
                                                                <p>
                                                                    Price
                                                                </p>
                                                                <p>
                                                                    <b>{whitelistPrice} ETH</b>
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='mt-5 mb-5 text-center'>

                                                        <div className={`${styles.btnCounterBorder}`}>
                                                            <button className={`btn minusCounter ${styles.minusCounter}`} onClick={decrementCount}>-</button>
                                                            <div className={`contentCounter d-inline ${styles.hitungCounter}`}>{hitungCounter}</div>
                                                            <button className={`btn plusCounter ${styles.plusCounter}`} onClick={incrementCount}>+</button>
                                                        </div>

                                                    </div>
                                                    {whitelistconnectedMint()}
                                                    {/* <div className={`text-center ${styles.modalBtnConnect}`}>
                                                   
                                                    <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={emptyOutModalBackdrop}>{connected ? "Connected" : "Connect"}</a>
                                                    <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={WhiteListMint}>WhiteList Mint</a>
                                                </div> */}

                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="profile"
                                                    role="tabpanel"
                                                    aria-labelledby="profile-tab"
                                                >

                                                    <p className={`${styles.modalTextPadding}`}>
                                                        Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non dui fermentum hendrerit.
                                                    </p>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <div className='text-center'>
                                                                <p>
                                                                    Supply Left
                                                                </p>
                                                                <p>
                                                                    <b>{pulbicSupply - publicMinted}/{pulbicSupply}</b>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <div className='text-center'>
                                                                <p>
                                                                    Price
                                                                </p>
                                                                <p>
                                                                    <b>{publicPrice} ETH</b>
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='mt-5 mb-5 text-center'>

                                                        <div className={`${styles.btnCounterBorder}`}>
                                                            <button className={`btn minusCounter ${styles.minusCounter}`} onClick={decrementCount}>-</button>
                                                            <div className={`contentCounter d-inline ${styles.hitungCounter}`}>{hitungCounter}</div>
                                                            <button className={`btn plusCounter ${styles.plusCounter}`} onClick={incrementCount}>+</button>
                                                        </div>

                                                    </div>
                                                    {NormalconnectedMint()}
                                                    {/* <div className={`text-center ${styles.modalBtnConnect}`}>
                                                    <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={emptyOutModalBackdrop}>{connected ? "Connected" : "Connect"}</a>
                                                    <a href="#" className={`btn ${styles.btnModalConnect}`} onClick={NormalMint}>Normal Mint</a>

                                                </div> */}

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className={"modal-footer  mb-3 " + styles.modalFooter}>
                                    </div>
                                </div>
                                :
                                <div className={`modal-content ${styles.HeaderModalContent}`} id="modalMintNowFront">
                                    <div className={"modal-header " + styles.modalHeader}>
                                        <button type="button" className={"btn-close " + styles.btnClose} data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className={"modal-body " + styles.modalBody}>
                                        <div>
                                            <img src="/icons/logo-mint-now.png" alt="logo mint now" className={'img-fluid ' + styles.imgIconLogoMintNow} />
                                        </div>
                                        <div>
                                            <h3 className={styles.modalHeaderText}>MINTING IS NOW LIVE!</h3>
                                            <p className={styles.modalTextInside}>
                                                We're out in the crowd!<br />
                                                Let's get tipsy
                                            </p>
                                        </div>
                                        <div className="mt-5">
                                            <a href="#" className={`btn ${styles.modalButtonMint}`}
                                                id="btnModalMintContent"
                                                onClick={showModalContent}
                                            >MINT</a>
                                        </div>
                                    </div>
                                    <div className={"modal-footer mb-3 " + styles.modalFooter}>
                                    </div>
                                </div>
                        }

                    </div>
                </div>


            </section>
        );
    }

    export default Header;