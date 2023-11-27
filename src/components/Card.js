
function Card({ id, card, onClick }) {
    return (
        <div
            className={`memory-card${card.isFlipped ? " flip" : ""}`}
            onClick={onClick}
            style={{ order: card.order }}
            data-testid={card.id}
        >
            {card.type === "image"
                ? <img className="front-face" src={card.image} alt="Card" />
                : <div className="front-face content">{card.displayName}</div>
            }
            <div className="back-face content">{id}</div>
        </div>
    );
}

export default Card;
