import './style.css'
const Header = () => {
    return (  
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>ку, мя зовут <em>Autumn_maple</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating</p>
                </div>
                <a href="https://github.com/autumnmapple" className="btn">Check GitHub!</a>
            </div>
        </header>
    );
}
 
export default Header;