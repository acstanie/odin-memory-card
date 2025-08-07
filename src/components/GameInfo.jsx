import '../styles/game-info.css';

export default function GameInfo(props) {

    return (
        <div className='game-info'>
            <h2>How To Play</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sint alias modi nesciunt aliquid, provident aperiam quidem 
                cum non natus molestias itaque? Reprehenderit mollitia aspernatur quis modi, veritatis velit, est quas sed officia nam rem commodi 
                quod maxime quibusdam? Aliquam sint illum totam hic ex qui voluptates, soluta in quasi iste ipsam asperiores error maxime laborum at 
            </p>
            <h3>Score { props.score }</h3>
            <h3>Best Score { props.bestScore }</h3>
        </div>
    );
}