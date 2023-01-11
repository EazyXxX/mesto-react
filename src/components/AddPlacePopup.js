import React from "react";
import {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [nameCard, setNameCard] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setNameCard("");
    setLink("");
  }, [isOpen]);

  function handleCardName(e) {
    setNameCard(e.target.value);
  }

  function handleCardLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameCard,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name={"card"}
      title={"Добавьте место"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={"Добавить"}
    >
      <input
        className="popup__input popup__input_type_card-name"
        type="text"
        name="name"
        placeholder="Название"
        value={nameCard}
        required
        minLength="2"
        maxLength="30"
        id="inputCard"
        onChange={handleCardName}
      />
      <input
        className="popup__input popup__input_type_link"
        type="url"
        name="link"
        value={link}
        placeholder="Ссылка на картинку"
        required
        id="inputLink"
        onChange={handleCardLink}
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
