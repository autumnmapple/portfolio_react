import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { projects } from '../helpers/projectsList';

const Project = () => {
    const {id} = useParams(); //достаем параметр, который идет после / в домене
    const project=projects[id];//чтоб проект завсил от записи после / в домене, которая равна id элемента
    return ( //если условия до && выполняются, то кнопку с гитом появляется 
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