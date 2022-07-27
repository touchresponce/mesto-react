export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="element__delete" type="button" />
      <div className="element__panel">
        <h2 className="element__panel-text">{card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button" />
          <span className="element__like-num">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
