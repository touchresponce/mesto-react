export default function PopupWithForm(props) {
  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={props.onClose}></button>
        <form className="form edit-form" name={`${props.name}-form`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}
