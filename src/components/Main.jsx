import React from 'react';
import api from './utils/Api';
import addBtnPlus from '../images/addBtnPlus.svg';
import Card from './Card';

export default function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
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
            onClick={props.onEditAvatar}></img>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__info-edit"
              type="button"
              onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__info-add" type="button" onClick={props.onAddPlace}>
          <img src={addBtnPlus} alt="Кнопка добавления"></img>
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
