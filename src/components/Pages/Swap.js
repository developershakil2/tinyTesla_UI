import React from 'react';
import MainNav from '../partial/MainNav';
import Footer from '../partial/Footer';
import Button from '@mui/material/Button';


const Swap = () => {


    const Alerti = () => {

        alert("we didn't work with smart contract this page under working progress, please try again some days later");
    }
    return (
        <>
            <MainNav />


            <div style={{ visibility: "hidden" }}>

                <h1 >.</h1>
                <h1 >.</h1>
                <h1 >.</h1>

            </div>


            <section id="swap">


                <div className="container m-auto">
                    <div className="swapBox">
                        <h2>Swap</h2>
                        <p>Trade Tokens in an Instant</p>

                        <hr />

                        <div className="tokenInputGroup">
                            <Button onClick={() => Alerti()}>
                                <img className="lswapimg" src="images/bnb1.png" alt="bnb" /><span> BNB </span>
                                <img className="rswapimg" src="images/arr.png" alt="arrow" />
                            </Button>
                            <div className="btnWrappi">
                                <input type="number" placeholder="0.00" />
                            </div>
                        </div>

                        <div className="mt-3 ">
                            <Button onClick={() => Alerti()}>
                                <img style={{ width: '30px', height: "30px", borderRadius: "15px" }} src="images/darr.png" alt="darro" />
                            </Button>
                        </div>
                        <div className="tokenInputGroup">
                            <Button onClick={() => Alerti()}>
                                <img className="lswapimg" src="images/logo.png" alt="bnb" /><span> TINT </span>
                                <img className="rswapimg" src="images/arr.png" alt="arrow" />
                            </Button>
                            <div className="btnWrappi">
                                <input type="number" placeholder="0.00" />
                            </div>
                        </div>


                        <Button onClick={() => Alerti()} className="swapConnectBtn my-5">
                            Connect Wallet
                        </Button>


                    </div>

                </div>
            </section>


            <Footer />

        </>
    )
}

export default Swap;