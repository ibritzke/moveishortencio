import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

import ImageDefault from "../../assets/notImage.jpg";
import Caroussel from "../../components/Carousel";
import homeCadeiras from "../../images/home/homeCadeiras.jpg";
import homeMesas from "../../images/home/homeMesas.jpg";
import homeMocho from "../../images/home/homeMocho.jpg";
import homePoltronas from "../../images/home/homePoltronas.jpg";
import extra01 from "../../images/extra01.jpg";
import extra02 from "../../images/extra02.jpg";
 import extra03 from "../../images/extra03.jpg"
import extra04 from "../../images/extra04.jpg"
export const Home = () => {
  const addDefaultSrc = (e) => {
    e.target.src = [ImageDefault];
  };

  return (
    <>
      <Caroussel />
      <div className="central">
        <div className="central-esq">
          <div className="imagem-esq">
            <img
              onError={addDefaultSrc}
              src={homeCadeiras}
              className="central-esq1"
              alt="Cadeiras"
            />
            
          </div>
        </div>
        <div className="central-dir">
          <div className="central-dir1">
            <img
              onError={addDefaultSrc}
              src={homeMesas}
              className="central-dir1"
              alt="Mesas"
            />
          </div>
          <div className="central-dir-inf">
            <div className="central-dir2">
              <img
                onError={addDefaultSrc}
                src={homeMocho}
                className="central-dir2"
                alt="Mochos"
              />
            </div>
            <div className="central-dir3">
              <img
                onError={addDefaultSrc}
                src={homePoltronas}
                className="central-dir3"
                alt="Poltronas"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="titleExtra">
        <h2>Lançamentos</h2>
      </div>
      <div className="extras-home">
        <div className="item-extra">
          <img src={extra01} alt="lançamentos" className="img-extra" />
        </div>
        <div className="item-extra">
          <img src={extra04} alt="lançamentos" className="img-extra" />
        </div>
        <div className="item-extra">
          <img src={extra03} alt="lançamentos" className="img-extra" />
        </div>
        <div className="item-extra">
          <img src={extra02} alt="lançamentos" className="img-extra" />
        </div>
      </div>
    </>
  );
};
