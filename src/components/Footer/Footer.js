import React from "react";
import { Link } from "react-router-dom";
//css
import "./Footer.css";

//icons and images
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/logo-footer.png";

export const Footer = () => {
  return (
    <div className="footer">
      <section className="footer_navigation">
        <ul className="coluna1">
          <li className="label-title">
            <label>Institucional</label>
          </li>

          <li className="label-link">
            <Link to="/empresa" title="Empresa">
              Empresa
          </Link>
          </li>
        </ul>
        <ul className="coluna2">
          <li className="label-title">
            <label>Produtos</label>
          </li>

          <li className="label-link">
            <Link to="/cadeiras" title="Cadeiras">
              Cadeiras
          </Link>
          </li>

          <li className="label-link">
            <Link to="/mesas" title="Mesas">
              Mesas
          </Link>
          </li>
          <li className="label-link">
            <Link to="/poltronas" title="Poltronas">
              Poltronas
          </Link>
          </li>

          <li className="label-link">
            <Link to="/banquetas" title="Banquetas">
              Banquetas
          </Link>
          </li>
        </ul>
        <ul className="coluna3">
          <li className="label-title">
            <label>Contatos</label>
          </li>
          <li className="label-link">
            <Link to="/contato" title="Atendimento">
              Atendimento
          </Link>
          </li>
          <li className="label-link">
            <Link to="/contato" title="Vendas">
              Vendas
          </Link>
          </li>
        </ul>
      </section>
      <div className="footer-left">
        <div className="footer-logo">
          <img src={Logo} alt="Móveis Hortêncio" />
        </div>
        <h5>MÓVEIS NAS REDES SOCIAIS</h5>

        <div className="rede-social">
          <Link to="https://www.facebook.com/moveishortencio/">
            <FaFacebookF style={{ color: "white" }} />
        </Link>
          <Link to="https://www.instagram.com/moveishortencio">
            <FaInstagram style={{ color: "white" }} />
        </Link>
        </div>
      </div>
    </div>
  );
};
