import { useEffect } from 'react';
import Filter from './components/Filter';
import Items from './components/Items';
import './styles/app.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Menu Restaurant');

    return (
        <div className="app">
            <h1 className="title">Our Menu</h1>
            <Filter></Filter>
            <Items></Items>
        </div>
    );
}

export default App;
