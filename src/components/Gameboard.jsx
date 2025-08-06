
import GamePlay from './GamePlay.jsx';

import '../styles/gameboard.css';

export default function Gameboard() {

    return (
        <div className='gameboard'>
            <header className='game-name'>Memory Game</header>
            <div className='game-info'></div>
            <GamePlay />
        </div>
    )
}