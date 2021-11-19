import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import GameCard from './GameCard';

function GameCatalog() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            gameService.getAll().then(data => setGames(data))
        }, 1000);
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0
                ? games.map(x => <GameCard key={x._id} game={x} />)
                : <h3 className="no-articles">No games yet</h3>
            }
        </section>
    );
}

export default GameCatalog;