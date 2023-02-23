import { useEffect } from 'react';
import Review from './components/Review';
import './styles/app.css';

function App() {
    useEffect(() => {
        document.title = 'Reviews';
    }, []);
    return (
        <div className="app">
            <h1 className="title">Our Reviews</h1>
            <Review></Review>
        </div>
    );
}

export default App;
