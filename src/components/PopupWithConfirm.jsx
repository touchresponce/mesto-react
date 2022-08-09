import PopupWithForm from './PopupWithForm';

export default function PopupWithConfirm({ isOpen, onClose, buttonName, onCardDelete, isLoading }) {
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={(evt) => {
        evt.preventDefault();
        onCardDelete();
      }}>
      <button className="popup__submit margin" type="submit">
        {isLoading ? 'Удаление...' : buttonName}
      </button>
    </PopupWithForm>
  );
}
