import { useEffect } from 'react';
import Header from './components/Header';
import './styles/app.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React NavBar');

    return (
        <div className="app">
            <Header />
        </div>
    );
}

export default App;
