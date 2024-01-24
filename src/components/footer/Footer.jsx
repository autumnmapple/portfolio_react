import './style.css'
import gitHub from './../../img/icons/gitHub.svg'
import inst from './../../img/icons/instagram.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import twitter from './../../img/icons/twitter.svg'
import vk from './../../img/icons/vk.svg'
const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!"><img src={gitHub} alt="link"/></a>
                        </li>
                        <li className="social__item">
                            <a href="#!"><img src={inst} alt="link"/></a>
                        </li>
                        <li className="social__item">
                            <a href="#!"><img src={linkedIn} alt="link"/></a>
                        </li>
                        <li className="social__item">
                            <a href="#!"><img src={twitter} alt="link"/></a>
                        </li>
                        <li className="social__item">
                            <a href="#!"><img src={vk} alt="link"/></a>
                        </li>
                    </ul>
                </div>
            </div>
    </footer>
    );
}
 
export default Footer;