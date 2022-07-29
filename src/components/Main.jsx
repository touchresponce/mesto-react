import { useState, useEffect } from 'react';
import api from '../utils/Api';
import addBtnPlus from '../images/addBtnPlus.svg';
import Card from './Card';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([apiUser, apiCards]) => {
        setUserName(apiUser.name);
        setUserDescription(apiUser.about);
        setUserAvatar(apiUser.avatar);
        // карточки
        setCards(apiCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__wrapper">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар"
            onClick={onEditAvatar}></img>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__info-edit" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__info-add" type="button" onClick={onAddPlace}>
          <img src={addBtnPlus} alt="Кнопка добавления"></img>
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}
