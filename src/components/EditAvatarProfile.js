import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarProfile({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = React.useState({});

  React.useEffect(() => {
    setAvatar("");
  }, [isOpen]);

  function handleAvatarProfile(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar,
    });
  }

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Редактируйте аватар"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Сохранить"}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_avatar-link"
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        value={avatar}
        required
        id="inputAvatar"
        onChange={handleAvatarProfile}
      />
    </PopupWithForm>
  );
}

export default EditAvatarProfile;
