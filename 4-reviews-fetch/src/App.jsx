import { useEffect } from 'react';
import Review from './components/Review';
import './styles/app.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Reviews');

    return (
        <div className="app">
            <h1 className="title">Our Reviews</h1>
            <Review></Review>
        </div>
    );
}

export default App;
