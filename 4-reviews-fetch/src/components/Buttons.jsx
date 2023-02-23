import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaChevronLeft, FaChevronRight, FaRandom } from 'react-icons/fa';
import '../styles/buttons.css';

let Buttons = () => {
    let { state, count, setCount } = useContext(AppContext);

    let handlePrevPreview = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(state.length - 1);
        }
    };
    let handleNextPreview = () => {
        setCount(count + 1);
        if (count >= state.length - 1) {
            setCount(0);
        }
    };

    let handleRandomPreview = () => {
        let firstNumber = Math.round(Math.random() * (state.length - 1));
        if (count === firstNumber) {
            setCount(handleNextPreview);
        }
        setCount(firstNumber);
    };

    return (
        <div className="buttons-container">
            <div className="buttons-prev-next">
                <button
                    className="button-prev button"
                    onClick={handlePrevPreview}
                >
                    <FaChevronLeft></FaChevronLeft>
                </button>
                <button
                    className="button-next button"
                    onClick={handleNextPreview}
                >
                    <FaChevronRight></FaChevronRight>
                </button>
            </div>
            <button
                className="button-random button"
                onClick={handleRandomPreview}
            >
                <FaRandom></FaRandom>
            </button>
        </div>
    );
};

export default Buttons;
