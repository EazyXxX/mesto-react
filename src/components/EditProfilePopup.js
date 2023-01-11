import React from "react";
import {useEffect, useState, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={"edit"}
      title={"Редактируйте профиль"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Сохранить"}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="name"
        placeholder="Имя"
        value={name || ""}
        required
        minLength="2"
        maxLength="40"
        id="inputName"
        onChange={handleName}
      />
      <input
        className="popup__input popup__input_type_subname"
        type="text"
        name="link"
        value={description || ""}
        placeholder="Предназначение"
        required
        minLength="2"
        maxLength="200"
        id="inputSubname"
        onChange={handleDescription}
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
