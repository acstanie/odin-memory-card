import '../styles/game-info.css';

export default function GameInfo(props) {

    return (
        <div className='game-info'>
            <h2>How To Play</h2>
            <p>
                Increase your score by clicking on a character &#128512;. But your score drops to zero if you can remember who you clicked 
                before!&#129301; 
            </p>
            <h3>Score { props.score }</h3>
            <h3>Best Score { props.bestScore }</h3>
        </div>
    );
}