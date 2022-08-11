export default function PopupWithForm({ name, isOpen, onClose, children }) {
  // закрытие на оверлей
  function handleOverlayClose(evt) {
    evt.target === evt.currentTarget && onClose();
  }

  return (
    <div
      className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlayClose}>
      <div className="popup__container">
        <button className="popup__close" onClick={onClose} />
        {children}
      </div>
    </div>
  );
}
