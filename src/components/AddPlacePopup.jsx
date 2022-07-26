import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  return (
    <PopupWithForm title="Новое место" name="add" isOpen={props.isOpen} onClose={props.onClose}>
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
      />
      <span className="popup__input-error placeUrl-input-error" />
      <button className="popup__submit popup__submit_disabled" type="submit" disabled>
        {props.buttonName}
      </button>
    </PopupWithForm>
  );
}
