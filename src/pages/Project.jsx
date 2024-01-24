import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { projects } from '../helpers/projectsList';

const Project = () => {
    const {id} = useParams(); 
    const project=projects[id];
    return ( 
        <main className="section">
            <div className="container">
                <h1 className="title-1">{project.title}</h1>
                <div className="project-details">  
                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>
                    <div className="project-details__disc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHub &&(
                        <BtnGitHub link="https://github.com/autumnmapple"/> 
                    )}                  
                </div>      
            </div>
        </main>
    )
}
 
export default Project;