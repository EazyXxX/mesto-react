function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_picture ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__picture-box">
        <img
          className="popup__picture"
          alt={props.card.name}
          src={`${props.card.link}`}
        />
        <h3 className="popup__pic-moniker">{props.card.name}</h3>
        <button
          className="popup__cross-button popup__cross-button_type_picture"
          type="button"
          aria-label="close"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
