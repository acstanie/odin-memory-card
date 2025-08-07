import { useState } from 'react';

import GamePlay from './GamePlay.jsx';
import GameInfo from './GameInfo.jsx';

import '../styles/gameboard.css';

export default function Gameboard() {

    const [ score, setScore ] = useState(0);
    const [ bestScore, setBestScore ] = useState(0);

    return (
        <div className='gameboard'>
            <header className='game-name'>Memory Game</header>
            <GameInfo score={ score } bestScore={ bestScore }/>
            <GamePlay 
                score={ score } 
                setScore={ setScore} 
                bestScore={ bestScore }
                setBestScore={ setBestScore }/>
        </div>
    )
}