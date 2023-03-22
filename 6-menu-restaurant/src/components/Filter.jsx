import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import '../styles/filter.css';

let Filter = () => {
    let { setType } = useContext(AppContext);
    useEffect(() => {
        document.getElementById('all').classList.add('active');
    }, []);

    let handleSelectType = (e) => {
        setType(e.target.id);
        document.querySelectorAll('.button').forEach((button) => {
            button.classList.remove('active');
        });
        e.target.classList.add('active');
    };

    return (
        <div className="filter-container">
            <ul className="filter-content">
                <li>
                    <button
                        className={`button`}
                        id="all"
                        onClick={handleSelectType}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        className={`button `}
                        id="breakfast"
                        onClick={handleSelectType}
                    >
                        Breakfast
                    </button>
                </li>
                <li>
                    <button
                        className={`button`}
                        id="lunch"
                        onClick={handleSelectType}
                    >
                        Lunch
                    </button>
                </li>
                <li>
                    <button
                        className={`button `}
                        id="shakes"
                        onClick={handleSelectType}
                    >
                        Shakes
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Filter;
