import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { v4 as uuidv4 } from 'uuid';

export default function History() {
    const {
        state: { history },
        dispatch,
    } = useContext(GameContext);
    function handleClick(index) {
        dispatch({ type: 'UPDATE_HISTORY', payload: [history, index] });
    }
    return (
        <div>
            {history.map((data, index) => (
                <div key={uuidv4()} className="history">
                    <button onClick={() => handleClick(index)}>
                        Voltar para jogada {index}
                    </button>
                </div>
            ))}
        </div>
    );
}
