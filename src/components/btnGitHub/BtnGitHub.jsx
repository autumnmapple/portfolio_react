import "./style.css";
import GitHubIcon from './gitHub-black.svg';
const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline"> {/* target="_blank" открывает окно с гитом в новой вкладке */}
            <img src={GitHubIcon} alt="img"/>
            GitHub repo
        </a>
    );
}
 
export default BtnGitHub;