import React from "react";

function Card({ card, name, link, likes, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__card">
      <button className="elements__img-button" type="button">
        <img
          className="elements__image"
          style={{ backgroundImage: `url(${link})` }}
          onClick={handleClick}
        />
      </button>
      <button
        type="button"
        className="elements__delete-button elements__delete-button_type_active"
        aria-label="урна"
      ></button>
      <div className="elements__card-footer">
        <h2 className="elements__name">{name}</h2>
        <div className="elements__like-elements">
          <button
            className="elements__like"
            type="button"
            aria-label="лайк"
          ></button>
          <p className="elements__like-counter">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
