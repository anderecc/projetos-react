import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
    const {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        whoIsWinner,
        setHistory,
        history,
    } = useContext(GameContext);

    function handleClick() {
        if (squares[index]) return;
        if (whoIsWinner) return;
        setHistory([...history]);
        let newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        setIsXNext(!isXNext);
        setSquares(newSquares);
        setHistory([
            ...history,
            {
                squares: [...squares],
                isNext: !isXNext,
                whoIsWinner,
            },
        ]);
    }

    return (
        <button key={index} onClick={handleClick}>
            {value}
        </button>
    );
}
