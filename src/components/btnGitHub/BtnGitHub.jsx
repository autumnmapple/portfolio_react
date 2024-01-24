import "./style.css";
import GitHubIcon from './gitHub-black.svg';
const BtnGitHub = ({link}) => {
    return ( 
        /*target="_blank" открывает окно с гитом в новой вкладке*/
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={GitHubIcon} alt="img"/>
            GitHub repo
        </a>
    );
}
 
export default BtnGitHub;