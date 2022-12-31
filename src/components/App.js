import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);

  function handleCardClick(data) {
    setImagePopupOpen(!selectedCard);
    setSelectedCard(data);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddCardClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name={"edit"}
        title={"Редактируйте профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
      >
        <input
          class="popup__input popup__input_type_name"
          type="text"
          name="name"
          placeholder="Имя"
          value=""
          required
          minlength="2"
          maxlength="40"
          id="inputName"
        />
        <input
          class="popup__input popup__input_type_subname"
          type="text"
          name="link"
          value=""
          placeholder="Предназначение"
          required
          minlength="2"
          maxlength="200"
          id="inputSubname"
        />
      </PopupWithForm>

      <PopupWithForm
        name={"card"}
        title={"Добавьте место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Добавить"}
      >
        <input
          class="popup__input popup__input_type_card-name"
          type="text"
          name="name"
          placeholder="Название"
          value=""
          required
          minlength="2"
          maxlength="30"
          id="inputCard"
        />
        <input
          class="popup__input popup__input_type_link"
          type="url"
          name="link"
          value=""
          placeholder="Ссылка на картинку"
          required
          id="inputLink"
        />
      </PopupWithForm>

      <PopupWithForm
        name={"avatar"}
        title={"Редактируйте аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
      >
        <input
          class="popup__input popup__input_type_avatar-link"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          value=""
          required
          id="inputAvatar"
        />
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={imagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
