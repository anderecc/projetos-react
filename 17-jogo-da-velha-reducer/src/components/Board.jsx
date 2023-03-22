import { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/GameContext';
import calculateWinner from '../utils/calculateWinner';
import { v4 as uuidv4 } from 'uuid';

import Player from './Player';
import Reset from './Reset';
import Square from './Square';
import Winner from './Winner';
import History from './History';

export default function Board() {
    const {
        state: { squares, history },
        dispatch,
    } = useContext(GameContext);

    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner) {
            dispatch({ type: 'UPDATE_WINNER', payload: winner });
        }
        console.log(winner);
        console.log(history);
    }, [dispatch, history, squares]);

    return (
        <div className="board-container">
            <Player />
            <Reset />
            <Winner />
            <div className="board">
                {squares.map((value, index) => (
                    <Square key={uuidv4()} value={value} index={index} />
                ))}
            </div>
            <History />
        </div>
    );
}
