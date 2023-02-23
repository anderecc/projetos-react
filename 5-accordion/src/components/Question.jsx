import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Response from './Response';
import '../styles/question.css';

let Question = ({ question, response }) => {
    let [open, setOpen] = useState(false);

    return (
        <div className="question-container">
            <div className="question">
                <p>{question}</p>
                {!open ? (
                    <button className="button" onClick={() => setOpen(true)}>
                        <FaPlus></FaPlus>
                    </button>
                ) : (
                    <button
                        className="button"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <FaMinus></FaMinus>
                    </button>
                )}
            </div>
            {open ? <Response response={response}></Response> : <></>}
        </div>
    );
};

export default Question;
