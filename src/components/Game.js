import {Link} from 'react-router-dom';

function Game({game}) {
    return(
        <>
            <Link to={`/games/${game.id}`}>
                <div className="card-game-wrapper">
                    <div className="card-game-main">
                        <img src={game.background_image} alt={game.name} />
                        <div className="content-info">
                            <h2>{game.name}</h2>
                            <p>{game.rating}</p>
                        </div>
                    </div>
                    <div className="card-game-bonus">
                        <div className="informations">
                            <div className="genre">
                                <p>Genre:</p>
                            </div>
                            <p>Release date: {game.released}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Game;