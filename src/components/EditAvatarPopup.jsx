import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <input
        className="popup__input popup__input_type_avatar"
        type="url"
        name="avatar"
        id="avatar-input"
        placeholder="Ссылка"
        required
        autoComplete="off"
      />
      <span className="popup__input-error avatar-input-error" />
      <button className="popup__submit popup__submit_disabled" type="submit" disabled>
        {props.buttonName}
      </button>
    </PopupWithForm>
  );
}
