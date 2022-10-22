import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const MainNav = ({ mes }) => {

    const doff = "none";
    const dopen = "block";

    const dgrid = "grid";

    const [show, setShow] = useState(doff);
    const [show1, setShow1] = useState(doff);
    const [wl, setWl] = useState(doff);

    const showf2 = () => {
        setShow(dopen)
        setShow1(doff)
    }
    const showf1 = () => {
        setShow1(dopen)
        setShow(doff)
    }
    return (
        <>
            <nav className="mainNav">
                <div className="container m-auto row">
                    <div className="col-3 col-md-6 col-lg-6 col-xl-6 nav_left">
                        <div className="">
                            <Link className="logoWrapper" to="/">
                                <img src="images/logo.gif" alt="logo" />
                                <h4>TinyTesla</h4>
                            </Link>
                        </div>
                        <ul className="menuClass">
                            <li className="mainLiP" onClick={() => showf2()}><Link to="#">Trade</Link>
                                <ul style={{ display: show }} className="subUl1" >
                                    <li><a href="/swap">Swap </a></li>
                                    <li><a href="/add">Liquidity</a></li>
                                </ul>


                            </li>
                            <li className="mainLiP" onClick={() => showf1()}><Link to="#">Earn</Link>
                                <ul style={{ display: show1 }} className="subUl2" onClick={() => setShow(doff)}>
                                    <li><a href="/farms">Farms </a></li>
                                    <li><a href="/pools">Pools</a></li>
                                </ul>


                            </li>
                            <li className="mainLiP"><a href="/nfts">NFT</a></li>
                            <li className="mainLiP"><Link to="/">Lottery</Link></li>
                        </ul>

                    </div>

                    <div className="col-9 col-md-6 col-lg-6 col-xl-6 nav_right">

                        <Button varient="outline" onClick={() => mes()}><i class="fa-solid fa-globe"></i></Button>

                        <Button id="topbnb" className="bnbBtn" varient="contained"><img src="images/bnb.png" alt="bnb" /> <span className="ssbnb" onClick={() => mes()}>BNB Smart Chain </span></Button>
                        <Button varient="contained" className="walletBtn" onClick={() => setWl(dgrid)}> CONNECT <span className="navw">WALLET</span></Button>

                    </div>

                </div>
            </nav>





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

        </>
    )
}


export default MainNav;