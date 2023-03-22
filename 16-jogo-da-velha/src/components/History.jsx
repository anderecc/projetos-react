import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { v4 as uuidv4 } from 'uuid';

export default function History() {
    const { history, setHistory, setSquares, setIsXNext, setWhoIsWinner } =
        useContext(GameContext);
    function handleClick(index) {
        const newHistory = [...history];
        newHistory.splice(index, Number.MAX_SAFE_INTEGER);
        setHistory(newHistory);
        setSquares(history[index].squares);
        setIsXNext(history[index].isNext);
        setWhoIsWinner(history[index].whoIsWinner);
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
