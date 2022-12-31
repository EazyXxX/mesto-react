import Vector from "../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Vector} alt="Место" />
    </header>
  );
}

export default Header;
