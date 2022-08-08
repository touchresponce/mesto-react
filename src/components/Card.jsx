import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? 'element__delete' : 'element__delete_hidden'
  }`;

  return (
    <article className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className={cardDeleteButtonClassName} type="button" />
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
