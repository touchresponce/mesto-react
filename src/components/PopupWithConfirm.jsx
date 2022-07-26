import PopupWithForm from './PopupWithForm';

export default function PopupWithConfirm(props) {
  return (
    <PopupWithForm title="Вы уверены?" name="confirm" isOpen={props.isOpen} onClose={props.onClose}>
      <button className="popup__submit margin" type="submit">
        {props.buttonName}
      </button>
    </PopupWithForm>
  );
}
