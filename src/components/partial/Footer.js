import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container m-auto row">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 fboxLeft footerBox">
                        <h3>About</h3>

                        <ul className="footerUl">
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">RoadMap</Link></li>
                            <li><Link download target="_blank" to="/images/white.pdf">White Paper</Link></li>
                        </ul>

                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 footerBoxss footerBox">
                        <h3>Social Media</h3>

                        <div className="mt-4 socialWrap">
                            <a target="_blank" href="https://t.me/TinyTeslaofficial"><i class="fa-brands fa-telegram"></i></a>
                            <a target="_blank" href="https://www.instagram.com/accounts/login/?next=/TINYTESLAOFFICIAL/"><i class="fa-brands fa-instagram"></i></a>
                            <a target="_blank" href="/"><i class="fa-brands fa-facebook"></i></a>
                            <a target="_blank" href="/"><i class="fa-brands fa-twitter"></i></a>
                            <a target="_blank" href="/"><i class="fa-brands fa-linkedin"></i></a>

                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 mt-4 footerBox">
                        <Link to="/" className="footer_img">
                            <img src="images/logo.png" alt="logo" />
                            <h3>TinyTesla</h3>
                        </Link>
                    </div>
                </div>

                <hr />

                <p className="text-center text-white">
                    All Rights Reserved TinyTesla &copy; 2022
                </p>
            </footer>



        </>
    )
}


export default Footer;