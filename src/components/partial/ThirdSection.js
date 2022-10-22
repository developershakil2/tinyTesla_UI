import React from 'react';
import Button from '@mui/material/Button';



const ThirdSection = ({ wl1, mes1 }) => {
    const dgrid = "grid";
    return (
        <>

            <section className="thirdSection">
                <div className="container m-auto row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 thirdSectLeft">
                        <h2><span style={{ color: '#00bfff' }}>Trade</span> With TinyTesla Trade Anything with TINT</h2>
                        <p className="mt-4 ">Trade any token on BNB Smart Chain in seconds, <br />just by connecting your wallet.</p>
                        {/* <p className="mt-4">
                            The Tiny Tesla Family will only list projects after checking the use case and category of the project. Once they pass initial approval from the team, we will disclose the project details to the rest of the family. This will result in community voting, which will bring more family members from the community of the potential project. If voting is successful we will move forward to securing KYC auditing from our partnerships and launching the project into the Tiny Tesla Coil.
                            If voting is unsuccessful we will give them a singular attempt at showcasing the project to our community. This will be followed by a secondary vote. If the voting is unsuccessful the project will reject the application and move to the next applicant.
                        </p> */}
                        <div className="home_btn_group">
                            <Button className="wl2"><a href="/swap" style={{ color: '#111', textDecoration: "none" }}>Trade Now</a></Button>
                        </div>
                    </div>



                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 thirdSectRight">
                        <img className="bnb2" src="images/bnb1.png" alt="logo" />
                        <img className="bnb1" src="images/logo.png" alt="logo" />
                    </div>
                </div>
            </section>


            <section className="thirdSection">
                <div className="container m-auto row">

                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 thirdSectRight">
                        <img className="tinyimg" src="images/tiny.jpg" alt="logo" />

                    </div>




                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 thirdSectLeft">
                        <h2><span style={{ color: '#00bfff' }}>Earn </span> passive income with crypto.</h2>
                        <p className="mt-4 ">TinyTesla  makes it easy to make your crypto work for you <br /></p>
                        <p className="mt-4">
                            When you make a token swap (trade) on the exchange, you will pay a 0.30% trading fee, which is broken down as follows</p>
                        <ul className="mt-4">
                            <li>0.15% – Returned to liquidity pools in the form of a fee reward for liquidity providers.</li>
                            <li>0.05% – Buyback TinyT for burn/ Stable coin Pool</li>
                            <li>0.05% – Project Support Program</li>
                            <li>0.05% – Marketing</li>

                        </ul>
                        <div className="home_btn_group">
                            <Button id="td2" className="wl2"><a href="/farms" style={{ color: '#111', textDecoration: "none" }}>Explore</a></Button>
                        </div>
                    </div>




                </div>
            </section>

            <section className="fourth_section">
                <div className="container m-auto ">
                    <div className="ticketWrap">
                        <div className="priceWrap">
                            <h2>Win millions in prizes</h2>
                            <p>
                                Provably fair, on-chain games.<br />
                                Win big with TinyTesla
                            </p>
                        </div>

                        <div className="price_card_wrap row">
                            <div id="card1" className="col-12 col-md-6 col-lg-6 col-xl-6 priceCard">

                                <div className="ticketmark">
                                    <i class="fa-solid fa-ticket-simple"></i>
                                </div>
                                <p className="mt-4 mb-3">Production</p>
                                <h2>$2.5 million</h2>
                                <p className="mt-3 mb-3">
                                    in BNB + TINT won so far
                                </p>
                                <p className="mt-3 mb-3">
                                    Predict the price trend of BNB or TINT to win
                                </p>
                                <Button className="play" onClick={() => mes1()}>
                                    <span> play </span> <i class="fa-solid fa-arrow-right ml-3"></i>

                                </Button>
                            </div>

                            <div id="card2" className="col-12 col-md-6 col-lg-6 col-xl-6 priceCard">

                                <div className="ticketmark">
                                    <i class="fa-solid fa-ticket-simple"></i>
                                </div>
                                <p className="mt-4 mb-3">Lottery</p>
                                <h2>$3,040</h2>
                                <p className="mt-3 mb-3">
                                    in TINT prizes this round
                                </p>
                                <p className="mt-3 mb-3">
                                    Buy tickets with TINT, win TINT if your numbers match
                                </p>
                                <Button className="play" onClick={() => mes1()}>
                                    <span> Buy Ticket </span> <i class="fa-solid fa-arrow-right ml-3"></i>

                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="tintMakes" className="thirdSection">
                <div className="container m-auto row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 thirdSectLeft">
                        <h2><span style={{ color: '#00bfff' }}>TINT</span> makes our world go round.</h2>
                        <p className="mt-4 ">TINT token is at the heart of the TinyTesla ecosystem. <br />Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it</p>

                        <div className="home_btn_group">
                            <Button id="td2" className="wl2"><a href="/swap" style={{ color: '#111', textDecoration: "none" }}>BUY TINT</a></Button>
                        </div>
                    </div>



                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 thirdSectRight">

                        <img className="bnb1" src="images/buytnt.jpg" alt="logo" />
                    </div>
                </div>
            </section>

            <section id="fivthSection">
                <div className="container m-auto row">
                    <div className="StartSec">
                        <h2>Start in seconds.</h2>
                        <p>Connect your crypto wallet to start using the app in seconds.<br /> <span style={{ fontWeight: "bold" }}>No registration needed.</span></p>
                        <Button className="WalletB" onClick={() => wl1(dgrid)}>Wallet Connect</Button>
                    </div>
                </div>
            </section>

        </>
    )
}


export default ThirdSection;