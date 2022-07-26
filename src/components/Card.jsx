export default function Card(props) {
  // function handleCardClick() {
  //   props.onCardClick(props.card);
  // }

  return (
    <article className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={props.onCardClick}
      />
      <button className="element__delete" type="button" />
      <div className="element__panel">
        <h2 className="element__panel-text">{props.card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button" />
          <span className="element__like-num">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
