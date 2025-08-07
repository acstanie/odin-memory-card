import { useEffect, useState } from 'react';

import '../styles/gameplay.css';

export default function GamePlay(props) {

    const [ cardIdsArray, setCardIdsArray ] = useState([]);
    const [ cardsInfo, setCardsInfo ] = useState(null);

    useEffect(() => {
        fetch('https://api.jikan.moe/v4/characters')
        .then(res => res.json())
        .then(res => {
            const characters = [];

            for (let i = 0; i <= 7; i++) {

                const character = {
                    id: res.data[i].mal_id,
                    name: res.data[i].name,
                    image: res.data[i].images.jpg.image_url,
                }

                characters.push(character)
            }

            setCardsInfo(characters);
        })

    }, []);
    

    function handleGameCardClick(event) {

        for (let i = cardsInfo.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));

            [cardsInfo[i], cardsInfo[random]] = [cardsInfo[random], cardsInfo[i]];
        }

        const newArray = [...cardsInfo];
        setCardIdsArray ([...cardIdsArray, event.target.parentElement.id]);

        setCardsInfo( newArray );
    }

    useEffect(() => {

        for (let i = 0; i < cardIdsArray.length; i++) {
            for (let j = i + 1; j < cardIdsArray.length; j++) {
                if ( cardIdsArray[i] === cardIdsArray[j]) {
                    props.setBestScore( cardIdsArray.length - 1 );  
                    setCardIdsArray([]);

                    console.log('matched');
                }
                else {
                    
                }
            }
        }
        
        props.setScore( cardIdsArray.length );

        console.log( cardIdsArray )

    }, [cardIdsArray]);
        
    
    return (
        <div className='game-play'>
            { cardsInfo && <GameCard cardsInfo={ cardsInfo } onClick={ (event) => handleGameCardClick(event) }/>}
        </div>
    )
}

function GameCard(props) {

    const cardsInfo = props.cardsInfo;

    return (
        <>
            { cardsInfo.map((cardInfo) => (
                <div id={ cardInfo.id } className='game-card' style={{ backgroundImage: `url(${cardInfo.image})` }} onClick={ props.onClick } key={ cardInfo.id }>
                    <div className='game-card-overlay'>
                        <span className='game-card-text'>{ cardInfo.name }</span>
                    </div>  
                </div>
            ))}
        </>
    )
}