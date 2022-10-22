import React from 'react';
import ThirdSection from './ThirdSection';


const SecondHomeSection = ({ wl, mes }) => {
    return (
        <>

            <section id="secondSection">
                <div className="container m-auto">
                    <div className="secondSection_title">
                        <h2>TinyTesla TINT</h2>
                        <p>
                            Here at Tiny Tesla you come first, without you in this equation we wouldn’t be a Family. Our commitment to our Family is to constantly fight to create a safer and more enriched home for you to thrive in.
                        </p>
                    </div>


                    <div className="second_section_cards row">
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4">
                            <div className="col-11 m-auto cards_s">
                                <div className="usersBox">
                                    <i class="fa-solid fa-users"></i>
                                </div>
                                <div className="underWrap">
                                    <h2>10k</h2>
                                    <h2 className="u2">Users</h2>


                                </div>
                                <div className="underBoxCount">
                                    <p>in the last 30 days</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4">
                            <div className="col-11 m-auto cards_s">
                                <div className="usersBox">
                                    <i class="fa-solid fa-mars-and-venus"></i>
                                </div>
                                <div className="underWrap">
                                    <h2>1.5M</h2>
                                    <h2 className="u2">trades</h2>


                                </div>
                                <div className="underBoxCount">
                                    <p>in the last 30 days</p>
                                </div>
                            </div>

                        </div>


                        <div className="col-12 col-md-4 col-lg-4 col-xl-4  mt-4">
                            <div className="col-11 m-auto cards_s">
                                <div className="usersBox">
                                    <i class="fa-solid fa-chart-simple"></i>
                                </div>
                                <div className="underWrap">
                                    <h2>$3.8 Million</h2>
                                    <h2 className="u2">staked</h2>


                                </div>
                                <div className="underBoxCount">
                                    <p>Total Value Locked</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <ThirdSection wl1={wl} mes1={mes} />
        </>
    )
}



export default SecondHomeSection;