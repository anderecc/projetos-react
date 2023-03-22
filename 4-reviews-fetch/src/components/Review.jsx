import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Buttons from '../components/Buttons';
import { FaQuoteRight } from 'react-icons/fa';
import '../styles/review.css';

let Review = () => {
    let { state, count } = useContext(AppContext);
    console.log(count);

    return state ? (
        <div className="container">
            <div className="container-image">
                <div className="image">
                    <FaQuoteRight className="quote"></FaQuoteRight>
                    <img
                        src={state[count].image}
                        alt={state[count].name + 'image'}
                    />
                </div>
            </div>
            <h3 className="name">{state[count].name}</h3>
            <p className="job">{state[count].job}</p>
            <p className="text">{state[count].text}</p>
            <Buttons></Buttons>
        </div>
    ) : (
        <div>loading</div>
    );
};

export default Review;
