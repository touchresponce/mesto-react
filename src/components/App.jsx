import { useState, useEffect } from 'react';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithConfirm from './PopupWithConfirm';

export default function App() {
  // cтейты модалок
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  // юзер, карты
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([apiUser, apiCards]) => {
        setCurrentUser(apiUser);
        setCards(apiCards);
      })
      .catch((err) => console.log(err));
  }, []);

  // управление модалками
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // лайки логика
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .like(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
        .catch((err) => console.log(err));
    } else {
      api
        .dislike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
        .catch((err) => console.log(err));
    }
  }

  // удаление
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  // ред-ие юзера
  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  // ред-ие аватарки
  function handleUpdateAvatar(data) {
    api
      .setAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  // добавление карт
  function handleAddPlaceSubmit(data) {
    api
      .setCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={EditProfilePopup}
          onUpdateUser={handleUpdateUser}
          buttonName="Сохранить"
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={AddPlacePopup}
          onAddPlace={handleAddPlaceSubmit}
          buttonName="Создать"
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={EditAvatarPopup}
          onUpdateAvatar={handleUpdateAvatar}
          buttonName="Сохранить"
        />
        <PopupWithConfirm isOpen={isConfirmPopupOpen} onClose={closeAllPopups} buttonName="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}
