import React from "react";
import "../../Global.css";
import "./quemsomos.css";
import logo from "../../assets/Logo-moveis-branco.png";
import mapa from "../../images/mapa.jfif";

export const QuemSomos = () => {
  return (
    <>
      <div className="container">
        <div className="main">
       
          <div class="parte1">
            <div class="title-quem">
              <img src={logo} alt="Quem Somos" className="logo-quem" />
            </div>
          </div>
          <p className="titlePage">Quem somos</p>
          <p className="subtitle"></p>
          <div className="sobre">
            <div className="text">
              <p>
                Somos uma empresa que está há mais de 17 anos no mercado.
                Buscando à constante evolução, sem perder a nossa essência: a
                antiga arte de fazer móveis com qualidade. Oferecendo aos nossos
                clientes móveis com a tradição de uma autêntica fábrica alemã.
                Nossa cultura forte e antiga está traduzida na artesanalidade
                dos móveis, feitos à mão com o rigoroso padrão de qualidade.
                Atualmente, contamos com 25 colaboradores, em uma ampla
                estrutura de 4.000 m².
              </p>
              <p>
                Estamos localizados no Sul do Brasil, no Vale do Caí, na cidade
                de São José do Hortêncio. Uma cidade com pouco mais de 5.000
                habitantes, com uma população que têm, nas suas raízes, o amor
                pelo trabalho e suas tradições. Temos orgulho fazer parte e de
                ser uma das primeiras empresas do setor no município.
              </p>
            </div>
            <img src={mapa} alt="mapa" className="mapaQuem" />
          </div>
          <div className="parte2">
            <div className="left">
              <div className="title">
                <h3>Para te inspirar</h3>
              </div>
            </div>

            <div className="right">
              <div className="text">
                <p>
                  Nosso principal valor é a qualidade, por esse motivo nos
                  tornamos especialista na linha de cadeiras, com produtos de
                  grande durabilidade e excelente acabamento. Nosso principal
                  valor é a qualidade, por esse motivo nós tornamos especialista
                  na linha de cadeiras, com produtos de grande durabilidade.
                <br/>
                  A essência de nossas vendas são produtos semiacabados, sem
                  pintura estofado, sendo comercializados para o atacado. Você
                  pode encontrá-los em nossos principais clientes: antiquários,
                  loja de móveis, moveis sob medida. Esses são responsáveis
                  pelos acabamentos finais de forma personalizada e única.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
