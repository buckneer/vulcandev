import "./Footer.scss";
import logo from "../../assets/main/logo.png";



export default function Footer() {
    return (
        <div className="Footer mt-5">

            <section className="p-3">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-4 col-lg-5 col-xl-5 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <img src={logo} style={{width: "250px", height: "150px"}}  alt="Logo" />
                            </h6>
                            <p className="text-white">
                                Trademarks and brands are the property of their respective owners. Vulcan is not affiliated with Jagex, RuneScape or Funorb. To play RuneScape, visit RuneScape.com.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                            <h2 className="text-uppercase fw-bold mb-4 text-primary ">
                                Demo
                            </h2>
                            <ul>
                                <li>
                                    <a href="https://store.vulcanps.com/">Download</a>
                                </li>
                                <li>
                                    <a href="https://store.vulcanps.com/store">Store</a>
                                </li>
                                <li>
                                    <a href="https://vulcanps.com/hiscores.php">HighScores</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                            <h2 className="text-uppercase fw-bold mb-4 text-primary">
                                Community
                            </h2>
                            <ul>
                                <li>
                                    <a href="https://vulcanps.com/login">Login</a>
                                </li>
                                <li>
                                    <a href="https://vulcanps.com/register">Register</a>
                                </li>
                                <li>
                                    <a href="https://vulcanps.com/hiscores.php">Forums</a>
                                </li>
                                <li>
                                    <a href="https://discord.com/invite/VulcanPS">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
                            <h2 className="text-uppercase fw-bold mb-4 text-primary">
                                Support
                            </h2>
                            <ul>
                                <li>
                                    <a href="https://discord.com/invite/vulcanps">Help Desk</a>
                                </li>
                                <li>
                                    <a href="https://discord.com/invite/vulcanps">Forgot Password</a>
                                </li>
                                <li>
                                    <a href="https://vulcanps.com/forum/14-reports-appeals/">Appeal punishment</a>
                                </li>
                                <li>
                                    <a href="https://vulcanps.com/forum/14-reports-appeals/">Report Bug</a>
                                </li>
                                <li>
                                    <a href="https://vulcanps.com/forum/14-reports-appeals/">Report Abuse</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4 text-white">
                <div className="row justify-content-center">
                    <div className="col-6">
                        Copyright ©2022 Vulcan. | All rights reserved.
                    </div>
                    <div className="col-6">
                        <a href="https://vulcanps.com/terms">Terms of Service</a> | <a href="https://vulcanps.com/privacy">Privacy Policy</a>
                    </div>
                </div>

            </div>

        </div>
    )
}
