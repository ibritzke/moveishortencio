import React from "react";
import "./style.css";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp
} from "react-icons/ai";

export const Contato = () => {
  return (
    <div className="contato">
      <div className="titleContato">
        <h5>Contato</h5>
        <p>
          Abaixo deixamos algumas formas de nos falarmos.
        </p>
      </div>

      <div className="cardsContato">

        <a href="mailto:contato@moveishortencio.com.br?Subject=Contato do site">
          <div className="card-whats">
            <AiOutlineWhatsApp className="iconeCard-whats" />
            <p>WhatsApp</p>
          </div>
        </a>
        <a href="mailto:contato@moveishortencio.com.br?Subject=Contato do site">
          <div className="card-email">
            <AiOutlineMail className="iconeCard-email" />
            <p>E-mail</p>
          </div>
        </a>
        <div className="card-tel">
          <AiOutlinePhone className="iconeCard-tel" />
          <p>Telefone</p>
          <p>051 3571-1617 </p>
        </div>
     

        <a href="https://www.instagram.com/moveishortencio/">
          <div className="card-insta">
            <AiOutlineInstagram className="iconeCard-insta" />
            <p>Instagram</p>
          </div>
        </a>

        <a
          className="a-card-face"
          href="https://www.facebook.com/moveishortencio"
        >
          <div className="card-face">
            <AiFillFacebook className="iconeCard-face" />
            <p>Facebook</p>
          </div>
        </a>
      </div>
      <div className="endereco-contato">
        <div className="subTitleContato">
        <h5>Endereço</h5>
        <p>Av. 44, n° 1665, Bairro Industrial - São José do Hortêncio / RS</p>
        </div>
        <div className="mapa">
          <iframe
          title="Localização Móveis Hortêncio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.420189917509!2d-51.27024348430533!3d-29.533255214649596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951954089a2efad9%3A0x6f12871639176cee!2zTcOzdmVpcyBIb3J0w6puY2lv!5e0!3m2!1spt-BR!2sbr!4v1634580060384!5m2!1spt-BR!2sbr"
            width="1980"
            height="400"
            style={{border:10}}
            allowfullscreen=""
            loading="lazy"
            className="iframe-mapa"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
