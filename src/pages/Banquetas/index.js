import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Dados
import Data from "../../service/banquetas.json";

//icon and images
import ImageDefault from "../../assets/notImage.jpg";

//css
// import "./banquetas.css";

export const Banquetas = () => {
  const [banquetas] = useState(Data.banquetas);

  //image default
  const addDefaultSrc = (e) => {
    e.target.src = [ImageDefault];
  };
  return (
    <div className="container">
      <div className="main-header">
        <p className="title">Banquetas</p>
        <p className="subtitle">
          Banquetas fabricadas com alta qualidade, replicas idênticas...
        </p>
      </div>
      <div className="main">
        <div className="main-list">
          {banquetas.map((banqueta, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <Zoom
                    cursor="pointer"
                    overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
                    zoomMargin={50}
                    transitionDuration={1000}
                    openText={banqueta.name}
                  >
                    <img
                      cursor="pointer"
                      className="product-img"
                      alt={banqueta.name}
                      src={banqueta.image}
                      onError={addDefaultSrc}
                    />
                  </Zoom>
                  <p className="product-name">{banqueta.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
