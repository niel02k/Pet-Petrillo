import { MdOutlinePets } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import style from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        
        {/* Logo + Nome */}
        <div className={style.logoSection}>
          <div className={style.logoIcon}>
            <MdOutlinePets />
          </div>
          <h1 className={style.logoText}>
         
            <span className={style.logoPart2}> Pet Petrillo</span>
          </h1>
        </div>

        {/* Navegação */}
        <ul className={style.navLinks}>
          <li className={style.navLink}><a href="#Home">Home</a></li>
          <li className={style.navLink}><a href="#Serviços">Serviços</a></li>
          <li className={style.navLink}><a href="#Galeria">Galeria</a></li>
          <li className={style.navLink}><a href="#Depoimentos">Depoimentos</a></li>
          <li className={style.navLink}><a href="#Contato">Contato</a></li>
        </ul>

        {/* Botões à direita */}
        <div className={style.rightSection}>
          <button className={style.loginBtn}>
            <span>Login</span>
          </button>
          <button className={style.cadastrarBtn}>Cadastrar</button>
        </div>
        
      </div>
    </nav>
  );
}