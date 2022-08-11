import { useEffect } from 'react';

export default function ImagePopup({ card, onClose }) {
  function handleOverlayClose(evt) {
    evt.target === evt.currentTarget && onClose();
  }

  // закрытие на esc
  function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
      onClose();
      document.removeEventListener('keydown', closeOnEsc);
    }
  }

  useEffect(() => {
    if (card.link) {
      document.addEventListener('keydown', closeOnEsc);
    }
    // console.log(card);
  }, [card]);

  return (
    <div
      className={`popup popup-image ${card.link && 'popup_opened'}`}
      onClick={handleOverlayClose}>
      <figure className="figure">
        <img className="popup__image" src={card.link} alt={card.name}></img>
        <figcaption className="popup__figcaption">{card.name}</figcaption>
        <button className="popup__close" type="button" onClick={onClose}></button>
      </figure>
    </div>
  );
}
