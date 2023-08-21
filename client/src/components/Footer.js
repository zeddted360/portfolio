import instagram from '../public/instagram.png';
import twitter from '../public/twitter.png';
import facebook from '../public/facebook.png';
import whatsapp from '../public/whatsapp.png';
import linkedin from '../public/linkdin.png';

import './css-files/footer.css'
const Footer = () => {
    return ( 
        <footer className="footer">
            <div>
          <h3> &copy; 2023 zedd </h3>
          <i>This portfolio was built with React</i>
          </div>

          <div className="socials">
            <a href="https://twitter.com/nwibo_azubuike">
                <img src={twitter} alt="twi"/>
            </a>
            <a href="https://www.linkedin.com/in/azubuike-joseph-nwibo-740509232">
                <img src={linkedin} style={{width:48,height:48}} alt="link" />
            </a>
            <a href="https://wa.me/qr/VVECVFO7MOTBGI">
                <img src={whatsapp} alt="wa" />
            </a>
            <a href="https:www.facebook.com/profile.php?id=100005039778558&mibextid=zbWKwl">
                <img src={facebook} alt="face" />
            </a>
            <a href="https://instagram.com/zeddted360?utm_source=qr&igshid=NGExMmI2YTkyZg%3D">
                <img src={instagram} alt="insta" />
            </a>
          </div>
        </footer>
     );
}
 
export default Footer;