import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Player() {
    const {
        state: { isXNext },
    } = useContext(GameContext);
    return <h1>Jogador da vez: {isXNext ? 'X' : 'O'}</h1>;
}
