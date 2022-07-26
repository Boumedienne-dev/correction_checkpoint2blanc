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
                    <div>
                        <h2>{gameDetails.name}</h2>
                    </div>
            }
        </>
    );
}

export default GameDetail;