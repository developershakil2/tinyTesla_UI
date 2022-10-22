import React, {useState} from 'react';
import MainNav from '../partial/MainNav';
import Footer from '../partial/Footer';
import Button from '@mui/material/Button';


const Farms = () => {
    const doff = "none";
    const dgrid = "grid";

    const [wl, setWl12] = useState(doff);
    return (
        <>
        <div className="walletGroup" style={{ display: wl }}>
                <div className="walletWrapper">
                    <Button className="text-end " onClick={() => setWl12(doff)}><i style={{ marginRight: "10px", fontSize: "20px" }} class="fa-solid fa-xmark "></i></Button>
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
            <MainNav />
            <section id="farms">

                <div id="ccc" className="m-auto ">

                    <div style={{ visibility: "hidden" }}>

                        <h1 >Nfts Marketplace</h1>
                        <h1 >Nfts Marketplace</h1>
                        <h1 >Nfts Marketplace</h1>

                    </div>
                    <div className="nftHead">
                        <h1>Farms</h1>
                        <h4>Stake tokens to earn.</h4>
                    </div>

                    <hr />


                    <div className="container m-auto">
                        <div className="farms_filer_wrap">
                            <div className="checkBoxi" style={{ display: 'flex', alignItems: "center" }}>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <span style={{ marginLeft: "8px", fontWeight: 'bold' }}>Staked only</span>
                            </div>
                            <div className="checkBoxi" style={{ display: 'flex', alignItems: "center", marginLeft: "25px" }}>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                                <span style={{ marginLeft: "8px", fontWeight: 'bold' }}>Booster Available</span>
                            </div>

                            <div style={{ width: '200px', height: '20px' }} className="accordion" id="accordionExample">

                                <div className="accordion-item" style={{ marginLeft: "15px" }}>
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button style={{ padding: "6px", borderRadius: '20px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Sort By
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">

                                            <ul id="accord_filter">
                                                <Button>
                                                    APR
                                                </Button>
                                                <Button>
                                                    Multplier
                                                </Button>
                                                <Button>
                                                    Earned
                                                </Button>
                                                <Button>
                                                    Liquidity
                                                </Button>
                                                <Button>
                                                    Latest
                                                </Button>
                                            </ul>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>






                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BNB</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>



                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/sol.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-SOL</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>






                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb1.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BUSD</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>
                        </div>







                        <div className="row mt-4">
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BUSD</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>



                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BUSD</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>






                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BUSD</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>
                        </div>




                        <div className="row mt-4 mb-5">
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BUSD</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>



                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BUSD</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>






                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 farmCard ">


                                <div className="farms_card_head_sub">
                                    <div className="subCard_famrs">
                                        <div className="farms_img">
                                            <img className="small_t" src="images/bnb.png" alt="logos" />
                                            <img className="midium_t" src="images/logo.png" alt="logos" />
                                        </div>



                                        <h2>TINT-BUSD</h2>

                                    </div>


                                    <div className="rown_a mt-5 row">
                                        <div className="col-6 text-start ">
                                            <h2 style={{ paddingLeft: "10px" }}>APR</h2>

                                        </div>
                                        <div className="col-6 text-center  roki">
                                            <Button><i class="fa-solid fa-rocket " ></i> <span> Up To 46%</span></Button>
                                        </div>
                                    </div>
                                    <div className="rown_a mt-1 row">
                                        <div className="col-6 text-center">
                                            <h2 style={{ textAlign: 'left', paddingLeft: "10px" }}>Earn</h2>

                                        </div>
                                        <div className="col-6 text-center roki">
                                            <span style={{ fontWeight: "bold" }}> TINT + Fees</span>
                                        </div>
                                    </div>


                                    <div className="ent mt-5">
                                        <span style={{ fontSize: "13px", marginLeft: '7px', fontWeight: 'bold' }}>TINT EARNED</span>

                                        <div className="row">

                                            <div className="col-6 text-start">
                                                <input style={{ color: '#80808075', border: "none", outline: "none", padding: "10px 0px", width: "80%", background: "#80808075", fontWeight: "bold" }} type="number" value="0.0000" />

                                            </div>
                                            <div className="col-6 text-end">
                                                <Button style={{ width: "80%", fontWeight: 'bold', marginRight: "6px", background: "#80808075", padding: "10px 9px", color: "#80808075" }}>Harvest</Button>

                                            </div>
                                        </div>

                                    </div>


                                    <Button style={{ borderRadius: "10px", width: "100%", padding: "10px 20px", marginTop: "50px", color: "#111", fontWeight: "bold", background: "#E6D379" }}onClick={()=> setWl12(dgrid)}>Connect Wallet</Button>




                                </div>

                            </div>
                        </div>


                    </div>


                </div>

            </section>

            <Footer />

        </>
    )
}

export default Farms;