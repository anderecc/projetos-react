import People from './components/people';
import './styles/app.css';
import data from './data/data';
import { useState } from 'react';

function App() {
    let [state, setState] = useState(data);

    function resetAll() {
        setState('');
    }
    function renderPeoples() {
        return state === ''
            ? null
            : state.map((people) => {
                  return (
                      <People
                          key={people.id}
                          name={people.name}
                          image={people.image}
                          id={people.id}
                          age={people.age}
                      ></People>
                  );
              });
    }
    return (
        <div className="app">
            <h1 className="title">List Remember</h1>
            <div className="container">
                <ul className="list">{renderPeoples()}</ul>
            </div>
            <button className="button" onClick={() => setState('')}>
                Clear All
            </button>
        </div>
    );
}

export default App;
