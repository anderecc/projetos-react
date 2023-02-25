import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) {
    const {
        state: { squares, isXNext, whoIsWinner },
        dispatch,
    } = useContext(GameContext);

    function handleClick() {
        if (squares[index]) return;
        if (whoIsWinner) return;
        let newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        // setIsXNext(!isXNext);
        // setSquares(newSquares);
        // setHistory([
        //     ...history,
        //     {
        //         squares: [...squares],
        //         isNext: !isXNext,
        //         whoIsWinner,
        //     },
        // ]);
        dispatch({ type: 'UPDATE_SQUARES', payload: newSquares });
    }

    return (
        <button key={index} onClick={handleClick}>
            {value}
        </button>
    );
}
