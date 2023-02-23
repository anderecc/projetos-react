import Filter from './components/Filter';
import Items from './components/Items';
import './styles/app.css';

function App() {
    return (
        <div className="app">
            <h1 className="title">Our Menu</h1>
            <Filter></Filter>
            <Items></Items>
        </div>
    );
}

export default App;
