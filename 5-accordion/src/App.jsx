import { useEffect } from 'react';
import { useContext } from 'react';
import Question from './components/Question';
import { AppContext } from './context/context';
import './styles/app.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Accordion');
    let { state } = useContext(AppContext);

    let renderQuestions = () => {
        return state ? (
            state.map((quest) => {
                return (
                    <Question
                        key={quest.id}
                        question={quest.title}
                        response={quest.info}
                    ></Question>
                );
            })
        ) : (
            <></>
        );
    };
    return (
        <div className="container">
            <h1 className="title">Questions And Answers About Login</h1>
            <div className="content">{renderQuestions()}</div>
        </div>
    );
}

export default App;
