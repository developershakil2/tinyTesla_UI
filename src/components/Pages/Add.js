import React from 'react';
import MainNav from '../partial/MainNav';
import Footer from '../partial/Footer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Addl = () => {
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
                    <div className="swapBox pb-5" >
                        <h2>Your Liquidity</h2>
                        <p>Remove liquidity to receive tokens back</p>

                        <hr />

                        <div className="my-4 py-4">
                            <input className="liq" type="text" value="Connect to a wallet to view your liquidity" />
                        </div>

                        <Link style={{ textDecoration: 'none' }} to="/liquidity" className="swapConnectBtn  my-5" >
                            <i class="fa-solid fa-plus"></i> <span> Add Liquidity</span>
                        </Link>


                    </div>

                </div>
            </section>


            <Footer />


        </>
    )
}


export default Addl;