import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './context';
import './styles/app.css';
function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Lorem Generetor');
    let { state, loading, value, setValue, getLorems } = useContext(AppContext);

    let handleGenerate = (e) => {
        e.preventDefault();
        getLorems();
    };

    let renderLorems = () => {
        return state ? (
            state.map((lorem, index) => {
                return (
                    <p key={index} className="text">
                        {lorem}
                    </p>
                );
            })
        ) : (
            <></>
        );
    };

    return (
        <div className="app">
            <h1 className="title">Tired of boring lorem ipsum?</h1>
            {!loading ? (
                <>
                    <form className="form">
                        <label htmlFor="input" className="label">
                            Paragraphs:
                            <input
                                type="number"
                                id="input"
                                className="input"
                                max={10}
                                min={1}
                                value={value}
                                autoFocus
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </label>
                        <button className="button" onClick={handleGenerate}>
                            Generate
                        </button>
                    </form>
                    <div className="lorem-container">{renderLorems()}</div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default App;
