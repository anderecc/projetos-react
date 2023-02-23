import { useContext } from 'react';
import Companies from './components/Companies';
import Experience from './components/Experience';
import { AppContext } from './context';
import './styles/app.css';

function App() {
    let { loading } = useContext(AppContext);
    return (
        <div className="app">
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                    <h1 className="title">Experience</h1>
                    <div className="container">
                        <Companies></Companies>
                        <Experience></Experience>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
