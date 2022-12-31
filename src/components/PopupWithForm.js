function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <>
      <div
        className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      >
        <div className="popup__window">
          <button
            className="popup__cross-button popup__cross-button_type_edit"
            type="button"
            aria-label="close"
            onClick={onClose}
          ></button>
          <h2 className="popup__header">{title}</h2>
          <form
            className={`popup__form popup__form_type_${name}`}
            id={name}
            name="popupFormEdit"
          >
            {children}
            <button
              type="submit"
              className="popup__save-button"
              id="submitEdit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className={`popup popup_type_${name}`}>
        <div className="popup__window">
          <button
            className="popup__cross-button popup__cross-button_type_card"
            type="button"
            aria-label="close"
            onClick={onClose}
          ></button>
          <h2 className="popup__header">{title}</h2>
          <form
            className="popup__form popup__form_type_card"
            id={name}
            name="popupFormCard"
          >
            {children}
            <button
              type="submit"
              className="popup__save-button"
              id="submitCard"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className={`popup popup_type_${name}`}>
        <div className="popup__window">
          <button
            className="popup__cross-button popup__cross-button_type_delete"
            type="button"
            aria-label="close"
            onClick={onClose}
          ></button>
          <h2 className="popup__header">{title}</h2>
          <form
            className="popup__form popup__form_type_delete"
            id={name}
            name="popupFormDelete"
          >
            <button
              type="submit"
              className="popup__save-button popup__save-button_type_delete"
              id="submitDelete"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <div className={`popup popup_type_${name}`}>
        <div className="popup__window">
          <button
            className="popup__cross-button popup__cross-button_type_avatar"
            type="button"
            aria-label="close"
            onClick={onClose}
          ></button>
          <h2 className="popup__header">{title}</h2>
          <form
            className="popup__form popup__form_type_avatar"
            id={name}
            name="popupFormAvatar"
          >
            {children}
            <button
              type="submit"
              className="popup__save-button"
              id="submitAvatar"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
