import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonName, isLoading }) {
  //
  const nameInput = useRef('');
  const linkInput = useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: nameInput.current.value,
      link: linkInput.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_place_name"
        type="text"
        name="name"
        id="placeName-input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        autoComplete="on"
        ref={nameInput}
      />
      <span className="popup__input-error placeName-input-error" />
      <input
        className="popup__input popup__input_place_url"
        type="url"
        name="link"
        id="placeUrl-input"
        placeholder="Ссылка на картинку"
        required
        autoComplete="on"
        ref={linkInput}
      />
      <span className="popup__input-error placeUrl-input-error" />
      <button className="popup__submit" type="submit">
        {isLoading ? 'Сохранение...' : buttonName}
      </button>
    </PopupWithForm>
  );
}
