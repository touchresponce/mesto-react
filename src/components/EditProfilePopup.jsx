import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonName }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
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
        onChange={handleName}
        value={name || ''}
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
        onChange={handleDescription}
        value={description || ''}
      />
      <span className="popup__input-error userJob-input-error" />
      <button className="popup__submit popup__submit_disabled" type="submit">
        {buttonName}
      </button>
    </PopupWithForm>
  );
}
