import { Link } from 'react-router-dom';

function LatestGameCard({
    game
}) {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <Link
                    to={`/games/${game._id}`}
                    className="btn details-btn"
                    id={game._id}
                >
                    Details
                </Link>
            </div>
        </div>
    );
}

export default LatestGameCard;