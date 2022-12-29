import Head from 'next/head'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Body from "../components/Body";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Wizky.io</title>
                <meta name="description" content="The wizky club is a curator of fine whisky; fractionalizing each bottle or cask into NFTs. Each NFT is fully asset-backed and gives the holder membership into the wizky club."/>
            </Head>
            <Navbar activeNow={"index"}/>
            <main>
                <Header/>
                <Body/>
                <JoinUs/>
            </main>
            <Footer/>
        </div>
    )
}
