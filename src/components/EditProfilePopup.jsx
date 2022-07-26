import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup(props) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <input
        className="popup__input popup__input_profile_name"
        type="text"
        name="name"
        id="userName-input"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
      />
      <span className="popup__input-error userName-input-error" />
      <input
        className="popup__input popup__input_profile_job"
        type="text"
        name="info"
        id="userJob-input"
        placeholder="Работа"
        minLength="2"
        maxLength="200"
        required
        autoComplete="off"
      />
      <span className="popup__input-error userJob-input-error" />
      <button className="popup__submit popup__submit_disabled" type="submit" disabled>
        {props.buttonName}
      </button>
    </PopupWithForm>
  );
}
