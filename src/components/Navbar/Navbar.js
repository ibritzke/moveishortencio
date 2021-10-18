import React, { useState } from "react";
//css
import "./Navbar.css";

//icon and images
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../../assets/logoMH.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={Logo} alt="Moveis Hortêncio" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option">
            <a href="/cadeiras" >CADEIRAS</a>
          </li>
          <li className="option">
            <a href="/mesas" alt="Mesas">MESAS</a>
          </li>
          <li className="option">
            <a href="/poltronas" alt="Poltronas">POLTRONAS</a>
          </li>
          <li className="option">
            <a href="/banquetas" alt="Banquetas">BANQUETAS</a>
          </li>
          <li className="option">
            <a href="/quemSomos" alt="Quem Somos">QUEM SOMOS</a>
          </li>
          <li className="option">
            <a href="/contato" alt="Contato">CONTATOS</a>
          </li>
        </ul>
      </div>
      <ul className="nav-right">
        <div className="dropdown">
          <li>
            <a href="#" className="icon-user">
              <AiOutlineUser />
            </a>
            <div className="dropdown-content">
              <form action="/action_page.php">
                <div className="login">
                  <div className="hide-md-lg"></div>
                  <label className="label-input">EMAIL</label>
                  <input type="email" name="email" required />
                  <label className="label-input">SENHA</label>
                  <input type="password" name="password" required />

                  <button className="btn-login">ENTRAR</button>
                </div>
              </form>
            </div>
          </li>
        </div>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};
export default Navbar;
