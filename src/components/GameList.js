import axios from "axios";
import React, {useState, useEffect} from "react";
import Game from "./Game";

function GameList() {

    const [games, setGames] = useState("");
    const [ratingFilter, setRatingFilter] = useState(false);

    useEffect(()=> {
        axios.get("https://apis.wilders.dev/wild-games/games/")
            .then(response => response.data)
            .then(data => setGames(data))
    }, []);

    const handleRatingFilter = () => {
        setRatingFilter(!ratingFilter);
    };

    return(
        <>
            <button onClick={handleRatingFilter}>
                {
                    ratingFilter
                        ? "Afficher la liste complète"
                        : "Afficher les meilleurs jeux"
                }
            </button>
                {
                    games && games
                        .filter((game) => !ratingFilter || game.rating > 4.5)
                        .map(game => (
                            <Game key={game.id} game={game} />
                    ))
                }
        </>
    );
}

export default GameList;