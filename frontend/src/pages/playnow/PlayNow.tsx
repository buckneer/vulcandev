import "./PlayNow.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faUser, faKey, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {toast, ToastContainer} from "react-toastify";

export default function PlayNow() {


    // useEffect(() => {
    //     if(localStorage.getItem("authRefresh")) {
    //         setLoggedIn(true);
    //     } else {
    //         setLoggedIn(false);
    //     }
    // }, [localStorage.getItem("authRefresh")]);



    return (
        <div className="PlayNow my-5">
                <div className="main-store container text-center my-5 download-game">
                    <div className="heading text-center">
                        <h3 className="title">Download VulcanPS Client</h3>
                    </div>

                    <p className="regular-text text-center mt-5">For Windows users please select the 'Download' option,
                        as this will provide a client and java bundle that will automatically run.
                        <br />For older 32bit
                            systems please select 32bit option.<br />For Mac &amp; Linux users please choose the Jar, it
                                will require java 11 to run (same version Runelite uses).
                    </p>

                    <a className="btn vote-btn w-auto mb-4 pt-2 mx-2" href="http://vulcanps.com/playnow/VulcanSetup.exe">
                        <FontAwesomeIcon icon={faDownload} className="mx-2" />
                        DOWNLOAD</a>


                    <a className="btn vote-btn w-auto mb-4 pt-2 mx-2" href="http://vulcanps.com/playnow/VulcanSetup32.exe">
                        <FontAwesomeIcon icon={faDownload} className="mx-2" />
                        DOWNLOAD 32Bit</a>

                    <a className="btn vote-btn w-auto mb-4 pt-2 mx-2" href="http://vulcanps.com/playnow/Vulcan.jar">
                        <FontAwesomeIcon icon={faDownload} className="mx-2" />
                        DOWNLOAD JAR</a>





                    <p className="regular-text text-centre">If you have any problems launching the client, please open a
                        ticket through our <a href="https://discord.gg/vulcanps">Discord</a></p>
                    <p className="regular-text text-centre"><b>JNI Error:</b> This means you have the incorrect java
                        version and are trying to run .jar file. Please use the .exe as it comes with java11 bundled.
                        Alternatively, download java11 directly.</p>
                    <p className="regular-text text-centre pb-4"><b>Microsoft Untrusted:</b> This occurs when
                        downloading a file that not many Windows users have downloaded before, but does not indicate
                        anything harmful.</p>

                </div>

            <ToastContainer />

        </div>
    )
}
