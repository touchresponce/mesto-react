export default function ImagePopup(props) {
  return (
    <div className={`popup popup-image ${props.card.link ? 'popup_opened' : ''}`}>
      <figure className="figure">
        <img className="popup__image" src={props.card.link} alt={props.card.name}></img>
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
        <button className="popup__close" type="button" onClick={props.onClose}></button>
      </figure>
    </div>
  );
}
