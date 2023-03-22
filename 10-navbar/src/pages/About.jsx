import { Link } from 'react-router-dom';
import '../styles/index.css';

let About = () => {
    return (
        <div className="pages-container">
            <h1>About</h1>
            <Link to={'/'}>Click to go Home</Link>
        </div>
    );
};

export default About;
