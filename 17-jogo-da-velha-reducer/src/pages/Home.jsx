import React from 'react';
import Board from '../components/Board';
import './Home.css';

import GameContextProvider from '../contexts/GameContext';
export default function Home() {
    return (
        <GameContextProvider>
            <Board />
        </GameContextProvider>
    );
}
