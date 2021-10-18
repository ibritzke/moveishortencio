import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Dados
import Data from "../../service/poltronas.json";

//icon and images
import ImageDefault from "../../assets/notImage.jpg";

//css
// import "./cadeiras.css";

export const Poltronas = () => {
  const [poltronas] = useState(Data.poltronas);

  //image default
  const addDefaultSrc = (e) => {
    e.target.src = [ImageDefault];
  };

  return (
    <div className="container">
      
      <div className="main-header">
        <p className="title">Poltronas</p>
        <p className="subtitle">
          Poltronas fabricadas com alta qualidade, replicas idênticas...
        </p>
      </div>
      <div className="main">
        <div className="main-list">
          {poltronas.map((poltrona, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <Zoom
                    cursor="pointer"
                    overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
                    zoomMargin={50}
                    transitionDuration={1000}
                    openText={poltrona.name}
                  >
                    <img
                      cursor="pointer"
                      className="product-img"
                      alt={poltrona.name}
                      src={poltrona.image}
                      onError={addDefaultSrc}
                    />
                  </Zoom>
                  <p className="product-name">{poltrona.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
