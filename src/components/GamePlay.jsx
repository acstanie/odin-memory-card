import { useEffect, useState } from 'react';

import '../styles/gameplay.css';

export default function GamePlay() {

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

        const newArray = [...cardsInfo]

        setCardsInfo(newArray);

        console.log(event.target.parentElement.getAttribute('key'))
    }

    
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
                <div className='game-card' style={{ backgroundImage: `url(${cardInfo.image})` }} onClick={ props.onClick } key={ cardInfo.id } >
                    <div className='game-card-overlay'>
                        <span className='game-card-text'>{ cardInfo.name }</span>
                    </div>  
                </div>

            ))}
          
        </>
    )
}