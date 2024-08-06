import { CiFacebook, CiInstagram, CiYoutube, CiMail, CiPhone ,CiLocationOn  } from "react-icons/ci";


function Footer(){
    return( 
        <div id="footer">
            <div id="footerikon">
                <a href="https://www.facebook.com/sekolahautislab?mibextid=ZbWKwL"><CiFacebook /></a>
                <a href="https://www.instagram.com/slbautis/"><CiInstagram /></a>
                <a href="https://www.youtube.com/@slbautislabum"><CiYoutube /></a>
                <a href="mailto:slbautislabum@gmail.com"><CiMail /></a>
                <a href="tel:+0341566523"><CiPhone /></a>
            </div>
            <div id="footerby">
                <h4>©Copyright © by Politeknik Negeri Malang . All Rights Reserved</h4>
                <h4>Designed Jasmin Salsabil Arifah</h4>
            </div>
        </div>
    )
}

export default Footer
;