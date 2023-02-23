import '../styles/index.css';
import { Link } from 'react-router-dom';

let Contact = () => {
    return (
        <div className="pages-container">
            <h1>Contact</h1>
            <Link to={'/'}>Click to go Home</Link>
        </div>
    );
};

export default Contact;
