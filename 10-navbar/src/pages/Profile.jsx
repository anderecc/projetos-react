import '../styles/index.css';
import { Link } from 'react-router-dom';

let Profile = () => {
    return (
        <div className="pages-container">
            <h1>Profile</h1>
            <Link to={'/'}>Click to go Home</Link>
        </div>
    );
};

export default Profile;
