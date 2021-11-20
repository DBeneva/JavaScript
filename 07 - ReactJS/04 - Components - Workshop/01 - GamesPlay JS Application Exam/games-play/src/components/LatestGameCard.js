function LatestGameCard({
    game,
    navigationChangeHandler
}) {
    const onDetailsClick = (e) => {
        e.preventDefault();
        const id = e.target.id;

        navigationChangeHandler(`/details/${id}`);
    };

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
                <a
                    href={`/details/${game._id}`}
                    className="btn details-btn"
                    id={game._id}
                    onClick={onDetailsClick}
                >
                    Details
                </a>
            </div>
        </div>
    );
}

export default LatestGameCard;