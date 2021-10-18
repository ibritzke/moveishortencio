import React from "react";

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
            <a href="/empresa" title="Empresa">
              Empresa
            </a>
          </li>
        </ul>
        <ul className="coluna2">
          <li className="label-title">
            <label>Produtos</label>
          </li>

          <li className="label-link">
            <a href="/cadeiras" title="Cadeiras">
              Cadeiras
            </a>
          </li>

          <li className="label-link">
            <a href="/mesas" title="Mesas">
              Mesas
            </a>
          </li>
          <li className="label-link">
            <a href="/poltronas" title="Poltronas">
              Poltronas
            </a>
          </li>

          <li className="label-link">
            <a href="/banquetas" title="Banquetas">
              Banquetas
            </a>
          </li>
        </ul>
        <ul className="coluna3">
          <li className="label-title">
            <label>Contatos</label>
          </li>
          <li className="label-link">
            <a href="/contato" title="Atendimento">
              Atendimento
            </a>
          </li>
          <li className="label-link">
            <a href="/contato" title="Vendas">
              Vendas
            </a>
          </li>
        </ul>
      </section>
      <div className="footer-left">
        <div className="footer-logo">
          <img src={Logo} alt="Móveis Hortêncio" />
        </div>
        <h5>MÓVEIS NAS REDES SOCIAIS</h5>

        <div className="rede-social">
          <a href="https://www.facebook.com/moveishortencio/">
            <FaFacebookF style={{ color: "white" }} />
          </a>
          <a href="https://www.instagram.com/moveishortencio">
            <FaInstagram style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};
