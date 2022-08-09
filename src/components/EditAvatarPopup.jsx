import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonName }) {
  //
  const avatarInput = useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_avatar"
        type="url"
        name="avatar"
        id="avatar-input"
        placeholder="Ссылка"
        required
        autoComplete="off"
        ref={avatarInput}
      />
      <span className="popup__input-error avatar-input-error" />
      <button className="popup__submit popup__submit_disabled" type="submit">
        {buttonName}
      </button>
    </PopupWithForm>
  );
}
