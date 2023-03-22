import '../styles/index.css';
import { Link } from 'react-router-dom';

let Projects = () => {
    return (
        <div className="pages-container">
            <h1>Projects</h1>
            <Link to={'/'}>Click to go Home</Link>
        </div>
    );
};

export default Projects;
