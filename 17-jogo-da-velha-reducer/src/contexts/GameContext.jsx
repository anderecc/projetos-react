import { createContext, useReducer } from 'react';
import GameReducer, { INITIAL_STATE } from './GameReducer';
export const GameContext = createContext();

export default function GameContextProvider({ children }) {
    // const [squares, setSquares] = useState(Array(9).fill(null)); // iniciando o squares com 9 elementos com valores nulos
    // const [isXNext, setIsXNext] = useState(true);
    // const [whoIsWinner, setWhoIsWinner] = useState();
    // const [history, setHistory] = useState([]);
    // const state = {
    //     squares,
    //     setSquares,
    //     isXNext,
    //     setIsXNext,
    //     whoIsWinner,
    //     setWhoIsWinner,
    //     history,
    //     setHistory,
    // };
    const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
}
