import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btndarkMode/BtnDarkMode'
import './style.css'

//sfc+tab 
const Navbar=()=> {
    const activeLink="nav-list__link nav-list__link--active";
    const normalLink="nav-list__link";
    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li nav-list__item>
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>  
                        <li nav-list__item>
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>  
                        <li nav-list__item>
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>  
                    </ul>
                </div>
            </div>   
        </nav> 
    );
}
 
export default Navbar;