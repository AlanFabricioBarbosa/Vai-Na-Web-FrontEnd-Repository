import Logo from "../../../public/img/logo.png";
import S from "../style.module.scss";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo do site" />
      <nav>
        <ul>
          <li>Paz</li>
          <li>Saúde</li>
          <li>Alegria</li>
        </ul>
      </nav>
    </header>
  );
}
