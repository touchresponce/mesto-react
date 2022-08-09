export default function PopupWithForm({ name, isOpen, onClose, title, onSubmit, children }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
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
