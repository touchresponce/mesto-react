import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, handleCardLike }) {
  function handleClick() {
    onCardClick(card);
  }
  // контекст юзера
  const currentUser = useContext(CurrentUserContext);

  // "доступ" к удалению
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? 'element__delete' : 'element__delete_hidden'
  }`;

  // проверка лайков
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `${
    isLiked ? 'element__like element__like-active' : 'element__like'
  }`;

  return (
    <article className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
      <button className={cardDeleteButtonClassName} type="button" />
      <div className="element__panel">
        <h2 className="element__panel-text">{card.name}</h2>
        <div className="element__like-group">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={() => handleCardLike(card)}
          />
          <span className="element__like-num">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
