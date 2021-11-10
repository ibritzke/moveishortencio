import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// Dados
import Data from "../../service/cadeiras.json";

//icon and images
import ImageDefault from "../../assets/notImage.jpg";

//css
import "./cadeiras.css";

export const Cadeiras = () => {
  const [cadeiras] = useState(Data.cadeiras);

  //image default
  const addDefaultSrc = (e) => {
    e.target.src = [ImageDefault];
  };

  return (
    <div className="container">
      <div className="main-header">
        <p className="title">Cadeiras</p>
        <p className="subtitle">
          {/* Cadeiras fabricadas com alta qualidade, replicas idênticas... */}
        </p>
      </div>
      <div className="main">
        <div className="main-list">
          {cadeiras.map((cadeira, index) => {
            return (
              <>
                <div className="product" key={index}>
                  <Zoom
                    cursor="pointer"
                    overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
                    zoomMargin={50}
                    transitionDuration={1000}
                    openText={cadeira.name}
                  >
                    <img
                      cursor="pointer"
                      className="product-img"
                      alt={cadeira.name}
                      src={cadeira.image}
                      onError={addDefaultSrc}
                    />
                  </Zoom>
                  <p className="product-name">{cadeira.name}</p>
                  {cadeira.ref === "" ? (
                    ""
                  ) : (
                    <p className="product-name"> Ref:{cadeira.ref}</p>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
