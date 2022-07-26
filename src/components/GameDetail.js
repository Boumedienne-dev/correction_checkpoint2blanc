import {useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GameDetail() {

    const {id} = useParams();

    const [gameDetails, setGameDetails] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(game => setGameDetails(game.data))
    }, []);

    return(
        <>
            {
                gameDetails &&
                <div className="card-game-wrapper">
                <div className="card-game-main">
                    <img src={gameDetails.background_image} alt={gameDetails.name} />
                    <div className="content-info">
                        <h2>{gameDetails.name}</h2>
                        <p>{gameDetails.rating}</p>
                    </div>
                </div>
                <div className="card-game-bonus">
                    <div className="informations">
                        <div className="genre">
                            <p>Genre:</p>
                        </div>
                        <p>Release date: {gameDetails.released}</p>
                    </div>
                </div>
            </div>
            }
        </>
    );
}

export default GameDetail;