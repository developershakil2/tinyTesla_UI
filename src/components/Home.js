import React, { useState } from 'react';
import MainNav from './partial/MainNav';
import Button from '@mui/material/Button';
import SecondHomeSection from './partial/SecondHomeSection'
import Footer from './partial/Footer';

const Home = () => {

    const Alerti = () => {

        alert("we didn't work with smart contract this page under working progress, please try again some days later");
    }
    const doff = "none";
    const dgrid = "grid";

    const [wl, setWl] = useState(doff);
    return (
        <>
            <div className="walletGroup" style={{ display: wl }}>
                <div className="walletWrapper">
                    <Button className="text-end " onClick={() => setWl(doff)}><i style={{ marginRight: "10px", fontSize: "20px" }} class="fa-solid fa-xmark "></i></Button>
                    <h2 className="my-1 text-center">Connect Wallet</h2>
                    <hr />
                    <Button className="walletButton mt-3">
                        <img src="images/metamask.png" alt="metamask" />
                        <span>MetaMask</span>
                    </Button>
                    <hr />
                    <Button className="walletButton mt-3">
                        <img src="images/walletconnect.png" alt="metamask" />
                        <span>WalletConnect</span>
                    </Button>
                    <hr />

                    <Button className="walletButton mt-3">
                        <img src="images/coinbase.png" alt="metamask" />
                        <span>CoinBase</span>
                    </Button>
                    <hr />

                    <Button className="walletButton mt-3">
                        <img src="images/trustwallet.png" alt="metamask" />
                        <span>TrustWallet</span>
                    </Button>
                    <hr />
                </div>
            </div>
            <div className="HomeSection">
                <MainNav mes={Alerti} />

                <div id="home_content_wrap" className="container row m-auto">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 home_left_wrap">
                        <div className="home_inner_left">
                            <h1>Tiny Tesla</h1>
                            <h1>A group of people all united under one banner, A family for the masses.</h1>

                            <div className="home_btn_group">
                                <Button className="wl20" onClick={() => setWl(dgrid)}>Wallet Connect</Button>
                                <Button className="wl3"><a href="/swap" style={{ color: '#fff', textDecoration: "none" }}>Trade Now</a></Button>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-6  home_right_wrap">
                        <div className="home_inner_right">
                            <img src="images/logo.gif" alt="homimg" />
                        </div>

                    </div>
                </div>

            </div>
            <SecondHomeSection wl={setWl} mes={Alerti} />


            <Footer />

        </>
    )
}


export default Home;