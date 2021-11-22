import { useEffect, useState, lazy, Suspense } from 'react';
import * as gameService from '../../services/gameService';
// import GameCard from './GameCard';

const GameCard = lazy(() => import('./GameCard'));

function GameCatalog({
    navigationChangeHandler
}) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            gameService.getAll().then(data => setGames(data))
        }, 1000);
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <Suspense fallback={<p>Loading...</p>}>
                {games.length > 0
                    ? games.map(x => <GameCard key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />)
                    : <h3 className="no-articles">No games yet</h3>
                }
            </Suspense>
        </section>
    );
}

export default GameCatalog;