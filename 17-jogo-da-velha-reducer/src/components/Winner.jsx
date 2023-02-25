import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Winner() {
    const {
        state: { whoIsWinner },
    } = useContext(GameContext);
    return whoIsWinner ? (
        <p className="winner">
            Parabéns ao jogador '{whoIsWinner}' vencedor da rodada !
        </p>
    ) : (
        <></>
    );
}
