import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './context';

function App() {
    let { state } = useContext(AppContext);

    document.addEventListener('click', () => console.log(state));
    return (
        <div className="app">
            <h1>Home</h1>
            <Link to={'/teste'}>tes</Link>
        </div>
    );
}

export default App;
