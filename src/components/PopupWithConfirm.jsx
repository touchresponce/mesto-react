import PopupWithForm from './PopupWithForm';

export default function PopupWithConfirm({ isOpen, onClose, buttonName }) {
  return (
    <PopupWithForm title="Вы уверены?" name="confirm" isOpen={isOpen} onClose={onClose}>
      <button className="popup__submit margin" type="submit">
        {buttonName}
      </button>
    </PopupWithForm>
  );
}
