import React from 'react';
import MainNav from '../partial/MainNav';
import Footer from '../partial/Footer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Liquidity = () => {
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


            <section id="liquidity">


                <div className="container m-auto">
                    <div className="swapBox">
                        <Link to="/add"><img style={{ width: '30px', display: 'block', textAlign: 'left', marginLeft: "5px" }} src="images/larr.png" alt="larr" /></Link>
                        <h2>Add Liquidity</h2>
                        <p>Choose A Valid Pair</p>

                        <hr />

                        <div className="liquidity_pair_wrap">
                            <div className="tokenInputGroup">
                                <Button onClick={() => Alerti()}>
                                    <img className="lswapimg" src="images/bnb1.png" alt="bnb" /><span> BNB </span>
                                    <img className="rswapimg" src="images/arr.png" alt="arrow" />
                                </Button>

                            </div>
                            <span><i class="fa-solid fa-plus"></i></span>


                            <div className="tokenInputGroup">
                                <Button onClick={() => Alerti()}>
                                    <img className="lswapimg" src="images/logo.png" alt="bnb" /><span> TINT </span>
                                    <img className="rswapimg" src="images/arr.png" alt="arrow" />
                                </Button>

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


export default Liquidity;