import React, { useState } from "react";
//css
import "./Navbar.css";

//icon and images
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../../assets/logoMH.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
         <Link to="/">
            <img src={Logo} alt="Moveis Hortêncio" />
         </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option">
          <Link to="/cadeiras" >CADEIRAS</Link>
          </li>
          <li className="option">
            <Link to="/mesas" alt="Mesas">MESAS</Link>
          </li>
          <li className="option">
            <Link to="/poltronas" alt="Poltronas">POLTRONAS</Link>
          </li>
          <li className="option">
            <Link to="/banquetas" alt="Banquetas">BANQUETAS</Link>
          </li>
          <li className="option">
            <Link to="/quemSomos" alt="Quem Somos">QUEM SOMOS</Link>
          </li>
          <li className="option">
            <Link to="/contato" alt="Contato">CONTATOS</Link>
          </li>
        </ul>
      </div>
      <ul className="nav-right">
        <div className="dropdown">
          <li>
            <Link to="#" className="icon-user">
              <AiOutlineUser />
            </Link>
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
