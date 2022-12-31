import React from "react";
import {useEffect, useState} from 'react';
import api from "../utils/Api.js";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <button
          className="profile__avatar-button"
          type="button"
          aria-label="avatar-button"
          onClick={onEditAvatar}
        ></button>
        <img
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="open"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__plus-button"
          aria-label="add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list" id="list">
          {cards.map((card) => (
            <Card
              key={card._id}
              id={card._id}
              card={card}
              name={card.name}
              link={card.link}
              likes={card.likes.length}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
