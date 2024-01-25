import './style.css'
import gitHub from './../../img/icons/gitHub.svg'
import twitter from './../../img/icons/twitter.svg'
import vk from './../../img/icons/vk.svg'
const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://github.com/autumnmapple"><img src={gitHub} alt="link"/></a>
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