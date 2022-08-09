export default function PopupWithForm({ name, isOpen, onClose, title, onSubmit, children }) {
  function handleOverlayClose(evt) {
    evt.target === evt.currentTarget && onClose();
  }

  return (
    <div
      className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlayClose}>
      <div className="popup__container">
        <button className="popup__close" onClick={onClose}></button>
        <form className="form edit-form" name={`${name}-form`} onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
        </form>
      </div>
    </div>
  );
}
