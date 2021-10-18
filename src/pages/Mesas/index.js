import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// Dados
import Data from "../../service/mesas.json";

//icon and images
import ImageDefault from "../../assets/notImage.jpg";

//css

export const Mesas = () => {
  const [mesas] = useState(Data.mesas);

  //image default
  const addDefaultSrc = (e) => {
    e.target.src = [ImageDefault];
  };
  return (
    <div className="container">
      <div className="main-header">
        <p className="title">Mesas</p>
        <p className="subtitle">
          Mesas fabricadas com alta qualidade, replicas idênticas...
        </p>
      </div>
      <div className="main">
        <div className="main-list">
          {mesas.map((mesa, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <Zoom
                    cursor="pointer"
                    overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
                    zoomMargin={50}
                    transitionDuration={1000}
                    openText={mesa.name}
                  >
                    <img
                      cursor="pointer"
                      className="product-img"
                      alt={mesa.name}
                      src={mesa.image}
                      onError={addDefaultSrc}
                    />
                  </Zoom>
                  <p className="product-name">{mesa.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
